import { prisma } from "@/integrations";
import { ConflictError, NotFoundError, BadRequestError } from "@/shared";
import { PaketInputCreate, PaketInputUpdate } from "@/shared/types/paket";
import { Decimal } from "@prisma/client/runtime/library";

export const PaketModel = {
  async index({ page = 1, limit = 5 }: { page?: number; limit?: number } = {}) {
    try {
      const skip = (page - 1) * limit;
      const [pakets, total] = await Promise.all([
        prisma.paket.findMany({
          skip,
          take: limit,
          include: {
            paket_categories: { include: { kategori: true } },
            paket_promos: { include: { promo: true } },
          },
          orderBy: { created_at: "desc" },
        }),
        prisma.paket.count(),
      ]);

      const paketsWithPromos = await this.applyGlobalPromos(pakets);

      return {
        data: paketsWithPromos,
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      };
    } catch (error) {
      console.error("Paket index error:", error);
      throw error;
    }
  },

  async list() {
    try {
      const data = await prisma.paket.findMany({
        select: {
          id: true,
          nama: true,
          bandwith: true,
          final_price: true,
          paket_promos: true,
        },
        orderBy: { created_at: "desc" },
      });
      return data;
    } catch (error) {
      console.error("Paket list error:", error);
      throw error;
    }
  },

  async show(id: string) {
    try {
      if (!id || typeof id !== "string" || id.trim() === "") {
        throw new BadRequestError("ID paket tidak valid");
      }

      const paket = await prisma.paket.findUnique({
        where: { id },
        include: {
          paket_categories: { include: { kategori: true } },
          paket_promos: { include: { promo: true } },
        },
      });

      if (!paket) {
        throw new NotFoundError("Paket tidak ditemukan");
      }

      const [paketWithGlobalPromo] = await this.applyGlobalPromos([paket]);
      return paketWithGlobalPromo;
    } catch (error) {
      console.error("Paket show error:", error);
      throw error;
    }
  },

  async create(data: PaketInputCreate) {
    try {
      if (!data) throw new BadRequestError("Data paket tidak boleh kosong");
      if (
        !data.nama ||
        typeof data.nama !== "string" ||
        data.nama.trim() === ""
      )
        throw new BadRequestError("Nama paket tidak valid");

      if (
        typeof data.bandwith !== "number" ||
        isNaN(data.bandwith) ||
        data.bandwith <= 0
      )
        throw new BadRequestError("Bandwidth harus berupa angka positif");

      if (typeof data.price !== "number" || isNaN(data.price) || data.price < 0)
        throw new BadRequestError("Harga harus berupa angka non-negatif");

      if (
        typeof data.price_psb !== "number" ||
        isNaN(data.price_psb) ||
        data.price_psb < 0
      )
        throw new BadRequestError("Harga PSB harus berupa angka non-negatif");

      if (
        typeof data.ppn !== "number" ||
        isNaN(data.ppn) ||
        data.ppn < 0 ||
        data.ppn > 100
      )
        throw new BadRequestError("PPN harus berupa angka antara 0-100");

      if (
        !data.category_ids ||
        !Array.isArray(data.category_ids) ||
        data.category_ids.length === 0
      )
        throw new BadRequestError("Minimal satu kategori harus dipilih");

      const validCategoryIds = data.category_ids.filter(
        (id) => typeof id === "string" && id.trim() !== ""
      );
      if (validCategoryIds.length === 0)
        throw new BadRequestError("ID kategori tidak valid");

      const categoriesCount = await prisma.kategori.count({
        where: { id: { in: validCategoryIds } },
      });
      if (categoriesCount !== validCategoryIds.length)
        throw new BadRequestError("Satu atau lebih kategori tidak ditemukan");

      let validPromoIds: string[] = [];
      if (
        data.promo_ids &&
        Array.isArray(data.promo_ids) &&
        data.promo_ids.length > 0
      ) {
        const filteredPromoIds = data.promo_ids.filter(
          (id) => typeof id === "string" && id.trim() !== ""
        );
        if (filteredPromoIds.length > 0) {
          const promosCount = await prisma.promo.count({
            where: { id: { in: filteredPromoIds as any } },
          });
          if (promosCount !== filteredPromoIds.length)
            throw new BadRequestError("Satu atau lebih promo tidak ditemukan");
          validPromoIds = filteredPromoIds as any;
        }
      }

      const existingPaket = await prisma.paket.findFirst({
        where: { nama: { equals: data.nama.trim(), mode: "insensitive" } },
      });
      if (existingPaket)
        throw new ConflictError("Paket dengan nama ini sudah ada");

      const finalPrice = await this.calculateFinalPriceWithMultiplePromos(
        data.price,
        data.ppn,
        validPromoIds
      );

      const newPaket = await prisma.$transaction(async (tx) => {
        const paket = await tx.paket.create({
          data: {
            nama: data.nama.trim(),
            bandwith: data.bandwith,
            price: new Decimal(data.price),
            price_psb: new Decimal(data.price_psb),
            ppn: data.ppn,
            final_price: new Decimal(finalPrice),
          },
        });

        await tx.paketKategori.createMany({
          data: validCategoryIds.map((kategori_id) => ({
            paket_id: paket.id,
            kategori_id,
          })),
        });

        if (validPromoIds.length > 0) {
          await tx.paketPromo.createMany({
            data: validPromoIds.map((promo_id) => ({
              paket_id: paket.id,
              promo_id,
            })),
          });
        }

        return await tx.paket.findUnique({
          where: { id: paket.id },
          include: {
            paket_categories: { include: { kategori: true } },
            paket_promos: { include: { promo: true } },
          },
        });
      });

      const [paketWithGlobalPromo] = await this.applyGlobalPromos([newPaket]);
      return paketWithGlobalPromo;
    } catch (error) {
      console.error("Paket creation error:", error);
      throw error;
    }
  },

  async update(id: string, data: PaketInputUpdate) {
    try {
      if (!id || typeof id !== "string" || id.trim() === "")
        throw new BadRequestError("ID paket tidak valid");

      const paket = await prisma.paket.findUnique({
        where: { id },
        include: {
          paket_categories: { include: { kategori: true } },
          paket_promos: { include: { promo: true } },
        },
      });
      if (!paket) throw new NotFoundError("Paket tidak ditemukan");

      if (data.nama !== undefined) {
        if (typeof data.nama !== "string" || data.nama.trim() === "")
          throw new BadRequestError("Nama paket tidak valid");

        const namaExist = await prisma.paket.findFirst({
          where: {
            nama: { equals: data.nama.trim(), mode: "insensitive" },
            NOT: { id },
          },
        });
        if (namaExist)
          throw new ConflictError("Paket dengan nama ini sudah ada");
      }

      if (
        data.bandwith !== undefined &&
        (typeof data.bandwith !== "number" || data.bandwith <= 0)
      )
        throw new BadRequestError("Bandwidth harus berupa angka positif");

      if (
        data.price !== undefined &&
        (typeof data.price !== "number" || data.price < 0)
      )
        throw new BadRequestError("Harga harus berupa angka non-negatif");

      if (
        data.price_psb !== undefined &&
        (typeof data.price_psb !== "number" || data.price_psb < 0)
      )
        throw new BadRequestError("Harga PSB harus berupa angka non-negatif");

      if (
        data.ppn !== undefined &&
        (typeof data.ppn !== "number" || data.ppn < 0 || data.ppn > 100)
      )
        throw new BadRequestError("PPN harus berupa angka antara 0-100");

      let validCategoryIds = paket.paket_categories.map((pc) => pc.kategori_id);
      if (data.category_ids !== undefined) {
        if (!Array.isArray(data.category_ids) || data.category_ids.length === 0)
          throw new BadRequestError("Minimal satu kategori harus dipilih");

        const filteredCategoryIds = data.category_ids.filter(
          (id) => typeof id === "string" && id.trim() !== ""
        );
        if (filteredCategoryIds.length === 0)
          throw new BadRequestError("ID kategori tidak valid");

        const categoriesCount = await prisma.kategori.count({
          where: { id: { in: filteredCategoryIds } },
        });
        if (categoriesCount !== filteredCategoryIds.length)
          throw new BadRequestError("Satu atau lebih kategori tidak ditemukan");

        validCategoryIds = filteredCategoryIds;
      }

      let validPromoIds = paket.paket_promos.map((pp) => pp.promo_id);
      if (data.promo_ids !== undefined) {
        if (Array.isArray(data.promo_ids) && data.promo_ids.length > 0) {
          const filteredPromoIds = data.promo_ids.filter(
            (id) => typeof id === "string" && id.trim() !== ""
          );
          if (filteredPromoIds.length > 0) {
            const validFilteredPromoIds = filteredPromoIds.filter(
              (id): id is string => typeof id === "string" && id.trim() !== ""
            );
            const promosCount = await prisma.promo.count({
              where: { id: { in: validFilteredPromoIds } },
            });
            if (promosCount !== validFilteredPromoIds.length)
              throw new BadRequestError(
                "Satu atau lebih promo tidak ditemukan"
              );
            validPromoIds = filteredPromoIds as any;
          } else {
            validPromoIds = [];
          }
        } else {
          validPromoIds = [];
        }
      }

      let finalPrice = paket.final_price;
      if (
        data.price !== undefined ||
        data.ppn !== undefined ||
        data.promo_ids !== undefined
      ) {
        const price =
          data.price !== undefined ? data.price : paket.price.toNumber();
        const ppn = data.ppn !== undefined ? data.ppn : paket.ppn;
        finalPrice = new Decimal(
          await this.calculateFinalPriceWithMultiplePromos(
            price,
            ppn,
            validPromoIds
          )
        );
      }

      const updatedPaket = await prisma.$transaction(async (tx) => {
        const paket = await tx.paket.update({
          where: { id },
          data: {
            ...(data.nama !== undefined ? { nama: data.nama.trim() } : {}),
            ...(data.bandwith !== undefined ? { bandwith: data.bandwith } : {}),
            ...(data.price !== undefined
              ? { price: new Decimal(data.price) }
              : {}),
            ...(data.price_psb !== undefined
              ? { price_psb: new Decimal(data.price_psb) }
              : {}),
            ...(data.ppn !== undefined ? { ppn: data.ppn } : {}),
            final_price: finalPrice,
          },
        });

        if (data.category_ids !== undefined) {
          await tx.paketKategori.deleteMany({ where: { paket_id: id } });
          await tx.paketKategori.createMany({
            data: validCategoryIds.map((kategori_id) => ({
              paket_id: id,
              kategori_id,
            })),
          });
        }

        if (data.promo_ids !== undefined) {
          await tx.paketPromo.deleteMany({ where: { paket_id: id } });
          if (validPromoIds.length > 0) {
            await tx.paketPromo.createMany({
              data: validPromoIds.map((promo_id) => ({
                paket_id: id,
                promo_id,
              })),
            });
          }
        }

        return await tx.paket.findUnique({
          where: { id },
          include: {
            paket_categories: { include: { kategori: true } },
            paket_promos: { include: { promo: true } },
          },
        });
      });

      const [paketWithGlobalPromo] = await this.applyGlobalPromos([
        updatedPaket,
      ]);
      return paketWithGlobalPromo;
    } catch (error) {
      console.error("Paket update error:", error);
      throw error;
    }
  },

  async destroy(id: string) {
    try {
      if (!id || typeof id !== "string" || id.trim() === "")
        throw new BadRequestError("ID paket tidak valid");

      const paket = await prisma.paket.findUnique({ where: { id } });
      if (!paket) throw new NotFoundError("Paket tidak ditemukan");

      await prisma.$transaction(async (tx) => {
        await tx.paketKategori.deleteMany({ where: { paket_id: id } });
        await tx.paketPromo.deleteMany({ where: { paket_id: id } });
        await tx.paket.delete({ where: { id } });
      });

      return { message: "Paket berhasil dihapus" };
    } catch (error) {
      console.error("Paket destroy error:", error);
      throw error;
    }
  },

  async applyGlobalPromos(pakets: any[]) {
    try {
      const now = new Date();
      const globalPromos = await prisma.promo.findMany({
        where: {
          is_global: true,
          mulai: { lte: now },
          akhir: { gte: now },
        },
        orderBy: {
          diskon: "desc",
        },
      });

      return pakets.map((paket) => {
        if (paket.paket_promos && paket.paket_promos.length > 0) {
          const specificPromos = paket.paket_promos.map((pp: any) => pp.promo);
          return {
            ...paket,
            categories:
              paket.paket_categories?.map((pc: any) => pc.kategori) || [],
            promos: specificPromos,
            applied_promos: specificPromos,
            promo_type: "specific",
          };
        }

        if (globalPromos.length > 0) {
          const basePrice = paket.price.toNumber
            ? paket.price.toNumber()
            : paket.price;
          const priceWithPPN = basePrice + (basePrice * paket.ppn) / 100;

          let totalDiscount = 0;
          globalPromos.forEach((promo) => {
            const discountPercent = promo.diskon.toNumber
              ? promo.diskon.toNumber()
              : promo.diskon;
            totalDiscount += discountPercent as any;
          });

          totalDiscount = Math.min(totalDiscount, 100);

          const discountAmount = (priceWithPPN * totalDiscount) / 100;
          const finalPriceWithGlobalPromos = priceWithPPN - discountAmount;

          return {
            ...paket,
            categories:
              paket.paket_categories?.map((pc: any) => pc.kategori) || [],
            promos: [],
            applied_promos: globalPromos,
            promo_type: "global",
            original_final_price: paket.final_price,
            final_price: Math.round(finalPriceWithGlobalPromos * 100) / 100,
            global_discount_total: totalDiscount,
          };
        }

        return {
          ...paket,
          categories:
            paket.paket_categories?.map((pc: any) => pc.kategori) || [],
          promos: [],
          applied_promos: [],
          promo_type: "none",
        };
      });
    } catch (error) {
      console.error("Apply global promos error:", error);

      return pakets;
    }
  },

  async calculateFinalPriceWithMultiplePromos(
    price: number,
    ppn: number,
    specificPromoIds: string[] = []
  ): Promise<number> {
    try {
      let promos = [];

      if (specificPromoIds.length > 0) {
        promos = await prisma.promo.findMany({
          where: {
            id: { in: specificPromoIds },
            mulai: { lte: new Date() },
            akhir: { gte: new Date() },
          },
        });
      } else {
        promos = await prisma.promo.findMany({
          where: {
            is_global: true,
            mulai: { lte: new Date() },
            akhir: { gte: new Date() },
          },
        });
      }

      return this.calculateFinalPriceWithPromos(price, ppn, promos);
    } catch (error) {
      console.error("Calculate final price with multiple promos error:", error);

      return this.calculateFinalPrice(price, ppn, null);
    }
  },

  calculateFinalPriceWithPromos(
    price: number,
    ppn: number,
    promos: any[]
  ): number {
    let finalPrice = price + (price * ppn) / 100;

    if (promos && promos.length > 0) {
      let totalDiscountPercent = 0;

      promos.forEach((promo, index) => {
        if (promo && promo.diskon) {
          let discountPercent: number;

          if (typeof promo.diskon === "number") {
            discountPercent = promo.diskon;
          } else if (typeof promo.diskon === "string") {
            discountPercent = parseFloat(promo.diskon);
          } else if (promo.diskon.toNumber) {
            discountPercent = promo.diskon.toNumber();
          } else {
            discountPercent = 0;
          }
          totalDiscountPercent += discountPercent;
        }
      });

      totalDiscountPercent = Math.min(totalDiscountPercent, 100);

      if (totalDiscountPercent > 0) {
        const discountAmount = (finalPrice * totalDiscountPercent) / 100;
        finalPrice = finalPrice - discountAmount;
      }
    } else {
      console.log("No promos found");
    }

    const roundedPrice = Math.round(finalPrice * 100) / 100;

    return roundedPrice;
  },

  calculateFinalPrice(price: number, ppn: number, promo: any): number {
    return this.calculateFinalPriceWithPromos(price, ppn, promo ? [promo] : []);
  },
};

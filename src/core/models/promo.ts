import { prisma } from "@/integrations";
import { ConflictError, NotFoundError, BadRequestError } from "@/shared";
import { PromoInputCreate, PromoInputUpdate } from "@/shared/types/promo";

export const PromoModel = {
  async index({ page = 1, limit = 5 }: { page?: number; limit?: number } = {}) {
    try {
      const skip = (page - 1) * limit;
      const [data, total] = await Promise.all([
        prisma.promo.findMany({
          skip,
          take: limit,
          orderBy: { created_at: "desc" },
        }),
        prisma.promo.count(),
      ]);
      return {
        data,
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      };
    } catch (error) {
      console.error("Promo index error:", error);
      throw error;
    }
  },

  async shows(id: string) {
    try {
      if (!id || typeof id !== "string" || id.trim() === "") {
        throw new BadRequestError("ID promo tidak valid");
      }

      const promo = await prisma.promo.findUnique({
        where: { id },
      });

      if (!promo) {
        throw new NotFoundError("Promo tidak ditemukan");
      }

      return promo;
    } catch (error) {
      console.error("Promo shows error:", error);
      throw error;
    }
  },

  async create(data: PromoInputCreate) {
    try {
      if (
        !data ||
        typeof data.nama !== "string" ||
        data.nama.trim() === "" ||
        typeof data.deskripsi !== "string" ||
        data.deskripsi.trim() === "" ||
        typeof data.jenis !== "string" ||
        data.jenis.trim() === "" ||
        typeof data.diskon !== "number" ||
        isNaN(data.diskon) ||
        !data.mulai ||
        !data.akhir ||
        typeof data.is_global !== "boolean"
      ) {
        throw new BadRequestError("Data promo tidak valid");
      }

      const existingPromo = await prisma.promo.findUnique({
        where: { nama: data.nama.trim() },
      });

      if (existingPromo) {
        throw new ConflictError("Promo dengan nama ini sudah ada");
      }

      const newPromo = await prisma.promo.create({
        data: {
          nama: data.nama.trim(),
          deskripsi: data.deskripsi.trim(),
          jenis: data.jenis,
          diskon: data.diskon,
          mulai: data.mulai,
          akhir: data.akhir,
          is_global: data.is_global,
        },
      });

      return newPromo;
    } catch (error) {
      console.error("Promo creation error:", error);
      throw error;
    }
  },

  async update(id: string, data: PromoInputUpdate) {
    try {
      if (!id || typeof id !== "string" || id.trim() === "") {
        throw new BadRequestError("ID promo tidak valid");
      }

      const promo = await prisma.promo.findUnique({
        where: { id },
      });

      if (!promo) {
        throw new NotFoundError("Promo tidak ditemukan");
      }

      if (data.nama && data.nama.trim() !== promo.nama) {
        const namaExist = await prisma.promo.findUnique({
          where: { nama: data.nama.trim() },
        });
        if (namaExist) {
          throw new ConflictError("Promo dengan nama ini sudah ada");
        }
      }

      const updatedPromo = await prisma.promo.update({
        where: { id },
        data: {
          ...(data.nama !== undefined ? { nama: data.nama.trim() } : {}),
          ...(data.deskripsi !== undefined
            ? { deskripsi: data.deskripsi.trim() }
            : {}),
          ...(data.jenis !== undefined ? { jenis: data.jenis } : {}),
          ...(data.diskon !== undefined ? { diskon: data.diskon } : {}),
          ...(data.mulai !== undefined ? { mulai: data.mulai } : {}),
          ...(data.akhir !== undefined ? { akhir: data.akhir } : {}),
          ...(data.is_global !== undefined
            ? { is_global: data.is_global }
            : {}),
        },
      });

      return updatedPromo;
    } catch (error) {
      console.error("Promo update error:", error);
      throw error;
    }
  },

  async destroy(id: string) {
    try {
      if (!id || typeof id !== "string" || id.trim() === "") {
        throw new BadRequestError("ID promo tidak valid");
      }

      const promo = await prisma.promo.findUnique({
        where: { id },
      });

      if (!promo) {
        throw new NotFoundError("Promo tidak ditemukan");
      }

      await prisma.promo.delete({
        where: { id },
      });

      return { message: "Promo berhasil dihapus" };
    } catch (error) {
      console.error("Promo destroy error:", error);
      throw error;
    }
  },
};

import { prisma } from "../../integrations";
import { ConflictError, NotFoundError, BadRequestError } from "../../shared";
import { PromoInputCreate, PromoInputUpdate } from "../../shared/types/promo";

export const PromoModel = {
  async list() {
    try {
      return await prisma.promo.findMany({
        select: {
          id: true,
          nama: true,
          tipe_promo: true,
          aktif: true,
          tanggal_mulai: true,
          tanggal_selesai: true,
        },
        orderBy: { created_at: "desc" },
      });
    } catch (error) {
      console.error("Promo list error:", error);
      throw error;
    }
  },
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
      if (!data || !data.nama || !data.tipe_promo || !data.tanggal_mulai || !data.tanggal_selesai) {
        throw new BadRequestError("Data promo tidak valid");
      }

      const existKode = await prisma.promo.findFirst({ where: { nama: data.nama } });
      if (existKode) throw new ConflictError("Kode promo sudah digunakan");

      const newPromo = await prisma.promo.create({
        data: ({
          nama: data.nama,
          deskripsi: data.deskripsi ?? undefined,
          tipe_promo: data.tipe_promo,
          diskon_persen: data.diskon_persen ?? null,
          diskon_nominal: data.diskon_nominal ?? null,
          psb_normal: data.psb_normal as any,
          psb_diskon_persen: data.psb_diskon_persen as any,
          psb_setelah_diskon: (data as any).psb_setelah_diskon ?? (data as any).psbSetelah_diskon,
          tanggal_mulai: data.tanggal_mulai,
          tanggal_selesai: data.tanggal_selesai,
          aktif: data.aktif ?? true,
          is_global: (data as any).is_global ?? false,
        }) as any,
      });

      // Materialize global relations if needed
      if ((newPromo as any).is_global) {
        const paketIds = await prisma.paket.findMany({ select: { id: true } });
        if (paketIds.length > 0) {
          await prisma.promoPaket.createMany({
            data: paketIds.map((p) => ({ promo_id: newPromo.id, paket_id: p.id })),
            skipDuplicates: true,
          });
        }
      } else {
        // Ensure no leftover global relations for this promo
        await prisma.promoPaket.deleteMany({ where: { promo_id: newPromo.id } });
      }

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

      if (data.nama && data.nama !== promo.nama) {
        const kodeExist = await prisma.promo.findFirst({ where: { nama: data.nama } });
        if (kodeExist) throw new ConflictError("Kode promo sudah digunakan");
      }

      const updatedPromo = await prisma.promo.update({
        where: { id },
        data: ({
          ...(data.nama !== undefined ? { nama: data.nama } : {}),
          ...(data.deskripsi !== undefined ? { deskripsi: data.deskripsi } : {}),
          ...(data.tipe_promo !== undefined ? { tipe_promo: data.tipe_promo } : {}),
          ...(data.diskon_persen !== undefined ? { diskon_persen: data.diskon_persen } : {}),
          ...(data.diskon_nominal !== undefined ? { diskon_nominal: data.diskon_nominal } : {}),
          ...(data.psb_normal !== undefined ? { psb_normal: data.psb_normal as any } : {}),
          ...(data.psb_diskon_persen !== undefined ? { psb_diskon_persen: data.psb_diskon_persen as any } : {}),
          ...((data as any).psb_setelah_diskon !== undefined || (data as any).psbSetelah_diskon !== undefined
            ? { psb_setelah_diskon: (data as any).psb_setelah_diskon ?? (data as any).psbSetelah_diskon }
            : {}),
          ...(data.tanggal_mulai !== undefined ? { tanggal_mulai: data.tanggal_mulai } : {}),
          ...(data.tanggal_selesai !== undefined ? { tanggal_selesai: data.tanggal_selesai } : {}),
          ...(data.aktif !== undefined ? { aktif: data.aktif } : {}),
          ...((data as any).is_global !== undefined ? { is_global: (data as any).is_global } : {}),
        }) as any,
      });

      // Sync materialized relations based on is_global
      if ((updatedPromo as any).is_global) {
        const paketIds = await prisma.paket.findMany({ select: { id: true } });
        if (paketIds.length > 0) {
          await prisma.promoPaket.createMany({
            data: paketIds.map((p) => ({ promo_id: updatedPromo.id, paket_id: p.id })),
            skipDuplicates: true,
          });
        }
      } else {
        await prisma.promoPaket.deleteMany({ where: { promo_id: updatedPromo.id } });
      }

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
  
  async importExcel(rows: any[]) {
    try {
      if (!Array.isArray(rows) || rows.length === 0) {
        throw new BadRequestError("Data Excel kosong atau tidak valid");
      }

      const inserts: any[] = [];

      for (const row of rows) {
        const { nama, aktif } = row as { nama?: string; aktif?: boolean };

        if (!nama) {
          throw new BadRequestError("Data promo tidak lengkap (wajib: nama)");
        }

        const now = new Date();
        const end = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);

        inserts.push({
          nama: String(nama).trim(),
          tipe_promo: "DISKON_NOMINAL",
          // psb_* have defaults in schema; omit to use defaults
          tanggal_mulai: now,
          tanggal_selesai: end,
          ...(typeof aktif === "boolean" ? { aktif } : {}),
        });
      }

      if (inserts.length === 0) return null;

      await prisma.promo.createMany({ data: inserts, skipDuplicates: true });
      return null;
    } catch (error) {
      console.error("Promo importExcel error:", error);
      throw error;
    }
  },
};

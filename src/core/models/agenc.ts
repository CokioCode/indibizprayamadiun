import { prisma } from "../../integrations";
import { ConflictError, NotFoundError, BadRequestError } from "../../shared";

export const AgencModel = {
  async index({ page = 1, limit = 5 }: { page?: number; limit?: number } = {}) {
    try {
      const skip = (page - 1) * limit;
      const [data, total] = await Promise.all([
        prisma.agenc.findMany({
          skip,
          take: limit,
          orderBy: { created_at: "desc" },
        }),
        prisma.agenc.count(),
      ]);
      return {
        data,
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      };
    } catch (error) {
      console.error("Agenc index error:", error);
      throw error;
    }
  },

  async shows(id: string) {
    try {
      if (!id || typeof id !== "string" || id.trim() === "") {
        throw new BadRequestError("ID agenc tidak valid");
      }

      const agenc = await prisma.agenc.findUnique({
        where: { id },
      });

      if (!agenc) {
        throw new NotFoundError("Agenc tidak ditemukan");
      }

      return agenc;
    } catch (error) {
      console.error("Agenc shows error:", error);
      throw error;
    }
  },

  async create(data: { nama: string }) {
    try {
      if (!data || typeof data.nama !== "string" || data.nama.trim() === "") {
        throw new BadRequestError("Nama agenc tidak valid");
      }

      const existingAgenc = await prisma.agenc.findUnique({
        where: { nama: data.nama.trim() },
      });

      if (existingAgenc) {
        throw new ConflictError("Agenc dengan nama ini sudah ada");
      }

      const newAgenc = await prisma.agenc.create({
        data: { nama: data.nama.trim() },
      });

      return newAgenc;
    } catch (error) {
      console.error("Agenc creation error:", error);
      throw error;
    }
  },

  async list() {
    return prisma.agenc.findMany({
      select: { id: true, nama: true },
      orderBy: { created_at: "desc" },
    })
  },

  async update(id: string, data: { nama: string }) {
    try {
      if (!id || typeof id !== "string" || id.trim() === "") {
        throw new BadRequestError("ID agenc tidak valid");
      }
      if (!data || typeof data.nama !== "string" || data.nama.trim() === "") {
        throw new BadRequestError("Nama agenc tidak valid");
      }

      const agenc = await prisma.agenc.findUnique({
        where: { id },
      });

      if (!agenc) {
        throw new NotFoundError("Agenc tidak ditemukan");
      }

      if (data.nama.trim() !== agenc.nama) {
        const namaExist = await prisma.agenc.findUnique({
          where: { nama: data.nama.trim() },
        });
        if (namaExist) {
          throw new ConflictError("Agenc dengan nama ini sudah ada");
        }
      }

      const updatedAgenc = await prisma.agenc.update({
        where: { id },
        data: { nama: data.nama.trim() },
      });

      return updatedAgenc;
    } catch (error) {
      console.error("Agenc update error:", error);
      throw error;
    }
  },

  async destroy(id: string) {
    try {
      if (!id || typeof id !== "string" || id.trim() === "") {
        throw new BadRequestError("ID agenc tidak valid");
      }

      const agenc = await prisma.agenc.findUnique({
        where: { id },
      });

      if (!agenc) {
        throw new NotFoundError("Agenc tidak ditemukan");
      }

      await prisma.agenc.delete({
        where: { id },
      });

      return { message: "Agenc berhasil dihapus" };
    } catch (error) {
      console.error("Agenc destroy error:", error);
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
        const { nama } = row;

        if (!nama) {
          throw new BadRequestError("Data agenc tidak lengkap");
        }

        inserts.push({
          nama: nama.trim(),
        });
      }

      await prisma.agenc.createMany({
        data: inserts,
        skipDuplicates: true,
      });

      return null;
    } catch (error) {
      console.error("Agenc importExcel error:", error);
      throw error;
    }
  },
};

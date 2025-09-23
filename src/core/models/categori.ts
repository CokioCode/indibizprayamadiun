import { prisma } from "@/integrations";
import { ConflictError, NotFoundError, BadRequestError } from "@/shared";

export const CategoriModel = {
  async index({ page = 1, limit = 5 }: { page?: number; limit?: number } = {}) {
    try {
      const skip = (page - 1) * limit;
      const [data, total] = await Promise.all([
        prisma.kategori.findMany({
          skip,
          take: limit,
          orderBy: { created_at: "desc" },
        }),
        prisma.kategori.count(),
      ]);
      return {
        data,
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      };
    } catch (error) {
      console.error("Kategori index error:", error);
      throw error;
    }
  },

  async shows(id: string) {
    try {
      if (!id || typeof id !== "string" || id.trim() === "") {
        throw new BadRequestError("ID kategori tidak valid");
      }

      const kategori = await prisma.kategori.findUnique({
        where: { id },
      });

      if (!kategori) {
        throw new NotFoundError("Kategori tidak ditemukan");
      }

      return kategori;
    } catch (error) {
      console.error("Kategori shows error:", error);
      throw error;
    }
  },

  async create(data: { nama: string }) {
    try {
      if (!data || typeof data.nama !== "string" || data.nama.trim() === "") {
        throw new BadRequestError("Nama kategori tidak valid");
      }

      const existingKategori = await prisma.kategori.findUnique({
        where: { nama: data.nama.trim() },
      });

      if (existingKategori) {
        throw new ConflictError("Kategori dengan nama ini sudah ada");
      }

      const newKategori = await prisma.kategori.create({
        data: { nama: data.nama.trim() },
      });

      return newKategori;
    } catch (error) {
      console.error("Kategori creation error:", error);
      throw error;
    }
  },

  async update(id: string, data: { nama: string }) {
    try {
      if (!id || typeof id !== "string" || id.trim() === "") {
        throw new BadRequestError("ID kategori tidak valid");
      }
      if (!data || typeof data.nama !== "string" || data.nama.trim() === "") {
        throw new BadRequestError("Nama kategori tidak valid");
      }

      const kategori = await prisma.kategori.findUnique({
        where: { id },
      });

      if (!kategori) {
        throw new NotFoundError("Kategori tidak ditemukan");
      }

      if (data.nama.trim() !== kategori.nama) {
        const namaExist = await prisma.kategori.findUnique({
          where: { nama: data.nama.trim() },
        });
        if (namaExist) {
          throw new ConflictError("Kategori dengan nama ini sudah ada");
        }
      }

      const updatedKategori = await prisma.kategori.update({
        where: { id },
        data: { nama: data.nama.trim() },
      });

      return updatedKategori;
    } catch (error) {
      console.error("Kategori update error:", error);
      throw error;
    }
  },

  async destroy(id: string) {
    try {
      if (!id || typeof id !== "string" || id.trim() === "") {
        throw new BadRequestError("ID kategori tidak valid");
      }

      const kategori = await prisma.kategori.findUnique({
        where: { id },
      });

      if (!kategori) {
        throw new NotFoundError("Kategori tidak ditemukan");
      }

      await prisma.kategori.delete({
        where: { id },
      });

      return { message: "Kategori berhasil dihapus" };
    } catch (error) {
      console.error("Kategori destroy error:", error);
      throw error;
    }
  },
};

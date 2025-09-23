import { prisma } from "@/integrations";
import { ConflictError, NotFoundError, BadRequestError } from "@/shared";
import { DatelInputCreate, DatelInputUpdate } from "@/shared/types/datel";

export const DatelModel = {
  async index({ page = 1, limit = 5 }: { page?: number; limit?: number } = {}) {
    try {
      const skip = (page - 1) * limit;
      const [data, total] = await Promise.all([
        prisma.datel.findMany({
          skip,
          take: limit,
          orderBy: { created_at: "desc" },
        }),
        prisma.datel.count(),
      ]);
      return {
        data,
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      };
    } catch (error) {
      console.error("Datel index error:", error);
      throw error;
    }
  },

  async list() {
    try {
      const data = await prisma.datel.findMany({
        select: {
          id: true,
          nama: true,
        },
        orderBy: { created_at: "desc" },
      });
      return data;
    } catch (error) {
      console.error("Datel list error:", error);
      throw error;
    }
  },

  async shows(id: string) {
    try {
      if (!id || typeof id !== "string" || id.trim() === "") {
        throw new BadRequestError("ID datel tidak valid");
      }

      const datel = await prisma.datel.findUnique({
        where: { id },
      });

      if (!datel) {
        throw new NotFoundError("Datel tidak ditemukan");
      }

      return datel;
    } catch (error) {
      console.error("Datel shows error:", error);
      throw error;
    }
  },

  async create(data: DatelInputCreate) {
    try {
      if (
        !data ||
        typeof data.kode_sto !== "string" ||
        data.kode_sto.trim() === "" ||
        typeof data.nama !== "string" ||
        data.nama.trim() === "" ||
        typeof data.categori !== "string" ||
        data.categori.trim() === "" ||
        typeof data.wilayah !== "string" ||
        data.wilayah.trim() === "" ||
        typeof data.sub_area !== "string" ||
        data.sub_area.trim() === ""
      ) {
        throw new BadRequestError("Data datel tidak valid");
      }

      const existingDatel = await prisma.datel.findUnique({
        where: { kode_sto: data.kode_sto.trim() },
      });

      if (existingDatel) {
        throw new ConflictError("Datel dengan kode_sto ini sudah ada");
      }

      const newDatel = await prisma.datel.create({
        data: {
          kode_sto: data.kode_sto.trim().toUpperCase(),
          nama: data.nama.trim(),
          categori: data.categori,
          wilayah: data.wilayah.trim(),
          sub_area: data.sub_area,
        },
      });

      return newDatel;
    } catch (error) {
      console.error("Datel creation error:", error);
      throw error;
    }
  },

  async update(id: string, data: DatelInputUpdate) {
    try {
      if (!id || typeof id !== "string" || id.trim() === "") {
        throw new BadRequestError("ID datel tidak valid");
      }

      const datel = await prisma.datel.findUnique({
        where: { id },
      });

      if (!datel) {
        throw new NotFoundError("Datel tidak ditemukan");
      }

      if (data.kode_sto && data.kode_sto.trim() !== datel.kode_sto) {
        const kodeStoExist = await prisma.datel.findUnique({
          where: { kode_sto: data.kode_sto.trim() },
        });
        if (kodeStoExist) {
          throw new ConflictError("Datel dengan kode_sto ini sudah ada");
        }
      }

      const updatedDatel = await prisma.datel.update({
        where: { id },
        data: {
          ...(data.kode_sto !== undefined
            ? { kode_sto: data.kode_sto.trim().toUpperCase() }
            : {}),
          ...(data.nama !== undefined ? { nama: data.nama.trim() } : {}),
          ...(data.categori !== undefined ? { categori: data.categori } : {}),
          ...(data.wilayah !== undefined
            ? { wilayah: data.wilayah.trim() }
            : {}),
          ...(data.sub_area !== undefined ? { sub_area: data.sub_area } : {}),
        },
      });

      return updatedDatel;
    } catch (error) {
      console.error("Datel update error:", error);
      throw error;
    }
  },

  async destroy(id: string) {
    try {
      if (!id || typeof id !== "string" || id.trim() === "") {
        throw new BadRequestError("ID datel tidak valid");
      }

      const datel = await prisma.datel.findUnique({
        where: { id },
      });

      if (!datel) {
        throw new NotFoundError("Datel tidak ditemukan");
      }

      await prisma.datel.delete({
        where: { id },
      });

      return { message: "Datel berhasil dihapus" };
    } catch (error) {
      console.error("Datel destroy error:", error);
      throw error;
    }
  },
};

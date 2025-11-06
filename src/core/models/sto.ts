import prisma from "../../integrations/prisma/index.js";
import { StoAgencInput } from "../../shared/types/sto.js";
import {
  BadRequestError,
  NotFoundError,
  ConflictError,
} from "../../shared/utils/error.js";

export const StoModel = {
  async index({ page = 1, limit = 5 }: { page?: number; limit?: number } = {}) {
    try {
      const skip = (page - 1) * limit;
      const [data, total] = await Promise.all([
        prisma.sto.findMany({
          skip,
          take: limit,
          orderBy: { created_at: "desc" },
        }),
        prisma.sto.count(),
      ]);
      return {
        data,
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      };
    } catch (error) {
      console.error("Sto index error:", error);
      throw error;
    }
  },

  async shows(id: string) {
    try {
      if (!id || typeof id !== "string" || id.trim() === "") {
        throw new BadRequestError("ID sto tidak valid");
      }

      const sto = await prisma.sto.findUnique({
        where: { id },
      });

      if (!sto) {
        throw new NotFoundError("Sto tidak ditemukan");
      }

      return sto;
    } catch (error) {
      console.error("Sto shows error:", error);
      throw error;
    }
  },

  async list() {
    try {
      const data = await prisma.sto.findMany({
        select: {
          id: true,
          name: true,
        },
        orderBy: { created_at: "desc" },
      });

      return data;
    } catch (error) {
      console.error("Sto list error:", error);
      throw error;
    }
  },

  async create(data: StoAgencInput) {
    try {
      if (
        !data ||
        typeof data.name !== "string" ||
        data.name.trim() === "" ||
        typeof data.abbreviation !== "string" ||
        data.abbreviation.trim() === ""
      ) {
        throw new BadRequestError("Data tidak valid");
      }

      const existingSto = await prisma.sto.findUnique({
        where: { name: data.name.trim() },
      });

      if (existingSto) {
        throw new ConflictError("Sto dengan nama ini sudah ada");
      }

      const newSto = await prisma.sto.create({
        data: {
          name: data.name.trim(),
          abbreviation: data.abbreviation.toUpperCase().trim(),
        },
      });

      return newSto;
    } catch (error) {
      console.error("Sto creation error:", error);
      throw error;
    }
  },

  async update(id: string, data: { name?: string; abbreviation?: string }) {
    try {
      if (!id || typeof id !== "string" || id.trim() === "") {
        throw new BadRequestError("ID sto tidak valid");
      }
      if (
        !data ||
        (typeof data.name !== "string" && typeof data.abbreviation !== "string")
      ) {
        throw new BadRequestError("Data update tidak valid");
      }

      const sto = await prisma.sto.findUnique({
        where: { id },
      });

      if (!sto) {
        throw new NotFoundError("Sto tidak ditemukan");
      }

      const updateData: any = {};

      if (typeof data.name === "string") {
        if (data.name.trim() === "") {
          throw new BadRequestError("Nama sto tidak valid");
        }
        if (data.name.trim() !== sto.name) {
          const nameExist = await prisma.sto.findUnique({
            where: { name: data.name.trim() },
          });
          if (nameExist) {
            throw new ConflictError("Sto dengan nama ini sudah ada");
          }
        }
        updateData.name = data.name.trim();
      }

      if (typeof data.abbreviation === "string") {
        if (data.abbreviation.trim() === "") {
          throw new BadRequestError("Abbreviation tidak valid");
        }
        updateData.abbreviation = data.abbreviation.toUpperCase().trim();
      }

      if (Object.keys(updateData).length === 0) {
        throw new BadRequestError("Tidak ada data yang diupdate");
      }

      const updatedSto = await prisma.sto.update({
        where: { id },
        data: updateData,
      });

      return updatedSto;
    } catch (error) {
      console.error("Sto update error:", error);
      throw error;
    }
  },

  async destroy(id: string) {
    try {
      if (!id || typeof id !== "string" || id.trim() === "") {
        throw new BadRequestError("ID sto tidak valid");
      }

      const sto = await prisma.sto.findUnique({
        where: { id },
      });

      if (!sto) {
        throw new NotFoundError("Sto tidak ditemukan");
      }

      await prisma.sto.delete({
        where: { id },
      });

      return { message: "Sto berhasil dihapus" };
    } catch (error) {
      console.error("Sto destroy error:", error);
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
        const { name } = row;

        if (!name) {
          throw new BadRequestError("Data sto tidak lengkap");
        }

        inserts.push({
          name: name.trim(),
        });
      }

      await prisma.sto.createMany({
        data: inserts,
        skipDuplicates: true,
      });

      return null;
    } catch (error) {
      console.error("Sto importExcel error:", error);
      throw error;
    }
  },
};
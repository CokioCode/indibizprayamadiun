  import prisma from "../../integrations/prisma/index.js";
import { Prisma } from "@prisma/client";
import {
  BadRequestError,
  NotFoundError,
  ConflictError,
} from "../../shared/utils/error.js";

export const WilayahModel = {
  async index({ page = 1, limit = 5, q }: { page?: number; limit?: number; q?: string } = {}) {
    try {
      const skip = (page - 1) * limit;
      const where = q
        ? {
            OR: [
              { nama: { contains: q, mode: Prisma.QueryMode.insensitive } },
              {
                stos: {
                  some: {
                    sto: {
                      OR: [
                        { name: { contains: q, mode: Prisma.QueryMode.insensitive } },
                        { abbreviation: { contains: q, mode: Prisma.QueryMode.insensitive } },
                      ],
                    },
                  },
                },
              },
            ],
          }
        : undefined;
      const [data, total] = await Promise.all([
        prisma.wilayah.findMany({
          skip,
          take: limit,
          where,
          orderBy: { created_at: "desc" },
          include: {
            stos: {
              include: {
                sto: {
                  select: {
                    id: true,
                    name: true,
                    abbreviation: true,
                  },
                },
              },
            },
          },
        }),
        prisma.wilayah.count({ where }),
      ]);
      return {
        data,
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      };
    } catch (error) {
      console.error("Wilayah index error:", error);
      throw error;
    }
  },

  async shows(id: string) {
    try {
      if (!id || typeof id !== "string" || id.trim() === "") {
        throw new BadRequestError("ID wilayah tidak valid");
      }

      const wilayah = await prisma.wilayah.findUnique({
        where: { id },
        include: {
          stos: {
            include: {
              sto: {
                select: {
                  id: true,
                  name: true,
                  abbreviation: true,
                },
              },
            },
          },
        },
      });

      if (!wilayah) {
        throw new NotFoundError("Wilayah tidak ditemukan");
      }

      return wilayah;
    } catch (error) {
      console.error("Wilayah shows error:", error);
      throw error;
    }
  },

  async list() {
    try {
      const data = await prisma.wilayah.findMany({
        select: {
          id: true,
          nama: true,
          stos: {
            select: {
              id: true,
              sto: true,
            },
          },
        },
        orderBy: { created_at: "desc" },
      });

      return data;
    } catch (error) {
      console.error("Wilayah list error:", error);
      throw error;
    }
  },

  async create(data: { nama: string; sto_ids?: string[] }) {
    try {
      if (!data || typeof data.nama !== "string" || data.nama.trim() === "") {
        throw new BadRequestError("Nama wilayah tidak valid");
      }

      const existingWilayah = await prisma.wilayah.findUnique({
        where: { nama: data.nama.trim() },
      });

      if (existingWilayah) {
        throw new ConflictError("Wilayah dengan nama ini sudah ada");
      }

      if (data.sto_ids && data.sto_ids.length > 0) {
        const stos = await prisma.sto.findMany({
          where: { id: { in: data.sto_ids } },
        });

        if (stos.length !== data.sto_ids.length) {
          throw new BadRequestError("Beberapa STO tidak ditemukan");
        }
      }

      const newWilayah = await prisma.wilayah.create({
        data: {
          nama: data.nama.trim(),
          stos: data.sto_ids
            ? {
                create: data.sto_ids.map((sto_id) => ({
                  sto_id,
                })),
              }
            : undefined,
        },
        include: {
          stos: {
            include: {
              sto: true,
            },
          },
        },
      });

      return newWilayah;
    } catch (error) {
      console.error("Wilayah creation error:", error);
      throw error;
    }
  },

  async update(id: string, data: { nama: string; sto_ids?: string[] }) {
    try {
      if (!id || typeof id !== "string" || id.trim() === "") {
        throw new BadRequestError("ID wilayah tidak valid");
      }
      if (!data || typeof data.nama !== "string" || data.nama.trim() === "") {
        throw new BadRequestError("Nama wilayah tidak valid");
      }

      const wilayah = await prisma.wilayah.findUnique({
        where: { id },
      });

      if (!wilayah) {
        throw new NotFoundError("Wilayah tidak ditemukan");
      }

      if (data.nama.trim() !== wilayah.nama) {
        const namaExist = await prisma.wilayah.findUnique({
          where: { nama: data.nama.trim() },
        });
        if (namaExist) {
          throw new ConflictError("Wilayah dengan nama ini sudah ada");
        }
      }

      if (data.sto_ids && data.sto_ids.length > 0) {
        const stos = await prisma.sto.findMany({
          where: { id: { in: data.sto_ids } },
        });

        if (stos.length !== data.sto_ids.length) {
          throw new BadRequestError("Beberapa STO tidak ditemukan");
        }
      }

      const updatedWilayah = await prisma.$transaction(async (tx) => {
        const updated = await tx.wilayah.update({
          where: { id },
          data: { nama: data.nama.trim() },
        });

        if (data.sto_ids !== undefined) {
          await tx.wilayahSto.deleteMany({
            where: { wilayah_id: id },
          });

          if (data.sto_ids.length > 0) {
            await tx.wilayahSto.createMany({
              data: data.sto_ids.map((sto_id) => ({
                wilayah_id: id,
                sto_id,
              })),
            });
          }
        }

        return tx.wilayah.findUnique({
          where: { id },
          include: {
            stos: {
              include: {
                sto: true,
              },
            },
          },
        });
      });

      return updatedWilayah;
    } catch (error) {
      console.error("Wilayah update error:", error);
      throw error;
    }
  },

  async destroy(id: string) {
    try {
      if (!id || typeof id !== "string" || id.trim() === "") {
        throw new BadRequestError("ID wilayah tidak valid");
      }

      const wilayah = await prisma.wilayah.findUnique({
        where: { id },
      });

      if (!wilayah) {
        throw new NotFoundError("Wilayah tidak ditemukan");
      }

      await prisma.wilayah.delete({
        where: { id },
      });

      return { message: "Wilayah berhasil dihapus" };
    } catch (error) {
      console.error("Wilayah destroy error:", error);
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
          throw new BadRequestError("Data wilayah tidak lengkap");
        }

        inserts.push({
          nama: nama.trim(),
        });
      }

      await prisma.wilayah.createMany({
        data: inserts,
        skipDuplicates: true,
      });

      return null;
    } catch (error) {
      console.error("Wilayah importExcel error:", error);
      throw error;
    }
  },

  async addStos(wilayahId: string, stoIds: string[]) {
    try {
      if (
        !wilayahId ||
        typeof wilayahId !== "string" ||
        wilayahId.trim() === ""
      ) {
        throw new BadRequestError("ID wilayah tidak valid");
      }

      if (!Array.isArray(stoIds) || stoIds.length === 0) {
        throw new BadRequestError("STO IDs tidak valid");
      }

      const wilayah = await prisma.wilayah.findUnique({
        where: { id: wilayahId },
      });

      if (!wilayah) {
        throw new NotFoundError("Wilayah tidak ditemukan");
      }

      const stos = await prisma.sto.findMany({
        where: { id: { in: stoIds } },
      });

      if (stos.length !== stoIds.length) {
        throw new BadRequestError("Beberapa STO tidak ditemukan");
      }

      await prisma.wilayahSto.createMany({
        data: stoIds.map((sto_id) => ({
          wilayah_id: wilayahId,
          sto_id,
        })),
        skipDuplicates: true,
      });

      return { message: "STO berhasil ditambahkan ke wilayah" };
    } catch (error) {
      console.error("Wilayah addStos error:", error);
      throw error;
    }
  },

  async removeStos(wilayahId: string, stoIds: string[]) {
    try {
      if (
        !wilayahId ||
        typeof wilayahId !== "string" ||
        wilayahId.trim() === ""
      ) {
        throw new BadRequestError("ID wilayah tidak valid");
      }

      if (!Array.isArray(stoIds) || stoIds.length === 0) {
        throw new BadRequestError("STO IDs tidak valid");
      }

      const wilayah = await prisma.wilayah.findUnique({
        where: { id: wilayahId },
      });

      if (!wilayah) {
        throw new NotFoundError("Wilayah tidak ditemukan");
      }

      await prisma.wilayahSto.deleteMany({
        where: {
          wilayah_id: wilayahId,
          sto_id: { in: stoIds },
        },
      });

      return { message: "STO berhasil dihapus dari wilayah" };
    } catch (error) {
      console.error("Wilayah removeStos error:", error);
      throw error;
    }
  },
}; 
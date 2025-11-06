import { prisma } from "../../integrations";
import { BadRequestError, ConflictError, NotFoundError } from "../../shared";
import { ProdigiInputCreate, ProdigiInputUpdate } from "../../shared/types/prodigi";

export const ProdigiModel = {
  async index({ page = 1, limit = 10 }: { page?: number; limit?: number } = {}) {
    const skip = (page - 1) * limit;
    const [data, total] = await Promise.all([
      prisma.prodigi.findMany({
        skip,
        take: limit,
        orderBy: { created_at: "desc" },
      }),
      prisma.prodigi.count(),
    ]);
    return { data, total, page, limit, totalPages: Math.ceil(total / limit) };
  },

  async list() {
    return prisma.prodigi.findMany({
      select: { id: true, nama: true, harga: true },
      orderBy: { created_at: "desc" },
    });
  },

  async show(id: string) {
    if (!id) throw new BadRequestError("ID prodigi tidak valid");
    const data = await prisma.prodigi.findUnique({ where: { id }, include: { pakets: true } });
    if (!data) throw new NotFoundError("Prodigi tidak ditemukan");
    return data;
  },

  async create(body: ProdigiInputCreate) {
    if (!body || !body.nama) throw new BadRequestError("Data prodigi tidak valid");

    const dup = await prisma.prodigi.findFirst({ where: { nama: body.nama } });
    if (dup) throw new ConflictError("Prodigi dengan nama ini sudah ada");

    return prisma.prodigi.create({ data: body });
  },

  async update(id: string, body: ProdigiInputUpdate) {
    if (!id) throw new BadRequestError("ID prodigi tidak valid");
    const exist = await prisma.prodigi.findUnique({ where: { id } });
    if (!exist) throw new NotFoundError("Prodigi tidak ditemukan");
    if (body.nama) {
      const dup = await prisma.prodigi.findFirst({ where: { nama: body.nama, NOT: { id } } });
      if (dup) throw new ConflictError("Prodigi dengan nama ini sudah ada");
    }
    return prisma.prodigi.update({ where: { id }, data: body });
  },

  async destroy(id: string) {
    if (!id) throw new BadRequestError("ID prodigi tidak valid");
    const exist = await prisma.prodigi.findUnique({ where: { id } });
    if (!exist) throw new NotFoundError("Prodigi tidak ditemukan");
    await prisma.prodigi.delete({ where: { id } });
    return { message: "Prodigi berhasil dihapus" };
  },

  async importExcel(rows: any[]) {
    try {
      if (!Array.isArray(rows) || rows.length === 0) {
        throw new BadRequestError("Data Excel kosong atau tidak valid");
      }

      const inserts: any[] = [];

      for (const row of rows) {
        const { nama, harga, aktif } = row as {
          nama?: string;
          harga?: number | string;
          aktif?: boolean;
        };

        if (!nama || harga === undefined || harga === null || nama.toString().trim() === "") {
          throw new BadRequestError("Data prodigi tidak lengkap (wajib: nama, harga)");
        }

        const parsedHarga = typeof harga === "string" ? Number(harga) : harga;
        if (Number.isNaN(parsedHarga)) {
          throw new BadRequestError("Harga prodigi harus berupa angka");
        }

        inserts.push({
          nama: nama.trim(),
          harga: parsedHarga,
          ...(typeof aktif === "boolean" ? { aktif } : {}),
        });
      }

      if (inserts.length === 0) return null;

      await prisma.prodigi.createMany({
        data: inserts,
        skipDuplicates: true,
      });

      return null;
    } catch (error) {
      console.error("Prodigi importExcel error:", error);
      throw error;
    }
  },
};



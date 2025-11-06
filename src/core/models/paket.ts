import { prisma } from "../../integrations/index.js";
import { ConflictError, NotFoundError, BadRequestError } from "../../shared/index.js";
import { PaketInputCreate, PaketInputUpdate } from "../../shared/types/paket.js";
import { computeEffectivePrice } from "../services/pricing.js";

export const PaketModel = {
  async index({ page = 1, limit = 5 }: { page?: number; limit?: number } = {}) {
    try {
      const skip = (page - 1) * limit;
      const now = new Date();
      const [rows, total, globalPromos] = await Promise.all([
        prisma.paket.findMany({
          skip,
          take: limit,
          include: {
            prodigis: true,
            promo_pakets: { include: { promo: true } },
          },
          orderBy: { created_at: "desc" },
        }),
        prisma.paket.count(),
        prisma.promo.findMany({
          where: {
            is_global: true,
            aktif: true,
            tanggal_mulai: { lte: now },
            tanggal_selesai: { gte: now },
          },
        }),
      ]);

      const data = rows.map((paket) => {
        const eff = computeEffectivePrice(paket as any, now, globalPromos as any);
        return {
          ...paket,
          // hide DB 'total' and do not return effective_total
          total: undefined,
          effective_harga: eff.effective_harga,
          effective_psb: eff.effective_psb,
          harga_coret: eff.harga_coret ?? (paket as any).harga_coret ?? null,
          applied_promo_ids: eff.applied_promo_ids,
        };
      });

      return {
        data,
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
      const rows = await prisma.paket.findMany({
        include: {
          prodigis: { select: { nama: true } },
          promo_pakets: { include: { promo: true } },
        },
        orderBy: { created_at: "desc" },
      });

      const toNumber = (v: any): number => {
        if (v == null) return 0;
        if (typeof v === "number") return v;
        if (typeof v === "string") return Number(v);
        if (typeof (v as any).toNumber === "function") return (v as any).toNumber();
        const n = Number(v);
        return Number.isNaN(n) ? 0 : n;
      };

      const formatted = rows.map((p: any) => {
        const bw = p.bandwidth ?? 0;
        const prodigiNames = (p.prodigis || []).map((x: any) => x.nama).filter(Boolean);
        const addon = prodigiNames.length > 0 ? ` + ${prodigiNames.map((n: string) => n.toUpperCase()).join(" + ")}` : "";

        // Ambil persentase PSB jika ada dari promo_pakets atau promo terkait
        let psbPercent: number | null = null;
        for (const pp of p.promo_pakets || []) {
          const localPct = pp?.diskon_persen != null ? toNumber(pp.diskon_persen) : null;
          const promoPct = pp?.promo?.psb_diskon_persen != null ? toNumber(pp.promo.psb_diskon_persen) : null;
          const candidate = localPct ?? promoPct;
          if (candidate != null) {
            psbPercent = candidate;
            break;
          }
        }
        const psbInfo = psbPercent != null && psbPercent > 0 ? ` PSB ${Math.round(psbPercent)}%` : "";

        const totalNum = toNumber(p.total);
        const priceInfo = totalNum > 0 ? ` (${Math.round(totalNum / 1000)}K)` : "";

        const label_option = `[${bw}MB] ${p.nama}${addon} ${bw} MBPS${psbInfo}${priceInfo}`.replace(/\s+/g, " ").trim();

        return {
          id: p.id,
          nama: p.nama,
          bandwidth: p.bandwidth,
          total: p.total,
          promo_pakets: p.promo_pakets,
          label_option,
        } as any;
      });

      return formatted;
    } catch (error) {
      console.error("Paket list error:", error);
      throw error;
    }
  },

  async show(id: string) {
    try {
      if (!id) throw new BadRequestError("ID paket tidak valid");
      const paket = await prisma.paket.findUnique({
        where: { id },
        include: {
          prodigis: true,
          promo_pakets: { include: { promo: true } },
        },
      });

      if (!paket) throw new NotFoundError("Paket tidak ditemukan");
      const now = new Date();
      const globalPromos = await prisma.promo.findMany({
        where: {
          is_global: true,
          aktif: true,
          tanggal_mulai: { lte: now },
          tanggal_selesai: { gte: now },
        },
      });
      const eff = computeEffectivePrice(paket as any, now, globalPromos as any);
      return {
        ...paket,
        total: undefined,
        effective_harga: eff.effective_harga,
        effective_psb: eff.effective_psb,
        harga_coret: eff.harga_coret ?? (paket as any).harga_coret ?? null,
        applied_promo_ids: eff.applied_promo_ids,
      } as any;
    } catch (error) {
      console.error("Paket show error:", error);
      throw error;
    }
  },

  async create(data: PaketInputCreate) {
    try {
      if (!data) throw new BadRequestError("Data paket tidak boleh kosong");

      const existing = await prisma.paket.findFirst({
        where: { nama: data.nama },
      });
      if (existing) throw new ConflictError("Paket dengan nama ini sudah ada");

      const { prodigis, promo_pakets, ...paketData } = data;

      return await prisma.paket.create({
        data: {
          ...paketData,
          ...(prodigis && prodigis.length > 0
            ? {
                prodigis: {
                  connect: prodigis.map((id) => ({ id })),
                },
              }
            : {}),
          ...(promo_pakets && promo_pakets.length > 0
            ? {
                promo_pakets: {
                  create: promo_pakets.map((promo_id) => ({
                    promo: { connect: { id: promo_id } },
                  })),
                },
              }
            : {}),
        },
      });
    } catch (error) {
      console.error("Paket creation error:", error);
      throw error;
    }
  },

  async update(id: string, data: PaketInputUpdate) {
    try {
      if (!id) throw new BadRequestError("ID paket tidak valid");

      const existing = await prisma.paket.findUnique({ where: { id } });
      if (!existing) throw new NotFoundError("Paket tidak ditemukan");

      if (data.nama) {
        const duplicate = await prisma.paket.findFirst({
          where: { nama: data.nama, NOT: { id } },
        });
        if (duplicate)
          throw new ConflictError("Paket dengan nama ini sudah ada");
      }

      const { prodigis, promo_pakets, ...paketData } = data;

      return await prisma.paket.update({
        where: { id },
        data: {
          ...paketData,
          ...(prodigis !== undefined
            ? {
                prodigis: {
                  set: prodigis.length > 0 ? prodigis.map((id) => ({ id })) : [],
                },
              }
            : {}),
          ...(promo_pakets !== undefined
            ? {
                promo_pakets: {
                  deleteMany: {},
                  create: promo_pakets.map((promo_id) => ({
                    promo: { connect: { id: promo_id } },
                  })),
                },
              }
            : {}),
        },
      });
    } catch (error) {
      console.error("Paket update error:", error);
      throw error;
    }
  },

  async destroy(id: string) {
    try {
      if (!id) throw new BadRequestError("ID paket tidak valid");

      const existing = await prisma.paket.findUnique({ where: { id } });
      if (!existing) throw new NotFoundError("Paket tidak ditemukan");

      // Deletions of related items are handled by onDelete: Cascade in schema
      await prisma.paket.delete({ where: { id } });

      return { message: "Paket berhasil dihapus" };
    } catch (error) {
      console.error("Paket destroy error:", error);
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
        const { nama, harga, aktif } = row as {
          nama?: string;
          harga?: number | string;
          aktif?: boolean;
        };

        if (!nama) {
          throw new BadRequestError("Data paket tidak lengkap (wajib: nama)");
        }

        const parsedHarga =
          typeof harga === "string" ? Number(harga) : typeof harga === "number" ? harga : 0;
        if (Number.isNaN(parsedHarga)) {
          throw new BadRequestError("Harga paket harus berupa angka jika diisi");
        }

        inserts.push({
          nama: String(nama).trim(),
          jenis_paket: "INET_ONLY",
          bandwidth: 0,
          harga: parsedHarga,
          total: parsedHarga,
          ...(typeof aktif === "boolean" ? { aktif } : {}),
        });
      }

      if (inserts.length === 0) return null;

      await prisma.paket.createMany({ data: inserts, skipDuplicates: true });
      return null;
    } catch (error) {
      console.error("Paket importExcel error:", error);
      throw error;
    }
  },
};

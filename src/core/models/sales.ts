import prisma from "../../integrations/prisma/index.js";
import {
  CreateSalesInput,
  UpdateSalesInput,
} from "../../shared/types/sales.js";
import {
  BadRequestError,
  NotFoundError,
  ConflictError,
} from "../../shared/utils/error.js";

export const SalesModel = {
  async index({ page = 1, limit = 5, q }: { page?: number; limit?: number; q?: string } = {}) {
    try {
      const skip = (page - 1) * limit;
      const baseWhere: any = {
        status: {
          in: ["ACTIVE"],
        },
      };
      const where = q
        ? {
            ...baseWhere,
            OR: [
              { nama: { contains: q, mode: "insensitive" } },
              { kode_sales: { contains: q, mode: "insensitive" } },
              { email: { contains: q, mode: "insensitive" } },
              { agency: { nama: { contains: q, mode: "insensitive" } } },
              { wilayah: { nama: { contains: q, mode: "insensitive" } } },
              { sto: { OR: [
                { name: { contains: q, mode: "insensitive" } },
                { abbreviation: { contains: q, mode: "insensitive" } },
              ] } },
            ],
          }
        : baseWhere;
      const [data, total] = await Promise.all([
        prisma.sales.findMany({
          skip,
          take: limit,
          where,
          include: {
            agency: true,
            wilayah: true,
            sto: true,
          },
          orderBy: { created_at: "desc" },
        }),
        prisma.sales.count({ where }),
      ]);
      return {
        data,
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      };
    } catch (error) {
      console.error("Sales index error:", error);
      throw error;
    }
  },

  async list() {
    try {
      const data = await prisma.sales.findMany({
        where: {
          status: {
            in: ["ACTIVE"],
          },
        },
        select: {
          id: true,
          nama: true,
          kode_sales: true,
          sto: true,
          agency: {
            select: {
              nama: true,
            },
          },
          wilayah: {
            select: {
              nama: true,
            },
          },
        },
        orderBy: { created_at: "desc" },
      });
      return data;
    } catch (error) {
      console.error("Sales list error:", error);
      throw error;
    }
  },

  async show(id: string) {
    try {
      if (!id || typeof id !== "string" || id.trim() === "") {
        throw new BadRequestError("ID sales tidak valid");
      }

      const sales = await prisma.sales.findUnique({
        where: { id },
        include: {
          agency: true,
          wilayah: true,
          sto: true,
        },
      });

      if (!sales) {
        throw new NotFoundError("Sales tidak ditemukan");
      }

      return sales;
    } catch (error) {
      console.error("Sales show error:", error);
      throw error;
    }
  },

  async create(data: CreateSalesInput) {
    try {
      if (!data) {
        throw new BadRequestError("Data sales tidak boleh kosong");
      }

      if (
        !data.nama ||
        typeof data.nama !== "string" ||
        data.nama.trim() === ""
      ) {
        throw new BadRequestError("Nama sales tidak valid");
      }

      if (
        !data.kode_sales ||
        typeof data.kode_sales !== "string" ||
        data.kode_sales.trim() === ""
      ) {
        throw new BadRequestError("Kode sales tidak valid");
      }

      if (
        !data.email ||
        typeof data.email !== "string" ||
        data.email.trim() === ""
      ) {
        throw new BadRequestError("Email sales tidak valid");
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email.trim())) {
        throw new BadRequestError("Format email tidak valid");
      }

      if (!data.status || typeof data.status !== "string") {
        throw new BadRequestError("Status sales tidak valid");
      }

      if (
        !data.agency_id ||
        typeof data.agency_id !== "string" ||
        data.agency_id.trim() === ""
      ) {
        throw new BadRequestError("Agency ID tidak valid");
      }

      if (
        data.wilayah_id &&
        (typeof data.wilayah_id !== "string" ||
        data.wilayah_id.trim() === "")
      ) {
        throw new BadRequestError("Wilayah ID tidak valid");
      }

      const [
        existingNama,
        existingEmail,
        existingKodeSales,
        agencyExists,
        wilayahExists,
        stoExists,
      ] = await Promise.all([
        prisma.sales.findFirst({
          where: { nama: { equals: data.nama.trim(), mode: "insensitive" } },
        }),
        prisma.sales.findFirst({
          where: { email: { equals: data.email.trim(), mode: "insensitive" } },
        }),
        prisma.sales.findFirst({
          where: {
            kode_sales: { equals: data.kode_sales.trim(), mode: "insensitive" },
          },
        }),
        prisma.agenc.findUnique({
          where: { id: data.agency_id.trim() },
        }),
        data.wilayah_id 
          ? prisma.wilayah.findUnique({
              where: { id: data.wilayah_id.trim() },
            })
          : Promise.resolve(null),
        data.sto_id
          ? prisma.sto.findUnique({
              where: { id: data.sto_id.trim() },
            })
          : Promise.resolve(null),
      ]);

      if (existingNama) {
        throw new ConflictError("Sales dengan nama ini sudah ada");
      }

      if (existingEmail) {
        throw new ConflictError("Sales dengan email ini sudah ada");
      }

      if (existingKodeSales) {
        throw new ConflictError("Sales dengan kode sales ini sudah ada");
      }

      if (!agencyExists) {
        throw new NotFoundError("Agency tidak ditemukan");
      }

      if (data.wilayah_id && !wilayahExists) {
        throw new NotFoundError("Wilayah tidak ditemukan");
      }

      if (data.sto_id && !stoExists) {
        throw new NotFoundError("STO tidak ditemukan");
      }

      const now = new Date();
      // Handle kat_umur_sa to avoid timezone issues by using UTC
      let kat_umur_sa: Date;
      if (data.kat_umur_sa) {
        kat_umur_sa = new Date(Date.UTC(
          data.kat_umur_sa.getFullYear(),
          data.kat_umur_sa.getMonth(),
          data.kat_umur_sa.getDate()
        ));
      } else {
        kat_umur_sa = new Date(Date.UTC(
          now.getFullYear(),
          now.getMonth(),
          now.getDate()
        ));
      }
      // Handle tgl_reg to avoid timezone issues by using UTC
      let tgl_reg: Date;
      if (data.tgl_reg) {
        tgl_reg = new Date(Date.UTC(
          data.tgl_reg.getFullYear(),
          data.tgl_reg.getMonth(),
          data.tgl_reg.getDate()
        ));
      } else {
        tgl_reg = new Date(Date.UTC(
          now.getFullYear(),
          now.getMonth(),
          now.getDate()
        ));
      }

      const newSales = await prisma.sales.create({
        data: {
          nama: data.nama.trim(),
          kode_sales: data.kode_sales.trim(),
          email: data.email.trim().toLowerCase(),
          status: data.status,
          agency_id: data.agency_id.trim(),
          wilayah_id: data.wilayah_id?.trim(),
          sto_id: data.sto_id?.trim(),
          kat_umur_sa,
          tgl_reg,
        },
        include: {
          agency: true,
          wilayah: true,
          sto: true,
        },
      });

      return newSales;
    } catch (error) {
      console.error("Sales creation error:", error);
      throw error;
    }
  },

  async update(id: string, data: UpdateSalesInput) {
    try {
      if (!id || typeof id !== "string" || id.trim() === "") {
        throw new BadRequestError("ID sales tidak valid");
      }

      const sales = await prisma.sales.findUnique({
        where: { id },
      });

      if (!sales) {
        throw new NotFoundError("Sales tidak ditemukan");
      }

      if (data.nama !== undefined) {
        if (typeof data.nama !== "string" || data.nama.trim() === "") {
          throw new BadRequestError("Nama sales tidak valid");
        }
      }

      if (data.kode_sales !== undefined) {
        if (
          typeof data.kode_sales !== "string" ||
          data.kode_sales.trim() === ""
        ) {
          throw new BadRequestError("Kode sales tidak valid");
        }
      }

      if (data.email !== undefined) {
        if (typeof data.email !== "string" || data.email.trim() === "") {
          throw new BadRequestError("Email sales tidak valid");
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email.trim())) {
          throw new BadRequestError("Format email tidak valid");
        }
      }

      if (data.status !== undefined) {
        if (typeof data.status !== "string") {
          throw new BadRequestError("Status sales tidak valid");
        }
      }

      if (data.agency_id !== undefined) {
        if (
          typeof data.agency_id !== "string" ||
          data.agency_id.trim() === ""
        ) {
          throw new BadRequestError("Agency ID tidak valid");
        }
      }

      if (data.wilayah_id !== undefined && data.wilayah_id !== null) {
        if (
          typeof data.wilayah_id !== "string" ||
          data.wilayah_id.trim() === ""
        ) {
          throw new BadRequestError("Wilayah ID tidak valid");
        }
      }

      const checks = [];

      if (data.nama && data.nama.trim() !== sales.nama) {
        checks.push(
          prisma.sales
            .findFirst({
              where: {
                nama: { equals: data.nama.trim(), mode: "insensitive" },
                NOT: { id },
              },
            })
            .then((result) => ({ type: "nama", exists: !!result }))
        );
      }

      if (
        data.email &&
        data.email.trim().toLowerCase() !== sales.email?.toLowerCase()
      ) {
        checks.push(
          prisma.sales
            .findFirst({
              where: {
                email: { equals: data.email.trim(), mode: "insensitive" },
                NOT: { id },
              },
            })
            .then((result) => ({ type: "email", exists: !!result }))
        );
      }

      if (data.kode_sales && data.kode_sales.trim() !== sales.kode_sales) {
        checks.push(
          prisma.sales
            .findFirst({
              where: {
                kode_sales: {
                  equals: data.kode_sales.trim(),
                  mode: "insensitive",
                },
                NOT: { id },
              },
            })
            .then((result) => ({ type: "kode_sales", exists: !!result }))
        );
      }

      if (data.agency_id && data.agency_id.trim() !== sales.agency_id) {
        checks.push(
          prisma.agenc
            .findUnique({
              where: { id: data.agency_id.trim() },
            })
            .then((result) => ({ type: "agency", exists: !!result }))
        );
      }

      if (data.wilayah_id && data.wilayah_id.trim() !== sales.wilayah_id) {
        checks.push(
          prisma.wilayah
            .findUnique({
              where: { id: data.wilayah_id.trim() },
            })
            .then((result) => ({ type: "wilayah", exists: !!result }))
        );
      }

      if (data.sto_id && data.sto_id.trim() !== sales.sto_id) {
        checks.push(
          prisma.sto
            .findUnique({
              where: { id: data.sto_id.trim() },
            })
            .then((result) => ({ type: "sto", exists: !!result }))
        );
      }

      if (checks.length > 0) {
        const results = await Promise.all(checks);

        for (const result of results) {
          if (result.type === "nama" && result.exists) {
            throw new ConflictError("Sales dengan nama ini sudah ada");
          }
          if (result.type === "email" && result.exists) {
            throw new ConflictError("Sales dengan email ini sudah ada");
          }
          if (result.type === "kode_sales" && result.exists) {
            throw new ConflictError("Sales dengan kode sales ini sudah ada");
          }
          if (result.type === "agency" && !result.exists) {
            throw new NotFoundError("Agency tidak ditemukan");
          }
          if (result.type === "wilayah" && !result.exists) {
            throw new NotFoundError("Wilayah tidak ditemukan");
          }
          if (result.type === "sto" && !result.exists) {
            throw new NotFoundError("STO tidak ditemukan");
          }
        }
      }

      const updateData: any = {};

      if (data.nama !== undefined) {
        updateData.nama = data.nama.trim();
      }

      if (data.kode_sales !== undefined) {
        updateData.kode_sales = data.kode_sales.trim();
      }

      if (data.email !== undefined) {
        updateData.email = data.email.trim().toLowerCase();
      }

      if (data.status !== undefined) {
        updateData.status = data.status.toUpperCase();
      }

      if (data.agency_id !== undefined) {
        updateData.agency_id = data.agency_id.trim();
      }

      if (data.wilayah_id !== undefined) {
        updateData.wilayah_id = data.wilayah_id?.trim() || null;
      }

      if (data.sto_id !== undefined) {
        updateData.sto_id = data.sto_id?.trim() || null;
      }

      if (data.kat_umur_sa !== undefined) {
        // Create UTC date to avoid timezone conversion issues
        updateData.kat_umur_sa = new Date(Date.UTC(
          data.kat_umur_sa.getFullYear(),
          data.kat_umur_sa.getMonth(),
          data.kat_umur_sa.getDate()
        ));
      }

      if (data.tgl_reg !== undefined) {
        // Create UTC date to avoid timezone conversion issues
        updateData.tgl_reg = new Date(Date.UTC(
          data.tgl_reg.getFullYear(),
          data.tgl_reg.getMonth(),
          data.tgl_reg.getDate()
        ));
      }

      const updatedSales = await prisma.sales.update({
        where: { id },
        data: updateData,
        include: {
          agency: true,
          wilayah: true,
          sto: true,
        },
      });

      return updatedSales;
    } catch (error) {
      console.error("Sales update error:", error);
      throw error;
    }
  },

  async destroy(id: string) {
    try {
      if (!id || typeof id !== "string" || id.trim() === "") {
        throw new BadRequestError("ID sales tidak valid");
      }

      const sales = await prisma.sales.findUnique({
        where: { id },
      });

      if (!sales) {
        throw new NotFoundError("Sales tidak ditemukan");
      }

      await prisma.sales.delete({
        where: { id },
      });

      return null;
    } catch (error) {
      console.error("Sales destroy error:", error);
      throw error;
    }
  },

  async importExcel(rows: any[]) {
    try {
      if (!Array.isArray(rows) || rows.length === 0) {
        throw new BadRequestError("Data Excel kosong atau tidak valid");
      }

      const results = [];
      const errors = [];

      for (let index = 0; index < rows.length; index++) {
        const row = rows[index];
        const rowNumber = index + 1;

        try {
          const { nama, kode_sales, email, status, agency, wilayah, sto } = row;

          if (
            !nama ||
            !kode_sales ||
            !email ||
            !status ||
            !agency ||
            !wilayah ||
            !sto
          ) {
            throw new BadRequestError(
              `Data sales tidak lengkap pada baris ${rowNumber}`
            );
          }

          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(email.trim())) {
            throw new BadRequestError(
              `Format email tidak valid pada baris ${rowNumber}`
            );
          }

          const [existingNama, existingEmail, existingKodeSales] =
            await Promise.all([
              prisma.sales.findFirst({
                where: { nama: { equals: nama.trim(), mode: "insensitive" } },
              }),
              prisma.sales.findFirst({
                where: { email: { equals: email.trim(), mode: "insensitive" } },
              }),
              prisma.sales.findFirst({
                where: {
                  kode_sales: {
                    equals: kode_sales.trim(),
                    mode: "insensitive",
                  },
                },
              }),
            ]);

          if (existingNama) {
            console.warn(
              `Sales dengan nama '${nama}' sudah ada, dilewati (baris ${rowNumber})`
            );
            continue;
          }

          if (existingEmail) {
            console.warn(
              `Sales dengan email '${email}' sudah ada, dilewati (baris ${rowNumber})`
            );
            continue;
          }

          if (existingKodeSales) {
            console.warn(
              `Sales dengan kode sales '${kode_sales}' sudah ada, dilewati (baris ${rowNumber})`
            );
            continue;
          }

          const [agencyRecord, wilayahRecord, stoRecord] = await Promise.all([
            prisma.agenc.findFirst({
              where: { nama: { equals: agency.trim(), mode: "insensitive" } },
            }),
            prisma.wilayah.findFirst({
              where: { nama: { equals: wilayah.trim(), mode: "insensitive" } },
            }),
            prisma.sto.findFirst({
              where: { name: { equals: sto.trim(), mode: "insensitive" } },
            }),
          ]);

          if (!agencyRecord) {
            throw new NotFoundError(
              `Agency '${agency}' tidak ditemukan pada baris ${rowNumber}`
            );
          }

          if (!wilayahRecord) {
            throw new NotFoundError(
              `Wilayah '${wilayah}' tidak ditemukan pada baris ${rowNumber}`
            );
          }

          if (!stoRecord) {
            throw new NotFoundError(
              `STO '${sto}' tidak ditemukan pada baris ${rowNumber}`
            );
          }

          const now = new Date();
          // Create UTC date to avoid timezone conversion issues
          const kat_umur_sa = new Date(Date.UTC(
            now.getFullYear(),
            now.getMonth(),
            now.getDate()
          ));
          const tgl_reg = new Date(Date.UTC(
            now.getFullYear(),
            now.getMonth(),
            now.getDate()
          ));

          const newSales = await prisma.sales.create({
            data: {
              nama: nama.trim(),
              kode_sales: kode_sales.trim(),
              email: email.trim().toLowerCase(),
              status: status.toString().toUpperCase(),
              agency_id: agencyRecord.id,
              wilayah_id: wilayahRecord.id,
              sto_id: stoRecord.id,
              kat_umur_sa,
              tgl_reg,
            },
          });

          results.push(newSales);
        } catch (error: any) {
          errors.push({
            row: rowNumber,
            error: error.message,
          });
          console.error(`Error processing row ${rowNumber}:`, error.message);
        }
      }

      if (errors.length > 0 && results.length === 0) {
        throw new BadRequestError(
          `Import gagal. Errors: ${errors
            .map((e) => `Baris ${e.row}: ${e.error}`)
            .join("; ")}`
        );
      }

      return null;
    } catch (error) {
      console.error("Sales importExcel error:", error);
      throw error;
    }
  },
};
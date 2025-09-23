import { prisma } from "../../integrations";
import { ConflictError, NotFoundError, BadRequestError } from "../../shared";
import { CreateSalesInput, UpdateSalesInput } from "../../shared/types/sales";

export const SalesModel = {
  async index({ page = 1, limit = 5 }: { page?: number; limit?: number } = {}) {
    try {
      const skip = (page - 1) * limit;
      const [data, total] = await Promise.all([
        prisma.sales.findMany({
          skip,
          take: limit,
          include: {
            agency: true,
            datel: true,
          },
          orderBy: { created_at: "desc" },
        }),
        prisma.sales.count(),
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
        select: {
          id: true,
          kode_sales: true,
          agency: {
            select: {
              nama: true,
            },
          },
          datel: {
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

  async shows(id: string) {
    try {
      if (!id || typeof id !== "string" || id.trim() === "") {
        throw new BadRequestError("ID sales tidak valid");
      }

      const sales = await prisma.sales.findUnique({
        where: { id },
        include: {
          agency: true,
          datel: true,
        },
      });

      if (!sales) {
        throw new NotFoundError("Sales tidak ditemukan");
      }

      return sales;
    } catch (error) {
      console.error("Sales shows error:", error);
      throw error;
    }
  },

  async create(data: CreateSalesInput) {
    try {
      if (
        !data ||
        typeof data.nama !== "string" ||
        data.nama.trim() === "" ||
        typeof data.kode_sales !== "string" ||
        data.kode_sales.trim() === "" ||
        typeof data.email !== "string" ||
        data.email.trim() === "" ||
        typeof data.status !== "string" ||
        typeof data.agency_id !== "string" ||
        data.agency_id.trim() === "" ||
        typeof data.datel_id !== "string" ||
        data.datel_id.trim() === ""
      ) {
        throw new BadRequestError("Data sales tidak valid");
      }

      const existingNama = await prisma.sales.findUnique({
        where: { nama: data.nama.trim() },
      });
      if (existingNama) {
        throw new ConflictError("Sales dengan nama ini sudah ada");
      }

      const existingEmail = await prisma.sales.findUnique({
        where: { email: data.email.trim() },
      });
      if (existingEmail) {
        throw new ConflictError("Sales dengan email ini sudah ada");
      }

      const tempNow = new Date();
      const newSales = await prisma.sales.create({
        data: {
          nama: data.nama.trim(),
          kode_sales: data.kode_sales.trim(),
          email: data.email.trim(),
          status: data.status,
          agency_id: data.agency_id.trim(),
          datel_id: data.datel_id.trim(),
          kat_umur_sa: tempNow,
        },
        include: {
          agency: true,
          datel: true,
        },
      });

      const createdAt = new Date(newSales.created_at);
      const now = new Date();

      const kat_umur_sa = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate()
      );

      const updatedSales = await prisma.sales.update({
        where: { id: newSales.id },
        data: {
          kat_umur_sa,
        },
        include: {
          agency: true,
          datel: true,
        },
      });

      return updatedSales;
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

      if (data.nama && data.nama.trim() !== sales.nama) {
        const namaExist = await prisma.sales.findUnique({
          where: { nama: data.nama.trim() },
        });
        if (namaExist) {
          throw new ConflictError("Sales dengan nama ini sudah ada");
        }
      }

      if (data.email && data.email.trim() !== sales.email) {
        const emailExist = await prisma.sales.findUnique({
          where: { email: data.email.trim() },
        });
        if (emailExist) {
          throw new ConflictError("Sales dengan email ini sudah ada");
        }
      }

      let kat_umur_saUpdate = {};
      if (data.kat_umur_sa !== undefined) {
        const now = new Date();
        const kat_umur_sa = new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate()
        );
        kat_umur_saUpdate = { kat_umur_sa };
      }

      const updatedSales = await prisma.sales.update({
        where: { id },
        data: {
          ...(data.nama && { nama: data.nama.trim() }),
          ...(data.kode_sales && { kode_sales: data.kode_sales.trim() }),
          ...(data.email && { email: data.email.trim() }),
          ...(data.status && { status: data.status }),
          ...(data.agency_id && { agency_id: data.agency_id.trim() }),
          ...(data.datel_id && { datel_id: data.datel_id.trim() }),
          ...kat_umur_saUpdate,
        },
        include: {
          agency: true,
          datel: true,
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

      return { message: "Sales berhasil dihapus" };
    } catch (error) {
      console.error("Sales destroy error:", error);
      throw error;
    }
  },
};

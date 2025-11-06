import { Telegraf, Context, session, Markup } from "telegraf";
import { prisma } from "src/integrations/index.js";
import MegaUploadUtils from "src/integrations/mega/index.js";
import { PaketModel } from "src/core/models/paket.js";

enum FormStep {
  IDLE = 0,
  NAMA = 1,
  NO_HP_1 = 2,
  NO_HP_2 = 3,
  EMAIL = 4,
  ALAMAT = 5,
  KOORDINAT = 6,
  NAMA_PIC = 7,
  TTL_PIC = 8,
  NO_KTP = 9,
  DATEL_SELECTION = 10,
  PAKET_SELECTION = 11,
  SALES_SELECTION = 12,
  FOTO_KTP = 13,
  FOTO_SELFIE = 14,
  BUKTI_USAHA = 15,
  BUKTI_NIWP = 16,
}

const CONSTANTS = {
  UPLOAD_TIMEOUT: 90000,
  MAX_SELECTION_ITEMS: 10,
  MEGA_FOLDER: "registrasi-indibiz",
  FILE_SIZE_LIMIT: 20 * 1024 * 1024,
} as const;

interface FormData {
  nama?: string;
  no_hp_1?: string;
  no_hp_2?: string;
  email?: string;
  alamat?: string;
  kordinat?: string;
  nama_pic?: string;
  ttl_pic?: string;
  no_ktp?: string;
  wilayah_id?: string;
  paket_id?: string;
  sales_id?: string;
  foto_ktp?: string;
  foto_selfie?: string;
  bukti_usaha?: string;
  bukti_niwp?: string;
  step: FormStep;
}

interface MyContext extends Context {
  session: FormData;
}

interface UploadResult {
  success: boolean;
  url?: string;
  error?: string;
}

class Validators {
  static isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  static isValidPhone(phone: string): boolean {
    const phoneRegex = /^(\+62|62|0)[0-9]{8,13}$/;
    return phoneRegex.test(phone.replace(/[\s-]/g, ""));
  }

  static isValidKTP(ktp: string): boolean {
    const ktpRegex = /^[0-9]{16}$/;
    return ktpRegex.test(ktp);
  }

  static isValidDate(date: string): boolean {
    const dateRegex = /^(\d{2})-(\d{2})-(\d{4})$/;
    if (!dateRegex.test(date)) return false;

    const [, day, month, year] = date.match(dateRegex)!;
    const dateObj = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    return (
      dateObj.getDate() === parseInt(day) &&
      dateObj.getMonth() === parseInt(month) - 1 &&
      dateObj.getFullYear() === parseInt(year)
    );
  }

  static isValidCoordinate(coord: string): boolean {
    if (coord === "-" || coord === "") return true;
    const coordRegex = /^-?([0-9]{1,3}(\.[0-9]+)?),\s?-?([0-9]{1,3}(\.[0-9]+)?)$/;
    return coordRegex.test(coord);
  }
}

class ErrorHandler {
  static logError(context: string, error: unknown): void {
    console.error(`[${context}] Error:`, error);
  }

  static async handleError(
    ctx: MyContext,
    error: unknown,
    userMessage?: string
  ): Promise<void> {
    this.logError("Bot Error", error);
    await ctx.reply(
      userMessage || "❌ Terjadi kesalahan. Silakan coba lagi atau hubungi admin."
    );
  }
}

class Messages {
  static readonly PROMPTS = {
    [FormStep.NAMA]: "📝 Masukkan *Nama* (minimal 2 karakter):",
    [FormStep.NO_HP_1]: "📞 Masukkan *Nomor HP* (format: 08xx atau +62xx):",
    [FormStep.NO_HP_2]:
      "📞 Masukkan *Nomor HP 2* (opsional, ketik '-' jika tidak ada):",
    [FormStep.EMAIL]: "📧 Masukkan *Email* (format: nama@domain.com):",
    [FormStep.ALAMAT]: "🏠 Masukkan *Alamat* lengkap:",
    [FormStep.KOORDINAT]:
      "📍 Masukkan *Koordinat* (opsional, format: lat,lng atau ketik '-'):",
    [FormStep.NAMA_PIC]: "👤 Masukkan Nama PIC (Person In Charge):",
    [FormStep.TTL_PIC]: "📅 Masukkan *Tanggal Lahir PIC* (format: DD-MM-YYYY):",
    [FormStep.NO_KTP]: "🆔 Masukkan *Nomor KTP* (16 digit):",
    [FormStep.FOTO_KTP]: "📷 Kirim *Foto KTP* (gambar, maks 20MB):",
    [FormStep.FOTO_SELFIE]: "📷 Kirim *Foto Selfie* (gambar, maks 20MB):",
    [FormStep.BUKTI_USAHA]: "📄 Kirim *Bukti Usaha* (gambar/dokumen, maks 20MB):",
    [FormStep.BUKTI_NIWP]: "📄 Kirim *Bukti NIWP* (gambar/dokumen, maks 20MB):",
  } as const;

  static readonly SUCCESS = {
    DATEL_SELECTED: "✅ Wilayah berhasil dipilih!",
    PAKET_SELECTED: "✅ Paket berhasil dipilih!",
    SALES_SELECTED: "✅ Sales berhasil dipilih!",
    FILE_UPLOADED: "✅ File berhasil diupload!",
    REGISTRATION_SAVED: "✅ Registrasi berhasil disimpan!",
  } as const;

  static readonly ERRORS = {
    NO_DATA_TO_CONTINUE:
      "Tidak ada data yang bisa dilanjutkan. Ketik /registrasi untuk mulai baru.",
    FOLLOW_STEPS: "❌ Silakan ikuti langkah registrasi terlebih dahulu.",
    UPLOAD_FAILED: "❌ Gagal mengupload file. Silakan coba lagi.",
    UPLOAD_TIMEOUT: "❌ Upload timeout. Silakan coba lagi dengan file yang lebih kecil.",
    INVALID_INPUT: "❌ Input tidak valid. Silakan periksa format dan coba lagi.",
    DATABASE_ERROR: "❌ Kesalahan database. Silakan coba lagi atau hubungi admin.",
    FILE_TOO_LARGE: "❌ File terlalu besar. Maksimal 20MB.",
    INCOMPLETE_DATA: "❌ Data tidak lengkap. Silakan mulai ulang dengan /registrasi",
  } as const;
}

const bot = new Telegraf<MyContext>(process.env.TELEGRAM_BOT_TOKEN!);

const megaUploader = new MegaUploadUtils(
  process.env.MEGA_EMAIL!,
  process.env.MEGA_PASSWORD!
);

// Warm up MEGA login once at startup to avoid first-upload latency
(async () => {
  try {
    await megaUploader.login();
  } catch (e) {
    console.error("MEGA pre-login failed (will retry on first upload):", e);
  }
})();

bot.use(
  session({
    defaultSession: () => ({ step: FormStep.IDLE } as FormData),
  })
);

class SelectionHandlers {
  static async showWilayahSelection(ctx: MyContext): Promise<void> {
    try {
      const wilayahs = await prisma.wilayah.findMany({
        take: CONSTANTS.MAX_SELECTION_ITEMS,
        orderBy: { nama: "asc" },
      });

      if (wilayahs.length === 0) {
        await ctx.reply("❌ Tidak ada wilayah yang tersedia. Silakan hubungi admin.");
        return;
      }

      const buttons = wilayahs.map((w) => [
        Markup.button.callback(`${w.nama}`, `wilayah_${w.id}`),
      ]);

      buttons.push([Markup.button.callback("❌ Batal", "cancel_selection")]);

      await ctx.reply("🏢 Pilih Datel Pemesanan:", {
        parse_mode: "Markdown",
        ...Markup.inlineKeyboard(buttons),
      });
    } catch (error) {
      await ErrorHandler.handleError(ctx, error, "❌ Error mengambil data wilayah.");
    }
  }

  static async showPaketSelection(ctx: MyContext): Promise<void> {
    try {
      const pakets = await PaketModel.list();

      if (!pakets || pakets.length === 0) {
        await ctx.reply("❌ Tidak ada paket yang tersedia. Silakan hubungi admin.");
        return;
      }

      const buttons = (pakets as any[]).slice(0, CONSTANTS.MAX_SELECTION_ITEMS).map((paket: any) => [
        Markup.button.callback(
          `${paket.label_option || paket.nama}`,
          `paket_${paket.id}`
        ),
      ]);

      buttons.push([Markup.button.callback("❌ Batal", "cancel_selection")]);

      await ctx.reply("📦 Pilih Paket:", {
        parse_mode: "Markdown",
        ...Markup.inlineKeyboard(buttons),
      });
    } catch (error) {
      await ErrorHandler.handleError(ctx, error, "❌ Error mengambil data paket.");
    }
  }

  static async showSalesSelection(ctx: MyContext): Promise<void> {
    try {
      const sales = await prisma.sales.findMany({
        take: CONSTANTS.MAX_SELECTION_ITEMS,
        orderBy: { nama: "asc" },
      });

      if (sales.length === 0) {
        await ctx.reply("❌ Tidak ada sales yang tersedia. Silakan hubungi admin.");
        return;
      }

      const buttons = sales.map((salesPerson) => [
        Markup.button.callback(`${salesPerson.nama}`, `sales_${salesPerson.id}`),
      ]);

      buttons.push([Markup.button.callback("❌ Batal", "cancel_selection")]);

      await ctx.reply("👤 Pilih *Sales*:", {
        parse_mode: "Markdown",
        ...Markup.inlineKeyboard(buttons),
      });
    } catch (error) {
      await ErrorHandler.handleError(ctx, error, "❌ Error mengambil data sales.");
    }
  }
}

class FileUploadHandler {
  static async uploadFileToMega(
    fileBuffer: Buffer,
    fileName: string,
    subfolder: string
  ): Promise<UploadResult> {
    try {
      if (fileBuffer.length > CONSTANTS.FILE_SIZE_LIMIT) {
        return { success: false, error: "File too large" };
      }

      await megaUploader.login();

      const remoteFolder = `${CONSTANTS.MEGA_FOLDER}/${subfolder}`;
      const result = await megaUploader.uploadFile(fileBuffer, fileName, remoteFolder);

      if (result.success && result.shareLink) {
        return { success: true, url: result.shareLink };
      }

      return { success: false, error: result.error };
    } catch (error) {
      ErrorHandler.logError("MEGA Upload", error);
      return {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      };
    }
  }

  static async handleFileUpload(
    ctx: MyContext,
    fileBuffer: Buffer,
    originalFileName: string,
    step: FormStep
  ): Promise<void> {
    if (fileBuffer.length > CONSTANTS.FILE_SIZE_LIMIT) {
      await ctx.reply(Messages.ERRORS.FILE_TOO_LARGE);
      return;
    }

    const timestamp = Date.now();
    const userId = ctx.from?.id || "unknown";

    let fileName = "";
    let subfolder = "";
    let sessionField: keyof FormData = "step";
    let nextStep = step;
    let successMessage = "";

    switch (step) {
      case FormStep.FOTO_KTP:
        fileName = `foto_ktp_${userId}_${timestamp}.jpg`;
        subfolder = "FotoKTP";
        sessionField = "foto_ktp";
        nextStep = FormStep.FOTO_SELFIE;
        successMessage =
          "✅ Foto KTP berhasil diupload!\n📷 Kirim *Foto Selfie* (gambar):";
        break;
      case FormStep.FOTO_SELFIE:
        fileName = `foto_selfie_${userId}_${timestamp}.jpg`;
        subfolder = "FotoSelfie";
        sessionField = "foto_selfie";
        nextStep = FormStep.BUKTI_USAHA;
        successMessage =
          "✅ Foto Selfie berhasil diupload!\n📄 Kirim *Bukti Usaha* (gambar/dokumen):";
        break;
      case FormStep.BUKTI_USAHA:
        const extBU = originalFileName?.split(".").pop() || "jpg";
        fileName = `bukti_usaha_${userId}_${timestamp}.${extBU}`;
        subfolder = "BuktiUsaha";
        sessionField = "bukti_usaha";
        nextStep = FormStep.BUKTI_NIWP;
        successMessage =
          "✅ Bukti Usaha berhasil diupload!\n📄 Kirim *Bukti NIWP* (gambar/dokumen):";
        break;
      case FormStep.BUKTI_NIWP:
        const extBN = originalFileName?.split(".").pop() || "jpg";
        fileName = `bukti_niwp_${userId}_${timestamp}.${extBN}`;
        subfolder = "BuktiNIWP";
        sessionField = "bukti_niwp";
        successMessage = "✅ Bukti NIWP berhasil diupload!";
        break;
    }

    try {
      const uploadResult = await Promise.race([
        this.uploadFileToMega(fileBuffer, fileName, subfolder),
        new Promise<UploadResult>((resolve) =>
          setTimeout(() => resolve({ success: false, error: "timeout" }), CONSTANTS.UPLOAD_TIMEOUT)
        ),
      ]);

      if (uploadResult.success && uploadResult.url) {
        (ctx.session as any)[sessionField] = uploadResult.url;

        if (step === FormStep.BUKTI_NIWP) {
          await ctx.reply(successMessage);
          await RegistrationHandler.saveRegistration(ctx);
        } else {
          ctx.session.step = nextStep;
          await ctx.reply(successMessage, { parse_mode: "Markdown" });
        }
      } else {
        const errorMsg =
          uploadResult.error === "timeout"
            ? Messages.ERRORS.UPLOAD_TIMEOUT
            : Messages.ERRORS.UPLOAD_FAILED;
        await ctx.reply(errorMsg);
      }
    } catch (error) {
      await ErrorHandler.handleError(ctx, error, Messages.ERRORS.UPLOAD_FAILED);
    }
  }
}

class RegistrationHandler {
  static async saveRegistration(ctx: MyContext): Promise<void> {
    try {
      const requiredFields = [
        "nama",
        "no_hp_1",
        "email",
        "alamat",
        "nama_pic",
        "ttl_pic",
        "no_ktp",
        "wilayah_id",
        "paket_id",
        "sales_id",
      ];

      const missingFields = requiredFields.filter(
        (field) => !ctx.session[field as keyof FormData]
      );

      if (missingFields.length > 0) {
        await ctx.reply(
          `${Messages.ERRORS.INCOMPLETE_DATA}\nField yang kosong: ${missingFields.join(", ")}`
        );
        return;
      }

      const registration = await prisma.registrasiIndibiz.create({
        data: {
          nama: ctx.session.nama!,
          wilayah_id: ctx.session.wilayah_id!,
          paket_id: ctx.session.paket_id!,
          sales_id: ctx.session.sales_id!,
          no_hp_1: ctx.session.no_hp_1!,
          no_hp_2: ctx.session.no_hp_2 || "",
          kordinat: ctx.session.kordinat || "",
          alamat: ctx.session.alamat!,
          nama_pic: ctx.session.nama_pic!,
          ttl_pic: ctx.session.ttl_pic!,
          no_ktp: ctx.session.no_ktp!,
          email: ctx.session.email!,
          foto_ktp: ctx.session.foto_ktp || "",
          foto_selfie: ctx.session.foto_selfie || "",
          bukti_usaha: ctx.session.bukti_usaha || "",
          bukti_niwp: ctx.session.bukti_niwp || "",
        },
      });

      const [wilayah, paket, sales] = await Promise.all([
        prisma.wilayah.findUnique({ where: { id: ctx.session.wilayah_id! } }),
        prisma.paket.findUnique({ where: { id: ctx.session.paket_id! } }),
        prisma.sales.findUnique({ where: { id: ctx.session.sales_id! } }),
      ]);

      const summary = this.generateRegistrationSummary(registration, wilayah, paket, sales);
      await ctx.reply(summary, { parse_mode: "Markdown" });
    } catch (error) {
      await ErrorHandler.handleError(ctx, error, Messages.ERRORS.DATABASE_ERROR);
    } finally {
      ctx.session = { step: FormStep.IDLE };
    }
  }

  private static generateRegistrationSummary(
    registration: any,
    wilayah: any,
    paket: any,
    sales: any
  ): string {
    return (
      `✅ *Registrasi berhasil disimpan!*\n\n` +
      `🆔 *ID Registrasi:* \`${registration.id}\`\n` +
      `📅 *Tanggal:* ${new Date().toLocaleDateString("id-ID")}\n\n` +
      `👤 *Data Pelanggan:*\n` +
      `• Nama: ${registration.nama}\n` +
      `• Email: ${registration.email}\n` +
      `• HP 1: ${registration.no_hp_1}\n` +
      `• HP 2: ${registration.no_hp_2 || "-"}\n` +
      `• Alamat: ${registration.alamat}\n` +
      `• Koordinat: ${registration.kordinat || "-"}\n\n` +
      `🏢 *Pilihan Layanan:*\n` +
      `• Wilayah: ${wilayah?.nama || "Unknown"}\n` +
      `• Paket: ${paket?.nama || "Unknown"} (${paket?.bandwidth || paket?.bandwith || "N/A"} Mbps)\n` +
      `• Sales: ${sales?.nama || "Unknown"}\n` +
      `Ketik /registrasi untuk input data baru.`
    );
  }
}

class InputProcessor {
  static async processTextInput(ctx: MyContext, text: string): Promise<void> {
    const step = ctx.session.step;

    switch (step) {
      case FormStep.NAMA:
        if (text.length < 2) {
          await ctx.reply("❌ Nama minimal 2 karakter. Silakan masukkan kembali:");
          return;
        }
        ctx.session.nama = text.trim();
        ctx.session.step = FormStep.NO_HP_1;
        await ctx.reply(Messages.PROMPTS[FormStep.NO_HP_1], { parse_mode: "Markdown" });
        break;

      case FormStep.NO_HP_1:
        if (!Validators.isValidPhone(text)) {
          await ctx.reply(
            "❌ Format nomor HP tidak valid. Contoh: 081234567890 atau +6281234567890"
          );
          return;
        }
        ctx.session.no_hp_1 = text.trim();
        ctx.session.step = FormStep.NO_HP_2;
        await ctx.reply(Messages.PROMPTS[FormStep.NO_HP_2], { parse_mode: "Markdown" });
        break;

      case FormStep.NO_HP_2:
        if (text !== "-" && text !== "" && !Validators.isValidPhone(text)) {
          await ctx.reply("❌ Format nomor HP tidak valid atau ketik '-' jika tidak ada");
          return;
        }
        ctx.session.no_hp_2 = text === "-" ? "" : text.trim();
        ctx.session.step = FormStep.EMAIL;
        await ctx.reply(Messages.PROMPTS[FormStep.EMAIL], { parse_mode: "Markdown" });
        break;

      case FormStep.EMAIL:
        if (!Validators.isValidEmail(text)) {
          await ctx.reply("❌ Format email tidak valid. Contoh: nama@domain.com");
          return;
        }
        ctx.session.email = text.trim().toLowerCase();
        ctx.session.step = FormStep.ALAMAT;
        await ctx.reply(Messages.PROMPTS[FormStep.ALAMAT], { parse_mode: "Markdown" });
        break;

      case FormStep.ALAMAT:
        if (text.length < 10) {
          await ctx.reply("❌ Alamat terlalu singkat. Masukkan alamat lengkap minimal 10 karakter:");
          return;
        }
        ctx.session.alamat = text.trim();
        ctx.session.step = FormStep.KOORDINAT;
        await ctx.reply(Messages.PROMPTS[FormStep.KOORDINAT], { parse_mode: "Markdown" });
        break;

      case FormStep.KOORDINAT:
        if (!Validators.isValidCoordinate(text)) {
          await ctx.reply("❌ Format koordinat tidak valid. Contoh: -6.2088,106.8456 atau ketik '-'");
          return;
        }
        ctx.session.kordinat = text === "-" ? "" : text.trim();
        ctx.session.step = FormStep.NAMA_PIC;
        await ctx.reply(Messages.PROMPTS[FormStep.NAMA_PIC], { parse_mode: "Markdown" });
        break;

      case FormStep.NAMA_PIC:
        if (text.length < 2) {
          await ctx.reply("❌ Nama PIC minimal 2 karakter. Silakan masukkan kembali:");
          return;
        }
        ctx.session.nama_pic = text.trim();
        ctx.session.step = FormStep.TTL_PIC;
        await ctx.reply(Messages.PROMPTS[FormStep.TTL_PIC], { parse_mode: "Markdown" });
        break;

      case FormStep.TTL_PIC:
        if (!Validators.isValidDate(text)) {
          await ctx.reply("❌ Format tanggal tidak valid. Gunakan format DD-MM-YYYY, contoh: 15-08-1990");
          return;
        }
        ctx.session.ttl_pic = text.trim();
        ctx.session.step = FormStep.NO_KTP;
        await ctx.reply(Messages.PROMPTS[FormStep.NO_KTP], { parse_mode: "Markdown" });
        break;

      case FormStep.NO_KTP:
        if (!Validators.isValidKTP(text)) {
          await ctx.reply("❌ Nomor KTP harus 16 digit angka. Silakan periksa kembali:");
          return;
        }
        ctx.session.no_ktp = text.trim();
        ctx.session.step = FormStep.DATEL_SELECTION;
        await SelectionHandlers.showWilayahSelection(ctx);
        break;

      default:
        await ctx.reply("Ketik /registrasi untuk mulai input data baru atau /lanjutkan untuk melanjutkan.");
    }
  }

  static async continueForm(ctx: MyContext): Promise<void> {
    const step = ctx.session.step as FormStep | undefined;

    if (step === undefined || step === FormStep.IDLE) {
      await ctx.reply(Messages.ERRORS.NO_DATA_TO_CONTINUE);
      return;
    }

    if (step in Messages.PROMPTS) {
      const prompt = Messages.PROMPTS[step as keyof typeof Messages.PROMPTS];
      if (prompt) {
        await ctx.reply(prompt, { parse_mode: "Markdown" });
        return;
      }
    }
    if (step === FormStep.DATEL_SELECTION) {
      await SelectionHandlers.showWilayahSelection(ctx);
    } else if (step === FormStep.PAKET_SELECTION) {
      await SelectionHandlers.showPaketSelection(ctx);
    } else if (step === FormStep.SALES_SELECTION) {
      await SelectionHandlers.showSalesSelection(ctx);
    } else {
      await ctx.reply("Ketik /registrasi untuk mulai input data baru.");
    }
  }
}

bot.start((ctx) => {
  const welcomeMessage =
    "🎉 *Selamat datang di Bot Registrasi IndiBiz!*\n\n" +
    "Silakan pilih menu berikut:\n" +
    "📝 /registrasi - Mulai registrasi baru\n" +
    "▶️ /lanjutkan - Lanjutkan registrasi yang belum selesai\n" +
    "ℹ️ /help - Bantuan penggunaan bot\n" +
    "📊 /status - Cek status registrasi";

  ctx.reply(welcomeMessage, { parse_mode: "Markdown" });
});

bot.command("help", (ctx) => {
  const helpMessage =
    "🆘 *Bantuan Penggunaan Bot*\n\n" +
    "📝 */registrasi* - Mulai proses registrasi baru\n" +
    "▶️ */lanjutkan* - Melanjutkan registrasi yang terputus\n" +
    "📊 */status* - Cek status registrasi terakhir\n\n" +
    "🔄 *Proses Registrasi:*\n" +
    "1. Data pribadi (nama, HP, email, alamat)\n" +
    "2. Data PIC (nama, TTL, KTP)\n" +
    "3. Pilih wilayah, paket, dan sales\n" +
    "4. Upload dokumen (KTP, selfie, bukti usaha, NIWP)\n\n" +
    "💡 *Tips:*\n" +
    "• Pastikan foto/dokumen jelas dan tidak blur\n" +
    "• Ukuran file maksimal 20MB\n" +
    "• Gunakan format yang benar untuk setiap input\n\n" +
    "❓ Butuh bantuan lebih lanjut? Hubungi admin.";

  ctx.reply(helpMessage, { parse_mode: "Markdown" });
});

bot.command("registrasi", (ctx) => {
  ctx.session = { step: FormStep.NAMA };
  ctx.reply(Messages.PROMPTS[FormStep.NAMA], { parse_mode: "Markdown" });
});

bot.command("lanjutkan", (ctx) => {
  InputProcessor.continueForm(ctx);
});

bot.on("text", async (ctx) => {
  const text = (ctx.message as any).text;

  if (text.startsWith("/")) {
    return;
  }

  await InputProcessor.processTextInput(ctx, text);
});

bot.action(/^wilayah_(.+)$/, async (ctx) => {
  try {
    const wilayahId = (ctx as any).match[1];
    (ctx.session as any).wilayah_id = wilayahId;
    ctx.session.step = FormStep.PAKET_SELECTION;

    await ctx.answerCbQuery(Messages.SUCCESS.DATEL_SELECTED);
    await ctx.deleteMessage();
    await SelectionHandlers.showPaketSelection(ctx);
  } catch (error) {
    await ErrorHandler.handleError(ctx, error);
  }
});

bot.action(/^paket_(.+)$/, async (ctx) => {
  try {
    const paketId = (ctx as any).match[1];
    ctx.session.paket_id = paketId;
    ctx.session.step = FormStep.SALES_SELECTION;

    await ctx.answerCbQuery(Messages.SUCCESS.PAKET_SELECTED);
    await ctx.deleteMessage();
    await SelectionHandlers.showSalesSelection(ctx);
  } catch (error) {
    await ErrorHandler.handleError(ctx, error);
  }
});

bot.action(/^sales_(.+)$/, async (ctx) => {
  try {
    const salesId = (ctx as any).match[1];
    ctx.session.sales_id = salesId;
    ctx.session.step = FormStep.FOTO_KTP;

    await ctx.answerCbQuery(Messages.SUCCESS.SALES_SELECTED);
    await ctx.deleteMessage();
    await ctx.reply(Messages.PROMPTS[FormStep.FOTO_KTP], { parse_mode: "Markdown" });
  } catch (error) {
    await ErrorHandler.handleError(ctx, error);
  }
});

bot.action("cancel_selection", async (ctx) => {
  try {
    await ctx.answerCbQuery("❌ Dibatalkan");
    await ctx.deleteMessage();
    await ctx.reply(
      "❌ Pemilihan dibatalkan. Ketik /lanjutkan untuk melanjutkan atau /registrasi untuk mulai ulang."
    );
  } catch (error) {
    await ErrorHandler.handleError(ctx, error);
  }
});

bot.on("photo", async (ctx) => {
  const step = ctx.session.step;

  if (step < FormStep.FOTO_KTP || step > FormStep.BUKTI_NIWP) {
    await ctx.reply(Messages.ERRORS.FOLLOW_STEPS);
    return;
  }

  try {
    const photo = (ctx.message as any).photo[(ctx.message as any).photo.length - 1];
    const fileId = photo.file_id;

    const file = await ctx.telegram.getFile(fileId);
    const fileUrl = `https://api.telegram.org/file/bot${process.env.TELEGRAM_BOT_TOKEN}/${file.file_path}`;

    const response = await fetch(fileUrl);
    if (!response.ok) {
      throw new Error(`Failed to download file: ${response.statusText}`);
    }

    const fileBuffer = Buffer.from(await response.arrayBuffer());

    const progressMessage = await ctx.reply("🔄 Mengupload file...");

    await FileUploadHandler.handleFileUpload(ctx, fileBuffer, "photo.jpg", step);

    try {
      await ctx.telegram.deleteMessage((ctx.chat as any).id, (progressMessage as any).message_id);
    } catch (e) {}
  } catch (error) {
    await ErrorHandler.handleError(ctx, error, Messages.ERRORS.UPLOAD_FAILED);
  }
});

bot.on("document", async (ctx) => {
  const step = ctx.session.step;

  if (step < FormStep.BUKTI_USAHA || step > FormStep.BUKTI_NIWP) {
    await ctx.reply(Messages.ERRORS.FOLLOW_STEPS);
    return;
  }

  try {
    const document = (ctx.message as any).document;
    const fileId = document.file_id;
    const fileName = document.file_name || "document";

    if (document.file_size && document.file_size > CONSTANTS.FILE_SIZE_LIMIT) {
      await ctx.reply(Messages.ERRORS.FILE_TOO_LARGE);
      return;
    }

    const file = await ctx.telegram.getFile(fileId);
    const fileUrl = `https://api.telegram.org/file/bot${process.env.TELEGRAM_BOT_TOKEN}/${file.file_path}`;

    const response = await fetch(fileUrl);
    if (!response.ok) {
      throw new Error(`Failed to download file: ${response.statusText}`);
    }

    const fileBuffer = Buffer.from(await response.arrayBuffer());

    const progressMessage = await ctx.reply("🔄 Mengupload dokumen...");

    await FileUploadHandler.handleFileUpload(ctx, fileBuffer, fileName, step);

    try {
      await ctx.telegram.deleteMessage((ctx.chat as any).id, (progressMessage as any).message_id);
    } catch (e) {}
  } catch (error) {
    await ErrorHandler.handleError(ctx, error, Messages.ERRORS.UPLOAD_FAILED);
  }
});

bot.on("message", async (ctx) => {
  const msg: any = ctx.message;
  if (typeof msg.text === "undefined" && typeof msg.photo === "undefined" && typeof msg.document === "undefined") {
    await ctx.reply("❌ Tipe file tidak didukung. Silakan kirim foto atau dokumen (PDF, Word, dll).");
  }
});

bot.catch(async (err, ctx) => {
  ErrorHandler.logError("Bot Error", err);
  try {
    await ctx.reply("❌ Terjadi kesalahan sistem. Silakan coba lagi atau hubungi admin.");
  } catch (e) {
    console.error("Failed to send error message:", e);
  }
});

// Export webhook callback for Hono route
export const telegramWebhookCallback = bot.webhookCallback("/api/bot/telegram/webhook");

export default bot;

import { Context } from "hono";
import { asyncHandler, ResponseHelper } from "../../shared/utils";
import bot from "../../../bot/index";
import Telegram from "../../integrations/telegram";

export const botController = {
  webhook: asyncHandler(async (c: Context): Promise<Response> => {
    const update = await c.req.json().catch(() => null);
    if (!update) return ResponseHelper.error(c, "Invalid update body", 400);

    await bot.handleUpdate(update as any);

    return ResponseHelper.success(c, { ok: true }, "Webhook processed");
  }),

  setWebhook: asyncHandler(async (c: Context): Promise<Response> => {
    const queryUrl = c.req.query("url");
    let bodyUrl: string | undefined;
    try {
      const body = await c.req.json();
      bodyUrl = body?.url;
    } catch {}

    const base = (queryUrl || bodyUrl || process.env.APP_BASE_URL || "").toString();
    if (!base) return ResponseHelper.error(c, "Base URL not provided", 400);

    const normalizedBase = base.replace(/\/$/, "");
    const finalUrl = normalizedBase.endsWith("/api/bot/webhook")
      ? normalizedBase
      : `${normalizedBase}/api/bot/webhook`;

    if (!finalUrl.startsWith("https://")) {
      return ResponseHelper.error(c, "Webhook URL must be HTTPS", 400);
    }

    const result = await Telegram.setWebhook(finalUrl);
    return ResponseHelper.success(c, { set: result, url: finalUrl }, "Webhook set");
  }),

  webhookInfo: asyncHandler(async (c: Context): Promise<Response> => {
    const info = await Telegram.getWebhookInfo();
    return ResponseHelper.success(c, info, "Webhook info");
  }),
};

export default botController;


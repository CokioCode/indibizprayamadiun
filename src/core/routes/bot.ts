import { Hono } from "hono";
import { botController } from "../../core/controllers/bot.js";

const botRoutes = new Hono();

// Telegram webhook endpoint
botRoutes.post("/webhook", botController.webhook);

// Set webhook utility (allow GET and POST)
botRoutes.get("/webhook", botController.setWebhook);
botRoutes.post("/webhook/set", botController.setWebhook);

// Webhook info helper
botRoutes.get("/webhook/info", botController.webhookInfo);

export default botRoutes;


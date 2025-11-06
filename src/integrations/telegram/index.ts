export const Telegram = {
  async sendMessage(chatId: number | string, text: string, options?: any) {
    const token = process.env.TELEGRAM_BOT_TOKEN as string;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const body = { chat_id: chatId, text, ...options };

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const bodyText = await res.text();
      throw new Error(`Telegram sendMessage failed: ${res.status} ${bodyText}`);
    }

    return res.json();
  },

  async setWebhook(webhookUrl: string) {
    const token = process.env.TELEGRAM_BOT_TOKEN as string;
    const url = `https://api.telegram.org/bot${token}/setWebhook`;
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: webhookUrl, drop_pending_updates: true }),
    });

    if (!res.ok) {
      const bodyText = await res.text();
      throw new Error(`Telegram setWebhook failed: ${res.status} ${bodyText}`);
    }

    return res.json();
  },

  async getWebhookInfo() {
    const token = process.env.TELEGRAM_BOT_TOKEN as string;
    const url = `https://api.telegram.org/bot${token}/getWebhookInfo`;
    const res = await fetch(url);
    if (!res.ok) {
      const bodyText = await res.text();
      throw new Error(`Telegram getWebhookInfo failed: ${res.status} ${bodyText}`);
    }
    return res.json();
  },
};

export default Telegram;


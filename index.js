const TelegramBot = require("node-telegram-bot-api");

const token = "8933595798:AAHwQdTwkOcNKh4J0l3A291SIhnhJcIey74";

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    `🍵 Ассалому алайкум!

Choychi Premium'га хуш келибсиз!

☕ Хитой чойлари
🧋 Муаллифлик чойлари
🚚 Доставка
📞 Алоқа`
  );
});

bot.on("message", (msg) => {
  if (msg.text === "/start") return;

  bot.sendMessage(
    msg.chat.id,
    "🙏 Хабарингиз қабул қилинди. Тез орада операторимиз сиз билан боғланади."
  );
});

console.log("✅ Choychi bot ishga tushdi!");

const TelegramBot = require("node-telegram-bot-api");

const token = "8933595798:AAEJ2iEVo3rt-NzpIM90J1yiJte5q_Fr4Z8";

const bot = new TelegramBot(token, { polling: true });

bot.on("message", (msg) => {
  bot.sendMessage(
    msg.chat.id,
    "Ассалому алайкум! ☕ Choychi Premium'га хуш келибсиз!"
  );
});

console.log("Bot ishga tushdi!");

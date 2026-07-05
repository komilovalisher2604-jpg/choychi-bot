const TelegramBot = require("node-telegram-bot-api");
const { BOT_TOKEN, ADMIN_ID, GROUP_ID } = require("./config");

const bot = new TelegramBot(BOT_TOKEN, { polling: true });

const users = {};

function langKeyboard() {
  return {
    reply_markup: {
      keyboard: [["🇺🇿 O'zbek", "🇷🇺 Русский"]],
      resize_keyboard: true
    }
  };
}

function mainMenu(lang) {
  if (lang === "ru") {
    return {
      reply_markup: {
        keyboard: [
          ["🍵 Чай", "☕ Кофе"],
          ["🥤 Прохладительные напитки"],
          ["🥛 Молочные напитки"],
          ["🍰 Десерты", "🎁 Наборы"],
          ["🛍 Упакованный чай", "🛒 Корзина"],
          ["📍 Филиалы", "🚚 Доставка"],
          ["💳 Оплата", "📸 Instagram"],
          ["📞 Контакты"]
        ],
        resize_keyboard: true
      }
    };
  }

  return {
    reply_markup: {
      keyboard: [
        ["🍵 Choy", "☕ Kofe"],
        ["🥤 Sovuq ichimliklar"],
        ["🥛 Sutli ichimliklar"],
        ["🍰 Shirinliklar", "🎁 Setlar"],
        ["🛍 Qadoqlangan choy", "🛒 Savat"],
        ["📍 Filiallar", "🚚 Yetkazib berish"],
        ["💳 To'lov", "📸 Instagram"],
        ["📞 Aloqa"]
      ],
      resize_keyboard: true
    }
  };
}

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    "Tilni tanlang / Выберите язык",
    langKeyboard()
  );
});

bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text === "/start") return;

  if (text === "🇺🇿 O'zbek") {
    users[chatId] = { lang: "uz" };
    return bot.sendMessage(
      chatId,
      "👋 Assalomu alaykum!\n\nChoychi Premium'ga xush kelibsiz.\n\nBo'limni tanlang:",
      mainMenu("uz")
    );
  }

  if (text === "🇷🇺 Русский") {
    users[chatId] = { lang: "ru" };
    return bot.sendMessage(
      chatId,
      "👋 Добро пожаловать!\n\nДобро пожаловать в Choychi Premium.\n\nВыберите раздел:",
      mainMenu("ru")
    );
  }

  const lang = users[chatId]?.lang || "uz";
  bot.sendMessage(chatId, lang === "ru" ? "Выберите раздел:" : "Bo'limni tanlang:", mainMenu(lang));
});

console.log("✅ Choychi bot ishga tushdi");

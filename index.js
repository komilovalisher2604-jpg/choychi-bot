const TelegramBot = require("node-telegram-bot-api");
const { BOT_TOKEN } = require("./config");

const bot = new TelegramBot(BOT_TOKEN, { polling: true });
const users = {};

function langKeyboard() {
  return {
    reply_markup: {
      keyboard: [["🇺🇿 O'zbek", "🇷🇺 Русский"]],
      resize_keyboard: true,
    },
  };
}

function mainMenu(lang) {
  const uz = [
    ["🍵 Choy", "☕ Kofe"],
    ["🥤 Sovuq ichimliklar"],
    ["🥛 Sutli ichimliklar"],
    ["🍰 Shirinliklar", "🎁 Setlar"],
    ["🛍 Qadoqlangan choy", "🛒 Savat"],
    ["📍 Filiallar", "🚚 Yetkazib berish"],
    ["💳 To'lov", "📸 Instagram"],
    ["📞 Aloqa"],
  ];

  const ru = [
    ["🍵 Чай", "☕ Кофе"],
    ["🥤 Прохладительные напитки"],
    ["🥛 Молочные напитки"],
    ["🍰 Десерты", "🎁 Наборы"],
    ["🛍 Упакованный чай", "🛒 Корзина"],
    ["📍 Филиалы", "🚚 Доставка"],
    ["💳 Оплата", "📸 Instagram"],
    ["📞 Контакты"],
  ];

  return {
    reply_markup: {
      keyboard: lang === "ru" ? ru : uz,
      resize_keyboard: true,
    },
  };
}

const menus = {
  uz: {
    "🍵 Choy": `🍵 CHOY MENYUSI

PU'ER
• Pu'er — 25 000 so'm
• Shu Pu'er — 35 000 so'm
• Shen Pu'er — 25 000 so'm
• Pu'er 2003 — 25 000 so'm
• Smola — 18 000 so'm
• Pu'er 375 — 40 000 so'm
• Pu'er o'rtacha — 25 000 so'm

OOLONG
• Da Hong Pao — 25 000 so'm
• Tie Guan Yin — 25 000 so'm
• Milk Oolong — 20 000 so'm
• Oolong — 28 000 so'm
• GABA asal aromatli — 40 000 so'm
• GABA Premium — 45 000 so'm

OQ CHOY
• Bai Hao Yin Zhen — 30 000 so'm
• Bai Mu Dan — 30 000 so'm

MEVALI CHOY
• Mevali choylar — 30 000 so'm

BLOOMING
• Blooming Tea — 25 000 so'm

CHOYCHI SIGNATURE
• Royal GABA — 55 000 so'm
• Imperial Pu'er — 60 000 so'm
• Golden Bloom — 50 000 so'm
• Honey Oolong — 40 000 so'm

KARAK
• Karak o'rta — 25 000 so'm
• Karak katta — 30 000 so'm

SOVUQ CHOY
• Pu'er + Smola — 50 000 so'm
• Sovuq GABA — 60 000 so'm
• Sovuq Da Hong Pao — 40 000 so'm
• Sovuq Tie Guan Yin — 40 000 so'm`,

    "☕ Kofe": `☕ KOFE MENYUSI

KUCHLI KOFE
• Lungo — 18 000 so'm
• Espresso — 18 000 so'm
• Doppio — 20 000 so'm
• Americano — 20 000 / 23 000 / 30 000 so'm
• Espresso asal bilan — 23 000 so'm

SUTLI KOFE
• Cappuccino — 25 000 / 28 000 / 35 000 so'm
• Latte — 25 000 / 28 000 / 35 000 so'm
• Flat White — 28 000 / 33 000 / 38 000 so'm
• Raf — 28 000 / 33 000 / 38 000 so'm
• Mocaccino — 28 000 / 33 000 / 38 000 so'm
• Honey Raf — 28 000 / 33 000 / 38 000 so'm
• Oreo Coffee — 28 000 / 33 000 / 38 000 so'm
• Kakao — 25 000 / 28 000 / 35 000 so'm
• Issiq shokolad — 30 000 / 38 000 so'm
• Cream Latte — 28 000 / 33 000 / 38 000 so'm`,

    "🥤 Sovuq ichimliklar": `🥤 SOVUQ ICHIMLIKLAR

• Mojito — 28 000 / 35 000 so'm
• Malina Mojito — 28 000 / 35 000 so'm
• Mango Marakuya — 28 000 / 35 000 so'm
• Tarxun — 28 000 / 35 000 so'm
• Apelsin limonad — 28 000 / 35 000 so'm
• Ice Tea Karkade — 28 000 / 35 000 so'm
• Qulupnay Mojito — 28 000 / 35 000 so'm
• Pina Colada — 28 000 / 35 000 so'm
• Laguna — 28 000 / 35 000 so'm

FRESH 350 ml
• Apelsin — 55 000 so'm
• Olma — 35 000 so'm
• Sabzi — 25 000 so'm
• Sabzi + Olma — 35 000 so'm
• Olma + Apelsin — 45 000 so'm
• Limon — 65 000 so'm

SMUZI
• Olmali — 40 000 / 50 000 so'm
• Shaftoli + Malina — 40 000 / 50 000 so'm
• Banan + Mango — 40 000 / 50 000 so'm
• Qulupnay + Banan — 40 000 / 50 000 so'm
• Sitrusli — 40 000 / 50 000 so'm`,

    "🥛 Sutli ichimliklar": `🥛 SUTLI ICHIMLIKLAR

MILKSHAKE
• Sutli — 25 000 / 30 000 so'm
• Bananli — 30 000 / 38 000 so'm
• Shokoladli — 30 000 / 38 000 so'm
• Kofeli — 30 000 / 38 000 so'm
• Oreo — 30 000 / 38 000 so'm
• Bounty — 30 000 / 38 000 so'm
• Qulupnayli — 30 000 / 38 000 so'm
• Kivi — 30 000 / 38 000 so'm
• Malinali — 30 000 / 38 000 so'm
• Snickers — 30 000 / 38 000 so'm

MATCHA
• Matcha ko'k — 25 000 / 28 000 / 35 000 so'm
• Matcha yashil — 25 000 / 28 000 / 35 000 so'm

BUBBLE TEA
• Klassik qora — 40 000 / 45 000 so'm
• Sutli vanil — 45 000 / 50 000 so'm
• Tropik mevali — 45 000 / 50 000 so'm
• Matcha — 45 000 / 50 000 so'm
• Kokosli — 45 000 / 50 000 so'm`,

    "🍰 Shirinliklar": `🍰 SHIRINLIKLAR

Hozircha shirinliklar narxi qo'shilmagan.
Tez orada qo'shiladi.`,

    "🎁 Setlar": `🎁 SETLAR

• Royal Set — 1 200 000 so'm
• Premium Set — 600 000 so'm
• Classic Set — 350 000 so'm
• Oddiy Set — 200 000 so'm`,

    "🛍 Qadoqlangan choy": `🛍 QADOQLANGAN CHOY

Qadoqlangan choylar narxi operator orqali aniqlanadi.`,

    "🛒 Savat": `🛒 SAVAT

Savat tizimi keyingi bosqichda ulanadi.
Hozircha buyurtma berish uchun operator bilan bog'laning.`,

    "📍 Filiallar": `📍 FILIALLAR

1. Chilonzor 19-kvartal
Ish vaqti: 24/7
O'tirib ichish uchun joy mavjud.

2. Qorasuv 6-kvartal
Ish vaqti: 07:00 - 00:00
Infinity Game Club mijozlariga bepul olib tushib beramiz.
O'tirish uchun joy yo'q.

3. Yunusobod DimTower
Ish vaqti: 07:00 - 01:00
DimTower ofisidagi barcha korxonalarga bepul olib chiqib beramiz.
O'tirib ichish uchun joy mavjud.`,

    "🚚 Yetkazib berish": `🚚 YETKAZIB BERISH

• DimTower ofisidagi barcha korxonalarga bepul olib chiqib beramiz.
• Qorasuv 6 filialida Infinity Game Club mijozlariga bepul olib tushib beramiz.

Buyurtmani yetkazib berish yoki tayyorlab qo'yish mumkin.`,

    "💳 To'lov": `💳 TO'LOV

To'lovni quyidagi kartaga amalga oshiring:

💳 Karta:
8600 3036 4849 3836

👤 Qabul qiluvchi:
Komilov Abdulaziz

📸 To'lov qilgandan so'ng chek skrinshotini shu chatga yuboring.

✅ Operator to'lovni tasdiqlagach, buyurtmangiz tayyorlanadi.`,

    "📸 Instagram": `📸 Instagram

@choychi_premium
https://instagram.com/choychi_premium`,

    "📞 Aloqa": `📞 ALOQA

Telefon:
+998 (99) 765 88 83

Instagram:
@choychi_premium`,
  },

  ru: {
    "🍵 Чай": `🍵 ЧАЙНОЕ МЕНЮ

ПУЭР
• Пуэр — 25 000 сум
• Шу Пуэр — 35 000 сум
• Шэн Пуэр — 25 000 сум
• Пуэр 2003 — 25 000 сум
• Смола — 18 000 сум
• Пуэр 375 — 40 000 сум
• Пуэр средней крепости — 25 000 сум

УЛУН
• Да Хун Пао — 25 000 сум
• Те Гуань Инь — 25 000 сум
• Молочный Улун — 20 000 сум
• Улун — 28 000 сум
• Габа медовый аромат — 40 000 сум
• Габа Premium — 45 000 сум

БЕЛЫЙ ЧАЙ
• Бай Хао Инь Чжэнь — 30 000 сум
• Бай Му Дань — 30 000 сум

ФРУКТОВЫЙ ЧАЙ
• Фруктовые чаи — 30 000 сум

BLOOMING
• Blooming Tea — 25 000 сум

CHOYCHI SIGNATURE
• Royal GABA — 55 000 сум
• Imperial Pu'er — 60 000 сум
• Golden Bloom — 50 000 сум
• Honey Oolong — 40 000 сум

КАРАК
• Карак средний — 25 000 сум
• Карак большой — 30 000 сум

ХОЛОДНЫЙ ЧАЙ
• Пуэр + Смола — 50 000 сум
• Холодная Габа — 60 000 сум
• Холодный Да Хун Пао — 40 000 сум
• Холодный Те Гуань Инь — 40 000 сум`,

    "☕ Кофе": `☕ КОФЕ МЕНЮ

КРЕПКИЙ КОФЕ
• Лунго — 18 000 сум
• Эспрессо — 18 000 сум
• Доппио — 20 000 сум
• Американо — 20 000 / 23 000 / 30 000 сум
• Эспрессо с мёдом — 23 000 сум

КОФЕ С МОЛОКОМ
• Капучино — 25 000 / 28 000 / 35 000 сум
• Латте — 25 000 / 28 000 / 35 000 сум
• Flat White — 28 000 / 33 000 / 38 000 сум
• Raf — 28 000 / 33 000 / 38 000 сум
• Мокачино — 28 000 / 33 000 / 38 000 сум
• Honey Raf — 28 000 / 33 000 / 38 000 сум
• Oreo Coffee — 28 000 / 33 000 / 38 000 сум
• Какао — 25 000 / 28 000 / 35 000 сум
• Горячий шоколад — 30 000 / 38 000 сум
• Cream Latte — 28 000 / 33 000 / 38 000 сум`,

    "🥤 Прохладительные напитки": `🥤 ПРОХЛАДИТЕЛЬНЫЕ НАПИТКИ

• Мохито — 28 000 / 35 000 сум
• Малина Мохито — 28 000 / 35 000 сум
• Манго Маракуйя — 28 000 / 35 000 сум
• Тархун — 28 000 / 35 000 сум
• Апельсин лимонад — 28 000 / 35 000 сум
• Ice Tea Каркаде — 28 000 / 35 000 сум
• Клубничный Мохито — 28 000 / 35 000 сум
• Пина Колада — 28 000 / 35 000 сум
• Лагуна — 28 000 / 35 000 сум

ФРЕШ 350 ml
• Апельсин — 55 000 сум
• Яблоко — 35 000 сум
• Морковь — 25 000 сум
• Морковь + яблоко — 35 000 сум
• Яблоко + апельсин — 45 000 сум
• Лимон — 65 000 сум

СМУЗИ
• Яблочный — 40 000 / 50 000 сум
• Персик + малина — 40 000 / 50 000 сум
• Банан + манго — 40 000 / 50 000 сум
• Клубника + банан — 40 000 / 50 000 сум
• Цитрусовый — 40 000 / 50 000 сум`,

    "🥛 Молочные напитки": `🥛 МОЛОЧНЫЕ НАПИТКИ

MILKSHAKE
• Молочный — 25 000 / 30 000 сум
• Банановый — 30 000 / 38 000 сум
• Шоколадный — 30 000 / 38 000 сум
• Кофейный — 30 000 / 38 000 сум
• Oreo — 30 000 / 38 000 сум
• Bounty — 30 000 / 38 000 сум
• Клубничный — 30 000 / 38 000 сум
• Киви — 30 000 / 38 000 сум
• Малиновый — 30 000 / 38 000 сум
• Snickers — 30 000 / 38 000 сум

MATCHA
• Синяя матча — 25 000 / 28 000 / 35 000 сум
• Зелёная матча — 25 000 / 28 000 / 35 000 сум

BUBBLE TEA
• Классический чёрный — 40 000 / 45 000 сум
• Молочный ваниль — 45 000 / 50 000 сум
• Тропический фруктовый — 45 000 / 50 000 сум
• Матча — 45 000 / 50 000 сум
• Кокосовый — 45 000 / 50 000 сум`,

    "🍰 Десерты": `🍰 ДЕСЕРТЫ

Цены на десерты пока не добавлены.
Скоро добавим.`,

    "🎁 Наборы": `🎁 НАБОРЫ

• Royal Set — 1 200 000 сум
• Premium Set — 600 000 сум
• Classic Set — 350 000 сум
• Oddiy Set — 200 000 сум`,

    "🛍 Упакованный чай": `🛍 УПАКОВАННЫЙ ЧАЙ

Цены на упакованный чай уточняйте у оператора.`,

    "🛒 Корзина": `🛒 КОРЗИНА

Корзина будет подключена на следующем этапе.
Пока для заказа свяжитесь с оператором.`,

    "📍 Филиалы": `📍 ФИЛИАЛЫ

1. Chilonzor 19-квартал
Время работы: 24/7
Есть место, где можно посидеть.

2. Qorasuv 6-квартал
Время работы: 07:00 - 00:00
Клиентам Infinity Game Club заказ спускаем бесплатно.
Посадочных мест нет.

3. Yunusobod DimTower
Время работы: 07:00 - 01:00
Во все компании офиса DimTower заказ поднимаем бесплатно.
Есть место, где можно посидеть.`,

    "🚚 Доставка": `🚚 ДОСТАВКА

• В офисе DimTower заказ поднимаем бесплатно.
• В Qorasuv 6 клиентам Infinity Game Club заказ спускаем бесплатно.

Можно оформить доставку или самовывоз.`,

    "💳 Оплата": `💳 ОПЛАТА

Оплатите заказ на карту:

💳 Карта:
8600 3036 4849 3836

👤 Получатель:
Комилов Абдулазиз

📸 После оплаты отправьте скриншот чека в этот чат.

✅ После подтверждения оператором заказ будет принят в работу.`,

    "📸 Instagram": `📸 Instagram

@choychi_premium
https://instagram.com/choychi_premium`,

    "📞 Контакты": `📞 КОНТАКТЫ

Телефон:
+998 (99) 765 88 83

Instagram:
@choychi_premium`,
  },
};

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "Tilni tanlang / Выберите язык", langKeyboard());
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

  if (menus[lang][text]) {
    return bot.sendMessage(chatId, menus[lang][text], mainMenu(lang));
  }

  return bot.sendMessage(
    chatId,
    lang === "ru" ? "Выберите раздел:" : "Bo'limni tanlang:",
    mainMenu(lang)
  );
});

console.log("✅ Choychi bot ishga tushdi");

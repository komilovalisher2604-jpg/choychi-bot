const TelegramBot = require("node-telegram-bot-api");

const token = "8933595798:AAEPDfWPPenaCaQ3S0Uhre7AcPwF1ahokLM";
const bot = new TelegramBot(token, { polling: true });

const menu = {
  reply_markup: {
    keyboard: [
      ["🍵 Choy kolleksiyasi | Чайная коллекция"],
      ["🍵 Matcha | Матча", "☕ Kofe | Кофе"],
      ["🧊 Ice Coffee | Айс Кофе"],
      ["🥤 Sovuq ichimliklar | Освежающие"],
      ["🥛 Milkshake | Молочный"],
      ["🧋 Bubble Tea | Бабл Ти"],
      ["🍹 Fresh | Фреш", "🍓 Smoothie | Смузи"],
      ["🍰 Shirinliklar | Десерты"],
      ["🎁 Setlar | Наборы"],
      ["🛍 Choy xarid qilish | Купить чай"],
      ["🏢 Filiallar | Филиалы"],
      ["🚚 Yetkazib berish | Доставка"],
      ["💳 To'lov | Оплата"],
      ["📸 Instagram", "📞 Aloqa | Контакты"]
    ],
    resize_keyboard: true
  }
};

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id,
`Assalomu alaykum! ☕
Choychi botiga xush kelibsiz.

Здравствуйте!
Добро пожаловать в Choychi.

Menyudan tanlang:
Выберите раздел:`, menu);
});

bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text === "/start") return;

  if (text === "🍵 Choy kolleksiyasi | Чайная коллекция") {
    bot.sendMessage(chatId,
`🍵 Choy kolleksiyasi | Чайная коллекция

01. Pu'er | Пуэр
• Pu'er
• Shu Pu'er
• Shen Pu'er
• Pu'er 2003
• Smola Pu'era
• Pu'er 375
• Kuchli Pu'er
• O'rtacha Pu'er

02. Ulun | Улун
• Da Hong Pao
• Tie Guan Yin
• Oolong
• Milk Oolong
• Gaba asal aromatli

03. Oq choy | Белый чай
• Bai Hao Yin Zhen
• Bai Mu Dan

04. O'simlik choylari | Травяной чай
• Atirgul g'unchasi
• Romashka
• Lavanda
• Gibiskus
• Yasmin

05. Mevali choy | Фруктовый чай
• Mango
• Qulupnay
• Uzum
• Shaftoli
• O'rmon mevalari

06. Blooming choy | Blooming чай
• Mango
• Qulupnay
• Uzum
• Shaftoli

07. Mualliflik choylari | Авторский чай
• Royal GABA
• Imperial Pu'er
• Oriental Karak
• Golden Bloom
• Honey Oolong

08. Muzdek choy | Холодный чай
• Muzdek Pu'er + Smola
• Muzdek Gaba asal bilan
• Muzdek Da Hong Pao
• Muzdek Tie Guan Yin

09. Karak choy | Карак чай
• Karak choy firma retsepti bo'yicha`);
  }

  else if (text === "🍵 Matcha | Матча") {
    bot.sendMessage(chatId,
`🍵 Matcha | Матча

• Matcha yashil | Матча зелёная
• Matcha ko'k | Матча синяя
• Ice Matcha yashil | Айс матча зелёная
• Ice Matcha ko'k | Айс матча синяя
• Matcha Latte | Матча латте
• Ice Matcha Latte | Айс матча латте`);
  }

  else if (text === "☕ Kofe | Кофе") {
    bot.sendMessage(chatId,
`☕ Kofe | Кофе

Kuchli kofe | Крепкий кофе:
• Lungo
• Espresso
• Doppio
• Americano
• Espresso asal bilan

Sutli kofe | Кофе с молоком:
• Cappuccino
• Latte
• Flat White
• Raf
• Mocaccino
• Honey Raf
• Oreo Coffee
• Quyultirilgan sutli kofe
• Kakao
• Issiq shokolad
• Cream Latte`);
  }

  else if (text === "🧊 Ice Coffee | Айс Кофе") {
    bot.sendMessage(chatId,
`🧊 Ice Coffee | Айс Кофе

• Frappuccino
• Ice Cappuccino
• Ice Latte
• Ice Americano
• Ice Matcha yashil
• Ice Matcha ko'k`);
  }

  else if (text === "🥤 Sovuq ichimliklar | Освежающие") {
    bot.sendMessage(chatId,
`🥤 Sovuq ichimliklar | Освежающие напитки

• Mojito
• Malinali mojito
• Mango-marakuya
• Tarxun
• Apelsin limonad
• Ice Tea Karkade
• Qulupnay mojito
• O'rmon mevalari
• Duchess
• Pina Colada
• Laguna`);
  }

  else if (text === "🥛 Milkshake | Молочный") {
    bot.sendMessage(chatId,
`🥛 Milkshake | Молочные коктейли

• Klassik
• Banan
• Shokolad
• Kofe
• Oreo
• Bounty
• Qulupnay
• Kivi
• Malina
• Snickers`);
  }

  else if (text === "🧋 Bubble Tea | Бабл Ти") {
    bot.sendMessage(chatId,
`🧋 Bubble Tea | Бабл Ти

• Klassik qora
• Sutli vanil
• Tropik mevali
• Matcha
• Kokos`);
  }

  else if (text === "🍹 Fresh | Фреш") {
    bot.sendMessage(chatId,
`🍹 Fresh 350 ml | Фреш 350 мл

• Apelsin
• Olma
• Sabzi
• Sabzi + Olma
• Olma + Apelsin
• Limon`);
  }

  else if (text === "🍓 Smoothie | Смузи") {
    bot.sendMessage(chatId,
`🍓 Smoothie | Смузи

• Ziravorli olma
• Shaftoli + Malina
• Banan + Mango
• Qulupnay + Banan
• Sitrus
• Asal + Zanjabil`);
  }

  else if (text === "🍰 Shirinliklar | Десерты") {
    bot.sendMessage(chatId,
`🍰 Shirinliklar | Десерты

• Cheesecake
• Brownie
• Kruassan
• Muffin
• Pechenye

Mavjudlik operator orqali aniqlanadi.
Наличие уточняйте у оператора.`);
  }

  else if (text === "🎁 Setlar | Наборы") {
    bot.sendMessage(chatId,
`🎁 Setlar | Наборы

• Premium Set
• Classic Set
• Mini Set
• Sovg'a Set

Set tarkibi operator orqali aniqlanadi.
Состав набора уточняйте у оператора.`);
  }

  else if (text === "🛍 Choy xarid qilish | Купить чай") {
    bot.sendMessage(chatId,
`🛍 Choy xarid qilish | Купить чай

Choylarni qadoqlangan holda xarid qilishingiz mumkin.
Pu'er, Ulun, Gaba, Oq choy, Mevali choy va boshqa turlar mavjud.

Вы можете приобрести чай в упаковке.
В наличии: Пуэр, Улун, Габа, Белый чай, Фруктовый чай и другие виды.`);
  }

  else if (text === "🏢 Filiallar | Филиалы") {
    bot.sendMessage(chatId,
`🏢 Filiallar | Филиалы

1. Chilonzor 19-kvartal
Ish vaqti: 24/7
O'tirib ichish uchun joy mavjud.

1. Чиланзар 19-квартал
Время работы: 24/7
Есть место, где можно посидеть.

2. Qorasuv 6-kvartal
Ish vaqti: 07:00 - 00:00
Infinity Game Club mijozlariga bepul olib tushib beramiz.
O'tirish uchun joy yo'q.

2. Карасу 6-квартал
Время работы: 07:00 - 00:00
Клиентам Infinity Game Club заказ спускаем бесплатно.
Посадочных мест нет.

3. Yunusobod DimTower
Ish vaqti: 07:00 - 01:00
DimTower ofisidagi barcha korxonalarga bepul olib chiqib beramiz.
O'tirib ichish uchun joy mavjud.

3. Юнусабад DimTower
Время работы: 07:00 - 01:00
Во все компании офиса DimTower заказ поднимаем бесплатно.
Есть место, где можно посидеть.`);
  }

  else if (text === "🚚 Yetkazib berish | Доставка") {
    bot.sendMessage(chatId,
`🚚 Yetkazib berish | Доставка

• Yunusobod DimTower filialida DimTower ofisidagi barcha korxonalarga buyurtmani bepul olib chiqib beramiz.
• Qorasuv 6 filialida Infinity Game Club mijozlariga buyurtmani bepul olib tushib beramiz.

Доставка:
• В филиале Yunusobod DimTower во все компании офиса DimTower заказ поднимаем бесплатно.
• В филиале Qorasuv 6 клиентам Infinity Game Club заказ спускаем бесплатно.`);
  }

  else if (text === "💳 To'lov | Оплата") {
    bot.sendMessage(chatId,
`💳 To'lov | Оплата

To'lov usullari:
• Click
• Payme
• Paynet
• Uzum

Способы оплаты:
• Click
• Payme
• Paynet
• Uzum`);
  }

  else if (text === "📸 Instagram") {
    bot.sendMessage(chatId,
`📸 Instagram

https://instagram.com/choychi_premium`);
  }

  else if (text === "📞 Aloqa | Контакты") {
    bot.sendMessage(chatId,
`📞 Aloqa | Контакты

Telefon: +998 (99) 765 88 83
Instagram: @choychi_premium`);
  }

  else {
    bot.sendMessage(chatId, "Menyudan tanlang | Выберите раздел", menu);
  }
});

console.log("Choychi bot ishga tushdi!");

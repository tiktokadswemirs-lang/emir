// ===========================
// MOBILE MENU TOGGLE
// ===========================

function toggleMobileMenu() {
    const mobileMenu = document.getElementById("mobileMenu");
    const menuBtn = document.querySelector(".mobile-menu-btn");
    mobileMenu.classList.toggle("active");
    menuBtn.classList.toggle("active");
}

document.addEventListener("click", function(event) {
    const header = document.querySelector(".header");
    const mobileMenu = document.getElementById("mobileMenu");
    const menuBtn = document.querySelector(".mobile-menu-btn");
    if (!header.contains(event.target) && mobileMenu.classList.contains("active")) {
        mobileMenu.classList.remove("active");
        menuBtn.classList.remove("active");
    }
});

// ===========================
// SMOOTH SCROLLING
// ===========================

function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        const mobileMenu = document.getElementById("mobileMenu");
        const menuBtn = document.querySelector(".mobile-menu-btn");
        mobileMenu.classList.remove("active");
        menuBtn.classList.remove("active");
    }
}

// ===========================
// LANGUAGE SWITCHER (DATA)
// ===========================
// ВАЖНО: Объект translations должен быть объявлен ДО функций, которые его используют!

const translations = {
    ru: {
        catalog: "Каталог",
        logistics: "Логистика",
        about: "О Нас",
        contacts: "Контакты",
        heroTitle: "Нефтепродукты по всему миру",
        heroSubtitle: "Спотовые решения и долгосрочные контракты с прозрачным ценообразованием",
        learnMore: "Узнайте о нас больше",
        commercialOffer: "Коммерческое предложение",
        openProducerDocument: "Для Производителей",
        openBuyerDocument: "Для Покупателей",
        aboutSectionTitle: "О Нас",
        aboutCompany1: "BASH EMIR — международная нефтетрейдинговая структура, осуществляющая торговлю нефтепродуктами.",
        aboutCompany2: "Наша компания осуществляет закупку и поставку широкого спектра нефтепродуктов на международном уровне. Мы работаем с надежными поставщиками в странах: Иран, Туркменистан, Китай, Россия, Казахстан, Азербайджан, Турция.",
        directionsTitle: "Мы занимаемся развитием своей деятельности в двух основных направлениях:",
        railTitle: "Железнодорожные отгрузки нефтепродуктов вагон-цистернами",
        seaTitle: "Морские отгрузки нефтепродуктов танкерными партиями",
        deliveryTerms: "Условия поставки",
        railTerms: "CPT, FCA, EXW",
        seaTerms: "FOB, CFR",
        minBatch: "Минимальная партия",
        railMin: "325 тонн - 5 вагонов",
        seaMin: "5000 тонн",
        catalogTitle: "Каталог нефтепродуктов",
        gasoline: "Автомобильные бензины",
        gasolineTypes: "АИ-100, АИ-98, АИ-95, АИ-92, АИ-80",
        diesel: "Дизельное топливо",
        dieselType: "EURO 5",
        maslotype: "Базовое Масло",
        burovoy: "Буровой Барит",
        plotnost: "плотность 4.2 g/cm3",
        bitumen: "Битум нефтяной дорожный",
        bitumenDesc: "Качественный битум для дорожного строительства",
        mazut: "Мазут топочный",
        mazutTypes: "М-40, M-100",
        coke: "Кокс нефтяной",
        cokeDesc: "GPC",
        partnersTitle: "Категории наших партнеров",
        partnerGov: "Государственные предприятия",
        partnerAgro: "Сельхозпредприятия",
        partnerRefinery: "Нефтеперерабатывающие заводы",
        partnerRoad: "Дорожно-строительные компании",
        partnerAzs: "АЗС и нефтяные терминалы",
        globalTitle: "Работаем по всему миру",
        globalText: "Мы ежедневно осуществляем торговые операции по поставкам нефтепродуктов в странах Средней, Южной и Восточной Азии, Восточной Европы, Северной и Восточной Африки и на Ближнем Востоке.",
        globalHighlight1: "🌍 Глобальное присутствие на ключевых рынках",
        globalHighlight2: "Наша сеть охватывает все основные торговые маршруты и логистические центры мира",
        logisticsSectionTitle: "Логистика и качество",
        logisticsSystem: "Выстроенная система логистики",
        logisticsScience: "Логистика нефтепродуктов — это целая наука, помогающая планировать, контролировать и оптимизировать процесс передачи товаров, от производителя к потребителю.",
        logisticsBase: "Логистика, хранение и дистрибуция важнейшая основа нашего бизнеса.",
        qualityStandards: "Стандарты качества",
        qualityResp: "Мы берем полную ответственность за качество наших услуг в соответствии с Международными стандартами",
        isoCertified: "ISO сертифицировано",
        isoDesc: "Все операции соответствуют международным стандартам качества и безопасности",
        cooperationTitle: "Как начать сотрудничество",
        step1: "Комплаенс",
        step1desc: "Предоставление учредительных документов",
        step2: "Согласование",
        step2desc: "Ценового предложения",
        step3: "Реквизиты",
        step3desc: "Получение реквизитной заявки",
        step4: "Контракт",
        step4desc: "Подписание контракта и спецификаций",
        step5: "Оплата",
        step5desc: "По выставленному инвойсу",
        step6: "Отгрузка",
        step6desc: "Отгрузка продукции",
        step7: "Доставка",
        step7desc: "Получение товара в пункте назначения",
        step8: "Закрытие",
        step8desc: "Подписание закрывающих документов",
        contactTitle: "Связаться с нами",
        contactFormTitle: "Свяжитесь с нами напрямую",
        contactWhatsappButton: "WhatsApp",
        contactInfo: "Информация",
        contactDescription: "Наши менеджеры исследуют Ваш вопрос, подготовят предложение и свяжутся с Вами в ближайшее время.",
        email: "Email",
        phone: "Телефон",
        productsFooter: "Продукты",
        logisticsFooter: "Логистика",
        contactsFooter: "Контакты",
        kollep: "© Copyright 2025 BASH EMIR<br>Международная энергетическая группа по торговле сырьевыми товарами"
    },
    en: {
        catalog: "Catalog",
        logistics: "Logistics",
        about: "About Us",
        contacts: "Contacts",
        heroTitle: "Petroleum Products Worldwide",
        heroSubtitle: "Spot solutions and long-term contracts with transparent pricing",
        learnMore: "Learn more about us",
        commercialOffer: "Commercial Offer",
        openProducerDocument: "For Producers",
        openBuyerDocument: "For Buyers",
        aboutSectionTitle: "About Us",
        aboutCompany1: "BASH EMIR — is an international oil trading structure engaged in the trade petroleum products.",
        aboutCompany2: "Our company procures and supplies a wide range of petroleum products internationally. We work with reliable suppliers in Iran, Turkmenistan, China, Russia, Kazakhstan, Azerbaijan, Turkey.",
        directionsTitle: "We develop our activities in two main directions:",
        railTitle: "Rail shipments of petroleum products in tank cars",
        seaTitle: "Sea shipments of petroleum products in tanker batches",
        deliveryTerms: "Delivery terms",
        railTerms: "CPT, FCA, EXW",
        seaTerms: "FOB, CFR",
        minBatch: "Minimum batch",
        railMin: "325 tons - 5 wagons",
        seaMin: "5000 tons",
        catalogTitle: "Petroleum Products Catalog",
        gasoline: "Motor Gasoline",
        gasolineTypes: "AI-100, AI-98, AI-95, AI-92, AI-80",
        diesel: "Diesel Fuel",
        dieselType: "EURO 5",
        maslotype: "Base Oil",
        burovoy: "Drilling Barite",
        plotnost: "density 4.2 g/cm3",
        bitumen: "Road Petroleum Bitumen",
        bitumenDesc: "Quality bitumen for road construction",
        mazut: "Fuel Oil",
        mazutTypes: "M-40, M-100",
        coke: "Petroleum Coke",
        cokeDesc: "GPC",
        partnersTitle: "Categories of Our Partners",
        partnerGov: "Government Enterprises",
        partnerAgro: "Agricultural Enterprises",
        partnerRefinery: "Oil Refineries",
        partnerRoad: "Road Construction Companies",
        partnerAzs: "Gas Stations and Oil Terminals",
        globalTitle: "Operating Worldwide",
        globalText: "We conduct daily trading operations for petroleum product supplies in Central, South and East Asia, Eastern Europe, North and East Africa and the Middle East.",
        globalHighlight1: "🌍 Global Presence in Key Markets",
        globalHighlight2: "Our network covers all major trade routes and logistics centers worldwide",
        logisticsSectionTitle: "Logistics and Quality",
        logisticsSystem: "Established Logistics System",
        logisticsScience: "Petroleum logistics is a complete science that helps plan, control and optimize the process of transferring goods from producer to consumer.",
        logisticsBase: "Logistics, storage and distribution are the most important foundation of our business.",
        qualityStandards: "Quality Standards",
        qualityResp: "We take full responsibility for the quality of our services in accordance with International Standards",
        isoCertified: "ISO Certified",
        isoDesc: "All operations comply with international quality and safety standards",
        cooperationTitle: "How to Start Cooperation",
        step1: "Compliance",
        step1desc: "Provision of constituent documents",
        step2: "Coordination",
        step2desc: "Price offer",
        step3: "Details",
        step3desc: "Receiving details request",
        step4: "Contract",
        step4desc: "Signing contract and specifications",
        step5: "Payment",
        step5desc: "According to issued invoice",
        step6: "Shipment",
        step6desc: "Product shipment",
        step7: "Delivery",
        step7desc: "Receiving goods at destination",
        step8: "Closing",
        step8desc: "Signing closing documents",
        contactTitle: "Contact Us",
        contactFormTitle: "Contact Us Directly",
        contactWhatsappButton: "WhatsApp",
        contactInfo: "Information",
        contactDescription: "Our managers will investigate your question, prepare an offer and contact you as soon as possible.",
        email: "Email",
        phone: "Phone",
        productsFooter: "Products",
        logisticsFooter: "Logistics",
        contactsFooter: "Contacts",
        kollep: "© Copyright 2025 BASH EMIR<br>International Energy Trading Group"
    },
    ir: {
        catalog: "کاتالوگ",
        logistics: "لجستیک",
        about: "درباره ما",
        contacts: "تماس",
        heroTitle: "محصولات نفتی در سراسر جهان",
        heroSubtitle: "راه حل های نقطه ای و قراردادهای بلند مدت با قیمت گذاری شفاف",
        learnMore: "بیشتر بدانید",
        commercialOffer: "پیشنهاد تجاری",
        openProducerDocument: "برای تولیدکنندگان",
        openBuyerDocument: "برای خریداران",
        aboutSectionTitle: "درباره ما",
        aboutCompany1: "BASH EMIR — یک ساختار تجارت بین المللی نفت است که به تجارت فرآورده های نفتی مشغول است.",
        aboutCompany2: "شرکت ما طیف گسترده ای از فرآورده های نفتی را در سطح بین المللی تهیه و عرضه می کند. ما با تامین کنندگان قابل اعتماد در روسیه، چین، هند، ایران، قزاقستان، آذربایجان، ترکمنستان، ترکیه همکاری می کنیم.",
        directionsTitle: "ما فعالیت های خود را در دو جهت اصلی توسعه می دهیم:",
        railTitle: "حمل و نقل ریلی فرآورده های نفتی با واگن تانکر",
        seaTitle: "حمل و نقل دریایی فرآورده های نفتی در محموله های تانکری",
        deliveryTerms: "شرایط تحویل",
        railTerms: "CPT, FCA, EXW",
        seaTerms: "FOB, CFR",
        minBatch: "حداقل دسته",
        railMin: "325 تن - 5 واگن",
        seaMin: "5000 تن",
        catalogTitle: "کاتالوگ فرآورده های نفتی",
        gasoline: "بنزین موتور",
        gasolineTypes: "AI-100, AI-98, AI-95, AI-92, AI-80",
        diesel: "سوخت دیزل",
        dieselType: "EURO 5",
        maslotype: "روغن پایه",
        burovoy: "باریت حفاری",
        plotnost: "چگالی 4.2 g/cm3",
        bitumen: "قیر نفتی جاده",
        bitumenDesc: "قیر با کیفیت برای ساخت و ساز جاده",
        mazut: "مازوت کوره",
        mazutTypes: "M-40, M-100",
        coke: "کک نفتی",
        cokeDesc: "GPC",
        partnersTitle: "دسته بندی شرکای ما",
        partnerGov: "شرکت های دولتی",
        partnerAgro: "شرکت های کشاورزی",
        partnerRefinery: "پالایشگاه های نفت",
        partnerRoad: "شرکت های ساخت جاده",
        partnerAzs: "ایستگاه های سوخت و پایانه های نفتی",
        globalTitle: "فعالیت در سراسر جهان",
        globalText: "ما روزانه عملیات تجاری برای تامین فرآورده های نفتی در آسیای مرکزی، جنوبی و شرقی، اروپای شرقی، آفریقای شمالی و شرقی و خاورمیانه انجام می دهیم.",
        globalHighlight1: "🌍 حضور جهانی در بازارهای کلیدی",
        globalHighlight2: "شبکه ما تمام مسیرهای تجاری اصلی و مراکز لجستیک جهان را پوشش می دهد",
        logisticsSectionTitle: "لجستیک و کیفیت",
        logisticsSystem: "سیستم لجستیک تثبیت شده",
        logisticsScience: "لجستیک نفت یک علم کامل است که به برنامه ریزی، کنترل و بهینه سازی فرآیند انتقال کالا از تولیدکننده به مصرف کننده کمک می کند.",
        logisticsBase: "لجستیک، ذخیره سازی و توزیع مهم ترین پایه کسب و کار ما است.",
        qualityStandards: "استانداردهای کیفیت",
        qualityResp: "ما مسئولیت کامل کیفیت خدمات خود را مطابق با استانداردهای بین المللی می پذیریم",
        isoCertified: "گواهی ISO",
        isoDesc: "تمام عملیات با استانداردهای بین المللی کیفیت و ایمنی مطابقت دارد",
        cooperationTitle: "نحوه شروع همکاری",
        step1: "انطباق",
        step1desc: "ارائه اسناد تاسیس",
        step2: "هماهنگی",
        step2desc: "پیشنهاد قیمت",
        step3: "جزئیات",
        step3desc: "دریافت درخواست جزئیات",
        step4: "قرارداد",
        step4desc: "امضای قرارداد و مشخصات",
        step5: "پرداخت",
        step5desc: "طبق فاکتور صادر شده",
        step6: "حمل",
        step6desc: "حمل محصول",
        step7: "تحویل",
        step7desc: "دریافت کالا در مقصد",
        step8: "بستن",
        step8desc: "امضای اسناد پایانی",
        contactTitle: "تماس با ما",
        contactFormTitle: "مستقیماً با ما تماس بگیرید",
        contactWhatsappButton: "واتساپ",
        contactInfo: "اطلاعات",
        contactDescription: "مدیران ما سوال شما را بررسی می کنند، پیشنهادی آماده می کنند و در اسرع وقت با شما تماس می گیرند.",
        email: "ایمیل",
        phone: "تلفن",
        productsFooter: "محصولات",
        logisticsFooter: "لجستیک",
        contactsFooter: "تماس",
        kollep: "© حق چاپ 2025 BASH EMIR<br>گروه بین المللی تجارت انرژی"
    },
    tr: {
        catalog: "Katalog",
        logistics: "Lojistik",
        about: "Hakkımızda",
        contacts: "İletişim",
        heroTitle: "Dünya Çapında Petrol Ürünleri",
        heroSubtitle: "Şeffaf fiyatlandırma ile spot çözümler ve uzun vadeli sözleşmeler",
        learnMore: "Hakkımızda daha fazla bilgi edinin",
        commercialOffer: "Ticari Teklif",
        openProducerDocument: "Üreticiler İçin",
        openBuyerDocument: "Alıcılar İçin",
        aboutSectionTitle: "Hakkımızda",
        aboutCompany1: "BASH EMIR — petrol ürünleri ticareti yapan uluslararası bir petrol ticaret yapısıdır.",
        aboutCompany2: "Şirketimiz uluslararası alanda geniş bir yelpazede petrol ürünleri tedarik etmektedir. İran, Türkmenistan, Çin, Rusya, Kazakistan, Azerbaycan ve Türkiye'de güvenilir tedarikçilerle çalışıyoruz.",
        directionsTitle: "Faaliyetlerimizi iki ana yönde geliştiriyoruz:",
        railTitle: "Tanker vagonlarla demiryolu petrol ürünleri sevkiyatları",
        seaTitle: "Tanker partileriyle deniz yolu petrol ürünleri sevkiyatları",
        deliveryTerms: "Teslimat şartları",
        railTerms: "CPT, FCA, EXW",
        seaTerms: "FOB, CFR",
        minBatch: "Minimum parti",
        railMin: "325 ton - 5 vagon",
        seaMin: "5000 ton",
        catalogTitle: "Petrol Ürünleri Kataloğu",
        gasoline: "Motor Benzinleri",
        gasolineTypes: "AI-100, AI-98, AI-95, AI-92, AI-80",
        diesel: "Dizel Yakıt",
        dieselType: "EURO 5",
        maslotype: "Baz Yağ",
        burovoy: "Sondaj Bariti",
        plotnost: "yoğunluk 4.2 g/cm3",
        bitumen: "Yol Petrol Bitümü",
        bitumenDesc: "Yol yapımı için kaliteli bitüm",
        mazut: "Yakıt Yağı",
        mazutTypes: "M-40, M-100",
        coke: "Petrol Koku",
        cokeDesc: "GPC",
        partnersTitle: "Ortaklarımızın Kategorileri",
        partnerGov: "Devlet İşletmeleri",
        partnerAgro: "Tarım İşletmeleri",
        partnerRefinery: "Petrol Rafinerileri",
        partnerRoad: "Yol İnşaat Şirketleri",
        partnerAzs: "Akaryakıt İstasyonları ve Petrol Terminalleri",
        globalTitle: "Dünya Çapında Çalışıyoruz",
        globalText: "Orta, Güney ve Doğu Asya, Doğu Avrupa, Kuzey ve Doğu Afrika ve Orta Doğu ülkelerine petrol ürünleri tedariki için günlük ticaret işlemleri gerçekleştiriyoruz.",
        globalHighlight1: "🌍 Kilit Pazarlarda Küresel Varlık",
        globalHighlight2: "Ağımız, dünyadaki tüm ana ticaret yollarını ve lojistik merkezlerini kapsamaktadır",
        logisticsSectionTitle: "Lojistik ve Kalite",
        logisticsSystem: "Kurulmuş Lojistik Sistemi",
        logisticsScience: "Petrol lojistiği, malların üreticiden tüketiciye transfer sürecini planlamaya, kontrol etmeye ve optimize etmeye yardımcı olan eksiksiz bir bilimdir.",
        logisticsBase: "Lojistik, depolama ve dağıtım işimizin en önemli temelidir.",
        qualityStandards: "Kalite Standartları",
        qualityResp: "Hizmetlerimizin kalitesinden Uluslararası Standartlara uygun olarak tam sorumluluk alıyoruz",
        isoCertified: "ISO Sertifikalı",
        isoDesc: "Tüm işlemler uluslararası kalite ve güvenlik standartlarına uygundur",
        cooperationTitle: "İşbirliğine Nasıl Başlanır",
        step1: "Uyum",
        step1desc: "Kurucu belgelerin sağlanması",
        step2: "Koordinasyon",
        step2desc: "Fiyat teklifi",
        step3: "Detaylar",
        step3desc: "Detay talebi alma",
        step4: "Sözleşme",
        step4desc: "Sözleşme ve şartnamelerin imzalanması",
        step5: "Ödeme",
        step5desc: "Kesilen faturaya göre",
        step6: "Sevkiyat",
        step6desc: "Ürün sevkiyatı",
        step7: "Teslimat",
        step7desc: "Varış noktasında mal teslimi",
        step8: "Kapanış",
        step8desc: "Kapanış belgelerinin imzalanması",
        contactTitle: "Bize Ulaşın",
        contactFormTitle: "Doğrudan Bizimle İletişime Geçin",
        contactWhatsappButton: "WhatsApp",
        contactInfo: "Bilgi",
        contactDescription: "Yöneticilerimiz sorunuzu inceleyecek, bir teklif hazırlayacak ve en kısa sürede sizinle iletişime geçecektir.",
        email: "E-posta",
        phone: "Telefon",
        productsFooter: "Ürünler",
        logisticsFooter: "Lojistik",
        contactsFooter: "İletişim",
        kollep: "© Telif Hakkı 2025 BASH EMIR<br>Uluslararası Enerji Ticaret Grubu"
    }
};

// ===========================
// LANGUAGE SWITCHER (LOGIC)
// ===========================

function getInitialLanguage() {
    const savedLang = localStorage.getItem('language');
    const browserLang = navigator.language.substring(0, 2);
    // Теперь translations уже определен, ошибок не будет
    if (savedLang && translations[savedLang]) return savedLang;
    if (translations[browserLang]) return browserLang;
    return 'ru';
}

function switchLanguage(lang) {
    if (!translations[lang]) return;
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    document.body.classList.add('language-switching');
    setTimeout(() => {
        document.querySelectorAll('[data-translate]').forEach(el => {
            const key = el.getAttribute('data-translate');
            if (translations[lang][key]) el.innerHTML = translations[lang][key];
        });
        document.body.classList.remove('language-switching');
    }, 150);
    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.classList.remove("active");
        if (btn.getAttribute("data-lang") === lang) btn.classList.add("active");
    });
    document.documentElement.lang = lang;
}

// Инициализация языка (должна быть после объявления функций и объекта translations)
let currentLanguage = getInitialLanguage();


// ===========================
// REAL-TIME COMMODITY PRICES API
// ===========================

const OIL_API_KEY = "4665f3284a6247ad4cadef870e4bcbe07ab4eee8fb5c27861a4a2f457e7ee269";
const OIL_API_URL = "https://api.oilpriceapi.com/v1/prices/latest";

async function fetchCommodityPrices() {
    const oilPriceElement = document.getElementById("oil-price");
    const oilChangeElement = document.getElementById("oil-change");
    const gasChangeElement = document.getElementById("gas-change");
    const goldChangeElement = document.getElementById("gold-change");

    if (!oilPriceElement) return;

    const MIN_INTERVAL_MS = 600000; // 10 минут
    const lastFetchTime = parseInt(localStorage.getItem("lastFetchTime") || "0");
    const now = Date.now();

    if (now - lastFetchTime < MIN_INTERVAL_MS) {
        console.log(\`[API] Пропуск запроса. Последний запрос был \${Math.floor((now - lastFetchTime) / 60000)} минут назад. Следующий через \${Math.ceil((MIN_INTERVAL_MS - (now - lastFetchTime)) / 60000)} минут.\`);
        return;
    }

    console.log(\`[API] Выполнение запроса цен: \${new Date().toLocaleTimeString()}\`);

    try {
        const response = await fetch(OIL_API_URL, {
            headers: {
                "Authorization": `Token ${OIL_API_KEY}`,
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) throw new Error(`HTTP ${response.status}`);

        const jsonResponse = await response.json();
        
        // ИСПРАВЛЕНИЕ: Получаем цену из data.data.price
        const rawPrice = jsonResponse?.data?.price;

        // Проверка на то, что цена действительно пришла
        if (typeof rawPrice === 'undefined' || rawPrice === null) {
            throw new Error("Price data missing in API response");
        }

        const newOilPrice = parseFloat(rawPrice);

        if (isNaN(newOilPrice)) {
            throw new Error("Price is NaN");
        }

        const lastPrice = parseFloat(localStorage.getItem("lastOilPrice")) || newOilPrice;
        const change = newOilPrice - lastPrice;

        oilPriceElement.textContent = `$${newOilPrice.toFixed(2)}`;

        oilChangeElement.classList.remove("positive", "negative");
        const changeText = Math.abs(change).toFixed(2);

        if (change > 0.01) {
            oilChangeElement.classList.add("positive");
            oilChangeElement.textContent = `+${changeText} ↑`;
        } else if (change < -0.01) {
            oilChangeElement.classList.add("negative");
            oilChangeElement.textContent = `-${changeText} ↓`;
        } else {
            oilChangeElement.textContent = "0.00";
        }

        localStorage.setItem("lastOilPrice", newOilPrice.toFixed(4));
        localStorage.setItem("lastFetchTime", now.toString()); // Записываем время успешного запроса

        // Имитация данных для газа и золота
        const lastGasPrice = parseFloat(localStorage.getItem("lastGasPrice")) || 2.85;
        const lastGoldPrice = parseFloat(localStorage.getItem("lastGoldPrice")) || 2045.30;

        const gasChange = (Math.random() - 0.5) * 0.15;
        const goldChange = (Math.random() - 0.5) * 15;

        let newGasPrice = lastGasPrice + gasChange;
        let newGoldPrice = lastGoldPrice + goldChange;

        newGasPrice = Math.max(2.5, Math.min(3.5, newGasPrice));
        newGoldPrice = Math.max(2000, Math.min(2100, newGoldPrice));

        gasChangeElement.classList.remove("positive", "negative");
        if (gasChange > 0.01) {
            gasChangeElement.classList.add("positive");
            gasChangeElement.textContent = `+${gasChange.toFixed(3)} ↑`;
        } else if (gasChange < -0.01) {
            gasChangeElement.classList.add("negative");
            gasChangeElement.textContent = `${gasChange.toFixed(3)} ↓`;
        } else {
            gasChangeElement.textContent = `${gasChange.toFixed(3)}`;
        }

        goldChangeElement.classList.remove("positive", "negative");
        if (goldChange > 1) {
            goldChangeElement.classList.add("positive");
            goldChangeElement.textContent = `+${goldChange.toFixed(2)} ↑`;
        } else if (goldChange < -1) {
            goldChangeElement.classList.add("negative");
            goldChangeElement.textContent = `${goldChange.toFixed(2)} ↓`;
        } else {
            goldChangeElement.textContent = `${goldChange.toFixed(2)}`;
        }

        localStorage.setItem("lastGasPrice", newGasPrice.toFixed(4));
        localStorage.setItem("lastGoldPrice", newGoldPrice.toFixed(4));

    } catch (error) {
        console.error("Error fetching commodity prices:", error);
        // При ошибке показываем кэш или N/A
        const cachedPrice = localStorage.getItem("lastOilPrice");
        if (cachedPrice && !isNaN(parseFloat(cachedPrice))) {
             oilPriceElement.textContent = `$${parseFloat(cachedPrice).toFixed(2)}`;
             oilChangeElement.textContent = "...";
        } else {
             oilPriceElement.textContent = `API Error`;
             oilChangeElement.textContent = "N/A";
        }
    }
}

// ===========================
// INIT
// ===========================

document.addEventListener("DOMContentLoaded", function () {
    switchLanguage(currentLanguage);
    fetchCommodityPrices();
    // Используем более короткий интервал для setInterval (например, 1 минута),
    // но фактическая частота запросов контролируется логикой в fetchCommodityPrices (10 минут).
    // Это помогает "разбудить" скрипт, когда вкладка становится активной.
    setInterval(fetchCommodityPrices, 60000); // Интервал 1 минута (60000 мс)
});

// ===========================
// SEARCH & DOWNLOADS
// ===========================

function toggleSearch() {
    console.log("Search functionality");
}

function downloadProducerDocument() {
    let pdfFile = currentLanguage === "en" ? "proposal_english.pdf" : "proposal.pdf";
    window.open("/" + pdfFile, "_blank");
}

function downloadBuyerDocument() {
    let pdfFile = currentLanguage === "en" ? "proposal_klient_en.pdf" : "proposal_klient.pdf";
    window.open("/" + pdfFile, "_blank");
}





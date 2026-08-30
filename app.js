/**
 * BURSA GEZİ REHBERİ, CANLI OTOBÜS VARIŞ PANOSU & AKILLI ROTA ASİSTANI
 * %100 Kararlı, Mobil Uyumlu (iOS & Android), OSRM Karayolu ve Burulaş Canlı Varış Motoru
 */

// 1. BURSA TÜM OTOBÜS & METRO HATLARI VERİTABANI
const BUS_LINES_DATA = [
    {
        id: "line-5g",
        code: "5/G",
        name: "Üniversite İstasyonu ➔ Gölyazı",
        type: "Otobüs",
        color: "#16a34a",
        frequency: "Her 20 dk",
        intervalMin: 20,
        firstLastTime: "06:30 - 21:00",
        stops: [
            { name: "Üniversite İstasyonu", lat: 40.2240, lng: 28.8475 },
            { name: "Görükle Kavşağı", lat: 40.2180, lng: 28.8150 },
            { name: "İzmir Yolu 1", lat: 40.2050, lng: 28.7650 },
            { name: "Çatalağıl Girişi", lat: 40.1850, lng: 28.7200 },
            { name: "Fadıllı Yol Ayrımı", lat: 40.1750, lng: 28.6950 },
            { name: "Gölyazı Köy Meydanı", lat: 40.1610, lng: 28.6775 }
        ],
        pathCoords: [
            [40.2240, 28.8475], [40.2200, 28.8300], [40.2180, 28.8150], [40.2100, 28.7900],
            [40.2050, 28.7650], [40.1950, 28.7400], [40.1850, 28.7200], [40.1750, 28.6950],
            [40.1680, 28.6850], [40.1610, 28.6775]
        ]
    },
    {
        id: "line-1m",
        code: "1/M",
        name: "Emek İstasyonu ➔ Mudanya İskelesi",
        type: "Otobüs",
        color: "#0284c7",
        frequency: "Her 12 dk",
        intervalMin: 12,
        firstLastTime: "06:00 - 23:30",
        stops: [
            { name: "Emek Metro İstasyonu", lat: 40.2620, lng: 28.9410 },
            { name: "Geçit Meydan", lat: 40.2780, lng: 28.9320 },
            { name: "Organize Sanayi Girişi", lat: 40.3050, lng: 28.9180 },
            { name: "Güzelyalı Kavşağı", lat: 40.3450, lng: 28.9050 },
            { name: "Mudanya Devlet Hastanesi", lat: 40.3620, lng: 28.8920 },
            { name: "Mudanya BUDO İskelesi & Kordon", lat: 40.3755, lng: 28.8830 }
        ],
        pathCoords: [
            [40.2620, 28.9410], [40.2780, 28.9320], [40.2920, 28.9250], [40.3050, 28.9180],
            [40.3250, 28.9120], [40.3450, 28.9050], [40.3620, 28.8920], [40.3755, 28.8830]
        ]
    },
    {
        id: "line-trilye",
        code: "TRİLYE",
        name: "Mudanya İskelesi ➔ Kumyaka ➔ Tarihi Trilye",
        type: "Sahil Minibüsü",
        color: "#ea580c",
        frequency: "Her 15 dk",
        intervalMin: 15,
        firstLastTime: "06:30 - 22:30",
        stops: [
            { name: "Mudanya BUDO İskelesi", lat: 40.3755, lng: 28.8830 },
            { name: "Kumyaka Sahili", lat: 40.3820, lng: 28.8350 },
            { name: "Trilye Liman & Taş Mektep", lat: 40.3885, lng: 28.7950 }
        ],
        pathCoords: [
            [40.3755, 28.8830], [40.3780, 28.8600], [40.3820, 28.8350], [40.3850, 28.8150], [40.3885, 28.7950]
        ]
    },
    {
        id: "line-f3",
        code: "F/3",
        name: "Teferrüç Teleferik ➔ Heykel ➔ Mudanya BUDO",
        type: "Hızlı Otobüs",
        color: "#0d9488",
        frequency: "Her 30 dk",
        intervalMin: 30,
        firstLastTime: "06:45 - 21:30",
        stops: [
            { name: "Teferrüç Teleferik", lat: 40.1680, lng: 29.0880 },
            { name: "Setbaşı", lat: 40.1810, lng: 29.0700 },
            { name: "Heykel 1", lat: 40.1828, lng: 29.0667 },
            { name: "Şehreküstü", lat: 40.1855, lng: 29.0595 },
            { name: "Çekirge Meydan", lat: 40.1940, lng: 29.0250 },
            { name: "Mudanya BUDO İskelesi", lat: 40.3755, lng: 28.8830 }
        ],
        pathCoords: [
            [40.1680, 29.0880], [40.1760, 29.0780], [40.1810, 29.0700], [40.1828, 29.0667],
            [40.1855, 29.0595], [40.1900, 29.0450], [40.1940, 29.0250], [40.2300, 28.9800],
            [40.3000, 28.9200], [40.3755, 28.8830]
        ]
    },
    {
        id: "line-1a",
        code: "1/A",
        name: "Demirtaşpaşa ➔ Heykel ➔ Ulu Cami ➔ Çekirge",
        type: "Otobüs",
        color: "#2563eb",
        frequency: "Her 10 dk",
        intervalMin: 10,
        firstLastTime: "06:15 - 23:45",
        stops: [
            { name: "Demirtaşpaşa Metro", lat: 40.1895, lng: 29.0760 },
            { name: "Heykel 1 Durağı", lat: 40.1828, lng: 29.0667 },
            { name: "Ulu Cami & Kapalı Çarşı", lat: 40.1834, lng: 29.0614 },
            { name: "Altıparmak", lat: 40.1880, lng: 29.0490 },
            { name: "Kültürpark Durağı", lat: 40.1920, lng: 29.0380 },
            { name: "Çekirge Termal", lat: 40.1950, lng: 29.0220 }
        ],
        pathCoords: [
            [40.1895, 29.0760], [40.1850, 29.0710], [40.1828, 29.0667], [40.1834, 29.0614],
            [40.1855, 29.0550], [40.1880, 29.0490], [40.1920, 29.0380], [40.1950, 29.0220]
        ]
    },
    {
        id: "line-38",
        code: "38",
        name: "Bursa Terminali ➔ Kent Meydanı ➔ Heykel",
        type: "Otobüs",
        color: "#7c3aed",
        frequency: "Her 8 dk",
        intervalMin: 8,
        firstLastTime: "24 Saat",
        stops: [
            { name: "Bursa Şehirlerarası Terminal", lat: 40.2580, lng: 29.0535 },
            { name: "Tofaş & Otokoop", lat: 40.2420, lng: 29.0560 },
            { name: "Kent Meydanı AVM", lat: 40.1950, lng: 29.0590 },
            { name: "Şehreküstü Metro", lat: 40.1855, lng: 29.0595 },
            { name: "Heykel 1 Durağı", lat: 40.1828, lng: 29.0667 }
        ],
        pathCoords: [
            [40.2580, 29.0535], [40.2420, 29.0560], [40.2300, 29.0570], [40.2200, 29.0580],
            [40.2050, 29.0585], [40.1950, 29.0590], [40.1855, 29.0595], [40.1828, 29.0667]
        ]
    },
    {
        id: "line-b20a",
        code: "B/20-A",
        name: "Acemler İstasyonu ➔ Misi Köyü ➔ Dağyenice",
        type: "Otobüs",
        color: "#15803d",
        frequency: "Her 35 dk",
        intervalMin: 35,
        firstLastTime: "07:00 - 19:30",
        stops: [
            { name: "Acemler Aktarma İstasyonu", lat: 40.2055, lng: 29.0220 },
            { name: "Dikkaldırım", lat: 40.1980, lng: 29.0050 },
            { name: "Odunluk / Kent Ormanı", lat: 40.1920, lng: 28.9850 },
            { name: "Misi (Gümüştepe) Köyü", lat: 40.1830, lng: 28.9770 },
            { name: "Nefes Dağyenice Macera Parkı", lat: 40.1180, lng: 28.9160 }
        ],
        pathCoords: [
            [40.2055, 29.0220], [40.1980, 29.0050], [40.1920, 28.9850], [40.1830, 28.9770],
            [40.1650, 28.9600], [40.1500, 28.9500], [40.1300, 28.9300], [40.1180, 28.9160]
        ]
    },
    {
        id: "line-d10",
        code: "D/10",
        name: "Cumalıkızık Metro ➔ Cumalıkızık Köy Meydanı",
        type: "Köy Minibüsü",
        color: "#9333ea",
        frequency: "Her 10 dk",
        intervalMin: 10,
        firstLastTime: "07:30 - 20:00",
        stops: [
            { name: "Cumalıkızık / Değirmenönü Metro", lat: 40.1870, lng: 29.1650 },
            { name: "Değirmenönü Meydan", lat: 40.1820, lng: 29.1670 },
            { name: "Cumalıkızık Köy Girişi", lat: 40.1770, lng: 29.1690 },
            { name: "Cumalıkızık Tarihi Köy Meydanı", lat: 40.1747, lng: 29.1706 }
        ],
        pathCoords: [
            [40.1870, 29.1650], [40.1820, 29.1670], [40.1770, 29.1690], [40.1747, 29.1706]
        ]
    },
    {
        id: "line-d19",
        code: "D/19",
        name: "Kestel Metro ➔ Saitabat Şelalesi",
        type: "Köy Minibüsü",
        color: "#0891b2",
        frequency: "Her 25 dk",
        intervalMin: 25,
        firstLastTime: "07:30 - 19:30",
        stops: [
            { name: "Kestel Metro İstasyonu", lat: 40.1920, lng: 29.2150 },
            { name: "Derekızık Köyü", lat: 40.1700, lng: 29.2350 },
            { name: "Saitabat Şelalesi", lat: 40.1550, lng: 29.2510 }
        ],
        pathCoords: [
            [40.1920, 29.2150], [40.1800, 29.2250], [40.1700, 29.2350], [40.1550, 29.2510]
        ]
    },
    {
        id: "line-orhaneli",
        code: "ORHANELİ",
        name: "Acemler ➔ Doğancı Barajı ➔ Orhaneli Rafting",
        type: "İlçe Minibüsü",
        color: "#d97706",
        frequency: "Her 30 dk",
        intervalMin: 30,
        firstLastTime: "07:00 - 20:00",
        stops: [
            { name: "Acemler Aktarma Peronları", lat: 40.2055, lng: 29.0220 },
            { name: "Çalı Kavşağı", lat: 40.1700, lng: 28.9800 },
            { name: "Doğancı Barajı", lat: 40.1200, lng: 28.9600 },
            { name: "Kapıkaya Geçidi", lat: 40.0300, lng: 28.9800 },
            { name: "Orhaneli İlçe Terminali", lat: 39.9100, lng: 28.9850 },
            { name: "Kocasu Rafting Parkuru Tesisi", lat: 39.9050, lng: 28.9950 }
        ],
        pathCoords: [
            [40.2055, 29.0220], [40.1700, 28.9800], [40.1200, 28.9600], [40.0600, 28.9700],
            [40.0300, 28.9800], [39.9500, 28.9800], [39.9100, 28.9850], [39.9050, 28.9950]
        ]
    },
    {
        id: "line-m1",
        code: "M1 BursaRay",
        name: "Emek ➔ Acemler ➔ Şehreküstü ➔ Arabayatağı",
        type: "Metro",
        color: "#dc2626",
        frequency: "Her 6 dk",
        intervalMin: 6,
        firstLastTime: "06:00 - 00:15",
        stops: [
            { name: "Emek", lat: 40.2620, lng: 28.9410 },
            { name: "Korupark", lat: 40.2450, lng: 28.9550 },
            { name: "Organize Sanayi", lat: 40.2300, lng: 28.9800 },
            { name: "Paşaçiftliği (Downtown)", lat: 40.2100, lng: 29.0150 },
            { name: "Acemler", lat: 40.2055, lng: 29.0220 },
            { name: "Merinos", lat: 40.1980, lng: 29.0450 },
            { name: "Şehreküstü (Ulu Cami)", lat: 40.1855, lng: 29.0595 },
            { name: "Demirtaşpaşa (Panorama)", lat: 40.1895, lng: 29.0760 },
            { name: "Arabayatağı", lat: 40.1920, lng: 29.1300 }
        ],
        pathCoords: [
            [40.2620, 28.9410], [40.2450, 28.9550], [40.2300, 28.9800], [40.2100, 29.0150],
            [40.2055, 29.0220], [40.1980, 29.0450], [40.1855, 29.0595], [40.1895, 29.0760],
            [40.1920, 29.1300]
        ]
    },
    {
        id: "line-m2",
        code: "M2 BursaRay",
        name: "Üniversite ➔ FSM ➔ Acemler ➔ Şehreküstü ➔ Kestel",
        type: "Metro",
        color: "#2563eb",
        frequency: "Her 6 dk",
        intervalMin: 6,
        firstLastTime: "06:00 - 00:15",
        stops: [
            { name: "Üniversite (Görükle)", lat: 40.2240, lng: 28.8475 },
            { name: "Küçük Sanayi", lat: 40.2180, lng: 28.9350 },
            { name: "FSM", lat: 40.2140, lng: 28.9780 },
            { name: "Nilüfer", lat: 40.2100, lng: 28.9950 },
            { name: "Acemler", lat: 40.2055, lng: 29.0220 },
            { name: "Merinos", lat: 40.1980, lng: 29.0450 },
            { name: "Şehreküstü", lat: 40.1855, lng: 29.0595 },
            { name: "Gökdere", lat: 40.1880, lng: 29.0820 },
            { name: "Cumalıkızık", lat: 40.1870, lng: 29.1650 },
            { name: "Kestel", lat: 40.1920, lng: 29.2150 }
        ],
        pathCoords: [
            [40.2240, 28.8475], [40.2180, 28.9350], [40.2140, 28.9780], [40.2100, 28.9950],
            [40.2055, 29.0220], [40.1980, 29.0450], [40.1855, 29.0595], [40.1880, 29.0820],
            [40.1870, 29.1650], [40.1920, 29.2150]
        ]
    }
];

// 2. GEZİLECEK YERLER & GÖRSEL ULAŞIM ZİNCİRLERİ
const PLACES_DATA = [
    {
        id: "place-golyazi",
        name: "Gölyazı Köyü (Uluabat Gölü & Ağlayan Çınar)",
        category: "doga",
        categoryName: "Göl & Ada",
        icon: "🌅",
        lat: 40.1610,
        lng: 28.6775,
        associatedLineId: "line-5g",
        busCode: "5/G",
        busColor: "#16a34a",
        boardingStation: "Üniversite Metro İstasyonu",
        dropoffStation: "Gölyazı Köy Meydanı",
        frequency: "Her 20 dk",
        desc: "Göl üzerinde yüzen yarımada köyü, sandal turları, Ağlayan Çınar ve gün batımı.",
        transitChain: [
            { icon: "fa-train-subway", badge: "M2 Metro", text: "Üniversite (18 dk)", color: "bg-blue-600 text-white" },
            { icon: "fa-bus", badge: "5/G Otobüs", text: "Gölyazı (22 dk)", color: "bg-emerald-600 text-white" },
            { icon: "fa-flag-checkered", text: "Gölyazı Meydanı", color: "bg-slate-900 text-amber-400 font-bold" }
        ],
        transit: "BursaRay M2 ile Üniversite İstasyonu'na gelin, çıkıştaki 5/G otobüsüyle doğrudan Gölyazı'ya varın."
    },
    {
        id: "place-cumalikizik",
        name: "Cumalıkızık Köyü (UNESCO Mirası)",
        category: "tarih",
        categoryName: "Tarihi Köy",
        icon: "🏘️",
        lat: 40.1747,
        lng: 29.1706,
        associatedLineId: "line-d10",
        busCode: "D/10",
        busColor: "#9333ea",
        boardingStation: "Cumalıkızık Metro Durağı",
        dropoffStation: "Tarihi Köy Meydanı",
        frequency: "Her 10 dk",
        desc: "700 yıllık Osmanlı mimarisi, rengarenk cumbalı evler ve taş sokaklar.",
        transitChain: [
            { icon: "fa-train-subway", badge: "M2 Metro", text: "Cumalıkızık İst. (14 dk)", color: "bg-blue-600 text-white" },
            { icon: "fa-van-shuttle", badge: "D/10 Minibüs", text: "Köy Servisi (5 dk)", color: "bg-purple-600 text-white" },
            { icon: "fa-flag-checkered", text: "Tarihi Meydan", color: "bg-slate-900 text-amber-400 font-bold" }
        ],
        transit: "BursaRay M2 Cumalıkızık durağından D/10 köy minibüsüne binerek 5 dakikada meydana ulaşın."
    },
    {
        id: "place-mudanya-kordon",
        name: "Mudanya Mütareke Evi & Kordon",
        category: "sahil",
        categoryName: "Sahil & Kordon",
        icon: "🌊",
        lat: 40.3755,
        lng: 28.8830,
        associatedLineId: "line-1m",
        busCode: "1/M (veya F/3)",
        busColor: "#0284c7",
        boardingStation: "Emek Metrosu (1/M) veya Heykel (F/3)",
        dropoffStation: "Mudanya BUDO İskelesi & Kordon",
        frequency: "Her 12 dk",
        desc: "Geniş sahil kordonu, tarihi Mütareke Binası müzesi ve deniz esintisi.",
        transitChain: [
            { icon: "fa-train-subway", badge: "M1 Metro", text: "Emek İstasyonu (16 dk)", color: "bg-rose-600 text-white" },
            { icon: "fa-bus", badge: "1/M Otobüs", text: "Mudanya Kordon (15 dk)", color: "bg-sky-600 text-white" },
            { icon: "fa-flag-checkered", text: "Mudanya İskelesi", color: "bg-slate-900 text-amber-400 font-bold" }
        ],
        transit: "Emek İstasyonu'ndan 1/M veya Heykel'den F/3 Hızlı Ekspres otobüsü ile Mudanya Kordon'a gelin."
    },
    {
        id: "place-tirilye",
        name: "Trilye (Zeytinbağı & Taş Mektep)",
        category: "sahil",
        categoryName: "Sahil Kasabası",
        icon: "⚓",
        lat: 40.3885,
        lng: 28.7950,
        associatedLineId: "line-trilye",
        busCode: "1/M + Trilye Minibüsü",
        busColor: "#ea580c",
        boardingStation: "Mudanya İskelesi Önü",
        dropoffStation: "Trilye Liman Meydanı",
        frequency: "Her 15 dk",
        desc: "Tarihi Rum taş evleri, asırlık Taş Mektep ve zeytinyağı butikleri.",
        transitChain: [
            { icon: "fa-bus", badge: "1/M Otobüs", text: "Mudanya İskelesi (15 dk)", color: "bg-sky-600 text-white" },
            { icon: "fa-van-shuttle", badge: "TRİLYE", text: "Sahil Minibüsü (15 dk)", color: "bg-amber-600 text-white" },
            { icon: "fa-flag-checkered", text: "Trilye Limanı", color: "bg-slate-900 text-amber-400 font-bold" }
        ],
        transit: "Mudanya İskelesi önünden kalkan Trilye minibüsleriyle 15 dakikada sahildesiniz."
    },
    {
        id: "place-orhaneli-rafting",
        name: "Orhaneli Kocasu Rafting Parkuru",
        category: "adrenalin",
        categoryName: "Rafting",
        icon: "🚣",
        lat: 39.9050,
        lng: 28.9950,
        associatedLineId: "line-orhaneli",
        busCode: "ORHANELİ MİNİBÜSÜ",
        busColor: "#d97706",
        boardingStation: "Acemler Aktarma İstasyonu",
        dropoffStation: "Kocasu Rafting Parkuru Tesisleri",
        frequency: "Her 30 dk",
        desc: "Marmara'nın tek ve en uzun rafting parkuru! 8.5 km uzunluk ve kanyon doğası.",
        transitChain: [
            { icon: "fa-train-subway", badge: "M1/M2", text: "Acemler İstasyonu (10 dk)", color: "bg-blue-600 text-white" },
            { icon: "fa-van-shuttle", badge: "ORHANELİ", text: "İlçe Minibüsü (40 dk)", color: "bg-amber-600 text-white" },
            { icon: "fa-flag-checkered", text: "Rafting Parkuru", color: "bg-slate-900 text-amber-400 font-bold" }
        ],
        transit: "Acemler İstasyonu Dağ İlçeleri peronundan Orhaneli minibüsüne binin."
    },
    {
        id: "place-nefes-dagyenice",
        name: "Nefes Dağyenice Macera Parkı",
        category: "adrenalin",
        categoryName: "Macera Parkı",
        icon: "🎢",
        lat: 40.1180,
        lng: 28.9160,
        associatedLineId: "line-b20a",
        busCode: "B/20-A",
        busColor: "#15803d",
        boardingStation: "Acemler İstasyonu",
        dropoffStation: "Dağyenice Nefes Park Durağı",
        frequency: "Her 35 dk",
        desc: "Göl üstü zipline, kano, dev salıncak ve macera parkurları.",
        transitChain: [
            { icon: "fa-train-subway", badge: "M1/M2", text: "Acemler İstasyonu (10 dk)", color: "bg-blue-600 text-white" },
            { icon: "fa-bus", badge: "B/20-A Otobüs", text: "Dağyenice (25 dk)", color: "bg-emerald-700 text-white" },
            { icon: "fa-flag-checkered", text: "Nefes Dağyenice", color: "bg-slate-900 text-amber-400 font-bold" }
        ],
        transit: "Acemler İstasyonu'ndan B/20-A Dağyenice otobüsüne binin."
    },
    {
        id: "place-ulu-cami",
        name: "Bursa Ulu Camii & Kapalı Çarşı",
        category: "tarih",
        categoryName: "Tarihi Cami",
        icon: "🕌",
        lat: 40.1834,
        lng: 29.0614,
        associatedLineId: "line-1a",
        busCode: "1/A (veya Şehreküstü Metro)",
        busColor: "#2563eb",
        boardingStation: "Şehreküstü Metro",
        dropoffStation: "Ulu Cami & Heykel",
        frequency: "Her 10 dk",
        desc: "20 kubbeli şaheser, iç şadırvan ve hat sanatı levhaları.",
        transitChain: [
            { icon: "fa-bus", badge: "1/A Otobüs", text: "Ulu Cami Durağı (8 dk)", color: "bg-blue-600 text-white" },
            { icon: "fa-flag-checkered", text: "Ulu Cami Girişi", color: "bg-slate-900 text-amber-400 font-bold" }
        ],
        transit: "Şehreküstü metrosundan 3 dk yürüyüş veya 1/A otobüsü."
    },
    {
        id: "place-koza-han",
        name: "Koza Han (Közde Türk Kahvesi)",
        category: "tarih",
        categoryName: "Tarihi Han",
        icon: "☕",
        lat: 40.1842,
        lng: 29.0635,
        associatedLineId: "line-1a",
        busCode: "1/A / 38",
        busColor: "#2563eb",
        boardingStation: "Heykel 1 Durağı",
        dropoffStation: "Koza Han Girişi",
        frequency: "Her 8 dk",
        desc: "1491 yapımı tarihi ipek hanı ve asırlık çınarlar altı kahve keyfi.",
        transitChain: [
            { icon: "fa-train-subway", badge: "M1/M2", text: "Şehreküstü Metrosu (6 dk)", color: "bg-blue-600 text-white" },
            { icon: "fa-flag-checkered", text: "Koza Han Avlusu", color: "bg-slate-900 text-amber-400 font-bold" }
        ],
        transit: "Heykel 1 durağından 2 dakika yürüyerek tarihi taç kapıdan girin."
    },
    {
        id: "place-tophane",
        name: "Tophane Saat Kulesi & Türbeler",
        category: "tarih",
        categoryName: "Seyir Terası",
        icon: "🕰️",
        lat: 40.1878,
        lng: 29.0575,
        associatedLineId: "line-1a",
        busCode: "1/A",
        busColor: "#2563eb",
        boardingStation: "Şehreküstü İstasyonu",
        dropoffStation: "Tophane Park Girişi",
        frequency: "Her 8 dk",
        desc: "Osman Gazi & Orhan Gazi türbeleri ve panoramik şehir manzarası.",
        transitChain: [
            { icon: "fa-train-subway", badge: "M1/M2", text: "Şehreküstü Metrosu", color: "bg-blue-600 text-white" },
            { icon: "fa-flag-checkered", text: "Tophane Seyir Terası", color: "bg-slate-900 text-amber-400 font-bold" }
        ],
        transit: "Şehreküstü metro çıkışından Tophane merdivenlerini çıkarak ulaşın."
    },
    {
        id: "place-teleferik",
        name: "Bursa Teleferik & Uludağ",
        category: "doga",
        categoryName: "Teleferik",
        icon: "🚠",
        lat: 40.1680,
        lng: 29.0880,
        associatedLineId: "line-f3",
        busCode: "F/3",
        busColor: "#0d9488",
        boardingStation: "Heykel / Setbaşı",
        dropoffStation: "Teferrüç İstasyonu",
        frequency: "Her 20 dk",
        desc: "Dünyanın en uzun teleferik hattı (9 km) ile Uludağ zirveye çıkış.",
        transitChain: [
            { icon: "fa-bus", badge: "F/3 Otobüs", text: "Teferrüç İst. (12 dk)", color: "bg-teal-600 text-white" },
            { icon: "fa-cable-car", badge: "TELEFERİK", text: "Uludağ Zirve (22 dk)", color: "bg-indigo-600 text-white" },
            { icon: "fa-flag-checkered", text: "Uludağ Oteller", color: "bg-slate-900 text-amber-400 font-bold" }
        ],
        transit: "Heykel veya Setbaşı'ndan F/3 otobüsüne binip Teferrüç İstasyonunda inin."
    },
    {
        id: "place-saitabat",
        name: "Saitabat Şelalesi & Derekızık",
        category: "doga",
        categoryName: "Şelale",
        icon: "💧",
        lat: 40.1550,
        lng: 29.2510,
        associatedLineId: "line-d19",
        busCode: "D/19",
        busColor: "#0891b2",
        boardingStation: "Kestel Metrosu",
        dropoffStation: "Saitabat Şelalesi",
        frequency: "Her 25 dk",
        desc: "Kanyon şelalesi, köy kadınları derneği kahvaltısı ve doğa.",
        transitChain: [
            { icon: "fa-train-subway", badge: "M2 Metro", text: "Kestel İstasyon (20 dk)", color: "bg-blue-600 text-white" },
            { icon: "fa-van-shuttle", badge: "D/19 Minibüs", text: "Saitabat (15 dk)", color: "bg-cyan-600 text-white" },
            { icon: "fa-flag-checkered", text: "Saitabat Şelalesi", color: "bg-slate-900 text-amber-400 font-bold" }
        ],
        transit: "BursaRay M2 Kestel son duraktan D/19 minibüsüne aktarma yapın."
    },
    {
        id: "place-suuctu",
        name: "Suuçtu Şelalesi Tabiat Parkı",
        category: "doga",
        categoryName: "Şelale",
        icon: "🌊",
        lat: 39.9830,
        lng: 28.3840,
        associatedLineId: "line-38",
        busCode: "38 ➔ M.Kemalpaşa",
        busColor: "#7c3aed",
        boardingStation: "Bursa Şehirlerarası Terminali",
        dropoffStation: "Suuçtu Şelale Parkı",
        frequency: "Her 30 dk",
        desc: "38 metre yüksekten dökülen dev şelale ve kayın ormanları.",
        transitChain: [
            { icon: "fa-bus", badge: "38 Otobüs", text: "Bursa Terminal (18 dk)", color: "bg-purple-600 text-white" },
            { icon: "fa-van-shuttle", badge: "M.K.PAŞA", text: "İlçe Minibüsü (45 dk)", color: "bg-amber-600 text-white" },
            { icon: "fa-flag-checkered", text: "Suuçtu Şelalesi", color: "bg-slate-900 text-amber-400 font-bold" }
        ],
        transit: "Terminalden Mustafakemalpaşa minibüslerine binin, oradan Suuçtu dolmuşlarına geçin."
    },
    {
        id: "place-iskender-tarihi",
        name: "Tarihi Kebapçı İskender (Mavi Dükkan)",
        category: "lezzet",
        categoryName: "Gastronomi",
        icon: "🥩",
        lat: 40.1838,
        lng: 29.0645,
        associatedLineId: "line-1a",
        busCode: "1/A / 38",
        busColor: "#2563eb",
        boardingStation: "Heykel 1 Durağı",
        dropoffStation: "Tayyare Kültür Merkezi Yanı",
        frequency: "Her 8 dk",
        desc: "1867'den beri hakiki tereyağlı Bursa İskender Kebabı.",
        transitChain: [
            { icon: "fa-train-subway", badge: "M1/M2", text: "Şehreküstü (6 dk)", color: "bg-blue-600 text-white" },
            { icon: "fa-flag-checkered", text: "Tarihi İskender", color: "bg-slate-900 text-amber-400 font-bold" }
        ],
        transit: "Heykel Atatürk Anıtı arkasında, Tayyare Kültür Merkezi bitişiğinde yer alır."
    },
    {
        id: "place-kayhan-kofte",
        name: "Tarihi Kayhan Çarşısı (Pideli Köfte)",
        category: "lezzet",
        categoryName: "Gastronomi",
        icon: "🥘",
        lat: 40.1865,
        lng: 29.0685,
        associatedLineId: "line-1a",
        busCode: "1/A",
        busColor: "#2563eb",
        boardingStation: "Demirtaşpaşa Metro İstasyonu",
        dropoffStation: "Kayhan Çarşısı",
        frequency: "Her 10 dk",
        desc: "Kızgın tereyağı ve tırnak pideyle Bursa'nın ünlü Pideli Köftesi.",
        transitChain: [
            { icon: "fa-train-subway", badge: "M1/M2", text: "Demirtaşpaşa (5 dk)", color: "bg-blue-600 text-white" },
            { icon: "fa-flag-checkered", text: "Kayhan Çarşısı", color: "bg-slate-900 text-amber-400 font-bold" }
        ],
        transit: "Demirtaşpaşa metro durağında inip 2 dakika yürüyün."
    }
];

const POPULAR_HUBS = [
    { id: "hub-gps", name: "📍 Mevcut Canlı GPS Konumum", lat: 40.1828, lng: 29.0667, isGPS: true },
    { id: "hub-heykel", name: "🕌 Heykel / Ulu Cami", lat: 40.1828, lng: 29.0667 },
    { id: "hub-gorukle", name: "🎓 Görükle / Üniversite", lat: 40.2240, lng: 28.8475 },
    { id: "hub-fsm", name: "☕ FSM Bulvarı", lat: 40.2140, lng: 28.9780 },
    { id: "hub-acemler", name: "🔄 Acemler Aktarma", lat: 40.2055, lng: 29.0220 },
    { id: "hub-emek", name: "🚇 Emek Metrosu", lat: 40.2620, lng: 28.9410 },
    { id: "hub-terminal", name: "🚌 Bursa Şehirlerarası Terminal", lat: 40.2580, lng: 29.0535 },
    { id: "hub-mudanya", name: "⚓ Mudanya BUDO", lat: 40.3752, lng: 28.8820 }
];

// 3. UYGULAMA DURUMU (STATE)
let map;
let lightTileLayer;
let darkTileLayer;
let userCoords = { lat: 40.1828, lng: 29.0667, accuracy: 10, isRealGPS: false, address: "Bursa Merkez" };
let userMarker = null;
let userAccuracyCircle = null;
let customPointA = null;
let customPointB = null;
let routeLine = null;
let markerA = null;
let markerB = null;
let activeLineLayerGroup;
let isMapClickMode = false;
let currentTravelMode = 'transit';
let currentCategory = 'all';
let isRouteActive = false;
let isDarkMode = false;
let gpsWatchId = null;
let isMobileDrawerExpanded = false;
let simulatedVehicles = [];

// 4. BAŞLANGIÇ & HARİTA KURULUMU
document.addEventListener("DOMContentLoaded", () => {
    initMap();
    populateHubDropdowns();
    renderPlacesList();
    renderLiveBusDepartureBoard();
    initSimulatedVehicles();
    startClockAndDepartureTicker();
    requestRealGPS(true);
});

function initMap() {
    map = L.map("map", {
        zoomControl: false,
        attributionControl: false
    }).setView([userCoords.lat, userCoords.lng], 13);

    L.control.zoom({ position: 'bottomright' }).addTo(map);

    lightTileLayer = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        subdomains: ['a', 'b', 'c']
    });

    darkTileLayer = L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
        maxZoom: 19,
        subdomains: 'abcd'
    });

    lightTileLayer.addTo(map);

    activeLineLayerGroup = L.layerGroup().addTo(map);

    map.on('click', onMapClicked);
    updateUserMarker();
}

function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    const body = document.body;
    const icon = document.getElementById("dark-mode-icon");

    if (isDarkMode) {
        body.classList.add("dark-mode");
        if (map.hasLayer(lightTileLayer)) map.removeLayer(lightTileLayer);
        darkTileLayer.addTo(map);
        if (icon) icon.className = "fa-solid fa-sun text-amber-400";
    } else {
        body.classList.remove("dark-mode");
        if (map.hasLayer(darkTileLayer)) map.removeLayer(darkTileLayer);
        lightTileLayer.addTo(map);
        if (icon) icon.className = "fa-solid fa-moon text-amber-300";
    }
}

// 5. SEKME YÖNETİMİ (TAB SWITCHER)
function switchAppTab(tabId) {
    const panels = ['ab-route', 'live-eta', 'places', 'official-burulas'];
    panels.forEach(p => {
        const el = document.getElementById(`panel-${p}`);
        const btn = document.getElementById(`tab-btn-${p}`);
        if (el) el.classList.add('hidden');
        if (btn) {
            btn.classList.remove('active-tab-btn', 'bg-slate-900', 'text-white');
            btn.classList.add('text-slate-600');
        }
    });

    const activePanel = document.getElementById(`panel-${tabId}`);
    const activeBtn = document.getElementById(`tab-btn-${tabId}`);
    if (activePanel) activePanel.classList.remove('hidden');
    if (activeBtn) {
        activeBtn.classList.add('active-tab-btn', 'bg-slate-900', 'text-white');
        activeBtn.classList.remove('text-slate-600');
    }
}

function toggleMobileDrawer() {
    const drawer = document.getElementById("main-drawer");
    if (!drawer) return;
    isMobileDrawerExpanded = !isMobileDrawerExpanded;
    if (isMobileDrawerExpanded) {
        drawer.style.height = "85vh";
    } else {
        drawer.style.height = "50vh";
    }
    setTimeout(() => { if (map) map.invalidateSize(); }, 300);
}

// 6. CANLI OTOBÜS VARIŞ PANOSU MOTORU (BURULAŞ STYLE LIVE ETA BOARD)
function calculateBusEtaForLine(intervalMin, offsetSec = 0) {
    const nowSec = Math.floor(Date.now() / 1000) + offsetSec;
    const cycleSec = intervalMin * 60;
    const remainingSec = cycleSec - (nowSec % cycleSec);
    const mins = Math.floor(remainingSec / 60);
    const secs = remainingSec % 60;
    return { mins, secs, totalSec: remainingSec };
}

function renderLiveBusDepartureBoard(query = "") {
    const container = document.getElementById("bus-departure-board-list");
    if (!container) return;

    container.innerHTML = "";
    const filterText = query.toLowerCase().trim();

    const filtered = BUS_LINES_DATA.filter(line => {
        if (!filterText) return true;
        return line.code.toLowerCase().includes(filterText) ||
               line.name.toLowerCase().includes(filterText) ||
               line.stops.some(s => s.name.toLowerCase().includes(filterText));
    });

    filtered.forEach(line => {
        const eta = calculateBusEtaForLine(line.intervalMin || 15);
        const card = document.createElement("div");
        card.className = "bg-slate-950 border border-slate-800 hover:border-slate-700 p-3 rounded-xl shadow transition cursor-pointer flex flex-col gap-2";
        card.setAttribute("data-line-id", line.id);
        card.setAttribute("data-interval", line.intervalMin || 15);

        let badgeClass = "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40";
        let statusText = "🟢 Durağa Yanaşıyor";
        if (eta.mins > 8) {
            badgeClass = "bg-amber-500/20 text-amber-400 border border-amber-500/40";
            statusText = `🟡 Yolda (${Math.max(1, Math.round(eta.mins / 3))} durak geride)`;
        } else if (eta.mins > 2) {
            badgeClass = "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30";
            statusText = "🟢 Yaklaşıyor";
        }

        card.innerHTML = `
            <div class="flex items-center justify-between">
                <div class="flex items-center space-x-2">
                    <span style="background-color: ${line.color};" class="px-2 py-1 rounded font-mono font-black text-white text-xs shadow">
                        ${line.code}
                    </span>
                    <div>
                        <h4 class="text-xs font-bold text-white leading-tight">${line.name}</h4>
                        <span class="text-[10px] text-slate-400">${line.type} • ${line.frequency}</span>
                    </div>
                </div>
                <div class="text-right">
                    <span class="text-sm font-black font-mono text-emerald-400 eta-countdown-val" data-line="${line.id}">
                        ${eta.mins} dk ${eta.secs}s
                    </span>
                    <span class="text-[9px] block text-slate-400 font-mono">sonra</span>
                </div>
            </div>

            <div class="flex items-center justify-between pt-1 border-t border-slate-800 text-[10px]">
                <span class="${badgeClass} px-1.5 py-0.5 rounded font-mono font-semibold">${statusText}</span>
                <span class="text-blue-400 hover:underline flex items-center gap-1 font-bold">
                    <i class="fa-solid fa-map-location-dot"></i> Haritada İzle
                </span>
            </div>
        `;

        card.onclick = () => {
            showBusLineOnMap(line.id, true);
        };

        container.appendChild(card);
    });
}

function filterBusDepartureBoard() {
    const val = document.getElementById("bus-board-search").value;
    renderLiveBusDepartureBoard(val);
}

function startClockAndDepartureTicker() {
    setInterval(() => {
        // Update Board Digital Clock
        const clock = document.getElementById("live-board-clock");
        if (clock) {
            const now = new Date();
            clock.textContent = now.toLocaleTimeString('tr-TR');
        }

        // Tick ETA countdowns
        document.querySelectorAll(".eta-countdown-val").forEach(el => {
            const lineId = el.getAttribute("data-line");
            const line = BUS_LINES_DATA.find(l => l.id === lineId);
            if (!line) return;

            const eta = calculateBusEtaForLine(line.intervalMin || 15);
            if (eta.mins === 0) {
                el.innerHTML = `<span class="text-emerald-300 animate-pulse font-black">GİRİŞ YAPIYOR (${eta.secs}s)</span>`;
            } else {
                el.textContent = `${eta.mins} dk ${eta.secs}s`;
            }
        });
    }, 1000);
}

// 7. GEZİLECEK YERLER & FİLTRELER
function renderPlacesList(filterQuery = "") {
    const container = document.getElementById("places-container");
    if (!container) return;
    container.innerHTML = "";

    const query = filterQuery.toLowerCase().trim();

    const filtered = PLACES_DATA.filter(place => {
        const matchesCategory = (currentCategory === "all" || place.category === currentCategory);
        const matchesQuery = !query || place.name.toLowerCase().includes(query) || place.desc.toLowerCase().includes(query);
        return matchesCategory && matchesQuery;
    });

    filtered.forEach(place => {
        const distKm = calculateDistance(userCoords.lat, userCoords.lng, place.lat, place.lng);
        const card = document.createElement("div");
        card.className = "bg-white p-3 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition space-y-2";
        
        let chainHtml = "";
        if (place.transitChain) {
            chainHtml = '<div class="flex items-center gap-1 overflow-x-auto py-1 custom-scrollbar text-[10px]">';
            place.transitChain.forEach((st, i) => {
                chainHtml += `<span class="px-1.5 py-0.5 rounded ${st.color || 'bg-slate-100 text-slate-700'} whitespace-nowrap font-medium">${st.badge ? `<b class="mr-1">${st.badge}</b>` : ''}${st.text}</span>`;
                if (i < place.transitChain.length - 1) chainHtml += `<i class="fa-solid fa-angle-right text-slate-300 text-[9px]"></i>`;
            });
            chainHtml += '</div>';
        }

        card.innerHTML = `
            <div class="flex items-start justify-between">
                <div class="flex items-center space-x-2">
                    <span class="text-xl">${place.icon}</span>
                    <div>
                        <h4 class="text-xs font-bold text-slate-900 leading-tight">${place.name}</h4>
                        <span class="text-[10px] text-slate-500">${place.categoryName} • <b>${distKm.toFixed(1)} km</b></span>
                    </div>
                </div>
                <span class="bg-blue-50 text-blue-700 text-[10px] font-bold px-2 py-0.5 rounded-full font-mono">${place.busCode || 'Ulaşım'}</span>
            </div>
            <p class="text-[11px] text-slate-600 line-clamp-2">${place.desc}</p>
            ${chainHtml}
            <div class="flex gap-2 pt-1 border-t border-slate-100">
                <button onclick="setDestinationAndRoute('${place.id}')" class="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white py-1.5 rounded-lg text-xs font-bold shadow flex items-center justify-center gap-1 transition">
                    <i class="fa-solid fa-diamond-turn-right"></i> Rota Çiz
                </button>
                <button onclick="focusPlaceOnMap('${place.id}')" class="bg-slate-100 hover:bg-slate-200 text-slate-700 px-2.5 py-1.5 rounded-lg text-xs font-bold">
                    <i class="fa-solid fa-location-dot text-blue-600"></i>
                </button>
            </div>
        `;
        container.appendChild(card);
    });
}

function filterPlaces() {
    const val = document.getElementById("place-search-input").value;
    renderPlacesList(val);
}

function setCategory(cat) {
    currentCategory = cat;
    document.querySelectorAll(".cat-filter-btn").forEach(btn => {
        if (btn.getAttribute("data-cat") === cat) {
            btn.classList.add("active-cat", "bg-slate-900", "text-white");
            btn.classList.remove("bg-white", "text-slate-700");
        } else {
            btn.classList.remove("active-cat", "bg-slate-900", "text-white");
            btn.classList.add("bg-white", "text-slate-700");
        }
    });
    filterPlaces();
}

function focusPlaceOnMap(placeId) {
    const place = PLACES_DATA.find(p => p.id === placeId);
    if (!place) return;
    map.flyTo([place.lat, place.lng], 16, { duration: 1.0 });
    showFloatingPlaceCard(place);
}

function showFloatingPlaceCard(place) {
    const card = document.getElementById("floating-place-card");
    if (!card) return;
    document.getElementById("card-icon").textContent = place.icon;
    document.getElementById("card-title").textContent = place.name;
    document.getElementById("card-category").textContent = place.categoryName;
    document.getElementById("card-desc").textContent = place.desc;
    card.classList.remove("hidden");
}

function closeFloatingPlaceCard() {
    const card = document.getElementById("floating-place-card");
    if (card) card.classList.add("hidden");
}

function routeToSelectedPlace() {
    closeFloatingPlaceCard();
    calculateCustomABRoute();
    switchAppTab('ab-route');
}

// 8. GERÇEK YÜKSEK HASSASİYETLİ MOBİL GPS MOTORU (AKILLI HATA YÖNETİMİ)
let gpsFirstCenterDone = false;

function requestRealGPS(forceCenter = true) {
    const icon = document.getElementById("gps-status-icon");
    const label = document.getElementById("gps-status-label");
    if (icon) icon.className = "fa-solid fa-satellite-dish fa-spin text-amber-300";
    if (label) label.textContent = "Taranıyor...";

    if (!("geolocation" in navigator)) {
        showToastNotification("Cihazınızda GPS desteği bulunamadı.", "warning");
        return;
    }

    if (gpsWatchId !== null) {
        navigator.geolocation.clearWatch(gpsWatchId);
        gpsWatchId = null;
    }

    navigator.geolocation.getCurrentPosition(
        (pos) => {
            handleGPSPositionSuccess(pos, forceCenter && !gpsFirstCenterDone);
        },
        (err) => {
            console.log("Ön konum:", err.message);
        },
        { enableHighAccuracy: false, timeout: 5000, maximumAge: 60000 }
    );

    gpsWatchId = navigator.geolocation.watchPosition(
        (pos) => {
            handleGPSPositionSuccess(pos, forceCenter && !gpsFirstCenterDone);
            gpsFirstCenterDone = true;
        },
        (err) => {
            console.warn("GPS:", err.code, err.message);
            if (err.code === 1) { // PERMISSION_DENIED
                if (icon) icon.className = "fa-solid fa-location-crosshairs text-slate-400";
                if (label) label.textContent = "Konum İzni Ver";
                showToastNotification("⚠️ Konum izni verilmedi. Tarayıcı ayarlarından açabilirsiniz.", "warning");
            } else if (err.code === 2 || err.code === 3) {
                if (label) label.textContent = "Uydu Aranıyor...";
            }
        },
        { enableHighAccuracy: true, timeout: 30000, maximumAge: 0 }
    );
}

function handleGPSPositionSuccess(pos, centerMap = true) {
    userCoords.lat = pos.coords.latitude;
    userCoords.lng = pos.coords.longitude;
    userCoords.accuracy = Math.round(pos.coords.accuracy || 5);
    userCoords.isRealGPS = true;

    updateUserMarker();

    if (centerMap && map) {
        map.flyTo([userCoords.lat, userCoords.lng], 16, { animate: true, duration: 1.0 });
    }

    reverseGeocode(userCoords.lat, userCoords.lng);
    renderPlacesList(document.getElementById("place-search-input") ? document.getElementById("place-search-input").value : "");

    const icon = document.getElementById("gps-status-icon");
    const label = document.getElementById("gps-status-label");
    if (icon) icon.className = "fa-solid fa-location-crosshairs text-emerald-400";
    if (label) label.textContent = `Canlı GPS (±${userCoords.accuracy}m)`;

    showToastNotification(`📍 Gerçek konumunuz alındı (±${userCoords.accuracy}m)`, "success");
}

function showToastNotification(message, type = "info") {
    let toast = document.getElementById("app-toast");
    if (!toast) {
        toast = document.createElement("div");
        toast.id = "app-toast";
        toast.className = "fixed top-12 left-1/2 transform -translate-x-1/2 z-50 px-3.5 py-1.5 rounded-xl shadow-2xl text-xs font-bold text-white transition-all duration-300 pointer-events-none flex items-center gap-1.5";
        document.body.appendChild(toast);
    }

    if (type === "success") {
        toast.style.backgroundColor = "#059669";
    } else if (type === "warning") {
        toast.style.backgroundColor = "#d97706";
    } else {
        toast.style.backgroundColor = "#0f172a";
    }

    toast.textContent = message;
    toast.style.opacity = "1";
    toast.style.transform = "translate(-50%, 0)";

    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translate(-50%, -10px)";
    }, 3500);
}

function reverseGeocode(lat, lng) {
    fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}&accept-language=tr`)
        .then(r => r.json())
        .then(data => {
            if (data && data.address) {
                const road = data.address.road || data.address.pedestrian || "";
                const town = data.address.town || data.address.city_district || "Bursa";
                userCoords.address = [road, town].filter(Boolean).join(', ') || "Bursa";
            }
        }).catch(() => {});
}

function simulateGPS(lat, lng, name) {
    if (gpsWatchId !== null) {
        navigator.geolocation.clearWatch(gpsWatchId);
        gpsWatchId = null;
    }
    customPointA = null;
    userCoords.lat = lat;
    userCoords.lng = lng;
    userCoords.accuracy = 3;
    userCoords.isRealGPS = false;
    userCoords.address = name;

    updateUserMarker();
    map.flyTo([lat, lng], 15, { duration: 1.0 });

    if (isRouteActive && document.getElementById("select-point-a").value === "hub-gps") {
        calculateCustomABRoute();
    }
    showToastNotification(`📍 Konum: ${name} olarak ayarlandı`, "info");
}

function updateUserMarker() {
    if (!map) return;
    if (userMarker) map.removeLayer(userMarker);
    if (userAccuracyCircle) map.removeLayer(userAccuracyCircle);

    const pulseIcon = L.divIcon({
        className: 'user-pulse-wrap',
        html: '<div class="user-marker-pulse cursor-grab active:cursor-grabbing"></div>',
        iconSize: [20, 20],
        iconAnchor: [10, 10]
    });

    userMarker = L.marker([userCoords.lat, userCoords.lng], { 
        icon: pulseIcon, 
        zIndexOffset: 1500,
        draggable: true
    }).addTo(map);

    userMarker.bindTooltip(`<b>📍 Canlı Konumunuz</b><br>${userCoords.address}<br><span class="text-[10px] text-emerald-600 font-bold">🎯 İnce ayar için pini sürükleyebilirsiniz</span>`, { direction: 'top' });

    userMarker.on('dragend', (e) => {
        const newPos = e.target.getLatLng();
        userCoords.lat = newPos.lat;
        userCoords.lng = newPos.lng;
        userCoords.accuracy = 2;
        userCoords.isRealGPS = true;
        
        reverseGeocode(userCoords.lat, userCoords.lng);
        updateUserMarker();
        renderPlacesList(document.getElementById("place-search-input") ? document.getElementById("place-search-input").value : "");
        showToastNotification("🎯 Konumunuz el ile nokta atışı ayarlandı!", "success");
    });

    userAccuracyCircle = L.circle([userCoords.lat, userCoords.lng], {
        radius: Math.max(userCoords.accuracy || 10, 15),
        color: '#2563eb',
        fillColor: '#3b82f6',
        fillOpacity: 0.18,
        weight: 1.5
    }).addTo(map);
}

function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return (R * c);
}

// 9. GERÇEK ZAMANA KİLİTLİ OTOBÜS FİLO MOTORU
function prepareLinePathDistances() {
    BUS_LINES_DATA.forEach(line => {
        let total = 0;
        line.cumDistances = [0];
        for (let i = 0; i < line.pathCoords.length - 1; i++) {
            const p1 = line.pathCoords[i];
            const p2 = line.pathCoords[i + 1];
            const dMeters = calculateDistance(p1[0], p1[1], p2[0], p2[1]) * 1000;
            total += dMeters;
            line.cumDistances.push(total);
        }
        line.totalDistMeters = Math.max(total, 100);
    });
}

function getVehiclePositionAtTime(v, line, nowSec) {
    const cycleDist = line.totalDistMeters * 2;
    const speedMps = (v.speed || 40) * (1000 / 3600);
    const totalCycleTimeSec = cycleDist / speedMps;

    const currentCycleSec = (nowSec + v.timeOffsetSec) % totalCycleTimeSec;
    let targetDist = currentCycleSec * speedMps;
    let isReturnTrip = false;

    if (targetDist > line.totalDistMeters) {
        targetDist = (2 * line.totalDistMeters) - targetDist;
        isReturnTrip = true;
    }

    let segIdx = 0;
    for (let i = 0; i < line.cumDistances.length - 1; i++) {
        if (targetDist >= line.cumDistances[i] && targetDist <= line.cumDistances[i + 1]) {
            segIdx = i;
            break;
        }
    }

    const segStartDist = line.cumDistances[segIdx];
    const segEndDist = line.cumDistances[segIdx + 1] || line.totalDistMeters;
    const segLen = Math.max(segEndDist - segStartDist, 1);
    const segProgress = Math.min(Math.max((targetDist - segStartDist) / segLen, 0), 1);

    const p1 = line.pathCoords[segIdx];
    const p2 = line.pathCoords[segIdx + 1] || p1;

    const lat = p1[0] + (p2[0] - p1[0]) * segProgress;
    const lng = p1[1] + (p2[1] - p1[1]) * segProgress;

    return { lat, lng, isReturnTrip, segIdx };
}

function initSimulatedVehicles() {
    prepareLinePathDistances();

    simulatedVehicles = [
        { id: "veh-5g-1", lineId: "line-5g", code: "5/G", plate: "16 M 0482", color: "#16a34a", speed: 42, occupancy: "%45", timeOffsetSec: 120 },
        { id: "veh-1m-1", lineId: "line-1m", code: "1/M", plate: "16 BOI 92", color: "#0284c7", speed: 52, occupancy: "%60", timeOffsetSec: 340 },
        { id: "veh-1a-1", lineId: "line-1a", code: "1/A", plate: "16 M 3312", color: "#2563eb", speed: 34, occupancy: "%30", timeOffsetSec: 50 },
        { id: "veh-38-1", lineId: "line-38", code: "38", plate: "16 BOI 41", color: "#7c3aed", speed: 45, occupancy: "%75", timeOffsetSec: 210 },
        { id: "veh-b20a-1", lineId: "line-b20a", code: "B/20-A", plate: "16 M 2280", color: "#15803d", speed: 38, occupancy: "%40", timeOffsetSec: 460 },
        { id: "veh-d10-1", lineId: "line-d10", code: "D/10", plate: "16 M 0815", color: "#9333ea", speed: 28, occupancy: "%50", timeOffsetSec: 80 },
        { id: "veh-m1-1", lineId: "line-m1", code: "M1", plate: "BursaRay Tren #104", color: "#dc2626", speed: 65, occupancy: "%80", timeOffsetSec: 140 },
        { id: "veh-m2-1", lineId: "line-m2", code: "M2", plate: "BursaRay Tren #208", color: "#059669", speed: 60, occupancy: "%70", timeOffsetSec: 420 }
    ];

    const nowSec = Math.floor(Date.now() / 1000);

    simulatedVehicles.forEach(v => {
        const line = BUS_LINES_DATA.find(l => l.id === v.lineId);
        if (!line) return;

        const pos = getVehiclePositionAtTime(v, line, nowSec);
        v.lat = pos.lat;
        v.lng = pos.lng;

        const busIcon = L.divIcon({
            className: 'live-bus-vehicle',
            html: `<div style="background-color: ${v.color};" class="px-2 py-0.5 rounded-lg text-white font-mono font-bold text-[10px] shadow-lg border border-white flex items-center gap-1 cursor-pointer"><i class="fa-solid fa-bus text-[9px]"></i> ${v.code}</div>`,
            iconSize: [42, 22],
            iconAnchor: [21, 11]
        });

        v.marker = L.marker([v.lat, v.lng], { icon: busIcon, zIndexOffset: 800 }).addTo(map);
        v.marker.bindTooltip(`<b>🚌 Hat: ${v.code}</b><br><span class="text-[10px] text-slate-500 font-mono">Araç: ${v.plate} • Hız: ${v.speed} km/s</span>`);
        v.marker.on('click', () => {
            showBusLineOnMap(v.lineId);
        });
    });

    setInterval(() => {
        const currentNowSec = Date.now() / 1000;
        simulatedVehicles.forEach(v => {
            const line = BUS_LINES_DATA.find(l => l.id === v.lineId);
            if (!line) return;

            const pos = getVehiclePositionAtTime(v, line, currentNowSec);
            v.lat = pos.lat;
            v.lng = pos.lng;
            v.marker.setLatLng([v.lat, v.lng]);
        });
    }, 1000);
}

// 10. A'DAN B'YE GERÇEK YOL ROTA HESAPLAYICI (OSRM)
function populateHubDropdowns() {
    const selA = document.getElementById("select-point-a");
    const selB = document.getElementById("select-point-b");
    if (!selA || !selB) return;

    selA.innerHTML = "";
    selB.innerHTML = "";

    POPULAR_HUBS.forEach(h => {
        const optA = document.createElement("option");
        optA.value = h.id;
        optA.textContent = h.name;
        selA.appendChild(optA);

        const optB = document.createElement("option");
        optB.value = h.id;
        optB.textContent = h.name;
        selB.appendChild(optB);
    });

    const optGroupPlaces = document.createElement("optgroup");
    optGroupPlaces.label = "── 🏖️ GEZİLECEK YERLER ──";

    PLACES_DATA.forEach(p => {
        const opt = document.createElement("option");
        opt.value = p.id;
        opt.textContent = `${p.icon} ${p.name}`;
        optGroupPlaces.appendChild(opt);
    });

    selB.appendChild(optGroupPlaces);
    selB.value = "place-golyazi"; // Varsayılan hedef
}

function setPointAToUserGPS() {
    document.getElementById("select-point-a").value = "hub-gps";
    customPointA = null;
    requestRealGPS(true);
}

function setDestinationAndRoute(placeId) {
    document.getElementById("select-point-b").value = placeId;
    calculateCustomABRoute();
    switchAppTab('ab-route');
}

function setTravelMode(mode) {
    currentTravelMode = mode;
    ['transit', 'drive', 'walk'].forEach(m => {
        const btn = document.getElementById(`mode-btn-${m}`);
        if (btn) {
            if (m === mode) {
                btn.className = "flex-1 py-1.5 rounded-lg font-bold bg-slate-900 text-white shadow flex items-center justify-center gap-1";
            } else {
                btn.className = "flex-1 py-1.5 rounded-lg font-semibold bg-slate-100 text-slate-700 flex items-center justify-center gap-1";
            }
        }
    });
    if (isRouteActive) calculateCustomABRoute();
}

function triggerRouteCalculation() {
    calculateCustomABRoute();
}

function swapPointsAandB() {
    const selA = document.getElementById("select-point-a");
    const selB = document.getElementById("select-point-b");
    const tempVal = selA.value;
    selA.value = selB.value;
    selB.value = tempVal;

    const tempCustom = customPointA;
    customPointA = customPointB;
    customPointB = tempCustom;

    calculateCustomABRoute();
}

function toggleMapClickMode() {
    isMapClickMode = !isMapClickMode;
    const btn = document.getElementById("btn-map-click-mode");
    const indicator = document.getElementById("map-click-indicator");

    if (isMapClickMode) {
        if (btn) btn.className = "text-[11px] bg-blue-600 text-white font-bold px-2 py-0.5 rounded border border-blue-600 shadow";
        if (indicator) indicator.classList.remove("hidden");
    } else {
        if (btn) btn.className = "text-[11px] bg-slate-100 text-slate-700 font-bold px-2 py-0.5 rounded border border-slate-300";
        if (indicator) indicator.classList.add("hidden");
    }
}

function onMapClicked(e) {
    if (!isMapClickMode) return;
    const lat = e.latlng.lat;
    const lng = e.latlng.lng;

    if (!customPointA) {
        customPointA = { lat, lng, name: `Harita Noktası A (${lat.toFixed(3)}, ${lng.toFixed(3)})` };
        showToastNotification("🟢 Başlangıç Noktası (A) seçildi. Şimdi Hedef (B) noktasını tıklayın.", "info");
    } else {
        customPointB = { lat, lng, name: `Harita Noktası B (${lat.toFixed(3)}, ${lng.toFixed(3)})` };
        toggleMapClickMode();
        calculateCustomABRoute();
    }
}

function getResolvedPoint(pointKey, selectId, customPoint) {
    if (customPoint) return customPoint;
    const selVal = document.getElementById(selectId).value;

    if (selVal === "hub-gps") {
        return { lat: userCoords.lat, lng: userCoords.lng, name: userCoords.address || "Canlı GPS Konumum", isGPS: true };
    }

    const hub = POPULAR_HUBS.find(h => h.id === selVal);
    if (hub) return hub;

    const place = PLACES_DATA.find(p => p.id === selVal);
    if (place) return place;

    return { lat: userCoords.lat, lng: userCoords.lng, name: "Konum" };
}

function calculateCustomABRoute() {
    const pA = getResolvedPoint('A', 'select-point-a', customPointA);
    const pB = getResolvedPoint('B', 'select-point-b', customPointB);

    if (!pA || !pB) return;
    isRouteActive = true;

    if (routeLine) map.removeLayer(routeLine);
    if (markerA) map.removeLayer(markerA);
    if (markerB) map.removeLayer(markerB);
    activeLineLayerGroup.clearLayers();

    // Markers A and B
    const iconA = L.divIcon({
        className: 'point-marker-a',
        html: '<div class="w-6 h-6 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-[10px] shadow-lg border-2 border-white">A</div>',
        iconSize: [24, 24],
        iconAnchor: [12, 12]
    });
    const iconB = L.divIcon({
        className: 'point-marker-b',
        html: '<div class="w-6 h-6 rounded-full bg-rose-600 text-white font-bold flex items-center justify-center text-[10px] shadow-lg border-2 border-white">B</div>',
        iconSize: [24, 24],
        iconAnchor: [12, 12]
    });

    markerA = L.marker([pA.lat, pA.lng], { icon: iconA }).addTo(map).bindTooltip(`<b>Başlangıç:</b> ${pA.name}`);
    markerB = L.marker([pB.lat, pB.lng], { icon: iconB }).addTo(map).bindTooltip(`<b>Hedef:</b> ${pB.name}`);

    // Fallback line
    routeLine = L.polyline([[pA.lat, pA.lng], [pB.lat, pB.lng]], {
        color: '#2563eb',
        weight: 6,
        opacity: 0.9,
        lineCap: 'round'
    }).addTo(map);

    map.fitBounds(routeLine.getBounds(), { padding: [40, 40] });

    // OSRM True Road Routing
    const osrmProfile = (currentTravelMode === 'walk') ? 'foot' : 'driving';
    const osrmUrl = `https://router.project-osrm.org/route/v1/${osrmProfile}/${pA.lng},${pA.lat};${pB.lng},${pB.lat}?overview=full&geometries=geojson&steps=true`;

    fetch(osrmUrl)
        .then(res => res.json())
        .then(data => {
            if (data.routes && data.routes.length > 0) {
                const route = data.routes[0];
                const coords = route.geometry.coordinates.map(c => [c[1], c[0]]);

                if (routeLine) map.removeLayer(routeLine);
                routeLine = L.polyline(coords, {
                    color: currentTravelMode === 'transit' ? '#059669' : '#2563eb',
                    weight: 6,
                    opacity: 0.95,
                    lineCap: 'round',
                    lineJoin: 'round'
                }).addTo(map);

                map.fitBounds(routeLine.getBounds(), { padding: [40, 40] });

                const distKm = route.distance / 1000;
                const durationMins = Math.round(route.duration / 60);

                renderABRouteDirections(pA, pB, distKm, durationMins, route.legs[0].steps);
            }
        })
        .catch(() => {
            const straightDist = calculateDistance(pA.lat, pA.lng, pB.lat, pB.lng);
            renderABRouteDirections(pA, pB, straightDist, Math.round(straightDist * 2), []);
        });
}

function renderABRouteDirections(pA, pB, distKm, durationMins, steps) {
    const container = document.getElementById("ab-result-container");
    if (!container) return;

    container.innerHTML = `
        <div class="bg-white p-3 rounded-xl border border-slate-200 shadow-sm space-y-2 text-xs">
            <div class="flex items-center justify-between border-b border-slate-100 pb-2">
                <div>
                    <span class="text-[10px] text-slate-500 font-bold uppercase block">Tahmini Varış Süresi</span>
                    <b class="text-emerald-700 text-sm font-black">${durationMins} Dakika</b>
                </div>
                <div class="text-right">
                    <span class="text-[10px] text-slate-500 font-bold uppercase block">Mesafe</span>
                    <b class="text-slate-800 text-xs font-mono">${distKm.toFixed(1)} km</b>
                </div>
            </div>

            <div class="space-y-1 text-[11px]">
                <div class="flex items-center gap-1.5">
                    <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span class="font-bold text-slate-800 truncate">A: ${pA.name}</span>
                </div>
                <div class="flex items-center gap-1.5">
                    <span class="w-2 h-2 rounded-full bg-rose-500"></span>
                    <span class="font-bold text-slate-800 truncate">B: ${pB.name}</span>
                </div>
            </div>
        </div>
    `;

    // Transit details if destination is a place
    const matchedPlace = PLACES_DATA.find(p => p.name === pB.name || p.id === pB.id);
    if (matchedPlace && matchedPlace.transitChain) {
        const transitCard = document.createElement("div");
        transitCard.className = "bg-white p-3 rounded-xl border border-blue-200 shadow-sm space-y-2 text-xs";
        
        let chainHtml = '<div class="flex items-center gap-1 overflow-x-auto py-1 custom-scrollbar text-[10px]">';
        matchedPlace.transitChain.forEach((st, i) => {
            chainHtml += `<span class="px-1.5 py-0.5 rounded ${st.color || 'bg-slate-100 text-slate-700'} whitespace-nowrap font-medium">${st.badge ? `<b class="mr-1">${st.badge}</b>` : ''}${st.text}</span>`;
            if (i < matchedPlace.transitChain.length - 1) chainHtml += `<i class="fa-solid fa-angle-right text-slate-300 text-[9px]"></i>`;
        });
        chainHtml += '</div>';

        transitCard.innerHTML = `
            <div class="flex items-center gap-1 text-slate-900 font-bold">
                <i class="fa-solid fa-bus text-blue-600"></i> Toplu Taşıma Rehberi:
            </div>
            ${chainHtml}
            <p class="text-[11px] text-slate-600 pt-1">${matchedPlace.transit}</p>
        `;
        container.appendChild(transitCard);
    }
}

function clearActiveLayers() {
    isRouteActive = false;
    if (routeLine) map.removeLayer(routeLine);
    if (markerA) map.removeLayer(markerA);
    if (markerB) map.removeLayer(markerB);
    activeLineLayerGroup.clearLayers();
    closeFloatingPlaceCard();
    closeBusLiveCockpit();
    const container = document.getElementById("ab-result-container");
    if (container) container.innerHTML = "";
}

// 11. OTOBÜS HATTINI HARİTADA GÖSTERME & COCKPIT HUD
function showBusLineOnMap(lineId, focus = true) {
    const line = BUS_LINES_DATA.find(l => l.id === lineId);
    if (!line) return;

    activeLineLayerGroup.clearLayers();

    line.stops.forEach((st, idx) => {
        const icon = L.divIcon({
            className: 'line-stop-icon',
            html: `<div style="background-color: ${line.color};" class="w-6 h-6 rounded-full border-2 border-white shadow flex items-center justify-center text-white text-[10px] font-bold font-mono">${idx + 1}</div>`,
            iconSize: [24, 24],
            iconAnchor: [12, 12]
        });
        L.marker([st.lat, st.lng], { icon })
            .addTo(activeLineLayerGroup)
            .bindTooltip(`<b>${idx + 1}. Durak: ${st.name}</b><br><span class="text-[10px] text-slate-500 font-mono">Hat: ${line.code}</span>`);
    });

    const coordsParam = line.stops.map(s => `${s.lng},${s.lat}`).join(';');
    const osrmUrl = `https://router.project-osrm.org/route/v1/driving/${coordsParam}?overview=full&geometries=geojson`;

    const tempPolyline = L.polyline(line.pathCoords, {
        color: line.color,
        weight: 6,
        opacity: 0.85,
        lineCap: 'round'
    }).addTo(activeLineLayerGroup);

    if (focus) {
        map.fitBounds(tempPolyline.getBounds(), { padding: [40, 40] });
    }

    fetch(osrmUrl)
        .then(res => res.json())
        .then(data => {
            if (data.routes && data.routes.length > 0) {
                const roadCoords = data.routes[0].geometry.coordinates.map(c => [c[1], c[0]]);
                activeLineLayerGroup.removeLayer(tempPolyline);
                
                const realRoadPolyline = L.polyline(roadCoords, {
                    color: line.color,
                    weight: 6,
                    opacity: 0.95,
                    lineCap: 'round',
                    lineJoin: 'round'
                }).addTo(activeLineLayerGroup);

                if (focus) {
                    map.fitBounds(realRoadPolyline.getBounds(), { padding: [40, 40] });
                }
            }
        })
        .catch(() => {});

    openBusLiveCockpit(line);
}

function openBusLiveCockpit(line) {
    const cockpit = document.getElementById("bus-live-cockpit");
    if (!cockpit) return;

    document.getElementById("cockpit-badge").textContent = line.code;
    document.getElementById("cockpit-badge").style.backgroundColor = line.color;
    document.getElementById("cockpit-title").textContent = line.name;

    const burulasLink = document.getElementById("cockpit-burulas-link");
    if (burulasLink) {
        burulasLink.href = `https://bus.burulas.com.tr/tr/bursa/howtogo?line=${encodeURIComponent(line.code)}`;
    }

    cockpit.classList.remove("hidden");
}

function closeBusLiveCockpit() {
    const cockpit = document.getElementById("bus-live-cockpit");
    if (cockpit) cockpit.classList.add("hidden");
}

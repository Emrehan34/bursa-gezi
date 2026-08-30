/**
 * BURSA CANLI GPS, A'DAN B'YE GERÇEK YOL ROTASI & GÖRSEL ULAŞIM ZİNCİRİ
 * Kararlı, Gerçek Yol Ağı (OSRM) ve Akıllı Transit Aktarma Şeması
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
            [40.2240, 28.8475],
            [40.2200, 28.8300],
            [40.2180, 28.8150],
            [40.2100, 28.7900],
            [40.2050, 28.7650],
            [40.1950, 28.7400],
            [40.1850, 28.7200],
            [40.1750, 28.6950],
            [40.1680, 28.6850],
            [40.1610, 28.6775]
        ]
    },
    {
        id: "line-1m",
        code: "1/M",
        name: "Emek İstasyonu ➔ Mudanya İskelesi",
        type: "Otobüs",
        color: "#0284c7",
        frequency: "Her 12 dk",
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
            [40.2620, 28.9410],
            [40.2780, 28.9320],
            [40.2920, 28.9250],
            [40.3050, 28.9180],
            [40.3250, 28.9120],
            [40.3450, 28.9050],
            [40.3620, 28.8920],
            [40.3755, 28.8830]
        ]
    },
    {
        id: "line-f3",
        code: "F/3",
        name: "Teferrüç Teleferik ➔ Heykel ➔ Mudanya BUDO",
        type: "Hızlı Otobüs",
        color: "#0d9488",
        frequency: "Her 30 dk",
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
            [40.1680, 29.0880],
            [40.1760, 29.0780],
            [40.1810, 29.0700],
            [40.1828, 29.0667],
            [40.1855, 29.0595],
            [40.1900, 29.0450],
            [40.1940, 29.0250],
            [40.2300, 28.9800],
            [40.3000, 28.9200],
            [40.3755, 28.8830]
        ]
    },
    {
        id: "line-1a",
        code: "1/A",
        name: "Demirtaşpaşa ➔ Heykel ➔ Ulu Cami ➔ Çekirge",
        type: "Otobüs",
        color: "#2563eb",
        frequency: "Her 10 dk",
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
            [40.1895, 29.0760],
            [40.1850, 29.0710],
            [40.1828, 29.0667],
            [40.1834, 29.0614],
            [40.1855, 29.0550],
            [40.1880, 29.0490],
            [40.1920, 29.0380],
            [40.1950, 29.0220]
        ]
    },
    {
        id: "line-38",
        code: "38",
        name: "Bursa Terminali ➔ Kent Meydanı ➔ Heykel",
        type: "Otobüs",
        color: "#7c3aed",
        frequency: "Her 8 dk",
        firstLastTime: "24 Saat",
        stops: [
            { name: "Bursa Şehirlerarası Terminal", lat: 40.2580, lng: 29.0535 },
            { name: "Tofaş & Otokoop", lat: 40.2420, lng: 29.0560 },
            { name: "Kent Meydanı AVM", lat: 40.1950, lng: 29.0590 },
            { name: "Şehreküstü Metro", lat: 40.1855, lng: 29.0595 },
            { name: "Heykel 1 Durağı", lat: 40.1828, lng: 29.0667 }
        ],
        pathCoords: [
            [40.2580, 29.0535],
            [40.2420, 29.0560],
            [40.2300, 29.0570],
            [40.2200, 29.0580],
            [40.2050, 29.0585],
            [40.1950, 29.0590],
            [40.1855, 29.0595],
            [40.1828, 29.0667]
        ]
    },
    {
        id: "line-b20a",
        code: "B/20-A",
        name: "Acemler İstasyonu ➔ Misi Köyü ➔ Dağyenice",
        type: "Otobüs",
        color: "#15803d",
        frequency: "Her 35 dk",
        firstLastTime: "07:00 - 19:30",
        stops: [
            { name: "Acemler Aktarma İstasyonu", lat: 40.2055, lng: 29.0220 },
            { name: "Dikkaldırım", lat: 40.1980, lng: 29.0050 },
            { name: "Odunluk / Kent Ormanı", lat: 40.1920, lng: 28.9850 },
            { name: "Misi (Gümüştepe) Köyü", lat: 40.1830, lng: 28.9770 },
            { name: "Nefes Dağyenice Macera Parkı", lat: 40.1180, lng: 28.9160 }
        ],
        pathCoords: [
            [40.2055, 29.0220],
            [40.1980, 29.0050],
            [40.1920, 28.9850],
            [40.1830, 28.9770],
            [40.1650, 28.9600],
            [40.1500, 28.9500],
            [40.1300, 28.9300],
            [40.1180, 28.9160]
        ]
    },
    {
        id: "line-d10",
        code: "D/10",
        name: "Cumalıkızık Metro ➔ Cumalıkızık Köy Meydanı",
        type: "Köy Minibüsü",
        color: "#9333ea",
        frequency: "Her 10 dk",
        firstLastTime: "07:30 - 20:00",
        stops: [
            { name: "Cumalıkızık / Değirmenönü Metro", lat: 40.1870, lng: 29.1650 },
            { name: "Değirmenönü Meydan", lat: 40.1820, lng: 29.1670 },
            { name: "Cumalıkızık Köy Girişi", lat: 40.1770, lng: 29.1690 },
            { name: "Cumalıkızık Tarihi Köy Meydanı", lat: 40.1747, lng: 29.1706 }
        ],
        pathCoords: [
            [40.1870, 29.1650],
            [40.1820, 29.1670],
            [40.1770, 29.1690],
            [40.1747, 29.1706]
        ]
    },
    {
        id: "line-orhaneli",
        code: "ORHANELİ",
        name: "Acemler ➔ Doğancı Barajı ➔ Orhaneli Rafting",
        type: "İlçe Minibüsü",
        color: "#d97706",
        frequency: "Her 30 dk",
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
            [40.2055, 29.0220],
            [40.1700, 28.9800],
            [40.1200, 28.9600],
            [40.0600, 28.9700],
            [40.0300, 28.9800],
            [39.9500, 28.9800],
            [39.9100, 28.9850],
            [39.9050, 28.9950]
        ]
    },
    {
        id: "line-m1",
        code: "M1 BursaRay",
        name: "Emek ➔ Acemler ➔ Şehreküstü ➔ Arabayatağı",
        type: "Metro",
        color: "#dc2626",
        frequency: "Her 6 dk",
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
            [40.2620, 28.9410],
            [40.2450, 28.9550],
            [40.2300, 28.9800],
            [40.2100, 29.0150],
            [40.2055, 29.0220],
            [40.1980, 29.0450],
            [40.1855, 29.0595],
            [40.1895, 29.0760],
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
            [40.2240, 28.8475],
            [40.2180, 28.9350],
            [40.2140, 28.9780],
            [40.2100, 28.9950],
            [40.2055, 29.0220],
            [40.1980, 29.0450],
            [40.1855, 29.0595],
            [40.1880, 29.0820],
            [40.1870, 29.1650],
            [40.1920, 29.2150]
        ]
    }
];

// 2. GEZİLECEK YERLER & GÖRSEL ULAŞIM ZİNCİRLERİ (TRANSIT CHAINS)
const PLACES_DATA = [
    {
        id: "place-golyazi",
        name: "Gölyazı Köyü (Uluabat Gölü)",
        category: "doga",
        categoryName: "Göl & Ada",
        icon: "🌅",
        lat: 40.1610,
        lng: 28.6775,
        associatedLineId: "line-5g",
        busCode: "5/G",
        busColor: "#16a34a",
        boardingStation: "Üniversite Metro İstasyonu Çıkışı Peronları",
        dropoffStation: "Gölyazı Köy Meydanı (Ağlayan Çınar)",
        frequency: "Her 20 dakikada bir",
        desc: "Göl üzerinde yüzen yarımada köyü, sandal turları, Ağlayan Çınar ve efsane gün batımı.",
        transitChain: [
            { icon: "fa-person-walking", text: "2 dk Yürüme", color: "bg-slate-100 text-slate-700" },
            { icon: "fa-train-subway", badge: "M2 Metro", text: "BursaRay (18 dk)", color: "bg-blue-600 text-white" },
            { icon: "fa-bus", badge: "5/G Otobüs", text: "Gölyazı (22 dk)", color: "bg-emerald-600 text-white" },
            { icon: "fa-person-walking", text: "1 dk Yürüme", color: "bg-slate-100 text-slate-700" },
            { icon: "fa-flag-checkered", text: "Gölyazı Meydanı", color: "bg-slate-900 text-amber-400 font-bold" }
        ],
        transit: "BursaRay M2 ile Üniversite İstasyonu'na gelin. Çıkıştaki 5/G otobüsüne binerek doğrudan Gölyazı Köy Meydanı'nda inin."
    },
    {
        id: "place-cumalikizik",
        name: "Cumalıkızık Köyü (UNESCO)",
        category: "tarih",
        categoryName: "Tarihi Köy",
        icon: "🏘️",
        lat: 40.1747,
        lng: 29.1706,
        associatedLineId: "line-d10",
        busCode: "D/10 (veya M2 Metro)",
        busColor: "#9333ea",
        boardingStation: "Cumalıkızık / Değirmenönü Metro Durağı",
        dropoffStation: "Cumalıkızık Tarihi Köy Meydanı",
        frequency: "Her 10 dakikada bir",
        desc: "700 yıllık Osmanlı köyü, rengarenk cumbalı evler, mavi kapılar ve serpme köy kahvaltısı.",
        transitChain: [
            { icon: "fa-person-walking", text: "2 dk Yürüme", color: "bg-slate-100 text-slate-700" },
            { icon: "fa-train-subway", badge: "M2 Metro", text: "Cumalıkızık İst. (14 dk)", color: "bg-blue-600 text-white" },
            { icon: "fa-van-shuttle", badge: "D/10 Minibüs", text: "Köy Servisi (5 dk)", color: "bg-purple-600 text-white" },
            { icon: "fa-flag-checkered", text: "Tarihi Köy Meydanı", color: "bg-slate-900 text-amber-400 font-bold" }
        ],
        transit: "BursaRay M2 metrosu ile Cumalıkızık durağında inin. İstasyon önünden kalkan D/10 minibüsüyle 5 dakikada köyün içindesiniz."
    },
    {
        id: "place-orhaneli-rafting",
        name: "Orhaneli Kocasu Rafting Parkuru",
        category: "adrenalin",
        categoryName: "Rafting & Kanyon",
        icon: "🚣",
        lat: 39.9050,
        lng: 28.9950,
        associatedLineId: "line-orhaneli",
        busCode: "ORHANELİ MİNİBÜSÜ",
        busColor: "#d97706",
        boardingStation: "Acemler Aktarma İstasyonu Peronları",
        dropoffStation: "Kocasu Rafting Parkuru Tesisleri",
        frequency: "Her 30 dakikada bir",
        desc: "Marmara'nın tek rafting parkuru! 8.5 km uzunluk, 12 rapid ve kanyon doğası.",
        transitChain: [
            { icon: "fa-person-walking", text: "3 dk Yürüme", color: "bg-slate-100 text-slate-700" },
            { icon: "fa-train-subway", badge: "M1/M2", text: "Acemler İstasyonu (10 dk)", color: "bg-blue-600 text-white" },
            { icon: "fa-van-shuttle", badge: "ORHANELİ", text: "İlçe Minibüsü (40 dk)", color: "bg-amber-600 text-white" },
            { icon: "fa-flag-checkered", text: "Rafting Parkuru", color: "bg-slate-900 text-amber-400 font-bold" }
        ],
        transit: "BursaRay ile Acemler İstasyonu'na gelin. Dağ İlçeleri peronundan Orhaneli minibüsüne binip Rafting Parkuru durağında inin (40 dk)."
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
        boardingStation: "Acemler İstasyonu Otobüs Peronları",
        dropoffStation: "Dağyenice Nefes Park Durağı",
        frequency: "Her 35 dakikada bir",
        desc: "Göl üstü zipline, zip coaster, kano, SUP kürek, dev salıncak ve macera parkurları.",
        transitChain: [
            { icon: "fa-person-walking", text: "2 dk Yürüme", color: "bg-slate-100 text-slate-700" },
            { icon: "fa-train-subway", badge: "M1/M2", text: "Acemler İstasyonu (10 dk)", color: "bg-blue-600 text-white" },
            { icon: "fa-bus", badge: "B/20-A Otobüs", text: "Dağyenice (25 dk)", color: "bg-emerald-700 text-white" },
            { icon: "fa-flag-checkered", text: "Nefes Dağyenice", color: "bg-slate-900 text-amber-400 font-bold" }
        ],
        transit: "Acemler İstasyonu'ndan B/20-A Dağyenice otobüsüne binin. Misi Köyü üzerinden geçerek doğrudan Dağyenice Parkı'na ulaştırır."
    },
    {
        id: "place-tirilye",
        name: "Tirilye (Zeytinbağı)",
        category: "sahil",
        categoryName: "Sahil Kasabası",
        icon: "⚓",
        lat: 40.3885,
        lng: 28.7950,
        associatedLineId: "line-1m",
        busCode: "1/M + Tirilye Minibüsü",
        busColor: "#0284c7",
        boardingStation: "Emek Metro İstasyonu (1/M) ➔ Mudanya İskelesi",
        dropoffStation: "Tirilye Liman Meydanı",
        frequency: "Her 12 dakikada bir",
        desc: "Tarihi Rum taş evleri, Taş Mektep, zeytinyağı ve deniz kenarı balık restoranları.",
        transitChain: [
            { icon: "fa-person-walking", text: "2 dk Yürüme", color: "bg-slate-100 text-slate-700" },
            { icon: "fa-train-subway", badge: "M1 Metro", text: "Emek İstasyonu (16 dk)", color: "bg-rose-600 text-white" },
            { icon: "fa-bus", badge: "1/M Otobüs", text: "Mudanya İskelesi (15 dk)", color: "bg-sky-600 text-white" },
            { icon: "fa-van-shuttle", badge: "TİRİLYE", text: "Sahil Minibüsü (15 dk)", color: "bg-amber-600 text-white" },
            { icon: "fa-flag-checkered", text: "Tirilye Limanı", color: "bg-slate-900 text-amber-400 font-bold" }
        ],
        transit: "Emek metrosundan 1/M ile Mudanya İskelesi'ne inin. İskele önünden kalkan Tirilye minibüsüyle 15 dakikada sahildesiniz."
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
        boardingStation: "Emek Metrosu (1/M) veya Heykel'den (F/3)",
        dropoffStation: "Mudanya BUDO İskelesi & Kordon",
        frequency: "Her 12 dakikada bir",
        desc: "Geniş sahil kordonu, tarihi Mütareke Binası müzesi, dondurmacılar ve deniz esintisi.",
        transitChain: [
            { icon: "fa-person-walking", text: "2 dk Yürüme", color: "bg-slate-100 text-slate-700" },
            { icon: "fa-train-subway", badge: "M1 Metro", text: "Emek İstasyonu (16 dk)", color: "bg-rose-600 text-white" },
            { icon: "fa-bus", badge: "1/M Otobüs", text: "Mudanya Kordon (15 dk)", color: "bg-sky-600 text-white" },
            { icon: "fa-flag-checkered", text: "Mudanya İskelesi", color: "bg-slate-900 text-amber-400 font-bold" }
        ],
        transit: "Emek İstasyonu'ndan 1/M veya Heykel 1 durağından doğrudan F/3 Hızlı Ekspres otobüsü ile Mudanya Kordon'a gelin."
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
        busCode: "1/A (veya T1 Tramvay)",
        busColor: "#2563eb",
        boardingStation: "Şehreküstü Metro / Demirtaşpaşa",
        dropoffStation: "Ulu Cami & Heykel 1 Durağı",
        frequency: "Her 10 dakikada bir",
        desc: "Yıldırım Bayezid'in 20 kubbeli şaheseri, içindeki şadırvan ve eşsiz hat sanatı levhaları.",
        transitChain: [
            { icon: "fa-person-walking", text: "3 dk Yürüme", color: "bg-slate-100 text-slate-700" },
            { icon: "fa-bus", badge: "1/A Otobüs", text: "Ulu Cami Durağı (8 dk)", color: "bg-blue-600 text-white" },
            { icon: "fa-person-walking", text: "1 dk Yürüme", color: "bg-slate-100 text-slate-700" },
            { icon: "fa-flag-checkered", text: "Ulu Cami Girişi", color: "bg-slate-900 text-amber-400 font-bold" }
        ],
        transit: "BursaRay Şehreküstü istasyonundan 3 dk yürüyüş veya 1/A otobüsü / T1 Tramvayı ile Ulu Cami durağı."
    },
    {
        id: "place-koza-han",
        name: "Koza Han & Tarihi Avlu",
        category: "tarih",
        categoryName: "Tarihi Han",
        icon: "☕",
        lat: 40.1842,
        lng: 29.0635,
        associatedLineId: "line-1a",
        busCode: "1/A / 38 / T1",
        busColor: "#2563eb",
        boardingStation: "Heykel 1 Durağı veya Şehreküstü Metrosu",
        dropoffStation: "Koza Han Kapalı Çarşı Girişi",
        frequency: "Her 8-10 dakikada bir",
        desc: "1491 yapımı ipek hanı, asırlık çınarlar altında közde Türk kahvesi.",
        transitChain: [
            { icon: "fa-person-walking", text: "2 dk Yürüme", color: "bg-slate-100 text-slate-700" },
            { icon: "fa-train-subway", badge: "M1/M2", text: "Şehreküstü Metrosu (6 dk)", color: "bg-blue-600 text-white" },
            { icon: "fa-person-walking", text: "3 dk Yürüme", color: "bg-slate-100 text-slate-700" },
            { icon: "fa-flag-checkered", text: "Koza Han Avlusu", color: "bg-slate-900 text-amber-400 font-bold" }
        ],
        transit: "Heykel 1 durağından 2 dakika yürüyerek tarihi taç kapıdan içeri girin."
    },
    {
        id: "place-tophane",
        name: "Tophane Saat Kulesi & Türbeler",
        category: "tarih",
        categoryName: "Seyir & Tarih",
        icon: "🕰️",
        lat: 40.1878,
        lng: 29.0575,
        associatedLineId: "line-1a",
        busCode: "1/A (veya Şehreküstü Metro)",
        busColor: "#2563eb",
        boardingStation: "Şehreküstü İstasyonu",
        dropoffStation: "Tophane Park Girişi (Yürüyüş 5 dk)",
        frequency: "Her 6-10 dakikada bir",
        desc: "Osman Gazi & Orhan Gazi türbeleri, 6 katlı saat kulesi ve panoramik şehir gün batımı.",
        transitChain: [
            { icon: "fa-train-subway", badge: "M1/M2", text: "Şehreküstü Metrosu", color: "bg-blue-600 text-white" },
            { icon: "fa-person-walking", text: "5 dk Merdiven Çıkış", color: "bg-slate-100 text-slate-700" },
            { icon: "fa-flag-checkered", text: "Tophane Seyir Terası", color: "bg-slate-900 text-amber-400 font-bold" }
        ],
        transit: "Şehreküstü metro çıkışından tarihi Tophane sur merdivenlerini çıkarak 5 dakikada ulaşın."
    },
    {
        id: "place-teleferik",
        name: "Bursa Teleferik & Uludağ",
        category: "doga",
        categoryName: "Dağ & Teleferik",
        icon: "🚠",
        lat: 40.1680,
        lng: 29.0880,
        associatedLineId: "line-f3",
        busCode: "F/3, S/1, S/2",
        busColor: "#0d9488",
        boardingStation: "Heykel / Setbaşı Durağı",
        dropoffStation: "Teferrüç Teleferik Alt İstasyonu",
        frequency: "Her 15-20 dakikada bir",
        desc: "Dünyanın en uzun teleferik hattı (9 km), havadan Uludağ çam ormanları panoraması.",
        transitChain: [
            { icon: "fa-person-walking", text: "2 dk Yürüme", color: "bg-slate-100 text-slate-700" },
            { icon: "fa-bus", badge: "F/3 Otobüs", text: "Teferrüç İst. (12 dk)", color: "bg-teal-600 text-white" },
            { icon: "fa-cable-car", badge: "TELEFERİK", text: "Uludağ Zirve Hattı (22 dk)", color: "bg-indigo-600 text-white" },
            { icon: "fa-flag-checkered", text: "Uludağ 2. Gelişim Bölgesi", color: "bg-slate-900 text-amber-400 font-bold" }
        ],
        transit: "Heykel veya Setbaşı'ndan Teleferik tabelalı F/3, S/1 veya S/2 otobüslerine binip Teferrüç İstasyonunda inin."
    },
    {
        id: "place-fsm",
        name: "FSM Bulvarı & Trendy Kafeler",
        category: "eglence",
        categoryName: "Cadde & Kafe",
        icon: "☕",
        lat: 40.2140,
        lng: 28.9780,
        associatedLineId: "line-m2",
        busCode: "M2 BURSA RAY METROSU",
        busColor: "#2563eb",
        boardingStation: "Herhangi bir BursaRay İstasyonu",
        dropoffStation: "Fatih Sultan Mehmet (FSM) İstasyonu",
        frequency: "Her 6 dakikada bir",
        desc: "Bursa'nın en havalı caddesi; yüzlerce popüler kafe, 3. dalga kahveci ve canlı akşamlar.",
        transitChain: [
            { icon: "fa-train-subway", badge: "M2 Metro", text: "FSM İstasyonu (12 dk)", color: "bg-blue-600 text-white" },
            { icon: "fa-person-walking", text: "1 dk Yürüme", color: "bg-slate-100 text-slate-700" },
            { icon: "fa-flag-checkered", text: "FSM Kafe Caddesi", color: "bg-slate-900 text-amber-400 font-bold" }
        ],
        transit: "BursaRay M2 (Üniversite yönü) metrosuna binip doğrudan FSM İstasyonu'nda inin; cadde istasyonun hemen önündedir."
    },
    {
        id: "place-downtown",
        name: "HUPALUPA & Downtown Bursa",
        category: "eglence",
        categoryName: "Eğlence Parkı",
        icon: "🎪",
        lat: 40.2220,
        lng: 29.0230,
        associatedLineId: "line-m1",
        busCode: "M1 Metro ➔ Paşaçiftliği",
        busColor: "#dc2626",
        boardingStation: "BursaRay M1 Hattı",
        dropoffStation: "Paşaçiftliği Metro İstasyonu",
        frequency: "Her 6 dakikada bir",
        desc: "Devasa trambolin parkı, VR simülatörleri, çarpışan arabalar, bowling ve alışveriş caddesi.",
        transitChain: [
            { icon: "fa-train-subway", badge: "M1 Metro", text: "Paşaçiftliği İst. (8 dk)", color: "bg-rose-600 text-white" },
            { icon: "fa-bus", badge: "B/44-B", text: "Downtown Servis (4 dk)", color: "bg-blue-600 text-white" },
            { icon: "fa-flag-checkered", text: "Downtown AVM Kapısı", color: "bg-slate-900 text-amber-400 font-bold" }
        ],
        transit: "BursaRay M1 ile Paşaçiftliği durağında inin, 8 dakika yürüyüş veya B/44-B otobüsüyle Downtown AVM kapısına gelin."
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
        busCode: "38 ➔ M.Kemalpaşa Minibüsü",
        busColor: "#7c3aed",
        boardingStation: "Bursa Şehirlerarası Otobüs Terminali",
        dropoffStation: "Mustafakemalpaşa İlçe Garajı ➔ Suuçtu",
        frequency: "Her 30 dakikada bir",
        desc: "38 metre yükseklikten dökülen dev şelale ve doğa yürüyüş parkuru.",
        transitChain: [
            { icon: "fa-bus", badge: "38 Otobüs", text: "Bursa Terminali (18 dk)", color: "bg-purple-600 text-white" },
            { icon: "fa-van-shuttle", badge: "M.K.PAŞA", text: "İlçe Minibüsü (45 dk)", color: "bg-amber-600 text-white" },
            { icon: "fa-taxi", badge: "Şelale Dolmuşu", text: "Suuçtu (15 dk)", color: "bg-emerald-700 text-white" },
            { icon: "fa-flag-checkered", text: "Suuçtu Şelalesi", color: "bg-slate-900 text-amber-400 font-bold" }
        ],
        transit: "Bursa Terminali'nden Mustafakemalpaşa minibüslerine binin, ilçe merkezinden Suuçtu servislerine geçin."
    }
];

const POPULAR_HUBS = [
    { id: "hub-gps", name: "📍 Mevcut Canlı GPS Konumum", lat: 40.1828, lng: 29.0667, isGPS: true },
    { id: "hub-heykel", name: "🕌 Heykel / Şehir Merkezi", lat: 40.1828, lng: 29.0667 },
    { id: "hub-gorukle", name: "🎓 Görükle / Üniversite İstasyonu", lat: 40.2240, lng: 28.8475 },
    { id: "hub-fsm", name: "☕ FSM Bulvarı İstasyonu", lat: 40.2140, lng: 28.9780 },
    { id: "hub-acemler", name: "🔄 Acemler Aktarma İstasyonu", lat: 40.2055, lng: 29.0220 },
    { id: "hub-emek", name: "🚇 Emek Metro İstasyonu", lat: 40.2620, lng: 28.9410 },
    { id: "hub-terminal", name: "🚌 Bursa Şehirlerarası Otobüs Terminali", lat: 40.2580, lng: 29.0535 },
    { id: "hub-mudanya", name: "⚓ Mudanya BUDO İskelesi", lat: 40.3752, lng: 28.8820 }
];

// GÖRSEL ULAŞIM ZİNCİRİ (STEPPER BADGE HTML GENERATOR)
function renderTransitVisualChain(chain) {
    if (!chain || chain.length === 0) return "";

    let html = '<div class="flex items-center gap-1.5 overflow-x-auto py-1.5 custom-scrollbar text-xs font-semibold">';
    chain.forEach((step, idx) => {
        html += `
            <span class="px-2.5 py-1 rounded-xl flex items-center gap-1.5 ${step.color || 'bg-slate-100 text-slate-800'} shadow-sm whitespace-nowrap text-[11px]">
                <i class="fa-solid ${step.icon}"></i>
                ${step.badge ? `<b class="bg-black/20 px-1.5 py-0.5 rounded text-[10px] font-mono">${step.badge}</b>` : ''}
                <span>${step.text}</span>
            </span>
        `;
        if (idx < chain.length - 1) {
            html += `<i class="fa-solid fa-arrow-right text-slate-400 text-[10px] flex-none"></i>`;
        }
    });
    html += '</div>';
    return html;
}

// 3. UYGULAMA DURUMU (STATE)
let map = null;
let userMarker = null;
let userAccuracyCircle = null;
let userCoords = {
    lat: 40.1828,
    lng: 29.0667,
    accuracy: 10,
    isRealGPS: false,
    address: "Heykel / Şehir Merkezi (Osmangazi)"
};

let customPointA = null;
let customPointB = null;
let mapClickStep = 0;
let isRouteActive = false; // ONLY TRUE WHEN USER EXPLICITLY CLICKS "ROTAYI ÇİZ"

let markersPlaces = {};
let activeLineLayerGroup = null;
let activeRouteLayerGroup = null;
let markerPointA = null;
let markerPointB = null;

let currentTravelMode = "transit"; // transit, drive, walk
let currentCategory = "all";
let currentTab = "ab-route";
let gpsWatchId = null;

let simulatedVehicles = [];
let trackedVehicleId = null;

// 4. GÜVENLİ VE ANINDA BAŞLATMA (BULLETPROOF STARTUP)
function startApp() {
    try {
        initLeafletMap();
        initSimulatedVehicles();
        populateABSelects();
        renderPlacesList();
        renderLinesList();
        requestRealGPS();
        renderEmptyRoutePrompt();
    } catch (err) {
        console.error("Uygulama başlatma hatası:", err);
    }
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", startApp);
} else {
    startApp();
}

function renderEmptyRoutePrompt() {
    const container = document.getElementById("ab-result-container");
    if (!container) return;
    container.innerHTML = `
        <div class="bg-white p-6 rounded-2xl border border-slate-200 text-center space-y-2 text-slate-500 shadow-sm">
            <div class="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-xl mx-auto">
                <i class="fa-solid fa-route"></i>
            </div>
            <h4 class="text-xs font-bold text-slate-800">Henüz Rota Çizilmedi</h4>
            <p class="text-[11px] text-slate-500 leading-relaxed">
                Başlangıç (A) ve Hedef (B) noktalarını belirleyip <b>"Rotayı Çiz"</b> butonuna basarak anında <b>🚶 ➔ 🚌 a1 ➔ 🚇 m2 ➔ 🏁 varış</b> görsel ulaşım zincirini görebilirsiniz.
            </p>
        </div>
    `;
}

function initLeafletMap() {
    if (map) return;
    const mapEl = document.getElementById('map');
    if (!mapEl) return;

    map = L.map('map', { 
        zoomControl: false,
        preferCanvas: true
    }).setView([userCoords.lat, userCoords.lng], 13);
    
    L.control.zoom({ position: 'bottomright' }).addTo(map);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap & Burulaş Akıllı Ulaşım',
        maxZoom: 19,
        subdomains: ['a', 'b', 'c']
    }).addTo(map);

    activeLineLayerGroup = L.layerGroup().addTo(map);
    activeRouteLayerGroup = L.layerGroup().addTo(map);

    PLACES_DATA.forEach(place => {
        const placeIcon = L.divIcon({
            className: 'place-pin',
            html: `<div class="w-8 h-8 rounded-full bg-white shadow-lg border-2 border-blue-600 flex items-center justify-center text-sm cursor-pointer hover:scale-125 transition">${place.icon}</div>`,
            iconSize: [32, 32],
            iconAnchor: [16, 16]
        });

        const marker = L.marker([place.lat, place.lng], { icon: placeIcon }).addTo(map);
        marker.bindTooltip(`<b>${place.name}</b><br><span class="text-[10px] text-blue-600 font-bold">${place.categoryName} • Hat: ${place.busCode}</span>`, { direction: 'top', offset: [0, -10] });
        marker.on('click', () => {
            selectPlace(place.id);
        });
        markersPlaces[place.id] = marker;
    });

    map.on('click', (e) => {
        handleMapClick(e.latlng.lat, e.latlng.lng);
    });

    updateUserMarker();

    setTimeout(() => {
        if (map) map.invalidateSize();
    }, 300);
}

// 5. HARİTAYA TIKLAYARAK A VE B NOKTASI SEÇME
function toggleMapClickMode() {
    const indicator = document.getElementById("map-click-indicator");
    const clickText = document.getElementById("map-click-text");
    const btn = document.getElementById("btn-map-click-mode");

    if (mapClickStep === 0) {
        mapClickStep = 1;
        indicator.classList.remove("hidden");
        clickText.textContent = "Haritada bir yere tıklayarak A (Başlangıç) noktasını belirleyin";
        btn.className = "text-[11px] bg-emerald-600 text-white font-bold px-2 py-1 rounded-lg flex items-center gap-1 shadow";
    } else {
        mapClickStep = 0;
        indicator.classList.add("hidden");
        btn.className = "text-[11px] bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold px-2 py-1 rounded-lg flex items-center gap-1 border border-slate-300";
    }
}

function handleMapClick(lat, lng) {
    if (mapClickStep === 1) {
        customPointA = { lat, lng, name: `Haritadan Seçilen A (${lat.toFixed(3)}, ${lng.toFixed(3)})` };
        mapClickStep = 2;
        document.getElementById("map-click-text").textContent = "Haritada 2. bir yere tıklayarak B (Hedef) noktasını belirleyin";
        
        fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}&accept-language=tr`)
            .then(r => r.json()).then(d => {
                if (d && d.address) {
                    customPointA.name = [d.address.road, d.address.town || d.address.city_district].filter(Boolean).join(', ') || customPointA.name;
                }
            }).catch(() => {});
    } else if (mapClickStep === 2) {
        customPointB = { lat, lng, name: `Haritadan Seçilen B (${lat.toFixed(3)}, ${lng.toFixed(3)})` };
        mapClickStep = 0;
        document.getElementById("map-click-indicator").classList.add("hidden");
        document.getElementById("btn-map-click-mode").className = "text-[11px] bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold px-2 py-1 rounded-lg flex items-center gap-1 border border-slate-300";

        fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}&accept-language=tr`)
            .then(r => r.json()).then(d => {
                if (d && d.address) {
                    customPointB.name = [d.address.road, d.address.town || d.address.city_district].filter(Boolean).join(', ') || customPointB.name;
                }
                isRouteActive = true;
                calculateCustomABRoute();
            }).catch(() => {
                isRouteActive = true;
                calculateCustomABRoute();
            });
    }
}

// 6. A VE B SEÇİCİLERİ DOLDURMA
function populateABSelects() {
    const selA = document.getElementById("select-point-a");
    const selB = document.getElementById("select-point-b");
    if (!selA || !selB) return;

    selA.innerHTML = "";
    selB.innerHTML = "";

    POPULAR_HUBS.forEach(h => {
        const opt = document.createElement("option");
        opt.value = h.id;
        opt.textContent = h.name;
        selA.appendChild(opt);
    });

    PLACES_DATA.forEach(p => {
        const opt = document.createElement("option");
        opt.value = p.id;
        opt.textContent = `${p.icon} ${p.name}`;
        selA.appendChild(opt);
    });

    PLACES_DATA.forEach(p => {
        const opt = document.createElement("option");
        opt.value = p.id;
        opt.textContent = `${p.icon} ${p.name} [${p.busCode}]`;
        if (p.id === "place-golyazi") opt.selected = true;
        selB.appendChild(opt);
    });

    POPULAR_HUBS.forEach(h => {
        if (!h.isGPS) {
            const opt = document.createElement("option");
            opt.value = h.id;
            opt.textContent = h.name;
            selB.appendChild(opt);
        }
    });
}

function triggerRouteCalculation() {
    isRouteActive = true;
    calculateCustomABRoute();
}

function setPointAToUserGPS() {
    customPointA = null;
    document.getElementById("select-point-a").value = "hub-gps";
    if (isRouteActive) {
        calculateCustomABRoute();
    }
}

function setPlaceAsDestinationB() {
    if (selectedPlaceId) {
        customPointB = null;
        document.getElementById("select-point-b").value = selectedPlaceId;
        switchAppTab('ab-route');
        isRouteActive = true;
        calculateCustomABRoute();
    }
}

function swapPointsAandB() {
    const selA = document.getElementById("select-point-a");
    const selB = document.getElementById("select-point-b");

    const tempCustom = customPointA;
    customPointA = customPointB;
    customPointB = tempCustom;

    const valA = selA.value;
    const valB = selB.value;
    selA.value = valB;
    selB.value = valA;

    if (isRouteActive) {
        calculateCustomABRoute();
    }
}

function setTravelMode(mode) {
    currentTravelMode = mode;
    ['transit', 'drive', 'walk'].forEach(m => {
        const btn = document.getElementById(`mode-btn-${m}`);
        if (m === mode) {
            btn.className = "flex-1 py-1.5 rounded-xl font-bold bg-slate-900 text-white shadow flex items-center justify-center gap-1.5 transition";
        } else {
            btn.className = "flex-1 py-1.5 rounded-xl font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 flex items-center justify-center gap-1.5 transition";
        }
    });
    if (isRouteActive) {
        calculateCustomABRoute();
    }
}

// 7. OSRM GERÇEK YOL AĞI VE TRANSİT ROTA HESAPLAMA MOTORU
function getPointData(type) {
    if (type === 'A' && customPointA) return customPointA;
    if (type === 'B' && customPointB) return customPointB;

    const selVal = document.getElementById(type === 'A' ? "select-point-a" : "select-point-b").value;

    if (selVal === "hub-gps") {
        return { lat: userCoords.lat, lng: userCoords.lng, name: `📍 Canlı Konum (${userCoords.address})` };
    }
    const hub = POPULAR_HUBS.find(h => h.id === selVal);
    if (hub) return { lat: hub.lat, lng: hub.lng, name: hub.name };

    const place = PLACES_DATA.find(p => p.id === selVal);
    if (place) return { lat: place.lat, lng: place.lng, name: place.name, placeObj: place };

    return { lat: userCoords.lat, lng: userCoords.lng, name: "Bursa" };
}

function calculateCustomABRoute() {
    const pA = getPointData('A');
    const pB = getPointData('B');

    activeRouteLayerGroup.clearLayers();
    activeLineLayerGroup.clearLayers();

    // 1. Draw Custom Markers A (Green) and B (Red)
    const iconA = L.divIcon({
        className: 'point-a-wrap',
        html: '<div class="point-a-marker">A</div>',
        iconSize: [32, 32],
        iconAnchor: [16, 16]
    });
    markerPointA = L.marker([pA.lat, pA.lng], { icon: iconA, zIndexOffset: 1200 }).addTo(activeRouteLayerGroup);
    markerPointA.bindTooltip(`<b>🟢 Başlangıç (A)</b><br>${pA.name}`, { direction: 'top' });

    const iconB = L.divIcon({
        className: 'point-b-wrap',
        html: '<div class="point-b-marker">B</div>',
        iconSize: [32, 32],
        iconAnchor: [16, 16]
    });
    markerPointB = L.marker([pB.lat, pB.lng], { icon: iconB, zIndexOffset: 1200 }).addTo(activeRouteLayerGroup);
    markerPointB.bindTooltip(`<b>🔴 Hedef (B)</b><br>${pB.name}`, { direction: 'top' });

    // 2. Determine Best Transit Line
    let bestLine = null;
    let targetPlace = pB.placeObj || pA.placeObj;
    if (targetPlace && targetPlace.associatedLineId) {
        bestLine = BUS_LINES_DATA.find(l => l.id === targetPlace.associatedLineId);
    } else {
        bestLine = BUS_LINES_DATA[0];
    }

    // 3. Fetch Real Road Geometry from OSRM Routing Engine
    const profile = currentTravelMode === 'walk' ? 'foot' : 'driving';
    const osrmUrl = `https://router.project-osrm.org/route/v1/${profile}/${pA.lng},${pA.lat};${pB.lng},${pB.lat}?overview=full&geometries=geojson`;

    fetch(osrmUrl)
        .then(res => res.json())
        .then(data => {
            if (data && data.routes && data.routes.length > 0) {
                const route = data.routes[0];
                const distKm = route.distance / 1000.0;
                let durationMins = Math.round(route.duration / 60.0);

                if (currentTravelMode === "transit") {
                    durationMins = Math.round(distKm * 2.1 + 8);
                }

                const latlngs = route.geometry.coordinates.map(coord => [coord[1], coord[0]]);

                const routeLine = L.polyline(latlngs, {
                    color: currentTravelMode === "transit" ? (bestLine ? bestLine.color : '#2563eb') : (currentTravelMode === "drive" ? '#2563eb' : '#16a34a'),
                    weight: 6,
                    opacity: 0.9,
                    lineCap: 'round'
                }).addTo(activeRouteLayerGroup);

                map.fitBounds(routeLine.getBounds(), { padding: [50, 50] });

                renderABResultCard(pA, pB, distKm, durationMins, bestLine, targetPlace);
            } else {
                fallbackLocalRoute(pA, pB, bestLine, targetPlace);
            }
        })
        .catch(() => {
            fallbackLocalRoute(pA, pB, bestLine, targetPlace);
        });
}

function fallbackLocalRoute(pA, pB, bestLine, targetPlace) {
    const distKm = calculateDistance(pA.lat, pA.lng, pB.lat, pB.lng) * 1.25;
    const durationMins = Math.round(distKm * 2.1 + 8);

    const latlngs = [[pA.lat, pA.lng], [pB.lat, pB.lng]];
    const routeLine = L.polyline(latlngs, {
        color: '#2563eb',
        weight: 5,
        opacity: 0.85,
        dashArray: '8, 8'
    }).addTo(activeRouteLayerGroup);

    map.fitBounds(routeLine.getBounds(), { padding: [50, 50] });
    renderABResultCard(pA, pB, distKm, durationMins, bestLine, targetPlace);
}

let routeLiveTimerInterval = null;
let currentRouteLiveEtaSec = 165;

function renderABResultCard(pA, pB, distKm, durationMins, line, targetPlace) {
    const container = document.getElementById("ab-result-container");
    container.innerHTML = "";

    if (routeLiveTimerInterval) clearInterval(routeLiveTimerInterval);
    currentRouteLiveEtaSec = Math.floor(Math.random() * 180) + 90; // 1.5 - 4.5 mins

    // 1. HERO SUMMARY CARD WITH VISUAL TRANSIT CHAIN
    const summaryCard = document.createElement("div");
    summaryCard.className = "bg-slate-950 text-white p-4 rounded-2xl shadow-xl border border-slate-800 space-y-3";
    summaryCard.innerHTML = `
        <div class="flex items-center justify-between text-xs pb-2 border-b border-slate-800 font-mono">
            <span class="text-emerald-400 font-bold flex items-center gap-1.5">
                <i class="fa-solid fa-clock"></i> Toplam Süre: ~${durationMins} dk
            </span>
            <span class="text-blue-400 font-bold flex items-center gap-1.5">
                <i class="fa-solid fa-route"></i> ${distKm.toFixed(1)} km
            </span>
        </div>

        <!-- VISUAL TRANSIT STEPPER (GÖRSEL ULAŞIM ZİNCİRİ) -->
        ${currentTravelMode === 'transit' && targetPlace && targetPlace.transitChain ? `
            <div class="space-y-1">
                <div class="text-[10px] font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1">
                    <i class="fa-solid fa-signs-post"></i> Görsel Ulaşım Akışı (Aktarma Zinciri):
                </div>
                <div class="p-2 bg-slate-900 rounded-xl border border-slate-800">
                    ${renderTransitVisualChain(targetPlace.transitChain)}
                </div>
            </div>
        ` : ''}
    `;
    container.appendChild(summaryCard);

    if (currentTravelMode === "transit" && line) {
        const boardingStation = targetPlace && targetPlace.boardingStation ? targetPlace.boardingStation : (line.stops[0] ? line.stops[0].name : "En Yakın Burulaş Durağı");
        const dropoffStation = targetPlace && targetPlace.dropoffStation ? targetPlace.dropoffStation : (line.stops[line.stops.length - 1] ? line.stops[line.stops.length - 1].name : pB.name);
        const transitGuide = targetPlace && targetPlace.transit ? targetPlace.transit : `${line.name} ile ${dropoffStation} durağına gidin.`;

        // Step 1: Walk to Boarding Stop
        const walkMins = Math.max(1, Math.round(distKm * 0.12 + 2));
        const step1 = document.createElement("div");
        step1.className = "bg-white p-3.5 rounded-2xl border border-slate-200 shadow-sm space-y-1.5 text-xs";
        step1.innerHTML = `
            <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                    <span class="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs font-mono">1</span>
                    <b class="text-slate-900">Biniş Durağına Yürüyüş</b>
                </div>
                <span class="text-[10px] text-emerald-700 bg-emerald-50 font-bold px-2 py-0.5 rounded-full border border-emerald-200">~${walkMins} dk (${walkMins * 70}m)</span>
            </div>
            <p class="text-slate-600 text-[11px] pl-8">
                <b>${pA.name}</b> noktasından <b>${boardingStation}</b> durağına yürüyün.
            </p>
        `;
        container.appendChild(step1);

        // Step 2: Live Bus Boarding & Countdown
        const step2 = document.createElement("div");
        step2.className = "bg-white p-3.5 rounded-2xl border-2 border-blue-500 shadow-md space-y-2 text-xs";
        step2.innerHTML = `
            <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                    <span class="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs font-mono">2</span>
                    <b class="text-slate-900 text-xs">Gidecek Hat: <span class="text-blue-600 font-bold">${line.name}</span></b>
                </div>
                <span style="background-color: ${line.color};" class="text-white px-2 py-0.5 rounded text-[11px] font-mono font-black shadow">${line.code}</span>
            </div>

            <!-- LIVE BUS DISPATCH & COUNTDOWN BOX -->
            <div class="p-3 bg-slate-950 rounded-xl text-white space-y-2 font-mono">
                <div class="flex items-center justify-between text-xs">
                    <span class="text-amber-400 glow-amber font-bold flex items-center gap-1.5">
                        <i class="fa-solid fa-satellite-dish animate-pulse text-emerald-400"></i> DURAĞA CANLI GELİŞ SÜRESİ:
                    </span>
                    <b id="route-live-bus-countdown" class="text-emerald-400 glow-green text-sm">-- dk --s</b>
                </div>
                <div class="flex items-center justify-between text-[10px] text-slate-300 pt-1 border-t border-slate-800">
                    <span id="route-live-bus-status">🚌 Araç: 16 M 0482 (2 durak geride)</span>
                    <span class="text-slate-400">${line.frequency}</span>
                </div>
            </div>

            <div class="p-2.5 bg-blue-50 rounded-xl text-blue-950 text-[11px] space-y-1">
                <b class="text-blue-900 flex items-center gap-1"><i class="fa-solid fa-circle-info"></i> Detaylı Ulaşım Rehberi:</b>
                <p class="leading-relaxed text-slate-700">${transitGuide}</p>
            </div>

            <div class="flex items-center justify-between pt-1">
                <span class="text-[10px] text-slate-500">
                    İniş Durağı: <b>${dropoffStation}</b>
                </span>
                <button onclick="showBusLineOnMap('${line.id}', true)" class="bg-blue-600 hover:bg-blue-500 text-white font-bold px-3 py-1.5 rounded-xl text-[10px] shadow transition flex items-center gap-1">
                    <i class="fa-solid fa-eye"></i> Otobüsü Haritada İzle
                </button>
            </div>
        `;
        container.appendChild(step2);

        // Step 3: Destination Arrival
        const step3 = document.createElement("div");
        step3.className = "bg-white p-3.5 rounded-2xl border border-slate-200 shadow-sm space-y-1.5 text-xs";
        step3.innerHTML = `
            <div class="flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-rose-600 text-white flex items-center justify-center font-bold text-xs font-mono">3</span>
                <b class="text-slate-900">Hedefe Varış</b>
            </div>
            <p class="text-slate-600 text-[11px] pl-8">
                <b>${dropoffStation}</b> durağında inerek <b>${pB.name}</b> hedefinize ulaşıyorsunuz. İyi geziler!
            </p>
        `;
        container.appendChild(step3);

        updateRouteLiveCountdownDOM();
        routeLiveTimerInterval = setInterval(() => {
            if (currentRouteLiveEtaSec > 2) {
                currentRouteLiveEtaSec -= 1;
            } else {
                currentRouteLiveEtaSec = Math.floor(Math.random() * 240) + 120;
            }
            updateRouteLiveCountdownDOM();
        }, 1000);

    } else {
        const directStep = document.createElement("div");
        directStep.className = "bg-white p-3.5 rounded-2xl border border-slate-200 shadow-sm space-y-2 text-xs";
        directStep.innerHTML = `
            <div class="flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xs font-mono">1</span>
                <b class="text-slate-900">Gerçek Yol Güzergahı:</b>
            </div>
            <p class="text-slate-600 text-[11px] pl-8">
                <b>${pA.name}</b> noktasından yola çıkıp ana cadde ve otobanları takip ederek <b>${pB.name}</b> noktasına yaklaşık <b>${durationMins} dakika</b> (${distKm.toFixed(1)} km) içinde varabilirsiniz.
            </p>
        `;
        container.appendChild(directStep);
    }
}

function updateRouteLiveCountdownDOM() {
    const el = document.getElementById("route-live-bus-countdown");
    const st = document.getElementById("route-live-bus-status");
    if (!el) return;

    const mins = Math.floor(currentRouteLiveEtaSec / 60);
    const secs = currentRouteLiveEtaSec % 60;

    if (mins === 0) {
        el.innerHTML = `<span class="text-emerald-400 font-bold animate-pulse">DURAĞA YANAŞIYOR (${secs}s)</span>`;
        if (st) st.textContent = `🚌 Araç: 16 M 0482 (Durağa Giriş Yapıyor)`;
    } else {
        el.textContent = `${mins} dk ${secs}s sonra`;
        const stopsAway = Math.max(1, Math.round(mins / 2));
        if (st) st.textContent = `🚌 Araç: 16 M 0482 (${stopsAway} durak geride)`;
    }
}

// 8. GERÇEK YÜKSEK HASSASİYETLİ MOBİL GPS MOTORU
function requestRealGPS(forceCenter = true) {
    const icon = document.getElementById("gps-status-icon");
    const label = document.getElementById("gps-status-label");
    if (icon) icon.className = "fa-solid fa-satellite-dish fa-spin text-amber-300";
    if (label) label.textContent = "GPS Alınıyor...";

    if ("geolocation" in navigator) {
        if (gpsWatchId !== null) {
            navigator.geolocation.clearWatch(gpsWatchId);
            gpsWatchId = null;
        }

        // 1. Direct High-Accuracy Hardware GPS
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                handleGPSPositionSuccess(pos, forceCenter);
            },
            (err) => {
                console.warn("GPS Hatası:", err.code, err.message);
                handleGPSError(err);
            },
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 0 }
        );

        // 2. Continuous Real-Time Tracking
        gpsWatchId = navigator.geolocation.watchPosition(
            (pos) => {
                handleGPSPositionSuccess(pos, false);
            },
            (err) => {
                console.warn("GPS Watch:", err.message);
            },
            { enableHighAccuracy: true, timeout: 25000, maximumAge: 0 }
        );
    } else {
        showToastNotification("Cihazınızda GPS desteği bulunamadı.", "error");
    }
}

function handleGPSPositionSuccess(pos, centerMap = true) {
    userCoords.lat = pos.coords.latitude;
    userCoords.lng = pos.coords.longitude;
    userCoords.accuracy = Math.round(pos.coords.accuracy || 5);
    userCoords.isRealGPS = true;

    // Update Marker and Accuracy Circle
    updateUserMarker();

    if (centerMap && map) {
        map.flyTo([userCoords.lat, userCoords.lng], 16, { animate: true, duration: 1.0 });
    }

    reverseGeocode(userCoords.lat, userCoords.lng);

    // Update places distance
    renderPlacesList(document.getElementById("place-search-input") ? document.getElementById("place-search-input").value : "");

    if (isRouteActive && document.getElementById("select-point-a").value === "hub-gps" && !customPointA) {
        calculateCustomABRoute();
    }

    const icon = document.getElementById("gps-status-icon");
    const label = document.getElementById("gps-status-label");
    if (icon) icon.className = "fa-solid fa-location-crosshairs text-emerald-400";
    if (label) label.textContent = `Canlı GPS (±${userCoords.accuracy}m)`;

    showToastNotification(`📍 Gerçek konumunuz alındı (Hassasiyet: ±${userCoords.accuracy}m)`, "success");
}

function handleGPSError(err) {
    const icon = document.getElementById("gps-status-icon");
    const label = document.getElementById("gps-status-label");
    if (icon) icon.className = "fa-solid fa-triangle-exclamation text-amber-400";
    if (label) label.textContent = "Konum İzni Verin";

    let msg = "Konum alınamadı. Lütfen tarayıcı ayarlarından konum iznini açın.";
    if (err.code === 1) {
        msg = "⚠️ Konum izni reddedildi. Lütfen tarayıcı kilit simgesinden (🔒) 'Konuma İzin Ver' yapın.";
    } else if (err.code === 2) {
        msg = "⚠️ GPS sinyali zayıf. Açık alanda tekrar deneyin.";
    } else if (err.code === 3) {
        msg = "⚠️ GPS zaman aşımına uğradı. Tekrar deneniyor...";
    }
    showToastNotification(msg, "warning");
}

function showToastNotification(message, type = "info") {
    let toast = document.getElementById("app-toast");
    if (!toast) {
        toast = document.createElement("div");
        toast.id = "app-toast";
        toast.className = "fixed top-14 left-1/2 transform -translate-x-1/2 z-50 px-4 py-2 rounded-2xl shadow-2xl text-xs font-bold text-white transition-all duration-300 pointer-events-none flex items-center gap-2";
        document.body.appendChild(toast);
    }

    if (type === "success") {
        toast.style.backgroundColor = "#059669"; // emerald-600
    } else if (type === "warning") {
        toast.style.backgroundColor = "#d97706"; // amber-600
    } else if (type === "error") {
        toast.style.backgroundColor = "#dc2626"; // rose-600
    } else {
        toast.style.backgroundColor = "#0f172a"; // slate-900
    }

    toast.textContent = message;
    toast.style.opacity = "1";
    toast.style.transform = "translate(-50%, 0)";

    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translate(-50%, -10px)";
    }, 4000);
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
    userCoords.accuracy = 5;
    userCoords.isRealGPS = false;
    userCoords.address = name;

    updateUserMarker();
    map.flyTo([lat, lng], 14, { duration: 1.0 });

    if (isRouteActive && document.getElementById("select-point-a").value === "hub-gps") {
        calculateCustomABRoute();
    }
}

function updateUserMarker() {
    if (!map) return;
    if (userMarker) map.removeLayer(userMarker);
    if (userAccuracyCircle) map.removeLayer(userAccuracyCircle);

    const pulseIcon = L.divIcon({
        className: 'user-pulse-wrap',
        html: '<div class="user-marker-pulse cursor-grab active:cursor-grabbing"></div>',
        iconSize: [24, 24],
        iconAnchor: [12, 12]
    });

    userMarker = L.marker([userCoords.lat, userCoords.lng], { 
        icon: pulseIcon, 
        zIndexOffset: 1500,
        draggable: true
    }).addTo(map);

    userMarker.bindTooltip(`<b>📍 Bulunduğunuz Canlı Konum</b><br>${userCoords.address}<br><span class="text-[10px] text-emerald-600 font-bold">🎯 İnce ayar için pini sürükleyebilirsiniz</span>`, { direction: 'top' });

    userMarker.on('dragend', (e) => {
        const newPos = e.target.getLatLng();
        userCoords.lat = newPos.lat;
        userCoords.lng = newPos.lng;
        userCoords.accuracy = 3;
        userCoords.isRealGPS = true;
        
        reverseGeocode(userCoords.lat, userCoords.lng);
        updateUserMarker();
        renderPlacesList(document.getElementById("place-search-input") ? document.getElementById("place-search-input").value : "");
        
        if (isRouteActive && document.getElementById("select-point-a").value === "hub-gps") {
            calculateCustomABRoute();
        }
        showToastNotification("🎯 Konumunuz el ile nokta atışı ayarlandı!", "success");
    });

    userAccuracyCircle = L.circle([userCoords.lat, userCoords.lng], {
        radius: Math.max(userCoords.accuracy || 10, 15),
        color: '#2563eb',
        fillColor: '#3b82f6',
        fillOpacity: 0.18,
        weight: 2
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

// 9. CANLI OTOBÜS ARAÇLARI SİMÜLASYONU
function initSimulatedVehicles() {
    simulatedVehicles = [
        { id: "veh-line-5g", lineId: "line-5g", code: "5/G", color: "#16a34a", pathIndex: 0, progress: 0.1, speed: 42, etaSec: 135, lat: 40.2180, lng: 28.8150 },
        { id: "veh-line-1m", lineId: "line-1m", code: "1/M", color: "#0284c7", pathIndex: 1, progress: 0.3, speed: 50, etaSec: 210, lat: 40.2920, lng: 28.9250 },
        { id: "veh-line-1a", lineId: "line-1a", code: "1/A", color: "#2563eb", pathIndex: 2, progress: 0.5, speed: 35, etaSec: 85, lat: 40.1850, lng: 29.0600 },
        { id: "veh-line-38", lineId: "line-38", code: "38", color: "#7c3aed", pathIndex: 1, progress: 0.4, speed: 48, etaSec: 260, lat: 40.2300, lng: 29.0570 }
    ];

    simulatedVehicles.forEach(v => {
        const busIcon = L.divIcon({
            className: 'live-bus-vehicle',
            html: `<div style="background-color: ${v.color};" class="px-2 py-1 rounded-xl text-white font-mono font-black text-[11px] shadow-2xl border-2 border-white flex items-center gap-1 cursor-pointer hover:scale-125 transition"><i class="fa-solid fa-bus text-[10px]"></i> ${v.code}</div>`,
            iconSize: [46, 24],
            iconAnchor: [23, 12]
        });

        v.marker = L.marker([v.lat, v.lng], { icon: busIcon, zIndexOffset: 800 }).addTo(map);
        v.marker.on('click', () => {
            showBusLineOnMap(v.lineId);
        });
    });

    setInterval(() => {
        simulatedVehicles.forEach(v => {
            const line = BUS_LINES_DATA.find(l => l.id === v.lineId);
            if (!line) return;

            v.progress += 0.04;
            if (v.progress >= 1.0) {
                v.progress = 0;
                v.pathIndex = (v.pathIndex + 1) % (line.pathCoords.length - 1);
            }

            const p1 = line.pathCoords[v.pathIndex];
            const p2 = line.pathCoords[v.pathIndex + 1];

            v.lat = p1[0] + (p2[0] - p1[0]) * v.progress;
            v.lng = p1[1] + (p2[1] - p1[1]) * v.progress;
            v.marker.setLatLng([v.lat, v.lng]);
        });
    }, 1200);
}

function showBusLineOnMap(lineId, focus = true) {
    const line = BUS_LINES_DATA.find(l => l.id === lineId);
    if (!line) return;

    activeLineLayerGroup.clearLayers();

    // 1. Draw stops with distinct numbered icons
    line.stops.forEach((st, idx) => {
        const icon = L.divIcon({
            className: 'line-stop-icon',
            html: `<div style="background-color: ${line.color};" class="w-7 h-7 rounded-full border-2 border-white shadow-lg flex items-center justify-center text-white text-[11px] font-black font-mono">${idx + 1}</div>`,
            iconSize: [28, 28],
            iconAnchor: [14, 14]
        });
        L.marker([st.lat, st.lng], { icon })
            .addTo(activeLineLayerGroup)
            .bindTooltip(`<b>${idx + 1}. Durak: ${st.name}</b><br><span class="text-[10px] text-slate-500 font-mono">Hat: ${line.code}</span>`);
    });

    // 2. Fetch True Street-Snapped Road Polyline from OSRM via waypoints!
    const coordsParam = line.stops.map(s => `${s.lng},${s.lat}`).join(';');
    const osrmUrl = `https://router.project-osrm.org/route/v1/driving/${coordsParam}?overview=full&geometries=geojson`;

    // Immediate fallback polyline
    const tempPolyline = L.polyline(line.pathCoords, {
        color: line.color,
        weight: 6,
        opacity: 0.85,
        lineCap: 'round',
        lineJoin: 'round'
    }).addTo(activeLineLayerGroup);

    if (focus) {
        map.fitBounds(tempPolyline.getBounds(), { padding: [50, 50] });
    }

    fetch(osrmUrl)
        .then(res => res.json())
        .then(data => {
            if (data.routes && data.routes.length > 0) {
                const roadCoords = data.routes[0].geometry.coordinates.map(c => [c[1], c[0]]);
                activeLineLayerGroup.removeLayer(tempPolyline);
                
                const realRoadPolyline = L.polyline(roadCoords, {
                    color: line.color,
                    weight: 7,
                    opacity: 0.95,
                    lineCap: 'round',
                    lineJoin: 'round'
                }).addTo(activeLineLayerGroup);

                if (focus) {
                    map.fitBounds(realRoadPolyline.getBounds(), { padding: [50, 50] });
                }
            }
        })
        .catch(() => {
            // Keep fallback
        });

    openBusLiveCockpit(line);
}

function openBusLiveCockpit(line) {
    const cockpit = document.getElementById("bus-live-cockpit");
    document.getElementById("cockpit-badge").textContent = line.code;
    document.getElementById("cockpit-badge").style.backgroundColor = line.color;
    document.getElementById("cockpit-title").textContent = line.name;
    document.getElementById("cockpit-stop-count").textContent = `Toplam ${line.stops.length} Durak`;

    const timeline = document.getElementById("cockpit-stops-timeline");
    timeline.innerHTML = "";
    line.stops.forEach((st, i) => {
        const itm = document.createElement("span");
        itm.className = "bg-slate-900 border border-slate-800 px-2 py-1 rounded whitespace-nowrap text-[10px]";
        itm.innerHTML = `<b class="text-blue-400">${i + 1}.</b> ${st.name}`;
        timeline.appendChild(itm);
    });

    cockpit.classList.remove("hidden");
}

function closeBusLiveCockpit() {
    document.getElementById("bus-live-cockpit").classList.add("hidden");
}

function clearActiveLayers() {
    isRouteActive = false;
    customPointA = null;
    customPointB = null;
    activeRouteLayerGroup.clearLayers();
    activeLineLayerGroup.clearLayers();
    closeBusLiveCockpit();
    closeFloatingCard();
    renderEmptyRoutePrompt();
}

// 10. MEKANLAR LİSTESİ (GÖRSEL ULAŞIM ZİNCİRİ İLE)
function renderPlacesList(query = "") {
    const container = document.getElementById("places-container");
    container.innerHTML = "";

    let filtered = PLACES_DATA.filter(p => {
        const matchCat = (currentCategory === "all") || (p.category === currentCategory);
        const matchQ = query === "" || p.name.toLowerCase().includes(query.toLowerCase()) || p.desc.toLowerCase().includes(query.toLowerCase()) || p.busCode.toLowerCase().includes(query.toLowerCase());
        return matchCat && matchQ;
    });

    filtered.forEach(p => {
        p.distKm = calculateDistance(userCoords.lat, userCoords.lng, p.lat, p.lng);
    });

    document.getElementById("places-status-text").textContent = `${filtered.length} mekan listeleniyor`;
    document.getElementById("count-places").textContent = PLACES_DATA.length;

    filtered.forEach(place => {
        const card = document.createElement("div");
        card.className = "bg-white p-3.5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-500 transition cursor-pointer space-y-2.5";
        card.onclick = () => selectPlace(place.id);

        card.innerHTML = `
            <div class="flex items-start justify-between">
                <div class="flex items-center space-x-3">
                    <span class="text-2xl">${place.icon}</span>
                    <div>
                        <span class="text-[10px] font-bold text-blue-700 uppercase tracking-wider bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">${place.categoryName}</span>
                        <h4 class="text-xs font-bold text-slate-900 mt-0.5 leading-tight">${place.name}</h4>
                    </div>
                </div>
                <div class="text-right flex-none">
                    <span class="text-xs font-extrabold text-blue-600 font-mono">${place.distKm.toFixed(1)} km</span>
                </div>
            </div>

            <!-- GÖRSEL ULAŞIM ZİNCİRİ ŞERİDİ (STEPPER BADGES) -->
            <div class="space-y-1">
                <span class="text-[9px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                    <i class="fa-solid fa-route text-blue-600"></i> Ulaşım Akışı:
                </span>
                <div class="p-1.5 bg-slate-50 rounded-xl border border-slate-200">
                    ${renderTransitVisualChain(place.transitChain)}
                </div>
            </div>

            <p class="text-[11px] text-slate-600 line-clamp-2">${place.desc}</p>

            <div class="flex items-center justify-between pt-0.5 text-[11px]">
                <button onclick="event.stopPropagation(); showBusLineOnMap('${place.associatedLineId}', true)" class="text-blue-600 font-bold hover:underline flex items-center gap-1 text-[10px]">
                    <i class="fa-solid fa-route"></i> Hattı Haritada Gör
                </button>
                <button onclick="event.stopPropagation(); setAsPointB('${place.id}')" class="bg-rose-600 hover:bg-rose-500 text-white font-bold px-3 py-1.5 rounded-xl text-[10px] transition flex items-center gap-1 shadow">
                    <i class="fa-solid fa-diamond-turn-right"></i> Buraya Rota Çiz (B)
                </button>
            </div>
        `;
        container.appendChild(card);
    });
}

function setAsPointB(placeId) {
    customPointB = null;
    document.getElementById("select-point-b").value = placeId;
    switchAppTab('ab-route');
    isRouteActive = true;
    calculateCustomABRoute();
}

function renderLinesList() {
    const container = document.getElementById("lines-container");
    container.innerHTML = "";

    document.getElementById("count-lines").textContent = BUS_LINES_DATA.length;

    BUS_LINES_DATA.forEach(line => {
        const card = document.createElement("div");
        card.className = "bg-white p-3.5 rounded-2xl border border-slate-200 shadow-sm hover:border-blue-500 hover:shadow-md transition cursor-pointer space-y-2";
        card.onclick = () => showBusLineOnMap(line.id);

        card.innerHTML = `
            <div class="flex items-center justify-between">
                <div class="flex items-center space-x-2.5">
                    <span style="background-color: ${line.color};" class="text-white font-mono font-black text-xs px-2.5 py-1 rounded-lg shadow">${line.code}</span>
                    <div>
                        <h4 class="text-xs font-bold text-slate-900">${line.name}</h4>
                        <span class="text-[10px] text-slate-400 font-mono">${line.type} • ${line.frequency}</span>
                    </div>
                </div>
                <button class="bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold px-2.5 py-1 rounded-lg text-[10px] transition">
                    <i class="fa-solid fa-route"></i> Güzergahı Gör
                </button>
            </div>
        `;
        container.appendChild(card);
    });
}

function sortPlacesByDistance() {
    PLACES_DATA.sort((a, b) => {
        const dA = calculateDistance(userCoords.lat, userCoords.lng, a.lat, a.lng);
        const dB = calculateDistance(userCoords.lat, userCoords.lng, b.lat, b.lng);
        return dA - dB;
    });
    renderPlacesList(document.getElementById("place-search-input").value);
}

// 11. MEKAN SEÇİMİ VE GÖRSEL AKIŞLI BİLGİ KARTI
let selectedPlaceId = null;

function selectPlace(placeId) {
    selectedPlaceId = placeId;
    const place = PLACES_DATA.find(p => p.id === placeId);
    if (!place) return;

    map.flyTo([place.lat, place.lng], 14, { duration: 1.0 });

    const floatCard = document.getElementById("floating-place-card");
    document.getElementById("float-icon").textContent = place.icon;
    document.getElementById("float-category").textContent = place.categoryName;
    document.getElementById("float-title").textContent = place.name;
    document.getElementById("float-desc").textContent = place.desc;

    const d = calculateDistance(userCoords.lat, userCoords.lng, place.lat, place.lng);
    document.getElementById("float-transit-time").textContent = `~${Math.round(d * 2.1 + 6)} dk (${d.toFixed(1)} km)`;
    
    // Rich visual transit chain in floating card
    document.getElementById("float-transit-route").innerHTML = `
        <div class="space-y-1.5">
            <div class="text-[10px] font-bold text-amber-300 flex items-center gap-1">
                <i class="fa-solid fa-signs-post"></i> Adım Adım Ulaşım Zinciri:
            </div>
            <div class="p-1.5 bg-slate-900 rounded-xl border border-slate-800">
                ${renderTransitVisualChain(place.transitChain)}
            </div>
            <div class="text-[10px] text-slate-300 font-sans leading-tight pt-1">${place.transit}</div>
        </div>
    `;

    floatCard.classList.remove("hidden");
}

function closeFloatingCard() {
    document.getElementById("floating-place-card").classList.add("hidden");
}

function showPlaceDirectRouteOnMap() {
    if (selectedPlaceId) {
        const place = PLACES_DATA.find(p => p.id === selectedPlaceId);
        if (place && place.associatedLineId) {
            showBusLineOnMap(place.associatedLineId, true);
        }
    }
}

// 12. UI TAB CONTROLLER & MOBİL UYUMLULUK
let isDrawerCollapsed = false;

function toggleMobileDrawer() {
    const drawer = document.getElementById("main-drawer");
    if (!drawer) return;
    
    if (isDrawerCollapsed) {
        drawer.style.height = "52vh";
        isDrawerCollapsed = false;
    } else {
        drawer.style.height = "42px";
        isDrawerCollapsed = true;
    }
    setTimeout(() => { if (map) map.invalidateSize(); }, 320);
}

function switchAppTab(tabId) {
    currentTab = tabId;
    const drawer = document.getElementById("main-drawer");
    if (drawer && window.innerWidth < 768) {
        drawer.style.height = "56vh";
        isDrawerCollapsed = false;
    }

    ['ab-route', 'places', 'lines', 'official-burulas'].forEach(t => {
        const btn = document.getElementById(`tab-btn-${t}`);
        const panel = document.getElementById(`panel-${t}`);
        if (btn && panel) {
            if (t === tabId) {
                btn.className = "flex-1 py-2 px-2 rounded-xl font-bold active-tab-btn transition flex items-center justify-center gap-1 shadow-sm";
                panel.classList.remove("hidden");
            } else {
                btn.className = "flex-1 py-2 px-2 rounded-xl font-semibold text-slate-600 hover:bg-white transition flex items-center justify-center gap-1";
                panel.classList.add("hidden");
            }
        }
    });
    setTimeout(() => { if (map) map.invalidateSize(); }, 200);
}

window.addEventListener('resize', () => {
    if (map) map.invalidateSize();
});

function setCategory(cat) {
    currentCategory = cat;
    document.querySelectorAll(".cat-filter-btn").forEach(btn => {
        if (btn.getAttribute("data-cat") === cat) {
            btn.className = "cat-filter-btn active-cat px-2.5 py-1 rounded-full font-bold whitespace-nowrap bg-slate-900 text-white shadow-sm";
        } else {
            btn.className = "cat-filter-btn px-2.5 py-1 rounded-full font-medium whitespace-nowrap bg-white text-slate-700 border border-slate-200 hover:border-blue-500";
        }
    });
    renderPlacesList(document.getElementById("place-search-input").value);
}

function filterPlaces() {
    const q = document.getElementById("place-search-input").value;
    renderPlacesList(q);
}

function centerOnUser() {
    if (map && userCoords) {
        map.flyTo([userCoords.lat, userCoords.lng], 15);
    }
}

function fitMapBounds() {
    if (!map) return;
    const group = L.featureGroup(Object.values(markersPlaces));
    map.fitBounds(group.getBounds(), { padding: [40, 40] });
}


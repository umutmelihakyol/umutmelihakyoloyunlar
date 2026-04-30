/* Oyunları burada güncelle. index.html ve games.html bu listeyi ortak kullanır. */
const GAMES = [
	{ id:1,name:"Kingdom Come: Deliverance", appId:379430, special:false, favorite:false, status:"bitti", genre:"Açık Dünya · Aksiyon-RPG", score:"9.2", metacritic:"76", playtime: 40, note:"Ortaçağ Bohemya'sında sıradan bir demirci oğlu olarak başladığın bu yolculuk, seni hem tarihsel hem duygusal olarak derinden etkiliyor. Hiçbir sihir yok, hiçbir seçilmiş kahraman hikayesi yok.", steam:"https://store.steampowered.com/app/379430/", youtube:""  },
  
	{ id:2, name:"Kingdom Come: Deliverance II", appId:1771300, special:false, favorite:false, status:"bitti", genre:"Açık Dünya · Aksiyon-RPG",  score:"9.5",  metacritic:"89", playtime: 70,
  note:"İlk oyunun sağlam temellerini alıp her şeyi bir üst seviyeye taşıyor. Henry artık daha olgun, dünya daha geniş ve hikaye çok daha epik. Orta Çağ simülasyonu olarak türün zirvesi.", steam:"https://store.steampowered.com/app/1771300/",  youtube:"" },
  
	{ id:3,  name:"Dispatch",  appId:2592160,  special:false, favorite:true, status:"bitti", genre:"Macera · Strateji · İnteraktif Hikaye", score:"7.5", metacritic:"87", playtime: 12, note:"Eski Telltale geliştiricilerinden gelen bu süper kahraman iş yeri komedisi, her kararın hikayeyi şekillendirdiği muhteşem bir anlatı sunuyor. Seçimlerin gerçekten önemli ve karakterler arasındaki dinamikler inanılmaz iyi yazılmış.", steam:"https://store.steampowered.com/app/2592160/",  youtube:"" },
  
	{ id:4, name:"Days Gone", appId:1259420, special:false, favorite:false, status:"bitti", genre:"Açık Dünya · Zombi · Hayatta Kalma",  score:"7.5",  metacritic:"72", playtime: 10, note:"Salgın sonrası ölümün kol gezdiği Amerika'da motosiklet sür ve savaş.",  steam:"https://store.steampowered.com/app/1259420/",  youtube:"https://youtu.be/FKtaOY9lMvM" },
   
	{ id: 5,  name: "PRAGMATA",  appId: 3357650,  image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3357650/e32e168b25ed68a0cf6264c220c07e96c2abfb56/header.jpg",  special: false, favorite: true, status: "bitti", genre: "Bilim Kurgu, Macera, Aksiyon",  score: "9.0",  metacritic: "85", playtime: 14, note: "Pragmata uzun geliştirme sürecine rağmen beklentileri karşılayan, gerçekten farklı bir oyun olmuş. En çok hoşuma giden şey oynanışı; shooter yapısını hackleme sistemiyle birleştirip türün o bayat monotonluğunu kırmayı başarmışlar. Dışarıdan basit duran bu sistem aslında inanılmaz çeşitleniyor ve oyunu sürekli taze tutuyor. Hugh ile Diana arasındaki ilişki de çok doğal ilerliyor, abartı drama yerine samimi bir bağ görüyoruz. ", steam: "https://store.steampowered.com/app/3357650/PRAGMATA/", youtube: "https://youtu.be/oncaa_fMsyw" },

	{ id: 6, name: "MOUSE: P.I. For Hire", appId: 2416450, special: false, favorite: false, status: "bitti", genre: "FPS, Aksiyon", score: "8.5", metacritic: "81", playtime: 16, note: "Oyunun sanat tarzı gerçekten çok etkileyici. 1930’ların çizgi film estetiği farklı ve hoş bir atmosfer yaratmış. Seslendirme kalitesi oldukça yüksek, Troy Baker yine farkını hissettiriyor. Oynanış kısmı klasik FPS mekaniklerini takip ediyor. Silahları 3 seviyeye kadar geliştirebilmek ve yeterli çeşitlilik sunulması artı bir özellik. Bölüm tasarımları ortalama seviyede, ne çok iyi ne de kötü. Vuruş hissi ise biraz zayıf kalmış, ancak bu durum seçilen görsel tarzdan dolayı çok da yadırganmıyor. Türkçe çeviri başarılı, Lockpick ekibi güzel iş çıkarmış. Genel olarak keyifli bir deneyim sunuyor.", steam: "https://store.steampowered.com/app/2416450/", youtube: "https://youtu.be/9nrmJSgqYTI" },

	{ id: 7, name: "SAROS", appId: 2416450, image: "https://i.ytimg.com/vi/XtCS5tuvCKs/hq720.jpg", special: false, favorite: false, status: "oynanıyor", genre: "Nişancı, Macera", score: "7", metacritic: "88", playtime: 4, note: "PlaySatatin Oyunu.", steam: "https://www.playstation.com/tr-tr/games/saros/", youtube: "https://youtu.be/rj_1CzKUR4w" },

	{ id: 8, name: "Luto ", appId: 1729740, special: false, favorite: false, status: "bitti", genre: "Psikolojik Korku, Yürüme Simülatörü", score: "6", metacritic: "83", playtime: 10, note: "Ortaya sadece görsel olarak değil, duygusal olarak da çok güçlü bir iş çıkmış. Korkutucu, karanlık ve derin bir oyun. Oyuna ne kadar emek verildiği çok net hissediliyor. Oyun hakkında “Çok korkutucu değil” diyenler de var. Doğru, sadece birkaç jumpscare var ama bence bu bir artı. Az ama etkili kullanılmışlar. Bu oyun sizi sürekli korkudan terletecek türden değil. Onun yerine “neden?” sorusunu sorduruyor. Oyun çok güçlü bir atmosferle başlıyor. Sürekli aynı günü yaşadığınız, karanlık ve tekinsiz bir senaryo var ve bazı sahnelerde gerçekten tüyler ürpertici olmayı başarıyor.", steam: "https://store.steampowered.com/app/1729740/Luto/", youtube: "" },

	{ id: 9, name: "Still Wakes the Deep", appId: 1622910, special: false, favorite: false, status: "bitti", genre: "Psikolojik Korku", score: "7", metacritic: "", playtime: 7, note: "Still Wakes The Deep, 1975’te denizdeki bir petrol platformunda geçen, atmosferi güçlü bir korku, yürüyüş simülasyonu. Geliştiricisi olan The Chinese Room bu oyunda gerilim, çaresizlik hissi ve görselliği çok iyi yansıtmış. Hikaye fena değil, yaklaşık 4 saat sürüyor ve sıkmıyor. Mekanikler keyifli olsa da yer yer küçük bug’lar, zayıf ipuçları ve bazı noktalarda kolay atlatılan yaratıklar var. Optimizasyonu çok iyi değil. Buna rağmen deneyim akıcı ve oynamaya değer.", steam: "https://store.steampowered.com/app/1622910/Still_Wakes_the_Deep/", youtube: "" },

	{ id: 10, name: "Memories in Orbit", appId: 1672810, special: false, favorite: false, status: "bitti", genre: "Medrovania, Keşif", score: "8.5", metacritic: "83", playtime: 26, note: "MIO, özgün sanat tasarımı, akıcı animasyonları ve türün en iyi örneklerinden biri olan haritasıyla öne çıkan, platform odaklı bir metroidvania. Keşif hissi, özgün mekanikleri ve gizemli hikayesi çok güçlü. Zorluğu özellikle gerçek sonda artıyor. Bazı tasarım tercihleri yorucu olabiliyor ama genel kaliteyi gölgelemiyor. Türü sevenler için kesinlikle denenmesi gereken, çok etkileyici bir yapım.", steam: "https://store.steampowered.com/app/1672810/", youtube: "" },

	{ id: 11, name: "REANIMAL ", appId: 2129530, special: false, favorite: false, status: "bitti", genre: "Korku, Eşl,, Macera", score: "7.5", metacritic: "81", playtime: 4, note: "Reanimal, Tarsier Studios’un alıştığımız Little Nightmares formülünü daha geniş ve tamamen 3D bir yapıya taşıdığı karanlık bir deneyim sunuyor. Oyun; güçlü atmosferi, sinematik anlatımı, tüyler ürpertici düşman tasarımları, etkileyici ses kullanımı ve akıcı co-op oynanışıyla öne çıkarken, dinamik kamera ve başarılı animasyonlar sayesinde önceki yapımlardaki oynanışı çok üst seviyeye çıkartmış. Buna karşılık hikayede sınırlı diyaloglar, yer yer fazla karanlık bölümler ve yaklaşık 4 saat süren kısa oynanış süresi bakımından iyi olmamış. 4 saatlik bir oyun için 19 dolar çok fazla.", steam: "https://store.steampowered.com/app/2129530/REANIMAL/", youtube: "" },

	{ id: 12, name: "High On Life 2", appId: 2069250, image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2069250/14a0a45da992ca33d59eb318b5cb9598c070e1c1/header.jpg" , special: false, favorite: false, status: "bitti", genre: "Aksiyon, Komedi, FPS", score: "8", metacritic: "", playtime: 13, note: "High On Life 2, absürt mizahını korurken oynanış tarafında risk alan bir devam oyunu. Kaykay mekaniği keşfi ve hareketi ciddi şekilde eğlenceli hale getirirken, görev çeşitliliği ve yan aktiviteler ilk oyuna kıyasla daha yaratıcı. Ancak hikaye anlatımı dağınık, silah çatışmaları fazla kaotik ve teknik problemler deneyimi zaman zaman kötüleştiriyor.", steam: "https://store.steampowered.com/app/2069250/High_On_Life_2/", youtube: "" },

	{ id: 13, name: "The 18th Attic", appId: 3403660, special: false, favorite: false, status: "bitti", genre: "Psikolojik Korku, Hikaye", score: "5", metacritic: "", playtime: 2, note: "The 18th Attic, fotoğraf çekerek anomalileri tespit ettiğiniz, atmosfer odaklı ve kısa süreli bir psikolojik korku oyunu. Güçlü atmosferi ve iki farklı oyun modu iyiyken, kısa oynanışı, zayıf hikayesi ve sorunlu fotoğraf mekaniği oyunu tek seferlik bir deneyime dönüştürüyor. Aşırı korku yerine dikkat ve gözlem sevenler için uygun, derinlik arayanlar için ise yetersiz. Benim için zoraki bir bitiriş oldu.", steam: "https://store.steampowered.com/app/3403660/The_18th_Attic__Paranormal_Anomaly_Hunting_Game/", youtube: "" },

	{ id: 14, name: "Hollow Knight: Silksong", appId: 1030300, special: false, favorite: false, status: "bitti", genre: "Metrovania, Zor, Bağımsız", score: "8.5", metacritic: "90", playtime: 45, note: "Hollow Knight: Silksong, herkese hitap etmeyen, bilinçli şekilde sert tasarlanmış bir metroidvania. Hornet’in hızlı ve akrobatik oynanışı çok tatmin edici olmuş. Yüksek zorluk, double damage sistemi, uzun boss runback’leri, bench yerleşimleri deneyimi zorlayabiliyor. Görsel tasarım, atmosfer ve müzikler oldukça güçlü. Keşfi zorlaştıran hasar dengesi ve geç hissedilen karakter gelişimi, oyunu sabırlı ve türü seven oyuncular için uygun kılıyor.", steam: "https://store.steampowered.com/app/1030300/Hollow_Knight_Silksong/", youtube: "" },

	{ id: 15, name: "A Plague Tale: Requiem", appId: 1182900, special: false, favorite: false, status: "bitti", genre: "Aksiyon-Macera, Gizlilik", score: "6", metacritic: "85", playtime: 10, note: "", steam: "https://store.steampowered.com/app/1182900/A_Plague_Tale_Requiem/", youtube: "https://www.youtube.com/watch?v=f8rPZ2Zc8Yg" },

	{ id: 16, name: "Red Dead Redemption 2", appId: 1174180, special: false, favorite: false, status: "bitti", genre: "Aksiyon-Macera, Açık Dünya", score: "8.5", metacritic: "93", playtime: 75, note: "", steam: "https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/", youtube: "https://www.youtube.com/watch?v=gmA6MrX81z4" },

	{ id: 17, name: "Call of Duty: Modern Warfare II", appId: 1938090, special: false, favorite: false, status: "bitti", genre: "FPS, Aksiyon", score: "7", metacritic: "75", playtime: 10, note: "", steam: "https://store.steampowered.com/app/1938090/Call_of_Duty_Modern_Warfare_II/", youtube: "https://www.youtube.com/watch?v=r72GP1PIZa0" },

	{ id: 18, name: "Marvel's Spider-Man 2", appId: 2651280, special: false, favorite: false, status: "bitti", genre: "Aksiyon-Macera, Açık Dünya", score: "8", metacritic: "90", playtime: 30, note: "", steam: "https://store.steampowered.com/app/2651280/Marvels_SpiderMan_2/", youtube: "https://www.youtube.com/watch?v=nq1M_Wc4FIc" },

	{ id: 19, name: "Crysis 3", appId: 1282690, special: false, favorite: false, status: "bitti", genre: "FPS, Sci-Fi", score: "8", metacritic: "76", playtime: 16, note: "", steam: "https://store.steampowered.com/app/1282690/Crysis_3_Remastered/", youtube: "https://www.youtube.com/watch?v=JXrE0wG3h2U" },

	{ id: 20, name: "Detroit: Become Human", appId: 1222140, special: false, favorite: true, status: "bitti", genre: "Interactive Drama, Sci-Fi", score: "9.5", metacritic: "78", playtime: 60, note: "", steam: "https://store.steampowered.com/app/1222140/Detroit_Become_Human/", youtube: "https://www.youtube.com/watch?v=8a-EObAhYrg" },

	{ id: 21, name: "Starfield", appId: 1716740, special: false, favorite: false, status: "bitti", genre: "RPG, Açık Dünya, Sci-Fi", score: "6", metacritic: "83", playtime: 65, note: "", steam: "https://store.steampowered.com/app/1716740/Starfield/", youtube: "https://www.youtube.com/watch?v=kfYEiTdsyas" },

	{ id: 22, name: "Split Fiction", appId: 2001120, special: false, favorite: false, status: "bitti", genre: "Macera", score: "9", metacritic: "", playtime: 15, note: "", steam: "https://store.steampowered.com/app/2001120/Split_Fiction/", youtube: "" },

{ id: 23, name: "Tom Clancy's The Division 2", appId: 2221490, special: false, favorite: false, status: "bitti", genre: "Aksiyon RPG, Looter Shooter, TPS", score: "", metacritic: "82", playtime: 0, note: "", steam: "https://store.steampowered.com/app/2221490/Tom_Clancys_The_Division_2/", youtube: "https://www.youtube.com/watch?v=njfj6KwEAfg" },

{ id: 24, name: "Assassin's Creed Shadows", appId: 3159330, special: false, favorite: false, status: "bitti", genre: "Aksiyon-Macera, Açık Dünya, RPG", score: "", metacritic: "81", playtime: 0, note: "", steam: "https://store.steampowered.com/app/3159330/Assassins_Creed_Shadows/", youtube: "https://www.youtube.com/watch?v=HInwdVFWvVs" },

{ id: 25, name: "The Last of Us Part I", appId: 1888930, special: false, favorite: false, status: "bitti", genre: "Aksiyon-Macera, Hayatta Kalma, Zengin Hikaye", score: "", metacritic: "88", playtime: 0, note: "", steam: "https://store.steampowered.com/app/1888930/The_Last_of_Us_Part_I/", youtube: "https://www.youtube.com/watch?v=Zf5xOsXXFY8" },

{ id: 26, name: "The Last of Us Part II Remastered", appId: 2531310, special: false, favorite: false, status: "bitti", genre: "Aksiyon-Macera, Hayatta Kalma, Zengin Hikaye", score: "", metacritic: "90", playtime: 0, note: "", steam: "https://store.steampowered.com/app/2531310/The_Last_of_Us_Part_II_Remastered/", youtube: "https://www.youtube.com/watch?v=Ye3st9z6jQY" },

{ id: 27, name: "Devil May Cry 5", appId: 601150, special: false, favorite: false, status: "bitti", genre: "Aksiyon, Hack and Slash", score: "", metacritic: "88", playtime: 0, note: "", steam: "https://store.steampowered.com/app/601150/Devil_May_Cry_5/", youtube: "https://www.youtube.com/watch?v=smK3M2RvGtw" },

{ id: 28, name: "Dying Light 2 Stay Human: Reloaded Edition", appId: 534380, special: false, favorite: false, status: "bitti", genre: "Aksiyon RPG, Açık Dünya, Zombi, Parkour", score: "", metacritic: "76", playtime: 0, note: "", steam: "https://store.steampowered.com/app/534380/Dying_Light_2_Stay_Human_Reloaded_Edition/", youtube: "https://www.youtube.com/watch?v=njAOpATG46E" },

{ id: 29, name: "Days Gone", appId: 1259420, special: false, favorite: false, status: "bitti", genre: "Aksiyon-Macera, Açık Dünya, Zombi", score: "", metacritic: "76", playtime: 0, note: "", steam: "https://store.steampowered.com/app/1259420/Days_Gone/", youtube: "https://www.youtube.com/watch?v=gl1Pw97whJg" },

{ id: 30, name: "STAR WARS Battlefront", appId: 1237980, special: false, favorite: false, status: "bitti", genre: "Aksiyon, FPS, Multiplayer", score: "", metacritic: "75", playtime: 0, note: "", steam: "https://store.steampowered.com/app/1237980/STAR_WARS_Battlefront/", youtube: "https://www.youtube.com/watch?v=R4Zp7DHxdKM" },

{ id: 31, name: "Clair Obscur: Expedition 33", appId: 1903340, special: false, favorite: false, status: "bitti", genre: "RPG, Turn-Based, Macera", score: "", metacritic: "92", playtime: 0, note: "", steam: "https://store.steampowered.com/app/1903340/Clair_Obscur_Expedition_33/", youtube: "https://www.youtube.com/watch?v=oecZmlLXqXk" },

{ id: 32, name: "Death Stranding Director's Cut", appId: 1850570, special: false, favorite: false, status: "bitti", genre: "Aksiyon-Macera, Açık Dünya, Yürüme Simülatörü", score: "", metacritic: "85", playtime: 0, note: "", steam: "https://store.steampowered.com/app/1850570/DEATH_STRANDING_DIRECTORS_CUT/", youtube: "https://www.youtube.com/watch?v=mleMv5r9xkI" },

{ id: 33, name: "Cyberpunk 2077", appId: 1091500, special: false, favorite: false, status: "bitti", genre: "RPG, Açık Dünya, Sci-Fi", score: "", metacritic: "86", playtime: 0, note: "", steam: "https://store.steampowered.com/app/1091500/Cyberpunk_2077/", youtube: "https://www.youtube.com/watch?v=8X2kIfS6fb8" },

{ id: 34, name: "The Alters", appId: 1601570, special: false, favorite: false, status: "bitti", genre: "Hayatta Kalma, Sci-Fi, Macera", score: "", metacritic: "84", playtime: 0, note: "", steam: "https://store.steampowered.com/app/1601570/The_Alters/", youtube: "https://www.youtube.com/watch?v=8nBcelrikvA" },

{ id: 35, name: "NieR: Automata", appId: 524220, special: true, favorite: true, status: "bitti", genre: "Aksiyon RPG, Hack and Slash, Zengin Hikaye", score: "9.5", metacritic: "88", playtime: 0, note: "", steam: "https://store.steampowered.com/app/524220/NieRAutomata/", youtube: "https://www.youtube.com/watch?v=i3Ue2mDV-eU" },

{ id: 36, name: "Warhammer 40,000: Space Marine 2", appId: 2183900, special: false, favorite: false, status: "bitti", genre: "Aksiyon, TPS, Sci-Fi", score: "", metacritic: "82", playtime: 0, note: "", steam: "https://store.steampowered.com/app/2183900/Warhammer_40000_Space_Marine_2/", youtube: "https://www.youtube.com/watch?v=Y3WmCYCC8dc" },

{ id: 37, name: "Cast n Chill", appId: 3483740, special: false, favorite: false, status: "bitti", genre: "Gündelik, Simülasyon, Fishing", score: "6", metacritic: "", playtime: 0, note: "", steam: "https://store.steampowered.com/app/3483740/Cast_n_Chill/", youtube: "" },

{ id: 38, name: "No Man's Sky", appId: 275850, special: false, favorite: false, status: "bitti", genre: "Açık Dünya, Hayatta Kalma, Space, Keşif", score: "", metacritic: "71", playtime: 0, note: "", steam: "https://store.steampowered.com/app/275850/No_Mans_Sky/", youtube: "https://www.youtube.com/watch?v=nLtmEjqzg7M" },

{ id: 39, name: "Planet of Lana", appId: 1608230, special: false, favorite: false, status: "bitti", genre: "Macera, Bulmaca, Platform", score: "", metacritic: "80", playtime: 0, note: "", steam: "https://store.steampowered.com/app/1608230/Planet_of_Lana/", youtube: "https://www.youtube.com/watch?v=4J_zO5IXXyw" },

{ id: 40, name: "Sable", appId: 757310, special: false, favorite: false, status: "bitti", genre: "Macera, Açık Dünya, Keşif", score: "", metacritic: "76", playtime: 0, note: "", steam: "https://store.steampowered.com/app/757310/Sable/", youtube: "https://www.youtube.com/watch?v=a0evJUp7-aw" },

{ id: 41, name: "Mafia: The Old Country", appId: 1941540, special: false, favorite: false, status: "bitti", genre: "Aksiyon-Macera, Suç, Zengin Hikaye", score: "", metacritic: "76", playtime: 0, note: "", steam: "https://store.steampowered.com/app/1941540/Mafia_The_Old_Country/", youtube: "https://www.youtube.com/watch?v=KI-sFV32SmM" },

{ id: 42, name: "DREDGE", appId: 1562430, special: false, favorite: false, status: "bitti", genre: "Macera, Fishing, Korku", score: "", metacritic: "80", playtime: 0, note: "", steam: "https://store.steampowered.com/app/1562430/DREDGE/", youtube: "https://www.youtube.com/watch?v=ZtTfROTgYKA" },

{ id: 43, name: "Dying Light: The Beast", appId: 3008130, special: false, favorite: false, status: "bitti", genre: "Aksiyon, Açık Dünya, Zombi, Hayatta Kalma Korku", score: "7", metacritic: "", playtime: 0, note: "", steam: "https://store.steampowered.com/app/3008130/Dying_Light_The_Beast/", youtube: "" },

{ id: 44, name: "Cronos: The New Dawn", appId: 2101960, special: false, favorite: false, status: "bitti", genre: "Hayatta Kalma Korku, Aksiyon-Macera, Sci-Fi", score: "7.2", metacritic: "77", playtime: 0, note: "", steam: "https://store.steampowered.com/app/2101960/Cronos_The_New_Dawn/", youtube: "https://www.youtube.com/watch?v=Yw1kriO2MJw" },

{ id: 45, name: "Pacific Drive", appId: 1458140, special: false, favorite: false, status: "bitti", genre: "Hayatta Kalma, Driving, Macera", score: "", metacritic: "79", playtime: 0, note: "", steam: "https://store.steampowered.com/app/1458140/Pacific_Drive/", youtube: "https://www.youtube.com/watch?v=sfGnxh0PNL8" },

{ id: 46, name: "Silent Hill f", appId: 2947440, image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2947440/7e5d923ac622bd1775ebc9b5d4b5b0a24bf5ed40/header.jpg", special: false, favorite: false, status: "bitti", genre: "Psikolojik Korku, Hayatta Kalma Korku", score: "7.6", metacritic: "86", playtime: 0, note: "", steam: "https://store.steampowered.com/app/2947440/SILENT_HILL_f/", youtube: "https://www.youtube.com/watch?v=0NMoPvqaz10" },

{ id: 47, name: "Gloomy Eyes", appId: "", special: false, favorite: false, status: "bitti", genre: "Macera, Bulmaca", score: "", metacritic: "", playtime: 0, note: "", steam: "", youtube: "" },

{ id: 48, name: "Metal Gear Solid 3: Snake Eater", appId: 2131650, special: false, favorite: false, status: "bitti", genre: "Aksiyon, Gizlilik, Macera", score: "", metacritic: "91", playtime: 0, note: "", steam: "https://store.steampowered.com/app/2131650/METAL_GEAR_SOLID_3_Snake_Eater__Master_Collection_Version/", youtube: "https://www.youtube.com/watch?v=hXUono66wxI" },

{ id: 49, name: "KARMA", appId: "", special: false, favorite: false, status: "bitti", genre: "Macera, Psikolojik Korku", score: "", metacritic: "", playtime: 0, note: "", steam: "", youtube: "" },

{ id: 50, name: "Resident Evil 4", appId: 2050650, special: false, favorite: false, status: "bitti", genre: "Hayatta Kalma Korku, Aksiyon", score: "", metacritic: "93", playtime: 0, note: "", steam: "https://store.steampowered.com/app/2050650/Resident_Evil_4/", youtube: "https://www.youtube.com/watch?v=O75Ip4o1bs8" },

{ id: 51, name: "Sifu", appId: 2138710, special: false, favorite: false, status: "bitti", genre: "Aksiyon, Beat 'em Up", score: "", metacritic: "81", playtime: 0, note: "", steam: "https://store.steampowered.com/app/2138710/Sifu/", youtube: "https://www.youtube.com/watch?v=1FQ1YO3Ks2U" },

{ id: 52, name: "Leila", appId: "", special: false, favorite: false, status: "bitti", genre: "Macera, Bulmaca, Zengin Hikaye", score: "", metacritic: "", playtime: 0, note: "", steam: "", youtube: "" },

{ id: 53, name: "Dealer Life 2", appId: 1343670, special: false, favorite: false, status: "bitti", genre: "Simülasyon, Yönetim, Gündelik", score: "", metacritic: "", playtime: 0, note: "", steam: "https://store.steampowered.com/app/1343670/Dealer_Life_2/", youtube: "https://www.youtube.com/watch?v=V1Iec7pWgBQ" },

{ id: 54, name: "Dome Keeper", appId: 1637320, special: false, favorite: false, status: "bitti", genre: "Roguelike, Mining, Tower Defense", score: "", metacritic: "82", playtime: 0, note: "", steam: "https://store.steampowered.com/app/1637320/Dome_Keeper/", youtube: "https://www.youtube.com/watch?v=V1Iec7pWgBQ" },

{ id: 55, name: "Sodaman", appId: "", special: false, favorite: false, status: "bitti", genre: "Aksiyon, Bağımsız", score: "", metacritic: "", playtime: 0, note: "", steam: "", youtube: "" },

{ id: 56, name: "MiSde", appId: "", special: false, favorite: false, status: "bitti", genre: "Bağımsız", score: "", metacritic: "", playtime: 0, note: "", steam: "", youtube: "" },

{ id: 57, name: "Turmoil", appId: 361280, special: false, favorite: false, status: "bitti", genre: "Simülasyon, Strateji, Yönetim", score: "", metacritic: "73", playtime: 0, note: "", steam: "https://store.steampowered.com/app/361280/Turmoil/", youtube: "https://www.youtube.com/watch?v=u3CZ1r4F9BI" },

{ id: 58, name: "WanderStop", appId: 1299460, special: false, favorite: false, status: "bitti", genre: "Macera, Simülasyon, Zengin Hikaye", score: "", metacritic: "79", playtime: 0, note: "", steam: "https://store.steampowered.com/app/1299460/Wanderstop/", youtube: "https://www.youtube.com/watch?v=E0S6yYJf2rM" },

{ id: 59, name: "The Walking Dead Season 1", appId: 207610, special: false, favorite: false, status: "bitti", genre: "Macera, Interactive Drama, Zengin Hikaye", score: "", metacritic: "89", playtime: 0, note: "", steam: "https://store.steampowered.com/app/207610/The_Walking_Dead/", youtube: "https://www.youtube.com/watch?v=N40uY51s5Z0" },

{ id: 60, name: "The Walking Dead Season 2", appId: 261030, special: false, favorite: false, status: "bitti", genre: "Macera, Interactive Drama, Zengin Hikaye", score: "", metacritic: "80", playtime: 0, note: "", steam: "https://store.steampowered.com/app/261030/The_Walking_Dead_Season_Two/", youtube: "https://www.youtube.com/watch?v=ilEB4KTTOIo" },

{ id: 61, name: "The Walking Dead: 400 Days", appId: 207620, special: false, favorite: false, status: "bitti", genre: "Macera, Interactive Drama, Zengin Hikaye", score: "", metacritic: "78", playtime: 0, note: "", steam: "https://store.steampowered.com/app/207620/The_Walking_Dead_400_Days/", youtube: "https://www.youtube.com/watch?v=7kDNkD3s7fQ" },

{ id: 62, name: "Astro Bot", appId: "", special: false, favorite: false, status: "bitti", genre: "Platform, Aksiyon-Macera", score: "", metacritic: "94", playtime: 0, note: "", steam: "", youtube: "https://www.youtube.com/watch?v=wHMNQzLG_Jg" },

{ id: 63, name: "Biped", appId: 1071870, special: false, favorite: false, status: "bitti", genre: "Co-op, Bulmaca, Macera", score: "", metacritic: "74", playtime: 0, note: "", steam: "https://store.steampowered.com/app/1071870/Biped/", youtube: "https://www.youtube.com/watch?v=ffzX6kZc0GE" },

{ id: 64, name: "Airborne Kingdom", appId: 982290, special: false, favorite: false, status: "bitti", genre: "City Builder, Strateji, Yönetim", score: "", metacritic: "77", playtime: 0, note: "", steam: "https://store.steampowered.com/app/982290/Airborne_Kingdom/", youtube: "https://www.youtube.com/watch?v=ZKZz0Y4RIvY" },

{ id: 65, name: "Road 96", appId: 1466640, special: false, favorite: false, status: "bitti", genre: "Macera, Zengin Hikaye, Choices Matter", score: "", metacritic: "78", playtime: 0, note: "", steam: "https://store.steampowered.com/app/1466640/Road_96/", youtube: "https://www.youtube.com/watch?v=W5Zf6k7p7bE" },

{ id: 66, name: "Neon White", appId: 1533420, special: false, favorite: false, status: "bitti", genre: "FPS, Platform, Aksiyon", score: "", metacritic: "90", playtime: 0, note: "", steam: "https://store.steampowered.com/app/1533420/Neon_White/", youtube: "https://www.youtube.com/watch?v=DD4zflZEBuA" },

{ id: 67, name: "Pizza Tower", appId: 2231450, special: false, favorite: false, status: "bitti", genre: "Platform, Aksiyon, Bağımsız", score: "", metacritic: "89", playtime: 0, note: "", steam: "https://store.steampowered.com/app/2231450/Pizza_Tower/", youtube: "https://www.youtube.com/watch?v=Wlq6fFOqI28" },

{ id: 68, name: "The Cabin Factory", appId: "", special: false, favorite: false, status: "bitti", genre: "Korku, Yürüme Simülatörü, Psikolojik Korku", score: "", metacritic: "", playtime: 0, note: "", steam: "", youtube: "" },

{ id: 69, name: "Black Mesa", appId: 362890, special: false, favorite: false, status: "bitti", genre: "FPS, Sci-Fi, Aksiyon", score: "", metacritic: "86", playtime: 0, note: "", steam: "https://store.steampowered.com/app/362890/Black_Mesa/", youtube: "https://www.youtube.com/watch?v=V7vDsarvyoc" },

{ id: 70, name: "Senua’s Saga: Hellblade II", appId: 2461850, special: false, favorite: false, status: "bitti", genre: "Aksiyon-Macera, Psikolojik, Sinematik", score: "", metacritic: "81", playtime: 0, note: "", steam: "https://store.steampowered.com/app/2461850/Senuas_Saga_Hellblade_II/", youtube: "https://www.youtube.com/watch?v=3VYGOkMnGCE" },

{ id: 71, name: "Endling: Extinction is Forever", appId: 898890, special: false, favorite: false, status: "bitti", genre: "Macera, Hayatta Kalma, Atmospheric", score: "", metacritic: "82", playtime: 0, note: "", steam: "https://store.steampowered.com/app/898890/Endling__Extinction_is_Forever/", youtube: "https://www.youtube.com/watch?v=0DXpA6b3YtM" },

{ id: 72, name: "The Final Station", appId: 435530, special: false, favorite: false, status: "bitti", genre: "Aksiyon, Macera, Hayatta Kalma", score: "", metacritic: "76", playtime: 0, note: "", steam: "https://store.steampowered.com/app/435530/The_Final_Station/", youtube: "https://www.youtube.com/watch?v=oRzm_KZgvCY" },

{ id: 73, name: "Valiant Hearts: The Great War", appId: 260230, special: false, favorite: false, status: "bitti", genre: "Macera, Bulmaca, Tarihsel", score: "", metacritic: "79", playtime: 0, note: "", steam: "https://store.steampowered.com/app/260230/Valiant_Hearts_The_Great_War/", youtube: "https://www.youtube.com/watch?v=MP8q5F6dFqQ" },

{ id: 74, name: "Dishonored", appId: 205100, special: false, favorite: false, status: "bitti", genre: "Gizlilik, Aksiyon", score: "", metacritic: "91", playtime: 0, note: "", steam: "https://store.steampowered.com/app/205100/Dishonored/", youtube: "https://www.youtube.com/watch?v=VeIn3WjbVbw" },

{ id: 75, name: "Kena: Bridge of Spirits", appId: 1954200, special: false, favorite: false, status: "bitti", genre: "Aksiyon-Macera", score: "", metacritic: "81", playtime: 0, note: "", steam: "https://store.steampowered.com/app/1954200/Kena_Bridge_of_Spirits/", youtube: "https://www.youtube.com/watch?v=pWh5388AEHw" },

{ id: 76, name: "Eriksholm: The Stolen Dream", appId: "", special: false, favorite: false, status: "bitti", genre: "Gizlilik, Macera", score: "", metacritic: "", playtime: 0, note: "", steam: "", youtube: "" },

{ id: 77, name: "Superliminal", appId: 1049410, special: false, favorite: false, status: "bitti", genre: "Bulmaca, First-Person", score: "", metacritic: "75", playtime: 0, note: "", steam: "https://store.steampowered.com/app/1049410/Superliminal/", youtube: "https://www.youtube.com/watch?v=_SX8XMwMw6Y" },

{ id: 78, name: "Routine", appId: "", special: false, favorite: false, status: "bitti", genre: "Sci-Fi, Korku", score: "", metacritic: "", playtime: 0, note: "", steam: "", youtube: "https://www.youtube.com/watch?v=LaZqV0o7EW4" },

{ id: 79, name: "The Stanley Parable: Ultra Deluxe", appId: 1703340, special: false, favorite: false, status: "bitti", genre: "Hikaye, Macera", score: "", metacritic: "90", playtime: 0, note: "", steam: "https://store.steampowered.com/app/1703340/The_Stanley_Parable_Ultra_Deluxe/", youtube: "https://www.youtube.com/watch?v=Zb6tZ2c8Y8k" },

{ id: 80, name: "Despot's Game", appId: 1227280, special: false, favorite: false, status: "bitti", genre: "Roguelike, Strateji", score: "", metacritic: "78", playtime: 0, note: "", steam: "https://store.steampowered.com/app/1227280/Despots_Game/", youtube: "https://www.youtube.com/watch?v=8XrZ6bJ8X9k" },

{ id: 81, name: "The Outer Worlds", appId: 578650, special: false, favorite: false, status: "bitti", genre: "RPG, Sci-Fi, Açık Dünya", score: "", metacritic: "82", playtime: 0, note: "", steam: "https://store.steampowered.com/app/578650/The_Outer_Worlds/", youtube: "https://www.youtube.com/watch?v=MGLTgt0EEqc" },

{ id: 82, name: "Tiny Bookshop", appId: 2133760, special: false, favorite: false, status: "bitti", genre: "Simülasyon, Cozy, Bağımsız", score: "", metacritic: "", playtime: 0, note: "", steam: "https://store.steampowered.com/app/2133760/Tiny_Bookshop/", youtube: "https://www.youtube.com/watch?v=3Vg9GJ7c7xE" },

{ id: 83, name: "A Long Way To The Here", appId: "", special: false, favorite: false, status: "bitti", genre: "Macera, Bağımsız", score: "", metacritic: "", playtime: 0, note: "", steam: "", youtube: "" },

{ id: 84, name: "Mandragora: Whispers of the Witch Tree", appId: 1721060, special: false, favorite: false, status: "bitti", genre: "Aksiyon RPG, Soulslike, Metroidvania", score: "", metacritic: "78", playtime: 0, note: "", steam: "https://store.steampowered.com/app/1721060/Mandragora/", youtube: "https://www.youtube.com/watch?v=K0V8F0pQk3I" },

{ id: 85, name: "Dispatch", appId: "", special: false, favorite: false, status: "bitti", genre: "Simülasyon, Strateji", score: "", metacritic: "", playtime: 0, note: "", steam: "", youtube: "" },

{ id: 86, name: "Ghost of Yotei", appId: "", special: false, favorite: false, status: "bitti", genre: "Aksiyon-Macera, Açık Dünya", score: "", metacritic: "", playtime: 0, note: "", steam: "", youtube: "" },

{ id: 87, name: "Battlefield 6", appId: "", special: false, favorite: false, status: "bitti", genre: "FPS, Aksiyon", score: "", metacritic: "", playtime: 0, note: "", steam: "", youtube: "" },

{ id: 88, name: "Little Nightmares III", appId: 1392860, special: false, favorite: false, status: "bitti", genre: "Bulmaca, Korku, Macera", score: "", metacritic: "", playtime: 0, note: "", steam: "https://store.steampowered.com/app/1392860/Little_Nightmares_III/", youtube: "https://www.youtube.com/watch?v=G7u0gk5n3nE" },

{ id: 89, name: "Horizon Forbidden West Complete Edition", appId: 2420110, special: false, favorite: false, status: "bitti", genre: "Aksiyon RPG, Açık Dünya", score: "", metacritic: "88", playtime: 0, note: "", steam: "https://store.steampowered.com/app/2420110/Horizon_Forbidden_West_Complete_Edition/", youtube: "https://www.youtube.com/watch?v=Lq594XmpPBg" },

{ id: 90, name: "The Dark Pictures Anthology: Little Hope", appId: 1194630, special: false, favorite: false, status: "bitti", genre: "Korku, Interactive Drama", score: "", metacritic: "73", playtime: 0, note: "", steam: "https://store.steampowered.com/app/1194630/The_Dark_Pictures_Anthology_Little_Hope/", youtube: "https://www.youtube.com/watch?v=J0tFzWg1bQw" },

{ id: 91, name: "The Dark Pictures Anthology: Man of Medan", appId: 939850, special: false, favorite: false, status: "bitti", genre: "Korku, Interactive Drama", score: "", metacritic: "72", playtime: 0, note: "", steam: "https://store.steampowered.com/app/939850/The_Dark_Pictures_Anthology_Man_of_Medan/", youtube: "https://www.youtube.com/watch?v=1WZ0tKJ9Z9E" },

{ id: 92, name: "Hell is Us", appId: 1475810, special: false, favorite: false, status: "bitti", genre: "Aksiyon-Macera, Soulslike", score: "", metacritic: "", playtime: 0, note: "", steam: "https://store.steampowered.com/app/1475810/Hell_is_Us/", youtube: "https://www.youtube.com/watch?v=G2zYF1G6qgQ" },

{ id: 93, name: "Viewfinder", appId: 1382070, special: false, favorite: false, status: "bitti", genre: "Bulmaca, First-Person", score: "", metacritic: "81", playtime: 0, note: "", steam: "https://store.steampowered.com/app/1382070/Viewfinder/", youtube: "https://www.youtube.com/watch?v=crteKROYkHM" },

{ id: 94, name: "Arma 3", appId: 107410, special: true, favorite: true, status: "bitti", genre: "Askeri Simülasyon, FPS, Açık Dünya", score: "8", metacritic: "74", playtime: 9850, note: "", steam: "https://store.steampowered.com/app/107410/Arma_3/", youtube: "https://www.youtube.com/watch?v=M1uM9c1aH0k" },

{ id: 95, name: "Tom Clancy's Rainbow Six Siege X", appId: 359550, special: true, favorite: true, status: "oynanıyor", genre: "FPS, Taktiksel Shooter, Multiplayer", score: "8.2", metacritic: "", playtime: 2843, note: "Aktif oynadığım tek rekabetçi FPS oyunu.", steam: "https://store.steampowered.com/app/359550/Tom_Clancys_Rainbow_Six_Siege/", youtube: "https://www.youtube.com/watch?v=6wlvYh0h63k" },

{ id: 96, name: "Sea of Thieves", appId: 1172620, special: true, favorite: true, status: "bitti", genre: "Macera, Açık Dünya, Multiplayer, Korsan", score: "7.5", metacritic: "69", playtime: 3568, note: "", steam: "https://store.steampowered.com/app/1172620/Sea_of_Thieves/", youtube: "https://www.youtube.com/watch?v=r5JIBaasuE8" },





























































];

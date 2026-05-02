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

	{ id: 10, name: "Memories in Orbit", appId: 1672810, special: false, favorite: false, status: "bitti", genre: "Metroidvania, Keşif", score: "8.5", metacritic: "83", playtime: 26, note: "MIO, özgün sanat tasarımı, akıcı animasyonları ve türün en iyi örneklerinden biri olan haritasıyla öne çıkan, platform odaklı bir metroidvania. Keşif hissi, özgün mekanikleri ve gizemli hikayesi çok güçlü. Zorluğu özellikle gerçek sonda artıyor. Bazı tasarım tercihleri yorucu olabiliyor ama genel kaliteyi gölgelemiyor. Türü sevenler için kesinlikle denenmesi gereken, çok etkileyici bir yapım.", steam: "https://store.steampowered.com/app/1672810/", youtube: "" },

	{ id: 11, name: "REANIMAL ", appId: 2129530, special: false, favorite: false, status: "bitti", genre: "Korku, Eşli, Macera", score: "7.5", metacritic: "81", playtime: 4, note: "Reanimal, Tarsier Studios’un alıştığımız Little Nightmares formülünü daha geniş ve tamamen 3D bir yapıya taşıdığı karanlık bir deneyim sunuyor. Oyun; güçlü atmosferi, sinematik anlatımı, tüyler ürpertici düşman tasarımları, etkileyici ses kullanımı ve akıcı co-op oynanışıyla öne çıkarken, dinamik kamera ve başarılı animasyonlar sayesinde önceki yapımlardaki oynanışı çok üst seviyeye çıkartmış. Buna karşılık hikayede sınırlı diyaloglar, yer yer fazla karanlık bölümler ve yaklaşık 4 saat süren kısa oynanış süresi bakımından iyi olmamış. 4 saatlik bir oyun için 19 dolar çok fazla.", steam: "https://store.steampowered.com/app/2129530/REANIMAL/", youtube: "" },

	{ id: 12, name: "High On Life 2", appId: 2069250, image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2069250/14a0a45da992ca33d59eb318b5cb9598c070e1c1/header.jpg" , special: false, favorite: false, status: "bitti", genre: "Aksiyon, Komedi, FPS", score: "8", metacritic: "", playtime: 13, note: "High On Life 2, absürt mizahını korurken oynanış tarafında risk alan bir devam oyunu. Kaykay mekaniği keşfi ve hareketi ciddi şekilde eğlenceli hale getirirken, görev çeşitliliği ve yan aktiviteler ilk oyuna kıyasla daha yaratıcı. Ancak hikaye anlatımı dağınık, silah çatışmaları fazla kaotik ve teknik problemler deneyimi zaman zaman kötüleştiriyor.", steam: "https://store.steampowered.com/app/2069250/High_On_Life_2/", youtube: "" },

	{ id: 13, name: "The 18th Attic", appId: 3403660, special: false, favorite: false, status: "bitti", genre: "Psikolojik Korku, Hikaye", score: "5", metacritic: "", playtime: 2, note: "The 18th Attic, fotoğraf çekerek anomalileri tespit ettiğiniz, atmosfer odaklı ve kısa süreli bir psikolojik korku oyunu. Güçlü atmosferi ve iki farklı oyun modu iyiyken, kısa oynanışı, zayıf hikayesi ve sorunlu fotoğraf mekaniği oyunu tek seferlik bir deneyime dönüştürüyor. Aşırı korku yerine dikkat ve gözlem sevenler için uygun, derinlik arayanlar için ise yetersiz. Benim için zoraki bir bitiriş oldu.", steam: "https://store.steampowered.com/app/3403660/The_18th_Attic__Paranormal_Anomaly_Hunting_Game/", youtube: "" },

	{ id: 14, name: "Hollow Knight: Silksong", appId: 1030300, special: false, favorite: false, status: "bitti", genre: "Metroidvania, Zor, Bağımsız", score: "8.5", metacritic: "90", playtime: 45, note: "Hollow Knight: Silksong, herkese hitap etmeyen, bilinçli şekilde sert tasarlanmış bir Metroidvania. Hornet’in hızlı ve akrobatik oynanışı çok tatmin edici olmuş. Yüksek zorluk, double damage sistemi, uzun boss runback’leri, bench yerleşimleri deneyimi zorlayabiliyor. Görsel tasarım, atmosfer ve müzikler oldukça güçlü. Keşfi zorlaştıran hasar dengesi ve geç hissedilen karakter gelişimi, oyunu sabırlı ve türü seven oyuncular için uygun kılıyor.", steam: "https://store.steampowered.com/app/1030300/Hollow_Knight_Silksong/", youtube: "" },

	{ id: 15, name: "A Plague Tale: Requiem", appId: 1182900, special: false, favorite: false, status: "bitti", genre: "Aksiyon-Macera, Gizlilik", score: "6", metacritic: "85", playtime: 10, note: "", steam: "https://store.steampowered.com/app/1182900/A_Plague_Tale_Requiem/", youtube: "https://www.youtube.com/watch?v=f8rPZ2Zc8Yg" },

	{ id: 16, name: "Red Dead Redemption 2", appId: 1174180, special: false, favorite: false, status: "bitti", genre: "Aksiyon-Macera, Açık Dünya", score: "8.5", metacritic: "93", playtime: 75, note: "", steam: "https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/", youtube: "https://www.youtube.com/watch?v=gmA6MrX81z4" },

	{ id: 17, name: "Call of Duty: Modern Warfare II", appId: 1938090, special: false, favorite: false, status: "bitti", genre: "FPS, Aksiyon", score: "7", metacritic: "75", playtime: 10, note: "", steam: "https://store.steampowered.com/app/1938090/Call_of_Duty_Modern_Warfare_II/", youtube: "https://www.youtube.com/watch?v=r72GP1PIZa0" },

	{ id: 18, name: "Marvel's Spider-Man 2", appId: 2651280, special: false, favorite: false, status: "bitti", genre: "Aksiyon-Macera, Açık Dünya", score: "8", metacritic: "90", playtime: 30, note: "", steam: "https://store.steampowered.com/app/2651280/Marvels_SpiderMan_2/", youtube: "https://www.youtube.com/watch?v=nq1M_Wc4FIc" },

	{ id: 19, name: "Crysis 3", appId: 1282690, special: false, favorite: false, status: "bitti", genre: "FPS, Sci-Fi", score: "8", metacritic: "76", playtime: 16, note: "", steam: "https://store.steampowered.com/app/1282690/Crysis_3_Remastered/", youtube: "https://www.youtube.com/watch?v=JXrE0wG3h2U" },

	{ id: 20, name: "Detroit: Become Human", appId: 1222140, special: false, favorite: true, status: "bitti", genre: "İnteraktif Drama, Sci-Fi", score: "9.5", metacritic: "78", playtime: 60, note: "", steam: "https://store.steampowered.com/app/1222140/Detroit_Become_Human/", youtube: "https://www.youtube.com/watch?v=8a-EObAhYrg" },

	{ id: 21, name: "Starfield", appId: 1716740, special: false, favorite: false, status: "bitti", genre: "RPG, Açık Dünya, Sci-Fi", score: "6", metacritic: "83", playtime: 65, note: "", steam: "https://store.steampowered.com/app/1716740/Starfield/", youtube: "https://www.youtube.com/watch?v=kfYEiTdsyas" },

	{ id: 22, name: "Split Fiction", appId: 2001120, special: false, favorite: false, status: "bitti", genre: "Macera", score: "9", metacritic: "", playtime: 15, note: "", steam: "https://store.steampowered.com/app/2001120/Split_Fiction/", youtube: "" },

	{ id: 23, name: "Tom Clancy's The Division 2", appId: 2221490, special: false, favorite: false, status: "oynanıyor", genre: "Aksiyon-RPG, Looter Shooter, TPS", score: "7.5", metacritic: "82", playtime: 0, note: "", steam: "https://store.steampowered.com/app/2221490/Tom_Clancys_The_Division_2/", youtube: "https://www.youtube.com/watch?v=njfj6KwEAfg" },

	{ id: 24, name: "Assassin's Creed Shadows", appId: 3159330, special: false, favorite: false, status: "bitti", genre: "Aksiyon-Macera, Açık Dünya, RPG", score: "6.5", metacritic: "81", playtime: 0, note: "", steam: "https://store.steampowered.com/app/3159330/Assassins_Creed_Shadows/", youtube: "https://www.youtube.com/watch?v=HInwdVFWvVs" },

	{ id: 25, name: "The Last of Us Part I", appId: 1888930, special: false, favorite: false, status: "bitti", genre: "Aksiyon-Macera, Hayatta Kalma, Zengin Hikaye", score: "8", metacritic: "88", playtime: 0, note: "", steam: "https://store.steampowered.com/app/1888930/The_Last_of_Us_Part_I/", youtube: "https://www.youtube.com/watch?v=Zf5xOsXXFY8" },

{ id: 26, name: "The Last of Us Part II Remastered", appId: 2531310, special: false, favorite: false, status: "bitti", genre: "Aksiyon-Macera, Hayatta Kalma, Zengin Hikaye", score: "8.5", metacritic: "90", playtime: 0, note: "", steam: "https://store.steampowered.com/app/2531310/The_Last_of_Us_Part_II_Remastered/", youtube: "https://www.youtube.com/watch?v=Ye3st9z6jQY" },

{ id: 27, name: "Devil May Cry 5", appId: 601150, special: false, favorite: false, status: "bitti", genre: "Aksiyon, Hack and Slash", score: "8", metacritic: "88", playtime: 0, note: "", steam: "https://store.steampowered.com/app/601150/Devil_May_Cry_5/", youtube: "https://www.youtube.com/watch?v=smK3M2RvGtw" },

{ id: 28, name: "Dying Light 2 Stay Human: Reloaded Edition", appId: 534380, special: false, favorite: false, status: "bitti", genre: "Aksiyon-RPG, Açık Dünya, Zombi, Parkur", score: "7", metacritic: "76", playtime: 0, note: "", steam: "https://store.steampowered.com/app/534380/Dying_Light_2_Stay_Human_Reloaded_Edition/", youtube: "https://www.youtube.com/watch?v=njAOpATG46E" },

{ id: 29, name: "Days Gone", appId: 1259420, special: false, favorite: false, status: "bitti", genre: "Aksiyon-Macera, Açık Dünya, Zombi", score: "6.5", metacritic: "76", playtime: 0, note: "", steam: "https://store.steampowered.com/app/1259420/Days_Gone/", youtube: "https://www.youtube.com/watch?v=gl1Pw97whJg" },

{ id: 30, name: "STAR WARS Battlefront", appId: 1237980, special: false, favorite: false, status: "bitti", genre: "Aksiyon, FPS, Multiplayer", score: "6", metacritic: "75", playtime: 0, note: "", steam: "https://store.steampowered.com/app/1237980/STAR_WARS_Battlefront/", youtube: "https://www.youtube.com/watch?v=R4Zp7DHxdKM" },

{ id: 31, name: "Clair Obscur: Expedition 33", appId: 1903340, special: false, favorite: true, status: "bitti", genre: "RPG, Sıra Tabanlı, Macera", score: "10", metacritic: "92", playtime: 100, note: "", steam: "https://store.steampowered.com/app/1903340/Clair_Obscur_Expedition_33/", youtube: "https://www.youtube.com/watch?v=oecZmlLXqXk" },

{ id: 32, name: "Death Stranding Director's Cut", appId: 1850570, special: false, favorite: false, status: "bitti", genre: "Aksiyon-Macera, Açık Dünya, Yürüme Simülatörü", score: "4", metacritic: "85", playtime: 0, note: "", steam: "https://store.steampowered.com/app/1850570/DEATH_STRANDING_DIRECTORS_CUT/", youtube: "https://www.youtube.com/watch?v=mleMv5r9xkI" },

{ id: 33, name: "Cyberpunk 2077", appId: 1091500, special: false, favorite: false, status: "bitti", genre: "RPG, Açık Dünya, Sci-Fi", score: "8.6", metacritic: "86", playtime: 0, note: "", steam: "https://store.steampowered.com/app/1091500/Cyberpunk_2077/", youtube: "https://www.youtube.com/watch?v=8X2kIfS6fb8" },

{ id: 34, name: "The Alters", appId: 1601570, special: false, favorite: false, status: "bitti", genre: "Hayatta Kalma, Sci-Fi, Macera", score: "7.8", metacritic: "84", playtime: 0, note: "", steam: "https://store.steampowered.com/app/1601570/The_Alters/", youtube: "https://www.youtube.com/watch?v=8nBcelrikvA" },

{ id: 35, name: "NieR: Automata", appId: 524220, special: true, favorite: true, status: "bitti", genre: "Aksiyon-RPG, Hack and Slash, Zengin Hikaye", score: "10", metacritic: "88", playtime: 0, note: "", steam: "https://store.steampowered.com/app/524220/NieRAutomata/", youtube: "https://www.youtube.com/watch?v=i3Ue2mDV-eU" },

{ id: 36, name: "Warhammer 40,000: Space Marine 2", appId: 2183900, special: false, favorite: false, status: "bitti", genre: "Aksiyon, TPS, Sci-Fi", score: "7.6", metacritic: "82", playtime: 0, note: "", steam: "https://store.steampowered.com/app/2183900/Warhammer_40000_Space_Marine_2/", youtube: "https://www.youtube.com/watch?v=Y3WmCYCC8dc" },

{ id: 37, name: "Cast n Chill", appId: 3483740, special: false, favorite: false, status: "bitti", genre: "Gündelik, Simülasyon, Balıkçılık", score: "6", metacritic: "", playtime: 0, note: "", steam: "https://store.steampowered.com/app/3483740/Cast_n_Chill/", youtube: "" },

{ id: 38, name: "No Man's Sky", appId: 275850, special: false, favorite: false, status: "bitti", genre: "Açık Dünya, Hayatta Kalma, Uzay, Keşif", score: "7.8", metacritic: "71", playtime: 0, note: "", steam: "https://store.steampowered.com/app/275850/No_Mans_Sky/", youtube: "https://www.youtube.com/watch?v=nLtmEjqzg7M" },

{ id: 39, name: "Planet of Lana", appId: 1608230, special: false, favorite: false, status: "bitti", genre: "Macera, Bulmaca, Platform", score: "8", metacritic: "80", playtime: 0, note: "", steam: "https://store.steampowered.com/app/1608230/Planet_of_Lana/", youtube: "https://www.youtube.com/watch?v=4J_zO5IXXyw" },

{ id: 40, name: "Sable", appId: 757310, special: false, favorite: false, status: "bitti", genre: "Macera, Açık Dünya, Keşif", score: "7", metacritic: "76", playtime: 0, note: "", steam: "https://store.steampowered.com/app/757310/Sable/", youtube: "https://www.youtube.com/watch?v=a0evJUp7-aw" },

{ id: 41, name: "Mafia: The Old Country", appId: 1941540, special: false, favorite: false, status: "bitti", genre: "Aksiyon-Macera, Suç, Zengin Hikaye", score: "6.5", metacritic: "76", playtime: 0, note: "", steam: "https://store.steampowered.com/app/1941540/Mafia_The_Old_Country/", youtube: "https://www.youtube.com/watch?v=KI-sFV32SmM" },

{ id: 42, name: "DREDGE", appId: 1562430, special: false, favorite: false, status: "bitti", genre: "Macera, Fishing, Korku", score: "7.8", metacritic: "80", playtime: 0, note: "", steam: "https://store.steampowered.com/app/1562430/DREDGE/", youtube: "https://www.youtube.com/watch?v=ZtTfROTgYKA" },

{ id: 43, name: "Dying Light: The Beast", appId: 3008130, special: false, favorite: false, status: "bitti", genre: "Aksiyon, Açık Dünya, Zombi, Hayatta Kalma Korku", score: "7", metacritic: "", playtime: 0, note: "", steam: "https://store.steampowered.com/app/3008130/Dying_Light_The_Beast/", youtube: "" },

{ id: 44, name: "Cronos: The New Dawn", appId: 2101960, special: false, favorite: false, status: "bitti", genre: "Hayatta Kalma Korku, Aksiyon-Macera, Sci-Fi", score: "7.2", metacritic: "77", playtime: 0, note: "", steam: "https://store.steampowered.com/app/2101960/Cronos_The_New_Dawn/", youtube: "https://www.youtube.com/watch?v=Yw1kriO2MJw" },

{ id: 45, name: "Pacific Drive", appId: 1458140, special: false, favorite: false, status: "bitti", genre: "Hayatta Kalma, Sürüş, Macera", score: "8", metacritic: "79", playtime: 0, note: "", steam: "https://store.steampowered.com/app/1458140/Pacific_Drive/", youtube: "https://www.youtube.com/watch?v=sfGnxh0PNL8" },

{ id: 46, name: "Silent Hill f", appId: 2947440, image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2947440/7e5d923ac622bd1775ebc9b5d4b5b0a24bf5ed40/header.jpg", special: false, favorite: false, status: "bitti", genre: "Psikolojik Korku, Hayatta Kalma Korku", score: "7.6", metacritic: "86", playtime: 0, note: "", steam: "https://store.steampowered.com/app/2947440/SILENT_HILL_f/", youtube: "https://www.youtube.com/watch?v=0NMoPvqaz10" },

{ id: 47, name: "Gloomy Eyes", appId: 2667950, special: false, favorite: false, status: "bitti", genre: "Macera, Bulmaca", score: "6", metacritic: "", playtime: 0, note: "", steam: "https://store.steampowered.com/app/2667950/Gloomy_Eyes/", youtube: "" },

{ id: 48, name: "Metal Gear Solid 3: Snake Eater", appId: 2131650, special: false, favorite: false, status: "bitti", genre: "Aksiyon, Gizlilik, Macera", score: "6.8", metacritic: "91", playtime: 0, note: "", steam: "https://store.steampowered.com/app/2131650/METAL_GEAR_SOLID_3_Snake_Eater__Master_Collection_Version/", youtube: "https://www.youtube.com/watch?v=hXUono66wxI" },

{ id: 49, name: "KARMA", appId: 1556480, special: false, favorite: false, status: "bitti", genre: "Macera, Psikolojik Korku", score: "5.5", metacritic: "", playtime: 0, note: "", steam: "https://store.steampowered.com/app/1556480/KARMA/", youtube: "" },

{ id: 50, name: "Resident Evil 4", appId: 2050650, special: false, favorite: false, status: "bitti", genre: "Hayatta Kalma Korku, Aksiyon", score: "8", metacritic: "93", playtime: 0, note: "", steam: "https://store.steampowered.com/app/2050650/Resident_Evil_4/", youtube: "https://www.youtube.com/watch?v=O75Ip4o1bs8" },

{ id: 51, name: "Sifu", appId: 2138710, special: false, favorite: false, status: "bitti", genre: "Aksiyon, Beat 'em Up", score: "7.5", metacritic: "81", playtime: 0, note: "", steam: "https://store.steampowered.com/app/2138710/Sifu/", youtube: "https://www.youtube.com/watch?v=1FQ1YO3Ks2U" },

{ id: 52, name: "Leila", appId: "", special: false, favorite: false, status: "bitti", genre: "Macera, Bulmaca, Zengin Hikaye", score: "7", metacritic: "", playtime: 0, note: "", steam: "", youtube: "" },

{ id: 53, name: "Dealer Life 2", appId: 1343670, special: false, favorite: false, status: "bitti", genre: "Simülasyon, Yönetim, Gündelik", score: "6.8", metacritic: "", playtime: 0, note: "", steam: "https://store.steampowered.com/app/1343670/Dealer_Life_2/", youtube: "https://www.youtube.com/watch?v=V1Iec7pWgBQ" },

{ id: 54, name: "Dome Keeper", appId: 1637320, special: false, favorite: false, status: "bitti", genre: "Roguelike, Maden, Kule Savunması", score: "7.5", metacritic: "82", playtime: 0, note: "", steam: "https://store.steampowered.com/app/1637320/Dome_Keeper/", youtube: "https://www.youtube.com/watch?v=V1Iec7pWgBQ" },

{ id: 55, name: "Sodaman", appId: "", special: false, favorite: false, status: "bitti", genre: "Aksiyon, Bağımsız", score: "6", metacritic: "", playtime: 0, note: "", steam: "", youtube: "" },

{ id: 56, name: "MiSde", appId: "", special: false, favorite: false, status: "bitti", genre: "Bağımsız", score: "7.2", metacritic: "", playtime: 0, note: "", steam: "", youtube: "" },

{ id: 57, name: "Turmoil", appId: 361280, special: false, favorite: false, status: "bitti", genre: "Simülasyon, Strateji, Yönetim", score: "8.5", metacritic: "73", playtime: 0, note: "", steam: "https://store.steampowered.com/app/361280/Turmoil/", youtube: "https://www.youtube.com/watch?v=u3CZ1r4F9BI" },

{ id: 58, name: "WanderStop", appId: 1299460, special: false, favorite: false, status: "bitti", genre: "Macera, Simülasyon, Zengin Hikaye", score: "5", metacritic: "79", playtime: 0, note: "", steam: "https://store.steampowered.com/app/1299460/Wanderstop/", youtube: "https://www.youtube.com/watch?v=E0S6yYJf2rM" },

{ id: 59, name: "The Walking Dead Season 1", appId: 207610, special: false, favorite: false, status: "bitti", genre: "Macera, İnteraktif Drama, Zengin Hikaye", score: "8", metacritic: "89", playtime: 0, note: "", steam: "https://store.steampowered.com/app/207610/The_Walking_Dead/", youtube: "https://www.youtube.com/watch?v=N40uY51s5Z0" },

{ id: 60, name: "The Walking Dead Season 2", appId: 261030, special: false, favorite: false, status: "bitti", genre: "Macera, İnteraktif Drama, Zengin Hikaye", score: "8", metacritic: "80", playtime: 0, note: "", steam: "https://store.steampowered.com/app/261030/The_Walking_Dead_Season_Two/", youtube: "https://www.youtube.com/watch?v=ilEB4KTTOIo" },

{ id: 61, name: "The Walking Dead: 400 Days", appId: 207620, special: false, favorite: false, status: "bitti", genre: "Macera, İnteraktif Drama, Zengin Hikaye", score: "7", metacritic: "78", playtime: 0, note: "", steam: "https://store.steampowered.com/app/207620/The_Walking_Dead_400_Days/", youtube: "https://www.youtube.com/watch?v=7kDNkD3s7fQ" },

{ id: 62, name: "Astro Bot", appId: "", special: false, favorite: false, status: "bitti", genre: "Platform, Aksiyon-Macera", score: "8.6", metacritic: "94", playtime: 0, note: "", steam: "", youtube: "https://www.youtube.com/watch?v=wHMNQzLG_Jg" },

{ id: 63, name: "Biped", appId: 1071870, special: false, favorite: false, status: "bitti", genre: "Co-op, Bulmaca, Macera", score: "6", metacritic: "74", playtime: 0, note: "", steam: "https://store.steampowered.com/app/1071870/Biped/", youtube: "https://www.youtube.com/watch?v=ffzX6kZc0GE" },

{ id: 64, name: "Airborne Kingdom", appId: 982290, special: false, favorite: false, status: "bitti", genre: "Şehir İnşaası, Strateji, Yönetim", score: "5", metacritic: "77", playtime: 0, note: "", steam: "https://store.steampowered.com/app/982290/Airborne_Kingdom/", youtube: "https://www.youtube.com/watch?v=ZKZz0Y4RIvY" },

{ id: 65, name: "Road 96", appId: 1466640, special: false, favorite: false, status: "bitti", genre: "Macera, Zengin Hikaye, Seçimli", score: "8.8", metacritic: "78", playtime: 0, note: "", steam: "https://store.steampowered.com/app/1466640/Road_96/", youtube: "https://www.youtube.com/watch?v=W5Zf6k7p7bE" },

{ id: 66, name: "Neon White", appId: 1533420, special: false, favorite: false, status: "bitti", genre: "FPS, Platform, Aksiyon", score: "5", metacritic: "90", playtime: 0, note: "", steam: "https://store.steampowered.com/app/1533420/Neon_White/", youtube: "https://www.youtube.com/watch?v=DD4zflZEBuA" },

{ id: 67, name: "Pizza Tower", appId: 2231450, special: false, favorite: false, status: "bitti", genre: "Platform, Aksiyon, Bağımsız", score: "7.8", metacritic: "89", playtime: 0, note: "", steam: "https://store.steampowered.com/app/2231450/Pizza_Tower/", youtube: "https://www.youtube.com/watch?v=Wlq6fFOqI28" },

{ id: 68, name: "The Cabin Factory", appId: "", special: false, favorite: false, status: "bitti", genre: "Korku, Yürüme Simülatörü, Psikolojik Korku", score: "4", metacritic: "", playtime: 0, note: "", steam: "", youtube: "" },

{ id: 69, name: "Black Mesa", appId: 362890, special: false, favorite: false, status: "bitti", genre: "FPS, Sci-Fi, Aksiyon", score: "9", metacritic: "86", playtime: 0, note: "", steam: "https://store.steampowered.com/app/362890/Black_Mesa/", youtube: "https://www.youtube.com/watch?v=V7vDsarvyoc" },

{ id: 70, name: "Senua’s Saga: Hellblade II", appId: 2461850, special: false, favorite: false, status: "bitti", genre: "Aksiyon-Macera, Psikolojik, Sinematik", score: "7", metacritic: "81", playtime: 0, note: "", steam: "https://store.steampowered.com/app/2461850/Senuas_Saga_Hellblade_II/", youtube: "https://www.youtube.com/watch?v=3VYGOkMnGCE" },

{ id: 71, name: "Endling: Extinction is Forever", appId: 898890, special: false, favorite: false, status: "bitti", genre: "Macera, Hayatta Kalma, Atmosferik", score: "4.5", metacritic: "82", playtime: 0, note: "", steam: "https://store.steampowered.com/app/898890/Endling__Extinction_is_Forever/", youtube: "https://www.youtube.com/watch?v=0DXpA6b3YtM" },

{ id: 72, name: "The Final Station", appId: 435530, special: false, favorite: false, status: "bitti", genre: "Aksiyon, Macera, Hayatta Kalma", score: "6.5", metacritic: "76", playtime: 0, note: "", steam: "https://store.steampowered.com/app/435530/The_Final_Station/", youtube: "https://www.youtube.com/watch?v=oRzm_KZgvCY" },

{ id: 73, name: "Valiant Hearts: The Great War", appId: 260230, special: false, favorite: false, status: "bitti", genre: "Macera, Bulmaca, Tarihsel", score: "8", metacritic: "79", playtime: 0, note: "", steam: "https://store.steampowered.com/app/260230/Valiant_Hearts_The_Great_War/", youtube: "https://www.youtube.com/watch?v=MP8q5F6dFqQ" },

{ id: 74, name: "Dishonored", appId: 205100, special: false, favorite: false, status: "bitti", genre: "Gizlilik, Aksiyon", score: "9.2", metacritic: "91", playtime: 0, note: "", steam: "https://store.steampowered.com/app/205100/Dishonored/", youtube: "https://www.youtube.com/watch?v=VeIn3WjbVbw" },

{ id: 75, name: "Kena: Bridge of Spirits", appId: 1954200, special: false, favorite: false, status: "bitti", genre: "Aksiyon-Macera", score: "6", metacritic: "81", playtime: 0, note: "", steam: "https://store.steampowered.com/app/1954200/Kena_Bridge_of_Spirits/", youtube: "https://www.youtube.com/watch?v=pWh5388AEHw" },

{ id: 76, name: "Eriksholm: The Stolen Dream", appId: "", special: false, favorite: false, status: "bitti", genre: "Gizlilik, Macera", score: "6.8", metacritic: "", playtime: 0, note: "", steam: "", youtube: "" },

{ id: 77, name: "Superliminal", appId: 1049410, special: false, favorite: false, status: "bitti", genre: "Bulmaca, FPS", score: "4", metacritic: "75", playtime: 0, note: "", steam: "https://store.steampowered.com/app/1049410/Superliminal/", youtube: "https://www.youtube.com/watch?v=_SX8XMwMw6Y" },

{ id: 78, name: "Routine", appId: "", special: false, favorite: false, status: "bitti", genre: "Sci-Fi, Korku", score: "4.5", metacritic: "", playtime: 0, note: "", steam: "", youtube: "https://www.youtube.com/watch?v=LaZqV0o7EW4" },

{ id: 79, name: "The Stanley Parable: Ultra Deluxe", appId: 1703340, special: false, favorite: false, status: "bitti", genre: "Hikaye, Macera", score: "8", metacritic: "90", playtime: 0, note: "", steam: "https://store.steampowered.com/app/1703340/The_Stanley_Parable_Ultra_Deluxe/", youtube: "https://www.youtube.com/watch?v=Zb6tZ2c8Y8k" },

{ id: 80, name: "Despot's Game", appId: 1227280, special: false, favorite: false, status: "bitti", genre: "Roguelike, Strateji", score: "4.5", metacritic: "78", playtime: 0, note: "", steam: "https://store.steampowered.com/app/1227280/Despots_Game/", youtube: "https://www.youtube.com/watch?v=8XrZ6bJ8X9k" },

{ id: 81, name: "The Outer Worlds", appId: 578650, special: false, favorite: false, status: "bitti", genre: "RPG, Sci-Fi, Açık Dünya", score: "7.5", metacritic: "82", playtime: 0, note: "", steam: "https://store.steampowered.com/app/578650/The_Outer_Worlds/", youtube: "https://www.youtube.com/watch?v=MGLTgt0EEqc" },

{ id: 82, name: "Tiny Bookshop", appId: 2133760, special: false, favorite: false, status: "bitti", genre: "Simülasyon, Rahatlatıcı, Bağımsız", score: "5", metacritic: "", playtime: 0, note: "", steam: "https://store.steampowered.com/app/2133760/Tiny_Bookshop/", youtube: "https://www.youtube.com/watch?v=3Vg9GJ7c7xE" },

{ id: 83, name: "A Long Way To The Here", appId: "", special: false, favorite: false, status: "bitti", genre: "Macera, Bağımsız", score: "9.5", metacritic: "", playtime: 0, note: "", steam: "", youtube: "" },

{ id: 84, name: "Mandragora: Whispers of the Witch Tree", appId: 1721060, special: false, favorite: false, status: "bitti", genre: "Aksiyon-RPG, Soulslike, Metroidvania", score: "4.5", metacritic: "78", playtime: 0, note: "", steam: "https://store.steampowered.com/app/1721060/Mandragora/", youtube: "https://www.youtube.com/watch?v=K0V8F0pQk3I" },

{ id: 85, name: "Dispatch", appId: "", special: false, favorite: false, status: "bitti", genre: "Simülasyon, Strateji", score: "9", metacritic: "", playtime: 0, note: "", steam: "", youtube: "" },

{ id: 86, name: "Ghost of Yotei", appId: "", special: false, favorite: false, status: "bitti", genre: "Aksiyon-Macera, Açık Dünya", score: "6", metacritic: "", playtime: 0, note: "", steam: "", youtube: "" },

{ id: 87, name: "Battlefield 6", appId: "", special: false, favorite: false, status: "bitti", genre: "FPS, Aksiyon", score: "8.2", metacritic: "", playtime: 0, note: "", steam: "", youtube: "" },

{ id: 88, name: "Little Nightmares III", appId: 1392860, special: false, favorite: false, status: "bitti", genre: "Bulmaca, Korku, Macera", score: "3", metacritic: "", playtime: 0, note: "", steam: "https://store.steampowered.com/app/1392860/Little_Nightmares_III/", youtube: "https://www.youtube.com/watch?v=G7u0gk5n3nE" },

{ id: 89, name: "Horizon Forbidden West Complete Edition", appId: 2420110, special: false, favorite: false, status: "bitti", genre: "Aksiyon-RPG, Açık Dünya", score: "6", metacritic: "88", playtime: 0, note: "", steam: "https://store.steampowered.com/app/2420110/Horizon_Forbidden_West_Complete_Edition/", youtube: "https://www.youtube.com/watch?v=Lq594XmpPBg" },

{ id: 90, name: "The Dark Pictures Anthology: Little Hope", appId: 1194630, special: false, favorite: false, status: "bitti", genre: "Korku, İnteraktif Drama", score: "8", metacritic: "73", playtime: 0, note: "", steam: "https://store.steampowered.com/app/1194630/The_Dark_Pictures_Anthology_Little_Hope/", youtube: "https://www.youtube.com/watch?v=J0tFzWg1bQw" },

{ id: 91, name: "The Dark Pictures Anthology: Man of Medan", appId: 939850, special: false, favorite: false, status: "bitti", genre: "Korku, İnteraktif Drama", score: "8", metacritic: "72", playtime: 0, note: "", steam: "https://store.steampowered.com/app/939850/The_Dark_Pictures_Anthology_Man_of_Medan/", youtube: "https://www.youtube.com/watch?v=1WZ0tKJ9Z9E" },

{ id: 92, name: "Hell is Us", appId: 1475810, special: false, favorite: false, status: "bitti", genre: "Aksiyon-Macera, Soulslike", score: "6", metacritic: "", playtime: 0, note: "", steam: "https://store.steampowered.com/app/1475810/Hell_is_Us/", youtube: "https://www.youtube.com/watch?v=G2zYF1G6qgQ" },

{ id: 93, name: "Viewfinder", appId: 1382070, special: false, favorite: false, status: "bitti", genre: "Bulmaca, FPS", score: "8", metacritic: "81", playtime: 0, note: "", steam: "https://store.steampowered.com/app/1382070/Viewfinder/", youtube: "https://www.youtube.com/watch?v=crteKROYkHM" },

{ id: 94, name: "Arma 3", appId: 107410, special: true, favorite: true, status: "bitti", genre: "Askeri Simülasyon, FPS, Açık Dünya", score: "8.3", metacritic: "74", playtime: 9850, note: "", steam: "https://store.steampowered.com/app/107410/Arma_3/", youtube: "https://www.youtube.com/watch?v=M1uM9c1aH0k" },

{ id: 95, name: "Tom Clancy's Rainbow Six Siege X", appId: 359550, special: true, favorite: true, status: "oynanıyor", genre: "FPS, Taktiksel Shooter, Multiplayer", score: "8.2", metacritic: "", playtime: 2843, note: "Aktif oynadığım tek rekabetçi FPS oyunu.", steam: "https://store.steampowered.com/app/359550/Tom_Clancys_Rainbow_Six_Siege/", youtube: "https://www.youtube.com/watch?v=6wlvYh0h63k" },

{ id: 96, name: "Sea of Thieves", appId: 1172620, special: true, favorite: true, status: "bitti", genre: "Macera, Açık Dünya, Multiplayer, Korsan", score: "7.5", metacritic: "69", playtime: 3568, note: "", steam: "https://store.steampowered.com/app/1172620/Sea_of_Thieves/", youtube: "https://www.youtube.com/watch?v=r5JIBaasuE8" },

{ id: 97, name: "Marvel's Spider-Man Remastered", appId: 1817070, special: false, favorite: false, status: "bitti", genre: "Aksiyon-Macera, Açık Dünya, Süper Kahraman", score: "8.7", metacritic: "87", playtime: 0, note: "", steam: "https://store.steampowered.com/app/1817070/Marvels_SpiderMan_Remastered/", youtube: "https://youtu.be/mrT5q5xXb7Y" },

{ id: 98, name: "Warframe", appId: 230410, special: false, favorite: false, status: "oynanıyor", genre: "Aksiyon, Looter Shooter, MMO, Sci-Fi", score: "9", metacritic: "64", playtime: 1100, note: "", steam: "https://store.steampowered.com/app/230410/Warframe/", youtube: "https://www.youtube.com/watch?v=MsbL8lFHrZI" },

{ id: 99, name: "Neverness to Everness", appId: "", image: "https://ntevmg.perfectworld.com/webops/nte/EN.jpg", special: false, favorite: false, status: "oynanıyor", genre: "Aksiyon-RPG, Açık Dünya, Anime", score: "7", metacritic: "", playtime: 2, note: "", steam: "https://ntevmg.perfectworld.com/webops/nte/EN.jpg", youtube: "https://youtu.be/Rwb4SjpjR2A" },

{ id: 100, name: "007 First Light", appId: 3768760, image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3768760/86d898447e0e475e3f8a9cc1ef660a80032472d7/header_alt_assets_1.jpg", special: false, favorite: false, status: "planlandı", genre: "Aksiyon-Macera, Gizlilik", score: "", metacritic: "", playtime: 0, note: "", steam: "https://store.steampowered.com/app/3768760/007_First_Light/", youtube: "https://youtu.be/vwmq_k5Kto0" },










];
/*
  NOTE FIX - Direkt çalışır sürüm
  Kullanım: Bu kodu GAMES listesinin bittiği ]; satırının hemen altına yapıştır.
  Mevcut note doluysa dokunmaz. note boşsa otomatik açıklama yazar.
*/

const DEFAULT_NOTE_TEXTS = {
  15: "A Plague Tale: Requiem, Amicia ve Hugo’nun karanlık ve acımasız bir dünyada hayatta kalmaya çalıştığı, hikayesiyle öne çıkan sinematik bir aksiyon-macera oyunu. Gizlilik ve duygusal anlatım baya güçlü.",
  16: "Red Dead Redemption 2, Vahşi Batı’nın son dönemlerini inanılmaz detaylı bir açık dünyada yaşatan, karakterleri ve hikayesiyle oyuncuyu içine çeken bir aksiyon-macera oyunu.",
  17: "Call of Duty: Modern Warfare II, modern savaş temasını hızlı oynanış ve sinematik görevlerle birleştiren, aksiyonun hiç düşmediği bir FPS deneyimi.",
  18: "Marvel's Spider-Man 2, Peter ve Miles’ı aynı hikayede buluşturan; akıcı ağ mekanikleri, hızlı dövüşleri ve New York atmosferiyle keyifli bir süper kahraman oyunu.",
  19: "Crysis 3, Nanosuit yetenekleriyle oynanışı çeşitlendiren, tempolu çatışmaları ve bilim kurgu havasıyla öne çıkan bir FPS oyunu.",
  20: "Detroit: Become Human, androidler ve insanlar arasındaki ilişkiyi seçimlere bağlı bir hikayeyle anlatan, sinematik ve etkileyici bir interaktif deneyim.",
  21: "Starfield, uzay keşfi, görevler ve karakter gelişimini bir araya getiren, geniş kapsamlı bir bilim kurgu RPG deneyimi.",
  22: "Split Fiction, yaratıcı bölümleri ve co-op oynanış üzerine kurulu yapısıyla farklı dünyalar arasında geçen eğlenceli bir macera sunuyor.",
  23: "Tom Clancy's The Division 2, Washington D.C.’de geçen, ganimet sistemi ve taktiksel çatışmalarıyla öne çıkan bir aksiyon RPG.",
  24: "Assassin's Creed Shadows, feodal Japonya atmosferini açık dünya keşif, gizlilik ve aksiyonla birleştiren bir seri oyunu.",
  25: "The Last of Us Part I, Joel ve Ellie’nin hayatta kalma hikayesini güçlü anlatım ve gerilimli oynanışla aktaran etkileyici bir yapım.",
  26: "The Last of Us Part II Remastered, intikam ve kayıp temalarını yoğun bir şekilde işleyen, karanlık ve duygusal bir aksiyon-macera deneyimi.",
  27: "Devil May Cry 5, hızlı ve stil odaklı dövüş sistemiyle aksiyonun zirvesini sunan, üç farklı karakterle oynanan güçlü bir hack and slash oyunu.",
  28: "Dying Light 2 Stay Human, parkur, yakın dövüş ve seçimlerin etkili olduğu açık dünya yapısıyla zombi temasını başarılı şekilde sunuyor.",
  29: "Days Gone, motosiklet kullanımı, zombi sürüleri ve kişisel hikayesiyle öne çıkan bir açık dünya hayatta kalma oyunu.",
  30: "STAR WARS Battlefront, Star Wars evrenindeki büyük savaşları sinematik ve aksiyon dolu FPS oynanışıyla deneyimletiyor.",
  31: "Clair Obscur: Expedition 33, sıra tabanlı RPG sistemini sinematik anlatım ve karanlık atmosferle birleştiren farklı bir deneyim.",
  32: "Death Stranding Director's Cut, keşif ve bağlantı kurma temasını farklı oynanış mekanikleriyle sunan atmosferik bir açık dünya oyunu.",
  33: "Cyberpunk 2077, Night City’de geçen, açık dünya keşif, görev seçimleri ve karakter gelişimiyle öne çıkan bir bilim kurgu RPG.",
  34: "The Alters, karakterin alternatif versiyonlarıyla ilerleyen, hayatta kalma ve karar verme üzerine kurulu ilginç bir bilim kurgu deneyimi.",
  35: "NieR: Automata, aksiyon RPG oynanışını felsefi hikaye ve müziklerle destekleyen, unutulmaz bir deneyim sunuyor.",
  36: "Warhammer 40,000: Space Marine 2, yoğun çatışmaları ve savaş atmosferiyle öne çıkan sert bir bilim kurgu aksiyon oyunu.",
  37: "Cast n Chill, sade yapısı ve rahatlatıcı balık tutma döngüsüyle kısa süreli keyifli vakit geçirmek için ideal bir oyun.",
  38: "No Man's Sky, gezegen keşfi, üs kurma ve uzay yolculuğunu devasa bir evrende sunan bir keşif oyunu.",
  39: "Planet of Lana, el çizimi tarzı ve duygusal atmosferiyle dikkat çeken bir bulmaca-macera oyunu.",
  40: "Sable, sakin atmosferi ve özgür keşif hissiyle öne çıkan, görsel tarzı güçlü bir açık dünya deneyimi.",
  41: "Mafia: The Old Country, dönem atmosferi ve sinematik anlatımıyla suç dünyasına odaklanan bir aksiyon-macera oyunu.",
  42: "DREDGE, gündüz sakin, gece ise gerilimli hale gelen yapısıyla balıkçılık ve korkuyu birleştiren özgün bir oyun.",
  43: "Dying Light: The Beast, parkur ve hayatta kalma öğeleriyle zombi temalı karanlık bir açık dünya deneyimi sunuyor.",
  44: "Cronos: The New Dawn, kaynak yönetimi ve gerilimli oynanışıyla öne çıkan bir bilim kurgu hayatta kalma oyunu.",
  45: "Pacific Drive, aracını geliştirerek hayatta kalmaya çalıştığın, keşif odaklı farklı bir deneyim sunuyor.",
  46: "Silent Hill f, psikolojik korkuyu rahatsız edici atmosfer ve güçlü hikayeyle sunan bir korku oyunu.",
  47: "Gloomy Eyes, kısa ama etkileyici atmosferi ve duygusal tonu ile dikkat çeken bir macera deneyimi.",
  48: "Metal Gear Solid 3: Snake Eater, gizlilik odaklı oynanışı ve güçlü hikayesiyle klasikleşmiş bir oyun.",
  49: "KARMA, psikolojik korku ve gizemli olaylarla ilerleyen karanlık bir hikaye deneyimi sunuyor.",
  50: "Resident Evil 4, aksiyon ve korku dengesini iyi kuran, gerilimli atmosferiyle öne çıkan bir klasik.",
  51: "Sifu, refleks ve zamanlama isteyen dövüş sistemiyle zorlu ama tatmin edici bir aksiyon deneyimi sunuyor.",
  52: "Leila, bulmacalar ve hikaye anlatımı üzerinden ilerleyen, daha çok duygulara odaklanan sakin bir macera.",
  53: "Dealer Life 2, al-sat, pazarlık ve mağaza yönetimi üzerine kurulu eğlenceli bir simülasyon oyunu.",
  54: "Dome Keeper, madencilik ve savunmayı birleştiren, bağımlılık yapıcı bir roguelike deneyimi.",
  55: "Sodaman, hızlı oynanışı ve sade yapısıyla kısa sürede eğlendiren tempolu bir bağımsız oyun.",
  56: "MiSde, atmosfer odaklı ilerleyen, deneysel yapısıyla farklı bir indie deneyimi sunuyor.",
  57: "Turmoil, petrol çıkarma ve yatırım üzerine kurulu, basit ama stratejik kararlar gerektiren bir simülasyon.",
  58: "WanderStop, dinlenme ve içsel yolculuk temasını sakin bir oynanışla birleştiren sıcak bir deneyim.",
  59: "The Walking Dead Season 1, seçimlerin hikayeyi ciddi şekilde etkilediği, duygusal anlatımı güçlü bir macera oyunu.",
  60: "The Walking Dead Season 2, Clementine’ın hikayesini daha sert kararlar ve karanlık bir atmosferle devam ettiriyor.",
  61: "The Walking Dead: 400 Days, farklı karakterlerin kısa hikayeleriyle evreni genişleten ek bir deneyim sunuyor.",
  62: "Astro Bot, yaratıcı bölümleri ve eğlenceli mekanikleriyle oldukça keyifli bir platform oyunu.",
  63: "Biped, iki oyuncunun uyumuna dayalı eğlenceli co-op bulmacalar sunan bir oyun.",
  64: "Airborne Kingdom, gökyüzünde şehir kurma fikrini strateji ve keşifle birleştiren huzurlu bir deneyim.",
  65: "Road 96, yolculuk teması ve seçimlere dayalı ilerleyişiyle farklı karakterlerle karşılaştığın hikaye odaklı bir oyun.",
  66: "Neon White, FPS ile hız odaklı parkur mekaniklerini birleştiren akıcı ve rekabetçi bir deneyim.",
  67: "Pizza Tower, hızlı oynanışı ve kaotik yapısıyla retro hissi modern şekilde sunan eğlenceli bir platform oyunu.",
  68: "The Cabin Factory, kısa sürede gerilim yaşatan, detay fark etmeye dayalı bir korku deneyimi.",
  69: "Black Mesa, Half-Life’ın modern grafiklerle yeniden yapılmış, oldukça başarılı bir versiyonu.",
  70: "Senua’s Saga: Hellblade II, atmosferi, ses tasarımı ve sinematik anlatımıyla yoğun bir deneyim sunuyor.",
  71: "Endling: Extinction is Forever, yavrularını korumaya çalışan bir tilkinin hikayesi üzerinden duygusal bir anlatım sunuyor.",
  72: "The Final Station, tren yolculuğu ve hayatta kalma unsurlarını birleştiren atmosferik bir piksel oyun.",
  73: "Valiant Hearts: The Great War, savaş temasını duygusal hikaye ve bulmacalarla anlatan etkileyici bir yapım.",
  74: "Dishonored, gizlilik ve özgür oynanış seçenekleriyle oyuncuya farklı yollar sunan güçlü bir aksiyon oyunu.",
  75: "Kena: Bridge of Spirits, görsel tarzı ve hikayesiyle öne çıkan, keşif ve aksiyonu birleştiren bir macera.",
  76: "Eriksholm: The Stolen Dream, gizlilik ve hikaye anlatımıyla ilerleyen sinematik bir deneyim sunuyor.",
  77: "Superliminal, perspektifle oynayan yaratıcı bulmacalarıyla kısa ama akılda kalıcı bir oyun.",
  78: "Routine, terk edilmiş bir ortamda geçen, keşif ve gerilim odaklı bir bilim kurgu korku deneyimi.",
  79: "The Stanley Parable: Ultra Deluxe, anlatım tarzı ve seçim sistemiyle farklı ve mizahi bir deneyim sunuyor.",
  80: "Despot's Game, rastgele karşılaşmalar ve stratejiyle ilerleyen eğlenceli bir roguelike.",
  81: "The Outer Worlds, uzay temalı, görev seçimleri ve kara mizahıyla öne çıkan bir RPG.",
  82: "Tiny Bookshop, kitap satışı ve müşteri ilişkileri üzerine kurulu sakin bir simülasyon.",
  83: "A Long Way To The Here, keşif ve atmosfer üzerine kurulu sade bir bağımsız macera.",
  84: "Mandragora: Whispers of the Witch Tree, soulslike zorluk ve karanlık atmosferiyle sert bir aksiyon RPG.",
  85: "Dispatch, süper kahraman ekiplerini yönetip stratejik kararlar aldığın farklı bir deneyim.",
  86: "Ghost of Yotei, samuray teması ve açık dünya oynanışıyla öne çıkan sinematik bir aksiyon-macera.",
  87: "Battlefield 6, büyük haritalar ve takım odaklı savaşlarla yoğun bir FPS deneyimi sunuyor.",
  88: "Little Nightmares III, karanlık atmosferi ve co-op bulmacalarıyla korku ve macerayı birleştiriyor.",
  89: "Horizon Forbidden West Complete Edition, açık dünya keşfi ve güçlü hikayesiyle dikkat çeken bir devam oyunu.",
  90: "The Dark Pictures Anthology: Little Hope, seçimlere bağlı ilerleyen sinematik bir korku hikayesi sunuyor.",
  91: "The Dark Pictures Anthology: Man of Medan, hayalet gemi atmosferinde geçen gerilimli bir macera.",
  92: "Hell is Us, keşif ve yakın dövüş odaklı, oyuncuyu yönlendirmeden ilerleten karanlık bir deneyim.",
  93: "Viewfinder, fotoğrafları gerçekliğe dönüştürme fikriyle ilerleyen yaratıcı bir bulmaca oyunu.",
  94: "Arma 3, gerçekçi askeri simülasyon yapısı ve geniş haritalarıyla uzun soluklu bir deneyim sunuyor.",
  96: "Sea of Thieves, korsanlık, keşif ve arkadaşlarla eğlenceli maceralar yaşatan bir multiplayer deneyimi.",
  97: "Marvel’s Spider-Man Remastered, Peter Parker’ın hikayesini akıcı oynanış ve aksiyonla sunan başarılı bir süper kahraman oyunu.",
  98: "Warframe, hızlı oynanışı, parkur mekaniği ve farklı Warframe seçenekleriyle sürekli hareket halinde olduğun, görev tabanlı ilerleyen bir aksiyon oyunu. Loot sistemi ve build çeşitliliği oyunu uzun süre oynanabilir kılıyor.",
  99: "Neverness to Everness, şehir temalı açık dünyası, anime tarzı görselleri ve karakter odaklı yapısıyla dikkat çeken bir aksiyon RPG. Keşif, görevler ve karakter etkileşimleriyle daha rahat ama sürükleyici bir deneyim sunuyor.",
  100: "007 First Light, James Bond’un daha genç dönemine odaklanan, gizlilik, aksiyon ve casusluk temalarını bir araya getiren hikaye odaklı bir macera oyunu. Sinematik anlatımı ve görev çeşitliliğiyle dikkat çekiyor.",


};


function fillEmptyGameNotes(games) {
  if (!Array.isArray(games)) return games;

  games.forEach(function (game) {
    if (!game) return;
    const noteIsEmpty = !game.note || String(game.note).trim() === "";
    if (!noteIsEmpty) return;

    game.note = DEFAULT_NOTE_TEXTS[game.id] ||
      (game.note + "" + (game.note || "") + "");
  });

  return games;
}

fillEmptyGameNotes(GAMES);

// Başka dosyalardan erişiyorsan yardımcı olur.
if (typeof window !== "undefined") {
  window.GAMES = GAMES;
  window.fillEmptyGameNotes = fillEmptyGameNotes;
}

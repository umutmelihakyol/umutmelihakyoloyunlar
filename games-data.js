/* Oyunları burada güncelle. index.html ve games.html bu listeyi ortak kullanır. */
const GAMES = [
	{ id:1,name:"Kingdom Come: Deliverance", appId:379430, special:false, favorite:false, status:"bitti", genre:"Açık Dünya · Aksiyon-RPG", score:"9.2", metacritic:"76", playtime: 40, note:"Ortaçağ Bohemya'sında sıradan bir demirci oğlu olarak başladığın bu yolculuk, seni hem tarihsel hem duygusal olarak derinden etkiliyor. Hiçbir sihir yok, hiçbir seçilmiş kahraman hikayesi yok.", steam:"https://store.steampowered.com/app/379430/", youtube:""  },
  
	{ id:2, name:"Kingdom Come: Deliverance II", appId:1771300, special:false, favorite:false, status:"bitti", genre:"Açık Dünya · Aksiyon-RPG",  score:"9.5",  metacritic:"89", playtime: 70,
  note:"İlk oyunun sağlam temellerini alıp her şeyi bir üst seviyeye taşıyor. Henry artık daha olgun, dünya daha geniş ve hikaye çok daha epik. Orta Çağ simülasyonu olarak türün zirvesi.", steam:"https://store.steampowered.com/app/1771300/",  youtube:"" },
  
	{ id:3,  name:"Dispatch",  appId:2592160,  special:false, favorite:true, status:"bitti", genre:"Macera · Strateji · İnteraktif Hikaye", score:"7.5", metacritic:"87", playtime: 12, note:"Eski Telltale geliştiricilerinden gelen bu süper kahraman iş yeri komedisi, her kararın hikayeyi şekillendirdiği muhteşem bir anlatı sunuyor. Seçimlerin gerçekten önemli ve karakterler arasındaki dinamikler inanılmaz iyi yazılmış.", steam:"https://store.steampowered.com/app/2592160/",  youtube:"" },
  
	{ id:4, name:"Days Gone", appId:1259420, special:false, favorite:false, status:"bitti", genre:"Açık Dünya · Zombi · Hayatta Kalma",  score:"7.5",  metacritic:"72", playtime: 10, note:"Salgın sonrası ölümün kol gezdiği Amerika'da motosiklet sür ve savaş.",  steam:"https://store.steampowered.com/app/1259420/",  youtube:"https://youtu.be/FKtaOY9lMvM" },
   
	{ id: 5,  name: "PRAGMATA",  appId: 3357650,  image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3357650/e32e168b25ed68a0cf6264c220c07e96c2abfb56/header.jpg",  special: false, favorite: true, status: "bitti", genre: "Bilim Kurgu, Macera, Aksiyon",  score: "9.0",  metacritic: "85", playtime: 14, note: "Pragmata uzun geliştirme sürecine rağmen beklentileri karşılayan, gerçekten farklı bir oyun olmuş. En çok hoşuma giden şey oynanışı; shooter yapısını hackleme sistemiyle birleştirip türün o bayat monotonluğunu kırmayı başarmışlar. Dışarıdan basit duran bu sistem aslında inanılmaz çeşitleniyor ve oyunu sürekli taze tutuyor. Hugh ile Diana arasındaki ilişki de çok doğal ilerliyor, abartı drama yerine samimi bir bağ görüyoruz. ", steam: "https://store.steampowered.com/app/3357650/PRAGMATA/", youtube: "https://youtu.be/oncaa_fMsyw" },

	{ id: 6, name: "MOUSE: P.I. For Hire", appId: 2416450, special: false, favorite: false, status: "bitti", genre: "FPS, Aksiyon", score: "8.5", metacritic: "", playtime: 16, note: "Oyunun sanat tarzı gerçekten çok etkileyici. 1930’ların çizgi film estetiği farklı ve hoş bir atmosfer yaratmış. Seslendirme kalitesi oldukça yüksek, Troy Baker yine farkını hissettiriyor. Oynanış kısmı klasik FPS mekaniklerini takip ediyor. Silahları 3 seviyeye kadar geliştirebilmek ve yeterli çeşitlilik sunulması artı bir özellik. Bölüm tasarımları ortalama seviyede, ne çok iyi ne de kötü. Vuruş hissi ise biraz zayıf kalmış, ancak bu durum seçilen görsel tarzdan dolayı çok da yadırganmıyor. Türkçe çeviri başarılı, Lockpick ekibi güzel iş çıkarmış. Genel olarak keyifli bir deneyim sunuyor.", steam: "https://store.steampowered.com/app/2416450/", youtube: "https://youtu.be/9nrmJSgqYTI" },

	{ id: 7, name: "SAROS", appId: 2416450, image: "https://i.ytimg.com/vi/XtCS5tuvCKs/hq720.jpg", special: false, favorite: false, status: "oynanıyor", genre: "Nişancı, Macera", score: "7", metacritic: "88", playtime: 4, note: "PlaySatatin Oyunu.", steam: "https://www.playstation.com/tr-tr/games/saros/", youtube: "https://youtu.be/rj_1CzKUR4w" },

	{ id: 8, name: "Luto ", appId: 1729740, special: false, favorite: false, status: "bitti", genre: "Psikolojik Korku, Yürüme Simülatörü", score: "6", metacritic: "83", playtime: 10, note: "Ortaya sadece görsel olarak değil, duygusal olarak da çok güçlü bir iş çıkmış. Korkutucu, karanlık ve derin bir oyun. Oyuna ne kadar emek verildiği çok net hissediliyor. Oyun hakkında “Çok korkutucu değil” diyenler de var. Doğru, sadece birkaç jumpscare var ama bence bu bir artı. Az ama etkili kullanılmışlar. Bu oyun sizi sürekli korkudan terletecek türden değil. Onun yerine “neden?” sorusunu sorduruyor. Oyun çok güçlü bir atmosferle başlıyor. Sürekli aynı günü yaşadığınız, karanlık ve tekinsiz bir senaryo var ve bazı sahnelerde gerçekten tüyler ürpertici olmayı başarıyor.", steam: "https://store.steampowered.com/app/1729740/Luto/", youtube: "" },

	{ id: 9, name: "Still Wakes the Deep", appId: 1622910, special: false, favorite: false, status: "bitti", genre: "", score: "", metacritic: "", playtime: 7, note: "Still Wakes The Deep, 1975’te denizdeki bir petrol platformunda geçen, atmosferi güçlü bir korku, yürüyüş simülasyonu. Geliştiricisi olan The Chinese Room bu oyunda gerilim, çaresizlik hissi ve görselliği çok iyi yansıtmış. Hikaye fena değil, yaklaşık 4 saat sürüyor ve sıkmıyor. Mekanikler keyifli olsa da yer yer küçük bug’lar, zayıf ipuçları ve bazı noktalarda kolay atlatılan yaratıklar var. Optimizasyonu çok iyi değil. Buna rağmen deneyim akıcı ve oynamaya değer. @zKEBAB", steam: "https://store.steampowered.com/app/1622910/Still_Wakes_the_Deep/", youtube: "" },

	{ id: 10, name: "Memories in Orbit", appId: 1672810, special: false, favorite: false, status: "bitti", genre: "Medrovania, Keşif", score: "8.5", metacritic: "83", playtime: 26, note: "MIO, özgün sanat tasarımı, akıcı animasyonları ve türün en iyi örneklerinden biri olan haritasıyla öne çıkan, platform odaklı bir metroidvania. Keşif hissi, özgün mekanikleri ve gizemli hikayesi çok güçlü. Zorluğu özellikle gerçek sonda artıyor. Bazı tasarım tercihleri yorucu olabiliyor ama genel kaliteyi gölgelemiyor. Türü sevenler için kesinlikle denenmesi gereken, çok etkileyici bir yapım.", steam: "https://store.steampowered.com/app/1672810/", youtube: "" },

	{ id: 11, name: "REANIMAL ", appId: 2129530, special: false, favorite: false, status: "bitti", genre: "Korku, Eşl,, Macera", score: "7.5", metacritic: "81", playtime: 4, note: "Reanimal, Tarsier Studios’un alıştığımız Little Nightmares formülünü daha geniş ve tamamen 3D bir yapıya taşıdığı karanlık bir deneyim sunuyor. Oyun; güçlü atmosferi, sinematik anlatımı, tüyler ürpertici düşman tasarımları, etkileyici ses kullanımı ve akıcı co-op oynanışıyla öne çıkarken, dinamik kamera ve başarılı animasyonlar sayesinde önceki yapımlardaki oynanışı çok üst seviyeye çıkartmış. Buna karşılık hikayede sınırlı diyaloglar, yer yer fazla karanlık bölümler ve yaklaşık 4 saat süren kısa oynanış süresi bakımından iyi olmamış. 4 saatlik bir oyun için 19 dolar çok fazla.", steam: "https://store.steampowered.com/app/2129530/REANIMAL/", youtube: "" },

	{ id: 12, name: "High On Life 2", appId: 2069250, image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2069250/14a0a45da992ca33d59eb318b5cb9598c070e1c1/header.jpg" , special: false, favorite: false, status: "bitti", genre: "Aksiyon, Komedi, FPS", score: "8", metacritic: "", playtime: 13, note: "High On Life 2, absürt mizahını korurken oynanış tarafında risk alan bir devam oyunu. Kaykay mekaniği keşfi ve hareketi ciddi şekilde eğlenceli hale getirirken, görev çeşitliliği ve yan aktiviteler ilk oyuna kıyasla daha yaratıcı. Ancak hikaye anlatımı dağınık, silah çatışmaları fazla kaotik ve teknik problemler deneyimi zaman zaman kötüleştiriyor.", steam: "https://store.steampowered.com/app/2069250/High_On_Life_2/", youtube: "" },

	{ id: 13, name: "The 18th Attic", appId: 3403660, special: false, favorite: false, status: "bitti", genre: "Psikolojik Korku, Hikaye", score: "5", metacritic: "", playtime: 2, note: "The 18th Attic, fotoğraf çekerek anomalileri tespit ettiğiniz, atmosfer odaklı ve kısa süreli bir psikolojik korku oyunu. Güçlü atmosferi ve iki farklı oyun modu iyiyken, kısa oynanışı, zayıf hikayesi ve sorunlu fotoğraf mekaniği oyunu tek seferlik bir deneyime dönüştürüyor. Aşırı korku yerine dikkat ve gözlem sevenler için uygun, derinlik arayanlar için ise yetersiz. Benim için zoraki bir bitiriş oldu.", steam: "https://store.steampowered.com/app/3403660/The_18th_Attic__Paranormal_Anomaly_Hunting_Game/", youtube: "" },

	{ id: 14, name: "Hollow Knight: Silksong", appId: 1030300, special: false, favorite: false, status: "bitti", genre: "Metrovania, Zor, Bağımsız", score: "8.5", metacritic: "90", playtime: 45, note: "Hollow Knight: Silksong, herkese hitap etmeyen, bilinçli şekilde sert tasarlanmış bir metroidvania. Hornet’in hızlı ve akrobatik oynanışı çok tatmin edici olmuş. Yüksek zorluk, double damage sistemi, uzun boss runback’leri, bench yerleşimleri deneyimi zorlayabiliyor. Görsel tasarım, atmosfer ve müzikler oldukça güçlü. Keşfi zorlaştıran hasar dengesi ve geç hissedilen karakter gelişimi, oyunu sabırlı ve türü seven oyuncular için uygun kılıyor.", steam: "https://store.steampowered.com/app/1030300/Hollow_Knight_Silksong/", youtube: "" },









































































];

// Bot yanıtı oluştur
const getBotResponse = (userText: string) => {
  if (userText.includes('köpek')) {
    return {
      id: (Date.now() + 1).toString(),
      isBot: true,
      text: 'Köpek sahiplenmek harika bir fikir! İstersen hangi ırkları sevdiğini söyleyebilirsin.'
    };
  }
  if (userText.includes('kedi')) {
    return {
      id: (Date.now() + 1).toString(),
      isBot: true,
      text: 'Kediler genelde sakin ve ev ortamına çok uygundur. Sana nasıl yardımcı olabilirim?'
    };
  }
  if (userText.includes('fiyat') || userText.includes('ücret')) {
    return {
      id: (Date.now() + 1).toString(),
      isBot: true,
      text: 'Sahiplendirme işlemlerimiz tamamen ücretsizdir. Sadece mama ve veteriner gibi temel ihtiyaçları düşünmelisiniz.'
    };
  }
  if (userText.includes('bakım')) {
    return {
      id: (Date.now() + 1).toString(),
      isBot: true,
      text: 'Evcil hayvanların bakımı düzenli mama, temizlik ve veteriner kontrollerini kapsar. Türüne göre detay verebilirim!'
    };
  }
  if (userText.includes('aşı')) {
    return {
      id: (Date.now() + 1).toString(),
      isBot: true,
      text: 'İlk aşılar genellikle karma, kuduz ve iç/dış parazittir. Veterinerinize danışarak detaylı bilgi alabilirsiniz.'
    };
  }
  if (userText.includes('sahiplen')) {
    return {
      id: (Date.now() + 1).toString(),
      isBot: true,
      text: 'Sahiplenmek istediğiniz hayvanın türünü, yaşını ve yaşadığınız şehri yazarsanız size yardımcı olabilirim.'
    };
  }
  if (userText.includes('tuvalet eğitimi')) {
    return {
      id: (Date.now() + 1).toString(),
      isBot: true,
      text: 'Tuvalet eğitimi sabır gerektirir. Ödüllendirme yöntemi genellikle işe yarar.'
    };
  }
  if (userText.includes('mama') || userText.includes('beslenme')) {
    return {
      id: (Date.now() + 1).toString(),
      isBot: true,
      text: 'Yaş ve türüne uygun mamaları tercih etmelisiniz. Veterineriniz en uygun markaları önerebilir.'
    };
  }
  if (userText.includes('uyku')) {
    return {
      id: (Date.now() + 1).toString(),
      isBot: true,
      text: 'Evcil dostlarımız gün içinde çokça uyurlar. Bu tamamen normaldir, ancak ani değişikliklerde veteriner desteği alın.'
    };
  }
  if (userText.includes('egzersiz')) {
    return {
      id: (Date.now() + 1).toString(),
      isBot: true,
      text: 'Günlük yürüyüşler ve oyunlar özellikle köpekler için çok faydalıdır.'
    };
  }
  if (userText.includes('oyuncak')) {
    return {
      id: (Date.now() + 1).toString(),
      isBot: true,
      text: 'Kedi ve köpekler için özel oyuncaklar onların fiziksel ve zihinsel sağlığına katkı sağlar.'
    };
  }
  if (userText.includes('hasta')) {
    return {
      id: (Date.now() + 1).toString(),
      isBot: true,
      text: 'Dostunuzun sağlığıyla ilgili bir durum varsa en yakın veterinere başvurmanızı öneririm.'
    };
  }
  if (userText.includes('tüy') || userText.includes('dökülme')) {
    return {
      id: (Date.now() + 1).toString(),
      isBot: true,
      text: 'Tüy dökülmesi bazı dönemlerde artabilir. Düzenli tarama ve uygun mama bu durumu azaltabilir.'
    };
  }
  if (userText.includes('yaş') || userText.includes('kaç yaş')) {
    return {
      id: (Date.now() + 1).toString(),
      isBot: true,
      text: 'Kaç yaşında bir dost aradığını belirtirsen, sana daha uygun önerilerde bulunabilirim.'
    };
  }
  if (userText.includes('uyumlu') || userText.includes('çocuk')) {
    return {
      id: (Date.now() + 1).toString(),
      isBot: true,
      text: 'Çocuklarla iyi geçinen sakin ırklar genelde en iyi tercihlerdir. Örneğin Golden Retriever veya Scottish Fold gibi.'
    };
  }
  if (userText.includes('adım') || userText.includes('adın ne')) {
    return {
      id: (Date.now() + 1).toString(),
      isBot: true,
      text: 'Ben Pet Asistanınızım 🐾 Yardımcı olmaktan mutluluk duyarım!'
    };
  }
  if (userText.includes('teşekkür') || userText.includes('sağol')) {
    return {
      id: (Date.now() + 1).toString(),
      isBot: true,
      text: 'Rica ederim! Yardımcı olabildiysem ne mutlu bana 😊'
    };
  }
  if (userText.includes('nereden') || userText.includes('nasıl alırım')) {
    return {
      id: (Date.now() + 1).toString(),
      isBot: true,
      text: 'Sahiplenmek istediğiniz şehir bilgisiyle birlikte yazarsanız, size yönlendirme yapabilirim.'
    };
  }
  if (userText.includes('çiftleştirme') || userText.includes('eşleşme')) {
    return {
      id: (Date.now() + 1).toString(),
      isBot: true,
      text: 'Şu an için eşleştirme hizmeti sunmuyoruz ama gelecekte bu özelliği eklemeyi planlıyoruz!'
    };
  }
  if (userText.includes('soru') || userText.includes('yardım')) {
    return {
      id: (Date.now() + 1).toString(),
      isBot: true,
      text: 'Evcil hayvan bakımı, sahiplenme süreci ya da ihtiyaçları hakkında tüm sorularınızı yazabilirsiniz!'
    };
  }

  // Genel cevap
  return {
    id: (Date.now() + 1).toString(),
    isBot: true,
    text: 'Anladım! Daha fazla bilgi verebilir misin? Örneğin: "köpek sahiplenmek istiyorum" veya "kedi bakımı nasıl olur?" gibi.'
  };
};

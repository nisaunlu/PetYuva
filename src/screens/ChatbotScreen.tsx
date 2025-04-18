import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';

// Örnek ilanlar
const sampleListings = [
  { id: '101', type: 'köpek', breed: 'Golden Retriever', age: '2 yaşında', location: 'İstanbul', description: 'Sevecen ve oyuncu bir köpek.' },
  { id: '102', type: 'kedi', breed: 'British Shorthair', age: '1 yaşında', location: 'Ankara', description: 'Sakin ve uysal bir kedi.' },
  { id: '103', type: 'köpek', breed: 'Siberian Husky', age: '3 yaşında', location: 'İzmir', description: 'Soğuğa dayanıklı ve enerjik bir dost.' },
];

export const ChatbotScreen = () => {
  const [messages, setMessages] = useState([
    { id: '1', isBot: true, text: 'Merhaba! Bana hayvanlar hakkında her şeyi sorabilirsin.☺️' },
  ]);
  const [inputText, setInputText] = useState('');

  const sendMessage = () => {
    if (inputText.trim() === '') return;

    const newMessage = {
      id: Date.now().toString(),
      isBot: false,
      text: inputText
    };
    
    setMessages([...messages, newMessage]);
    setInputText('');

    setTimeout(() => {
      const botResponse = getBotResponse(inputText.toLowerCase());
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

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


  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Pet Asistanı</Text>
      
      <ScrollView style={styles.chatContainer}>
        {messages.map(message => (
          <View 
            key={message.id} 
            style={[
              styles.chatBubble, 
              message.isBot ? styles.botBubble : styles.userBubble
            ]}
          >
            <Text style={styles.chatText}>{message.text}</Text>
          </View>
        ))}
      </ScrollView>
      
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Mesajınızı yazın..."
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={styles.sendButtonText}>Gönder</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'rgb(227,221,207)',
  },
  screenTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  chatContainer: {
    flex: 1,
    marginBottom: 10,
  },
  chatBubble: {
    padding: 12,
    borderRadius: 16,
    marginBottom: 10,
    maxWidth: '80%',
  },
  botBubble: {
    backgroundColor: '#E1F5FE',
    alignSelf: 'flex-start',
    borderBottomLeftRadius: 4,
  },
  userBubble: {
    backgroundColor: '#E8F5E9',
    alignSelf: 'flex-end',
    borderBottomRightRadius: 4,
  },
  chatText: {
    fontSize: 15,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  input: {
    flex: 1,
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 20,
    marginRight: 8,
  },
  sendButton: {
    backgroundColor: '#D29596',
    padding: 12,
    borderRadius: 20,
  },
  sendButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});


export default ChatbotScreen;

import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Keyboard,
} from 'react-native';

// Örnek ilanlar
const sampleListings = [
  {
    id: '101',
    type: 'köpek',
    breed: 'Golden Retriever',
    age: '2 yaşında',
    location: 'İstanbul',
    description: 'Sevecen ve oyuncu bir köpek.',
  },
  {
    id: '102',
    type: 'kedi',
    breed: 'British Shorthair',
    age: '1 yaşında',
    location: 'Ankara',
    description: 'Sakin ve uysal bir kedi.',
  },
  {
    id: '103',
    type: 'köpek',
    breed: 'Siberian Husky',
    age: '3 yaşında',
    location: 'İzmir',
    description: 'Soğuğa dayanıklı ve enerjik bir dost.',
  },
];

const ChatbotScreen = ({navigation}) => {
  const [messages, setMessages] = useState([
    {id: '1', isBot: true, text: 'Merhaba! Size nasıl yardımcı olabilirim?'},
  ]);
  const [inputText, setInputText] = useState('');
  const scrollViewRef = useRef<ScrollView>(null);

  const sendMessage = () => {
    if (inputText.trim() === '') return;

    const newMessage = {
      id: Date.now().toString(),
      isBot: false,
      text: inputText,
    };

    setMessages(prev => [...prev, newMessage]);
    setInputText('');
    Keyboard.dismiss(); // Mesaj gönderilince klavyeyi kapat

    setTimeout(() => {
      const botResponse = getBotResponse(inputText.toLowerCase());
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  // Kullanıcının mesajına göre yanıt oluştur
  const getBotResponse = userText => {
    if (
      userText.includes('köpek') ||
      userText.includes('köpek sahiplendirme') ||
      userText.includes('yavru köpek')
    ) {
      const dogListings = sampleListings.filter(item => item.type === 'köpek');
      return {
        id: (Date.now() + 1).toString(),
        isBot: true,
        text:
          `İşte sahiplendirilebilecek köpekler:\n\n` +
          dogListings
            .map(
              dog =>
                `🐶 ${dog.breed} - ${dog.age}\n📍 ${dog.location}\n📌 ${dog.description}`,
            )
            .join('\n\n'),
      };
    }

    if (
      userText.includes('kedi') ||
      userText.includes('kedi sahiplendirme') ||
      userText.includes('yavru kedi')
    ) {
      const catListings = sampleListings.filter(item => item.type === 'kedi');
      return {
        id: (Date.now() + 1).toString(),
        isBot: true,
        text:
          `İşte sahiplendirilebilecek kediler:\n\n` +
          catListings
            .map(
              cat =>
                `🐱 ${cat.breed} - ${cat.age}\n📍 ${cat.location}\n📌 ${cat.description}`,
            )
            .join('\n\n'),
      };
    }

    if (
      userText.includes('sahiplenmek istiyorum') ||
      userText.includes('evlat edinme')
    ) {
      return {
        id: (Date.now() + 1).toString(),
        isBot: true,
        text: 'Harika bir karar! Hemen sana uygun bir ilan bulabiliriz. İstediğin hayvan türünü yazar mısın? (Örn: "kedi" veya "köpek")',
      };
    }

    if (
      userText.includes('sahiplendirme') ||
      userText.includes('sahiplendirme ilanı')
    ) {
      return {
        id: (Date.now() + 1).toString(),
        isBot: true,
        text: 'Bir evcil dostunuzu sahiplendirmek mi istiyorsunuz? İlan oluşturmak için profil kısmından yeni ilan ekleyebilirsiniz!',
      };
    }

    if (
      userText.includes('barınak') ||
      userText.includes('sokak hayvanı') ||
      userText.includes('sokaktan sahiplen')
    ) {
      return {
        id: (Date.now() + 1).toString(),
        isBot: true,
        text: 'Sokak hayvanlarını sahiplenmek çok anlamlı! Size en yakın barınakları listelemek ister misin?',
      };
    }

    if (
      userText.includes('yavru') ||
      userText.includes('yavru kedi') ||
      userText.includes('yavru köpek')
    ) {
      return {
        id: (Date.now() + 1).toString(),
        isBot: true,
        text: 'Yavru hayvanlar için özel bakım gerekebilir. İstersen sana yavru ilanlarını listeleyebilirim!',
      };
    }

    if (
      userText.includes('dost') ||
      userText.includes('can dostu') ||
      userText.includes('patili dostlar')
    ) {
      return {
        id: (Date.now() + 1).toString(),
        isBot: true,
        text: 'Patili dostlarımız seni bekliyor! Aradığın özellikleri paylaşır mısın? (Örn: yaş, tür, cinsiyet)',
      };
    }

    if (userText.includes('hayvan') || userText.includes('evcil')) {
      return {
        id: (Date.now() + 1).toString(),
        isBot: true,
        text: 'Evcil hayvan sahiplenmek isteyen herkes için buradayız! Hangi türü tercih ediyorsun?',
      };
    }

    if (
      userText.includes('yuva') ||
      userText.includes('kalıcı yuva') ||
      userText.includes('geçici yuva') ||
      userText.includes('yuva arıyor')
    ) {
      return {
        id: (Date.now() + 1).toString(),
        isBot: true,
        text: 'Birçok can dostumuz sıcak bir yuva arıyor. İlanlara göz atmak ister misin?',
      };
    }

    if (userText.includes('yardım') || userText.includes('yardım arıyorum')) {
      return {
        id: (Date.now() + 1).toString(),
        isBot: true,
        text: 'Size nasıl yardımcı olabilirim? İsterseniz destek ekibimize de yazabilirsiniz.',
      };
    }

    if (
      userText.includes('veteriner') ||
      userText.includes('veteriner masrafı')
    ) {
      return {
        id: (Date.now() + 1).toString(),
        isBot: true,
        text: 'Veteriner masrafları sahiplendirme sonrası sahiplenecek kişi tarafından karşılanır. Aşı ve kimlik işlemleri önemlidir.',
      };
    }

    if (userText.includes('aşı')) {
      return {
        id: (Date.now() + 1).toString(),
        isBot: true,
        text: 'Kedi ve köpekler için kuduz, karma ve parazit aşıları gereklidir. Sahiplenmeden önce sağlık durumu mutlaka kontrol edilmelidir.',
      };
    }

    if (userText.includes('bakım')) {
      return {
        id: (Date.now() + 1).toString(),
        isBot: true,
        text: 'Evcil hayvan bakımı düzenli beslenme, egzersiz ve veteriner kontrollerini kapsar. İstersen detaylı bakım rehberi gönderebilirim.',
      };
    }

    if (userText.includes('kısırlaştırma')) {
      return {
        id: (Date.now() + 1).toString(),
        isBot: true,
        text: 'Kısırlaştırma hem sokak hayvanı nüfusunu kontrol etmek hem de sağlık açısından çok önemlidir.',
      };
    }

    if (userText.includes('kimlik') || userText.includes('kayıt')) {
      return {
        id: (Date.now() + 1).toString(),
        isBot: true,
        text: 'Yeni sahiplenilen evcil dostlarımız için kimlik ve kayıt işlemleri yasal olarak zorunludur.',
      };
    }

    if (userText.includes('pet') || userText.includes('pet shop')) {
      return {
        id: (Date.now() + 1).toString(),
        isBot: true,
        text: 'PetYuva, sahiplendirme odaklı bir platformdur. Pet shoplardan farklı olarak amacımız dostlarımıza sıcak bir yuva bulmak!',
      };
    }

    if (userText.includes('ücretsiz')) {
      return {
        id: (Date.now() + 1).toString(),
        isBot: true,
        text: "PetYuva'da sahiplendirme ilanları tamamen ücretsizdir! Ancak sahiplendirme sonrası veteriner ve bakım masrafları yeni sahibe aittir.",
      };
    }

    if (userText.includes('kedim kayboldu') || userText.includes('kayıp')) {
      return {
        id: (Date.now() + 1).toString(),
        isBot: true,
        text: 'Kayıp bir dost için acil ilan oluşturabilirsiniz. Hemen destek ekibimize haber verelim!',
      };
    }

    if (
      userText.includes('acil sahiplenme') ||
      userText.includes('can dostu arıyorum')
    ) {
      return {
        id: (Date.now() + 1).toString(),
        isBot: true,
        text: 'Acil yuva arayan ilanlara yönlendirebilirim. Hemen listeleri açayım mı?',
      };
    }

    if (
      userText.includes('hayvan sevgisi') ||
      userText.includes('hayvan dostu')
    ) {
      return {
        id: (Date.now() + 1).toString(),
        isBot: true,
        text: 'Hayvan sevgisi en değerli şeylerden biri. Senin gibi duyarlı kullanıcılarımız sayesinde birçok can yeni yuvasına kavuşuyor!',
      };
    }

    // Eğer hiçbir eşleşme olmadıysa
    return {
      id: (Date.now() + 1).toString(),
      isBot: true,
      text: 'Söylediklerini tam anlayamadım. Daha açık bir şekilde tekrar eder misin? Örneğin "köpek sahiplenmek istiyorum" gibi.',
    };
  };

  useEffect(() => {
    scrollViewRef.current?.scrollToEnd({animated: true});
  }, [messages]);

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Text style={{fontSize: 18}}>◀</Text>
        </TouchableOpacity>
        <Text style={styles.screenTitle}>Pet Asistanı</Text>
        <View style={{width: 44}} />
      </View>

      <ScrollView
        ref={scrollViewRef}
        style={styles.chatContainer}
        contentContainerStyle={{paddingBottom: 20}}
        showsVerticalScrollIndicator={false}>
        {messages.map(message => (
          <View
            key={message.id}
            style={[
              styles.chatBubble,
              message.isBot ? styles.botBubble : styles.userBubble,
            ]}>
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
          onSubmitEditing={sendMessage} // Klavyede "gönder"e basınca da çalışır
          returnKeyType="send"
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
  backButton: {
    padding: 8,
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

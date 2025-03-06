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
    { id: '1', isBot: true, text: 'Merhaba! Size nasıl yardımcı olabilirim?' },
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

    // Bot yanıtı oluştur
    setTimeout(() => {
      const botResponse = getBotResponse(inputText.toLowerCase());
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  // Kullanıcının mesajına göre yanıt oluştur
  const getBotResponse = (userText: string) => {
    if (userText.includes('köpek')) {
      const dogListings = sampleListings.filter(item => item.type === 'köpek');
      return {
        id: (Date.now() + 1).toString(),
        isBot: true,
        text: `İşte bazı köpek ilanları:\n\n` + dogListings.map(dog => 
          `🐶 ${dog.breed} - ${dog.age}\n📍 ${dog.location}\n📌 ${dog.description}`).join('\n\n')
      };
    } 
    if (userText.includes('kedi')) {
      const catListings = sampleListings.filter(item => item.type === 'kedi');
      return {
        id: (Date.now() + 1).toString(),
        isBot: true,
        text: `İşte bazı kedi ilanları:\n\n` + catListings.map(cat => 
          `🐱 ${cat.breed} - ${cat.age}\n📍 ${cat.location}\n📌 ${cat.description}`).join('\n\n')
      };
    }
    if (userText.includes('fiyat')) {
      return {
        id: (Date.now() + 1).toString(),
        isBot: true,
        text: 'Sahiplendirme ilanlarımız ücretsizdir. Ancak veteriner masraflarını göz önünde bulundurmalısınız.'
      };
    }
    if (userText.includes('bakımı')) {
      return {
        id: (Date.now() + 1).toString(),
        isBot: true,
        text: 'Evcil hayvan bakımı, düzenli beslenme, egzersiz ve veteriner kontrollerini içerir. Daha fazla detay için bir veteriner ile görüşebilirsiniz.'
      };
    }
    if (userText.includes('aşı')) {
      return {
        id: (Date.now() + 1).toString(),
        isBot: true,
        text: 'Köpek ve kediler için temel aşılar kuduz, karma ve parazit aşılarıdır. Detaylar için bir veterinere danışabilirsiniz.'
      };
    }
    return {
      id: (Date.now() + 1).toString(),
      isBot: true,
      text: 'Anladım! Daha fazla detay verir misiniz? Örneğin "köpek sahiplenmek istiyorum" veya "kedi bakımı hakkında bilgi alabilir miyim?"'
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

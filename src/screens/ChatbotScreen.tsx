import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';

// Simple ChatbotScreen component
export const ChatbotScreen = () => {
  const [messages, setMessages] = useState([
    { id: '1', isBot: true, text: 'Merhaba! Size nasıl yardımcı olabilirim?' },
    { id: '2', isBot: false, text: 'Köpek sahiplenmek istiyorum.' },
    { id: '3', isBot: true, text: 'Harika! Size uygun bir köpek bulmanız için birkaç soru sormak istiyorum. Yaşadığınız yer nasıl bir yer?' },
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
    
    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: (Date.now() + 1).toString(),
        isBot: true,
        text: 'Anladım, başka sorularınız var mı?'
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
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
    backgroundColor: '#F5F5F5',
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
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 20,
  },
  sendButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ChatbotScreen;
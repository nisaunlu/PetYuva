import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

export const MessagesScreen = ({ navigation }) => {

  const [messages, setMessages] = useState([
    { id: '1', sender: 'Ali', message: 'Merhaba, nasılsınız?', time: '14:30' },
    { id: '2', sender: 'Ayşe', message: 'Köpeğinizle ilgileniyorum. Hala sahiplendirme için uygun mu?', time: '12:15' },
    { id: '3', sender: 'Mehmet', message: 'Kedinin aşıları yapıldı mı?', time: '09:45' },
    { id: '4', sender: 'Zeynep', message: 'Pet dostu daire arıyorum, bildiğiniz yer var mı?', time: 'Dün' },
    { id: '5', sender: 'Emre', message: 'Sahiplendiğim kedi hakkında birkaç soru sormak istiyorum.', time: 'Dün' },
  ]);

  const renderMessageItem = ({ item }) => (
    <TouchableOpacity
      style={styles.messageItem}
      onPress={() => navigation.navigate("MessageDetails", { sender: item.sender, message: item.message ,time:item.time})}
    >
      <View style={styles.messageBubble}>
        <Text style={styles.senderName}>{item.sender}</Text>
        <Text style={styles.messageText}>{item.message}</Text>
        <Text style={styles.messageTime}>{item.time}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Mesajlar</Text>
      <FlatList
        data={messages}
        renderItem={renderMessageItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
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
  listContainer: {
    paddingBottom: 20,
  },
  messageItem: {
    marginBottom: 12,
    borderRadius: 8,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  messageBubble: {
    padding: 12,
  },
  senderName: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  messageText: {
    fontSize: 14,
    marginBottom: 6,
  },
  messageTime: {
    fontSize: 12,
    color: '#888',
    alignSelf: 'flex-end',
  },
});

export default MessagesScreen;

import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';

const MessagesScreen = ({navigation}) => {
  const messages = useSelector((state: RootState) => state.chat.messages);

  // Kişi başına son mesajı bul, zaman sırasına göre ters sırala
  const latestMessages = Object.values(
    messages.reduce((acc, msg) => {
      const key = msg.sender === 'Me' ? msg.receiver : msg.sender;
      if (!acc[key] || msg.timestamp > acc[key].timestamp) {
        acc[key] = msg;
      }
      return acc;
    }, {} as Record<string, (typeof messages)[0]>),
  ).sort((a, b) => b.timestamp - a.timestamp); // En son mesaj en üstte

  const renderMessageItem = ({item}) => {
    const otherPerson = item.sender === 'Me' ? item.receiver : item.sender;
    return (
      <TouchableOpacity
        style={styles.messageItem}
        onPress={() =>
          navigation.navigate('MessageDetails', {
            sender: otherPerson,
          })
        }>
        <View style={styles.messageBubble}>
          <Text style={styles.senderName}>{otherPerson}</Text>
          <Text style={styles.messageText}>{item.text}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Mesajlar</Text>
      <FlatList
        data={latestMessages}
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
    backgroundColor: 'rgb(227,221,207)', // ChatbotScreen ile aynı arka plan
  },
  screenTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#333',
  },
  listContainer: {
    paddingBottom: 20,
  },
  messageItem: {
    marginBottom: 12,
    borderRadius: 12,
    backgroundColor: 'white',
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  messageBubble: {
    flexDirection: 'column',
  },
  senderName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#B94A59', // koyu pembe ton
    marginBottom: 4,
  },
  messageText: {
    fontSize: 14,
    color: '#333',
  },
});

export default MessagesScreen;

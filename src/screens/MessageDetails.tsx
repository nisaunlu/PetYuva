import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../redux/store';
import {sendMessageLocal} from '../redux/chatSlice';

const MessageDetails = ({route}) => {
  const {sender} = route.params;
  const [newMessage, setNewMessage] = useState('');
  const dispatch = useDispatch();

  const messages = useSelector((state: RootState) => state.chat.messages);
  const conversation = messages.filter(
    m =>
      (m.sender === 'Me' && m.receiver === sender) ||
      (m.sender === sender && m.receiver === 'Me'),
  );

  const sendMessage = () => {
    if (newMessage.trim() === '') return;
    dispatch(
      sendMessageLocal({
        id: Date.now().toString(),
        sender: 'Me',
        receiver: sender,
        text: newMessage,
        timestamp: Date.now(),
      }),
    );
    setNewMessage('');
  };

  const renderItem = ({item}) => (
    <View
      style={[
        styles.bubble,
        item.sender === 'Me' ? styles.sent : styles.received,
      ]}>
      <Text>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{sender} </Text>
      <FlatList
        data={conversation}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.list}
      />

      <View style={styles.inputContainer}>
        <TextInput
          value={newMessage}
          onChangeText={setNewMessage}
          placeholder="Mesaj yaz..."
          style={styles.input}
        />
        <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
          <Text style={{color: 'white'}}>Gönder</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16, backgroundColor: 'rgb(227,221,207)'},
  title: {fontSize: 20, fontWeight: 'bold', marginBottom: 10},
  list: {flex: 1},
  bubble: {padding: 10, borderRadius: 10, marginVertical: 4, maxWidth: '70%'},
  sent: {backgroundColor: '#D29596', alignSelf: 'flex-end'},
  received: {backgroundColor: 'rgb(227,221,207)', alignSelf: 'flex-start'},
  inputContainer: {flexDirection: 'row', alignItems: 'center'},
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    padding: 10,
    marginRight: 8,
  },
  sendButton: {backgroundColor: '#D29596', padding: 10, borderRadius: 20},
});

export default MessageDetails;

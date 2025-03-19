import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  FlatList
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const MessageDetails = ({ route, navigation }) => {
  const { sender, message, time } = route.params;
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: "1",
      text: message,
      time: time || "12:30",
      sender: sender,
      isSender: false
    }
  ]);

  const sendMessage = () => {
    if (newMessage.trim() === "") return;
    
    const currentTime = new Date().toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
    
    setMessages([
      ...messages,
      {
        id: Date.now().toString(),
        text: newMessage,
        time: currentTime,
        sender: "Me",
        isSender: true
      }
    ]);
    
    setNewMessage("");
  };

  const renderMessageItem = ({ item }) => (
    <View style={[
      styles.messageBubble,
      item.isSender ? styles.sentMessage : styles.receivedMessage
    ]}>
      <Text style={styles.messageText}>{item.text}</Text>
      <Text style={styles.messageTime}>{item.time}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons name="chevron-back" size={24} color="#D29596" />
        </TouchableOpacity>
        <View style={styles.profileContainer}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{sender[0]}</Text>
          </View>
          <Text style={styles.senderName}>{sender}</Text>
        </View>
      </View>

      <FlatList
        data={messages}
        renderItem={renderMessageItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.messagesList}
        inverted={false}
      />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}
        style={styles.inputContainer}
      >
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Type a message..."
            value={newMessage}
            onChangeText={setNewMessage}
            multiline
          />
          <TouchableOpacity 
            style={styles.sendButton}
            onPress={sendMessage}
            disabled={newMessage.trim() === ""}
          >
            <Ionicons 
              name="send" 
              size={20} 
              color={newMessage.trim() === "" ? "#CCCCCC" : "#D29596"} 
            />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(227,221,207)',
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#D29596',
    backgroundColor: 'rgb(227,221,207)',
  },
  backButton: {
    padding: 8,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#D29596",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  senderName: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 12,
    color: "#333333",
  },
  messagesList: {
    padding: 16,
  },
  messageBubble: {
    maxWidth: '80%',
    padding: 12,
    borderRadius: 16,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 1,
    marginLeft:80,
  },
  sentMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#D29596',
    borderBottomRightRadius: 4,
  },
  receivedMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: 4,
  },
  messageText: {
    fontSize: 16,
    color: "#333333",
  },
  messageTime: {
    fontSize: 11,
    color: "#666666",
    alignSelf: 'flex-end',
    marginTop: 4,
  },
  inputContainer: {
    borderTopWidth: 1,
    borderTopColor: '#D29596',
    padding: 10,
    backgroundColor: 'rgb(227,221,207)',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  input: {
    flex: 1,
    minHeight: 40,
    maxHeight: 100,
    fontSize: 16,
  },
  sendButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MessageDetails;
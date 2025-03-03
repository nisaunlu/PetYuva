import React from 'react';
import { View, FlatList, Text, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Material Icons kullanıyoruz

const { width } = Dimensions.get('window');
const scaleSize = (size) => (width / 375) * size;

// Örnek ilan verileri
const ilanlar = [
  { id: '1', ad: 'Minik', tur: 'Kedi', yas: '2', sehir: 'İstanbul' },
  { id: '2', ad: 'Karabaş', tur: 'Köpek', yas: '3', sehir: 'Ankara' },
  { id: '3', ad: 'Pamuk', tur: 'Kedi', yas: '1', sehir: 'İzmir' },
];

const styles = {
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  card: { padding: 10, margin: 5, borderWidth: 1, borderRadius: 10, backgroundColor: 'white' },
  title: { fontWeight: 'bold', fontSize: 18 },
};

export const HomeScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.title}>{item.ad} ({item.tur})</Text>
      <Text>Yaş: {item.yas}</Text>
      <Text>Şehir: {item.sehir}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <FlatList data={ilanlar} renderItem={renderItem} keyExtractor={(item) => item.id} />
    </View>
  );
};

export const MessagesScreen = () => (
  <View style={styles.center}>
    <Icon name="message" size={50} color="blue" />
    <Text>Mesajlar</Text>
  </View>
);

export const ChatbotScreen = () => (
  <View style={styles.center}>
    <Icon name="chat-bubble" size={50} color="green" />
    <Text>Chatbot</Text>
  </View>
);

export const ProfileScreen = () => (
  <View style={styles.center}>
    <Icon name="person" size={50} color="purple" />
    <Text>Profilim</Text>
  </View>
);

import React, {useState} from 'react';
import {
  View,
  FlatList,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from 'react-native';
import {kedi1, kopek, kus, hamster, maya, kedi5} from '../../assent/images';
import {useSelector} from 'react-redux';

const {width} = Dimensions.get('window');
const scaleSize = size => (width / 375) * size;

const sabitIlanlar = [
  {
    id: '1',
    ad: 'Minik',
    tur: 'Kedi',
    yas: '2',
    sehir: 'İstanbul',
    detay: 'Sevimli, oyun sever bir kedi. Aşıları yapılmış ve sağlıklı.',
    image: kedi1,
    sahibi: 'Nuran Güler',
  },
  {
    id: '2',
    ad: 'Rüzgar',
    tur: 'Köpek',
    yas: '3',
    sehir: 'Ankara',
    detay: 'Eğitimli, çocuklarla iyi anlaşabilen bir köpek.',
    image: kopek,
    sahibi: 'Nuran Güler',
  },
  {
    id: '3',
    ad: 'Pamuk',
    tur: 'Hamster',
    yas: '1',
    sehir: 'İzmir',
    detay: 'Çok tatlı tüylü bir hamster.',
    image: hamster,
    sahibi: 'Hamit Berkay Ertek',
  },
  {
    id: '4',
    ad: 'Şerif',
    tur: 'Kedi',
    yas: '1',
    sehir: 'Düzce',
    detay:
      'Saldırgan ve rahatına düşkün bir kedidir. Aşıları yapılmış ve sağlıklı.',
    image: kedi5,
    sahibi: 'Ceren Öztürk',
  },
  {
    id: '5',
    ad: 'Maya',
    tur: 'Kedi',
    yas: '4',
    sehir: 'İstanbul',
    detay:
      'Saldırgan ve rahatına düşkün bir kedidir. Aşıları yapılmış ve sağlıklı.',
    image: maya,
    sahibi: 'Nisa Ünlü',
  },
  {
    id: '6',
    ad: 'Pamuk',
    tur: 'Muhabbet Kuşu',
    yas: '1',
    sehir: 'Gaziantep',
    detay: '5 kelime söyleme yeteneğine sahip.',
    image: kus,
    sahibi: 'Ceren Kaynak',
  },
];

export const HomeScreen = ({navigation}) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const extraIlanlar = useSelector(state => state.listings.listings);

  // Sabit ilanlar ile redux'tan gelenleri birleştir
  const tumIlanlar = [...sabitIlanlar, ...extraIlanlar];

  const openDetailModal = item => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const handleSendMessage = () => {
    if (selectedItem) {
      setModalVisible(false);
      navigation.navigate('MessageDetails', {
        sender: selectedItem.sahibi,
        message: `Merhaba, ${selectedItem.ad} isimli hayvanınızla ilgileniyorum.`,
        time: new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        }),
      });
    }
  };

  const renderItem = ({item}) => (
    <View style={styles.card}>
      <Image
        style={styles.image}
        source={typeof item.image === 'string' ? {uri: item.image} : item.image}
      />

      <Text style={styles.title}>
        {item.ad} ({item.tur})
      </Text>
      <Text style={styles.detailText}>Yaş: {item.yas}</Text>
      <Text style={styles.detailText}>Şehir: {item.sehir}</Text>
      <TouchableOpacity
        style={styles.detailButton}
        onPress={() => openDetailModal(item)}>
        <Text style={styles.detailButtonText}>Detaylı Bilgi</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={tumIlanlar}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {selectedItem && (
              <>
                <Image
                  style={styles.modalImage}
                  source={
                    typeof selectedItem.image === 'string'
                      ? {uri: selectedItem.image}
                      : selectedItem.image
                  }
                />
                <Text style={styles.modalTitle}>{selectedItem.ad}</Text>
                <Text style={styles.modalDetailText}>
                  Tür: {selectedItem.tur}
                </Text>
                <Text style={styles.modalDetailText}>
                  Yaş: {selectedItem.yas}
                </Text>
                <Text style={styles.modalDetailText}>
                  Şehir: {selectedItem.sehir}
                </Text>
                <Text style={styles.modalDetailText}>{selectedItem.detay}</Text>
                <Text style={styles.detailText}>
                  Sahiplendiren: {selectedItem.sahibi}
                </Text>

                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={styles.closeButton}
                    onPress={() => setModalVisible(false)}>
                    <Text style={styles.closeButtonText}>Kapat</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.messageButton}
                    onPress={handleSendMessage}>
                    <Text style={styles.messageButtonText}>Mesaj Gönder</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(227,221,207)',
    flex: 1,
    padding: 5,
  },
  card: {
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  image: {
    width: 350,
    height: 350,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },
  detailText: {
    marginBottom: 5,
    fontWeight: 'bold',
  },
  detailButton: {
    backgroundColor: '#D29596',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  detailButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalDetailText: {
    textAlign: 'center',
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  closeButton: {
    backgroundColor: '#999',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 5,
  },
  closeButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  messageButton: {
    backgroundColor: '#D29596',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginLeft: 5,
  },
  messageButtonText: {
    color: 'white',
    textAlign: 'center',
  },
});

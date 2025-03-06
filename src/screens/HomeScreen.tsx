import React, { useState } from 'react';
import { View, FlatList, Text, Dimensions, Image, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { kedi1,kedi2,kedi3,kedi4 ,maya,kedi5} from '../../assent/images'; 

const { width } = Dimensions.get('window');
const scaleSize = (size) => (width / 375) * size;


const ilanlar = [
  { 
    id: '1', 
    ad: 'Minik', 
    tur: 'Kedi', 
    yas: '2', 
    sehir: 'İstanbul',
    detay: 'Sevimli, oyun sever bir kedi. Aşıları yapılmış ve sağlıklı.',
    image: kedi1
  },
  { 
    id: '2', 
    ad: 'Karabaş', 
    tur: 'Köpek', 
    yas: '3', 
    sehir: 'Ankara',
    detay: 'Eğitimli, çocuklarla iyi anlaşabilen bi kedi.',
    image: kedi2
  },
  { 
    id: '3', 
    ad: 'Pamuk', 
    tur: 'Kedi', 
    yas: '1', 
    sehir: 'İzmir',
    detay: 'çok tatlı tüylü bir kedi.',
    image: kedi3
  },
  { 
    id: '4', 
    ad: 'Şerif Atılmış', 
    tur: 'Kedi', 
    yas: '1', 
    sehir: 'Düzce',
    detay: 'öldü ama hala kalbimde yaşıyor.',
    image: kedi5
  },
  { 
    id: '5', 
    ad: 'Maya Ünlü', 
    tur: 'Kedi', 
    yas: '4', 
    sehir: 'İstanbul',
    detay: 'Saldırgan ve rahatına düşkün bir kedidir. Aşıları yapılmış ve sağlıklı.',
    image: maya
  },
  { 
    id: '6', 
    ad: 'Pamuk', 
    tur: 'Kedi', 
    yas: '1', 
    sehir: 'Gaziantep',
    detay: 'çok tatlı tüylü bir kedi.',
    image: kedi4
  },
];



export const HomeScreen = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const openDetailModal = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image style={styles.image} source={item.image}/>
      <Text style={styles.title}>{item.ad} ({item.tur})</Text>
      <Text style={styles.detailText}>Yaş: {item.yas}</Text>
      <Text style={styles.detailText}>Şehir: {item.sehir}</Text>
      <TouchableOpacity 
        style={styles.detailButton} 
        onPress={() => openDetailModal(item)}
      >
        <Text style={styles.detailButtonText}>Detaylı Bilgi</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList 
        data={ilanlar} 
        renderItem={renderItem} 
        keyExtractor={(item) => item.id} 
      />

     
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {selectedItem && (
              <>
                <Image style={styles.modalImage} source={selectedItem.image}/>
                <Text style={styles.modalTitle}>{selectedItem.ad}</Text>
                <Text style={styles.modalDetailText}>Tür: {selectedItem.tur}</Text>
                <Text style={styles.modalDetailText}>Yaş: {selectedItem.yas}</Text>
                <Text style={styles.modalDetailText}>Şehir: {selectedItem.sehir}</Text>
                <Text style={styles.modalDetailText}>{selectedItem.detay}</Text>
                
                <TouchableOpacity 
                  style={styles.closeButton} 
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={styles.closeButtonText}>Mesaj Gönder</Text>
                </TouchableOpacity>
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
    backgroundColor:'rgb(227,221,207)',
    flex: 1, 
    padding: 5 
  },
  card: { 
    padding: 10, 
    margin: 5, 
    borderWidth: 1, 
    borderRadius: 10, 
    backgroundColor: 'white',
    alignItems: 'center'
  },
  image: {
    width: 350,
    height: 350,
    borderRadius: 10,
    marginBottom: 10
  },
  title: { 
    fontWeight: 'bold', 
    fontSize: 18,
    marginBottom: 5
  },
  detailText: {
    marginBottom: 5
  },
  detailButton: {
    backgroundColor: '#D29596',
    padding: 10,
    borderRadius: 5,
    marginTop: 10
  },
  detailButtonText: {
    color: 'white',
    textAlign: 'center'
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center'
  },
  modalImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 15
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10
  },
  modalDetailText: {
    textAlign: 'center',
    marginBottom: 15
  },
  closeButton: {
    backgroundColor: '#D29596',
    padding: 10,
    borderRadius: 5,
    width: '100%'
  },
  closeButtonText: {
    color: 'white',
    textAlign: 'center'
  }
});
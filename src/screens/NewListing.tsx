import React, {useState} from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  Alert,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import ReusableTextInput from '../component/TextInput';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {addListing} from '../redux/listingSlice';

const NewListing = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: '',
    type: '',
    age: '',
    city: '',
    description: '',
    image: null,
  });

  const handleChange = (key, value) => {
    if (key === 'age') {
      const numericValue = value.replace(/[^0-9]/g, '');
      setFormData({...formData, [key]: numericValue});
    } else if (key === 'description') {
      if (value.length <= 250) {
        setFormData({...formData, [key]: value});
      }
    } else {
      setFormData({...formData, [key]: value});
    }
  };

  const pickImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 1,
      },
      response => {
        if (response.didCancel) {
          console.log('Kullanıcı iptal etti');
        } else if (response.errorCode) {
          console.log('Hata:', response.errorMessage);
        } else {
          const uri = response.assets?.[0]?.uri;
          if (uri) {
            setFormData({...formData, image: uri});
          }
        }
      },
    );
  };

  const handleCreateListing = () => {
    const {name, type, age, city, description, image} = formData;

    if (!name || !type || !age || !city || !description || !image) {
      Alert.alert('Hata', 'Lütfen tüm alanları doldurun!');
      return;
    }

    const newListing = {
      id: Date.now().toString(),
      ad: name,
      tur: type,
      yas: age,
      sehir: city,
      detay: description,
      image: image,
      sahibi: 'Nuran Güler',
    };

    dispatch(addListing(newListing));
    navigation.navigate('Home');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Yeni İlan Oluştur</Text>

      {/* 📷 Fotoğraf Ekleme Alanı */}
      <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
        {formData.image ? (
          <Image source={{uri: formData.image}} style={styles.imagePreview} />
        ) : (
          <Text style={styles.imageText}>📷 Fotoğraf Ekle</Text>
        )}
      </TouchableOpacity>

      <View style={styles.headContainer}>
        <ReusableTextInput
          style={styles.textInput}
          onChangeText={val => handleChange('name', val)}
          placeholder="Hayvan Adı"
        />
        <ReusableTextInput
          style={styles.textInput}
          onChangeText={val => handleChange('type', val)}
          placeholder="Hayvan Türü"
        />
        <ReusableTextInput
          style={styles.textInput}
          onChangeText={val => handleChange('age', val)}
          placeholder="Hayvan Yaşı"
          keyboardType="numeric"
        />
        <ReusableTextInput
          style={styles.textInput}
          onChangeText={val => handleChange('city', val)}
          placeholder="Şehir"
        />
        <ReusableTextInput
          style={[styles.textInput, styles.textAreaInput]}
          onChangeText={val => handleChange('description', val)}
          placeholder="Açıklama (isteğe bağlı)"
          multiline
          value={formData.description}
        />
        <Text style={styles.charCount}>
          {formData.description.length}/250 karakter
        </Text>

        <TouchableOpacity
          style={styles.actionButton}
          onPress={handleCreateListing}>
          <Text style={styles.actionButtonText}>İlan Oluştur</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    marginTop: 70,
    backgroundColor: 'rgb(227,221,207)',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#D29596',
  },
  imagePicker: {
    alignSelf: 'center',
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#f1e6dc',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  imagePreview: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  imageText: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
  },
  headContainer: {
    marginTop: 20,
  },
  textInput: {
    height: 50,
    borderColor: '#D29596',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  textAreaInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  charCount: {
    textAlign: 'right',
    color: '#888',
    marginBottom: 15,
  },
  actionButton: {
    backgroundColor: 'white',
    paddingVertical: 12,
    top: -25,
    left: 72,

    borderWidth: 1,
    borderColor: '#D29596',
    width: '50%',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionButtonText: {
    color: '#D29596',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default NewListing;

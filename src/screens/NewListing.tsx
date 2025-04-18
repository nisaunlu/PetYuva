import React, { useState } from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  Alert,
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import ReusableTextInput from '../component/TextInput';
import { useNavigation } from '@react-navigation/native';

const NewListing = () => {
  const navigation = useNavigation();
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    age: '',
    city: '',
    description: '',
    image: null,
  });

  const handleChange = (key, value) => {
    // Sadece yaş için sayısal değer kontrolü
    if (key === 'age') {
      const numericValue = value.replace(/[^0-9]/g, '');
      setFormData({ ...formData, [key]: numericValue });
    }
    // Açıklama için max 250 karakter kontrolü
    else if (key === 'description') {
      if (value.length <= 250) {
        setFormData({ ...formData, [key]: value });
      }
    } else {
      setFormData({ ...formData, [key]: value });
    }
  };

  const pickImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 1,
      },
      (response) => {
        if (response.didCancel) {
          console.log('Kullanıcı iptal etti');
        } else if (response.errorCode) {
          console.log('Hata:', response.errorMessage);
        } else {
          const uri = response.assets?.[0]?.uri;
          if (uri) {
            setFormData({ ...formData, image: uri });
          }
        }
      }
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Yeni İlan Oluştur</Text>

      {/* 📷 Fotoğraf Ekleme Alanı */}
      <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
        {formData.image ? (
          <Image source={{ uri: formData.image }} style={styles.imagePreview} />
        ) : (
          <Text style={styles.imageText}>📷 Fotoğraf Ekle</Text>
        )}
      </TouchableOpacity>

      <View style={styles.headContainer}>
        <ReusableTextInput
          style={styles.textInput}
          onChangeText={(val) => handleChange('name', val)}
          placeholder="Hayvan Adı"
        />
        <ReusableTextInput
          style={styles.textInput}
          onChangeText={(val) => handleChange('type', val)}
          placeholder="Hayvan Türü"
        />
        <ReusableTextInput
          style={styles.textInput}
          onChangeText={(val) => handleChange('age', val)}
          placeholder="Hayvan Yaşı"
          keyboardType="numeric" // iOS klavyeyi sayıya geçirir
        />
        <ReusableTextInput
          style={styles.textInput}
          onChangeText={(val) => handleChange('city', val)}
          placeholder="Şehir"
        />
        <ReusableTextInput
          style={[styles.textInput, styles.textAreaInput]}
          onChangeText={(val) => handleChange('description', val)}
          placeholder="Açıklama (isteğe bağlı)"
          multiline
          value={formData.description}
        />
        <Text style={styles.charCount}>
          {formData.description.length}/250 karakter
        </Text>

        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => {
            navigation.goBack(); // geri dön
          }}
        >
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
    borderWidth: 2,
    borderColor: '#D29596',
  },
  imageText: {
    color: '#D29596',
    fontWeight: '600',
    textAlign: 'center',
  },
  imagePreview: {
    width: '100%',
    height: '100%',
    borderRadius: 75,
  },
  headContainer: {
    marginBottom: 20,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    borderRadius: 5,
    marginTop: 5,
  },
  textAreaInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  charCount: {
    alignSelf: 'flex-end',
    fontSize: 12,
    color: 'gray',
    marginTop: 4,
    marginBottom: 20,
  },
  actionButton: {
    backgroundColor: 'white',
    borderColor: '#D29596',
    borderWidth: 2,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginHorizontal: 10,
    marginTop: 10,
    alignSelf: 'center',
  },
  actionButtonText: {
    color: '#D29596',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default NewListing;

import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import ReusableTextInput from "../component/TextInput";
const ProfileEdit = () => {
  const [text, setText] = useState('');

  const handleTextChange = (newText) => {
    setText(newText);
  };

  return (
    <ScrollView style={styles.container}>

      <Text style={styles.header}>Profili Düzenle</Text>
      
      <View style={styles.headContainer}>
        <ReusableTextInput
          style={styles.textInput} 
          onChangeText={handleTextChange} 
          placeholder="Adınız" 
        />
        <ReusableTextInput
          style={styles.textInput} 
          value={text} 
          onChangeText={handleTextChange} 
          placeholder="Soyadınız" 
        />
        <ReusableTextInput
          style={[styles.textInput, styles.textAreaInput]} 
          value={text} 
          onChangeText={handleTextChange} 
          placeholder="Hakkımda" 
        />
        
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Güncelle</Text>
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
  actionButton: {
    backgroundColor: 'white',
    borderColor:'#D29596',
    borderWidth: 2,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginHorizontal: 10,
    marginTop: 30,
    alignSelf: 'center', 
  },
  actionButtonText: {
    color: '#D29596',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  textAreaInput: {
    height: 100, 
  }
  
});

export default ProfileEdit;

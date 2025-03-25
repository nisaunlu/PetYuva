import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import ReusableTextInput from "../component/TextInput";


const NewListing = () => {
const [text, setText] = useState('');
const handleTextChange = (newText) => {
    setText(newText);
  };
  
    return(
    <ScrollView style={styles.container}>
        <Text style={styles.header}>Yeni İlan Oluştur</Text>
<View style={styles.headContainer}>
        <ReusableTextInput
          style={styles.textInput} 
          onChangeText={handleTextChange} 
          placeholder="Kedi Adı" 
        />
        <ReusableTextInput
          style={styles.textInput} 
          value={text} 
          onChangeText={handleTextChange} 
          placeholder="Kedi Türü" 
        />
        <ReusableTextInput
          style={styles.textInput} 
          value={text} 
          onChangeText={handleTextChange} 
          placeholder="Kedi Yaşı" 
        />
        <ReusableTextInput
          style={styles.textInput} 
          value={text} 
          onChangeText={handleTextChange} 
          placeholder="Kedinin Bulunduğu Şehir" 
        />
             <ReusableTextInput
          style={[styles.textInput, styles.textAreaInput]} 
          value={text} 
          onChangeText={handleTextChange} 
          placeholder="Açıklama(isteğe bağlıdır)" 
        />
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>İlan Oluştur</Text>
        </TouchableOpacity>
</View>
    </ScrollView>

    )
}


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
      textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingLeft: 10,
        borderRadius: 5,
        marginTop: 5,
      },
      textAreaInput:{
        height: 100, 
      },

      headContainer: {
        marginBottom: 20,
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
    alignSelf: 'center', // Butonu ortalar
  },
  actionButtonText: {
    color: '#D29596',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});
export default NewListing;
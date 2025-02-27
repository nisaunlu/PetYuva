import React, { useState } from "react";
import { View, StyleSheet, Image, Text, Dimensions } from 'react-native';
import { kediarkaplan, logo } from "../../assent/images";
import ReusableTextInput from "../component/TextInput";
import ReusableButton from "../component/Button";

// Ekran boyutlarını al
const { width, height } = Dimensions.get("window");

const RegisterScreen = () => {
  const [name, setName] = useState(""); 
  const [surname,setSurname] = useState("");
  const [number,setNumber] = useState("");
  const [adres,setAdres]=useState("");
  const[password,setPassword]=useState("")
  // useState fonksiyon içinde olmalı!

  return (
    <View style={styles.container}>
      <Image style={styles.backgroundImage} source={kediarkaplan} />

      <View style={styles.RightcContainer}>
        <Image style={styles.RightImages} source={logo} />
        <Text style={styles.Text}>Pet Yuva</Text>
      </View>

      <ReusableTextInput
        placeholder='Adınız:'
        value={name}
        onChangeText={(value) => setName(value)}
        style={styles.TextInput}
      />
       <ReusableTextInput
        placeholder='Soyadınız:'
        value={surname}
        onChangeText={(value) => setSurname(value)}
        style={styles.TextInput}
      />
        <ReusableTextInput
        placeholder='Telefon Numaranız:'
        value={number}
        onChangeText={(value) => setNumber(value)}
        style={styles.TextInput}
      />
       <ReusableTextInput
        placeholder='E-posta Adresiniz:'
        value={adres}
        onChangeText={(value) => setAdres(value)}
        style={styles.TextInput}
      />
        <ReusableTextInput
        placeholder='şifreniz:'
        value={password}
        onChangeText={(value) => setPassword(value)}
        style={styles.TextInput}
      />
         <ReusableButton 
        title="Kaydol"
        onPress={() => Alert.alert("Kayıt Başarılı!")}
        backgroundColor='white' 
        textColor="#D29596"
      />
         <ReusableButton 
        title="Giriş Yap"
        onPress={() => Alert.alert("Giriş Yapıldı!")}
        backgroundColor='white' 
        textColor="#D29596"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  backgroundImage: {
    position: 'absolute',
    width: width, 
    height: height, 
    top: 0,
    bottom:0,
    left: 0,
    zIndex: -1,
  },
  Text: {
    fontSize: width * 0.08, 
    color: 'black',
    fontWeight: 'bold',
    alignSelf: 'center', 
    marginTop: height * 0.02
  },
  RightcContainer: {
    position: 'absolute',
    left: width * 0.05, 
    top: height * 0.1, 
    alignItems: 'center',
  },
  RightImages: {
    width: width * 0.3,
    height: width * 0.3, 
    resizeMode: 'contain',
  },
  TextInput: {
    top: 290,
    width: "95%",
    bottom:30,
    color:'#D295C8',
    alignSelf: "center",
   
  },
});

export default RegisterScreen;

import React, { useState } from "react";
import { View, StyleSheet, Image, Text, Dimensions } from 'react-native';
import { kediarkaplan, logo } from "../../assent/images";
import ReusableTextInput from "../component/TextInput";
import ReusableButton from "../component/Button";

const { width, height } = Dimensions.get("window");


const scaleSize = (size) => {
  const scale = width / 375; 
  return size * scale;
};

const RegisterScreen = ({navigation}) => {
  const [name, setName] = useState(""); 
  const [surname, setSurname] = useState("");
  const [number, setNumber] = useState("");
  const [adres, setAdres] = useState("");
  const [password, setPassword] = useState("");
 
  return (
    <View style={styles.container}>
      <Image style={styles.backgroundImage} source={kediarkaplan} />
                 
      <View style={styles.headerContainer}>
        <Image style={styles.logo} source={logo} />
        <Text style={styles.title}>Pet</Text>
        <Text style={styles.subtitle}>Yuva</Text>
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
        placeholder='Şifreniz:'
        value={password}
        onChangeText={(value) => setPassword(value)}
        style={styles.TextInput}
        secureTextEntry={true}
      />
      <ReusableButton 
        style={styles.Button}
        title="Kaydol"
        onPress={() => navigation.navigate("HomeScreen")}
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
  headerContainer: {
    position: "absolute",
    top: scaleSize(50),
    width: '100%',
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingHorizontal: scaleSize(20),
  },
  logo: {
    width: scaleSize(120),
    height: scaleSize(120),
    resizeMode: "contain",
  },
  title: {
    fontSize: scaleSize(30),
    color: "black",
    fontWeight: "bold",
    top: scaleSize(35),
    right:scaleSize(42),
    marginLeft: scaleSize(10),
  },
  subtitle: {
    fontSize: scaleSize(30),
    color: "black",
    top: scaleSize(70),
    fontWeight: "bold",
    marginLeft: -scaleSize(55),
  },
  backgroundImage: {
    position: 'absolute',
    width: width, 
    height: height, 
    top: 0,
    bottom: 0,
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
    marginTop: scaleSize(5),
    width: "95%",
    top: scaleSize(255),
    color: '#D295C8',
    alignSelf: "center",
  },
  Button: {
    marginTop: scaleSize(20),
    width: "60%",
    alignSelf: "center",
  }
});

export default RegisterScreen;
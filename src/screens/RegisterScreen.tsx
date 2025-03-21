import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, Text, Dimensions, Alert, Pressable, TouchableOpacity } from 'react-native';
import { kediarkaplan, logo } from "../../assent/images";
import ReusableTextInput from "../component/TextInput";
import ReusableButton from "../component/Button";
import { useDispatch, useSelector } from "react-redux";
import { register, clearError } from "../redux/UserSlice";

const { width, height } = Dimensions.get("window");

const scaleSize = (size) => {
  const scale = width / 375;
  return size * scale;
};

const RegisterScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { error, isAuth } = useSelector((state) => state.user);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  useEffect(() => {
    if (isAuth) {
      // kimlik doğrulandıysa otomatik olarak isAuth değeri değişicek ve yönlendirmeyi RootNaviagtiyon kendiliğinde yapıcak Gızlar

    }
  }, [isAuth, navigation]);


  useEffect(() => {
    if (error) {
      Alert.alert("Kayıt Hatası", error);
      dispatch(clearError());
    }
  }, [error, dispatch]);


  const validateInputs = () => {
    if (!name.trim()) {
      Alert.alert("Hata", "Lütfen adınızı girin.");
      return false;
    }
    if (!surname.trim()) {
      Alert.alert("Hata", "Lütfen soyadınızı girin.");
      return false;
    }
    if (!number.trim()) {
      Alert.alert("Hata", "Lütfen telefon numaranızı girin.");
      return false;
    }


    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(email)) {
      Alert.alert("Hata", "Lütfen geçerli bir e-posta adresi girin.");
      return false;
    }


    if (password.length < 6) {
      Alert.alert("Hata", "Şifre en az 6 karakter olmalıdır.");
      return false;
    }

    return true;
  };

  // Kayıt işlemi
  const handleRegister = () => {
    if (validateInputs()) {
      // Redux register action'ını çağırdığım yer burası yani userSlice içindeki actionlar burda Gızlar
      dispatch(register({ name, surname, email, password }));


    }
  };

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
        onChangeText={setName}
        style={styles.TextInput}
      />
      <ReusableTextInput
        placeholder='Soyadınız:'
        value={surname}
        onChangeText={setSurname}
        style={styles.TextInput}
      />
      <ReusableTextInput
        placeholder='Telefon Numaranız:'
        value={number}
        onChangeText={setNumber}
        style={styles.TextInput}
      />
      <ReusableTextInput
        placeholder='Email Adresiniz:'
        value={email}
        onChangeText={setEmail}
        style={styles.TextInput}
      />
      <ReusableTextInput
        placeholder='Şifreniz:'
        value={password}
        onChangeText={setPassword}
        style={styles.TextInput}
        secureTextEntry={true}
      />
      <ReusableButton
        style={styles.Button}
        title="Kaydol"
        onPress={handleRegister}
        backgroundColor='white'
        textColor="#D29596"

      />
      <TouchableOpacity
        style={styles.registerContainer}
        onPress={() => navigation.navigate("Login")}

      >
        <Text style={styles.registerText}>Hesabın varsa? Giriş Yap</Text>
      </TouchableOpacity>

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
    right: scaleSize(42),
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
    top: scaleSize(255),
  },
  registerContainer: {
    position: "absolute",
    bottom: scaleSize(60),
    marginLeft: scaleSize(95),
  },
  registerText: {
    textAlign: "center",
    color: "black",
    fontSize: scaleSize(16),
    top: scaleSize(12),
  },
});

export default RegisterScreen;
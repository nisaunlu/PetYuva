import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  Dimensions,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {kediarkaplan, logo} from '../../assent/images';
import ReusableTextInput from '../component/TextInput';
import ReusableButton from '../component/Button';
import {useDispatch, useSelector} from 'react-redux';
import {login, clearError} from '../redux/UserSlice';

const {width, height} = Dimensions.get('window');

const scaleSize = size => (width / 375) * size;

const LoginScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {error, isAuth} = useSelector(state => state.user);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Eğer kimlik doğrulama başarılıysa, kullanıcıyı yönlendir
  useEffect(() => {
    if (isAuth) {
      navigation.navigate('UserStack');
    }
  }, [isAuth, navigation]);

  // Hata durumunun kontölü burda sağlanıyor
  useEffect(() => {
    if (error) {
      Alert.alert('Giriş Hatası', error);
      dispatch(clearError());
    }
  }, [error, dispatch]);

  const validateEmail = email => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(email);
  };

  const handleLogin = () => {
    if (!validateEmail(email)) {
      Alert.alert('Geçersiz Email', 'Lütfen geçerli bir email adresi girin.');
      return;
    }
    if (password.length < 6) {
      Alert.alert('Geçersiz Şifre', 'Şifre en az 6 karakter olmalıdır.');
      return;
    }

    // Redux action'ını çağır Gızlar
    dispatch(login({email, password}));
  };

  return (
    <View style={styles.container}>
      <Image style={styles.backgroundImage} source={kediarkaplan} />

      <View style={styles.headerContainer}>
        <Image style={styles.logo} source={logo} />
        <Text style={styles.title}>Pet</Text>
        <Text style={styles.subtitle}>Yuva</Text>
      </View>

      <View style={styles.inputContainer}>
        <ReusableTextInput
          placeholder="Email:"
          value={email}
          onChangeText={setEmail}
          style={styles.textInput}
        />
        <ReusableTextInput
          placeholder="Şifre:"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.textInput}
        />
        <ReusableButton
          title="Giriş Yap"
          onPress={handleLogin}
          backgroundColor="white"
          textColor="#D29596"
          style={styles.button}
        />
      </View>

      <TouchableOpacity
        style={styles.registerContainer}
        onPress={() => navigation.navigate('Register')}>
        <Text style={styles.registerText}>Hesabın yoksa? Hesap oluştur</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    width: width,
    height: height,
  },
  headerContainer: {
    position: 'absolute',
    top: scaleSize(50),
    alignItems: 'center',
  },
  logo: {
    width: scaleSize(120),
    height: scaleSize(120),
    marginLeft: scaleSize(-210),
    resizeMode: 'contain',
  },
  title: {
    fontSize: scaleSize(30),
    marginLeft: scaleSize(-90),
    top: -scaleSize(50),
    color: 'black',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: scaleSize(30),
    color: 'black',
    fontWeight: 'bold',
    marginTop: -scaleSize(55),
  },
  inputContainer: {
    width: '90%',
    position: 'absolute',
    top: scaleSize(250),
  },
  textInput: {
    marginBottom: scaleSize(5),
    padding: scaleSize(5),
    fontSize: scaleSize(19),
    borderWidth: 2,
    top: scaleSize(90),
    borderColor: '#D295C8',
    borderRadius: scaleSize(8),
    backgroundColor: 'white',
    color: 'black',
  },
  button: {
    top: scaleSize(115),
    paddingVertical: scaleSize(12),
    borderRadius: scaleSize(15),
    alignItems: 'center',
  },
  registerContainer: {
    position: 'absolute',
    bottom: scaleSize(50),
  },
  registerText: {
    textAlign: 'center',
    color: 'black',
    fontSize: scaleSize(16),
    top: -scaleSize(52),
  },
});

export default LoginScreen;

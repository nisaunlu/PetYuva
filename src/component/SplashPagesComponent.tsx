import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Image } from 'react-native';
import { logo3 } from '../../assent/images'; 

const SplashPagesComponent = () => {
  const fadeAnim1 = useRef(new Animated.Value(0)).current; 
  const fadeAnim2 = useRef(new Animated.Value(0)).current; 
  const fadeAnim3 = useRef(new Animated.Value(0)).current; 

  useEffect(() => {
    Animated.sequence([
   
      Animated.timing(fadeAnim3, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }),
    
      Animated.parallel([
        Animated.timing(fadeAnim3, {
          toValue: 0.2, 
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim2, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: true,
        }),
      ]),
     
      Animated.parallel([
        Animated.timing(fadeAnim2, {
          toValue: 0.2, 
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim1, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  }, [fadeAnim1, fadeAnim2, fadeAnim3]);

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
      
        <Image source={logo3} style={styles.logo} />
      </View>
      <View style={styles.textContainer}>
        <Animated.Text style={[styles.text, { opacity: fadeAnim3 }]}>
          Hayalinizdeki Hayvan Şimdi Sadece Bir Tık Uzağınızda!
        </Animated.Text>
        <Animated.Text style={[styles.text, { opacity: fadeAnim2 }]}>
          Hayvan sahiplenin Sahiplendirin !
        </Animated.Text>
        <Animated.Text style={[styles.text, { opacity: fadeAnim1 }]}>
        Sevgiye Yuva, Canlara Umut!
        </Animated.Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'rgb(227,221,207)',
    paddingTop: 50, 
  },
  iconContainer: {
    marginTop: 20, 
    marginBottom: 20,
  },
  logo: {
    width: 450,  
    height: 450,
    marginLeft:30,
    resizeMode:'contain',
  },
  textContainer: {
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    color: '#000000',
    textAlign: 'center',
    marginVertical: 5,
  },
});

export default SplashPagesComponent;

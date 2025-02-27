import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const ReusableTextInput = ({ 
  placeholder, 
  value, 
  onChangeText, 
  secureTextEntry = false, 
  style, 
  ...props 
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, style]} 
        placeholder={placeholder}
        placeholderTextColor="#888"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%", 
    alignSelf: "center",
    marginVertical: 10,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#D295C8",
    borderRadius: 30,
    paddingHorizontal: 15,
    fontSize: 16,
   
    backgroundColor: "#fff",
  },
});

export default ReusableTextInput;


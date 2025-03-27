import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const TextInput2 = ({
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
        placeholderTextColor="#D29596"
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
    width: '100%',
    alignSelf: 'center',
    marginVertical: 10,
  },
  input: {
    height: 40,
    borderWidth: 2,
    borderColor: '#D29596',
    borderRadius: 30,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#fff',
  },
});

export default TextInput2;

import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const ReusableButton = ({
  title,
  onPress,
  backgroundColor = 'white',
  textColor = '#D29596',
  style,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor}, style]}
      onPress={onPress}
      activeOpacity={0.8}>
      <Text style={[styles.text, {color: textColor}]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 40,
    borderColor: '#D29596',
    borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    width: '60%',
    alignSelf: 'center',
    top: 290,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#D29596',
  },
});

export default ReusableButton;

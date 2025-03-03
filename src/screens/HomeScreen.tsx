import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class ProfileScreen extends Component {
  render() {
    return (
      <View>
        <Text style = {styles.container}> HOmeScreen </Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
});

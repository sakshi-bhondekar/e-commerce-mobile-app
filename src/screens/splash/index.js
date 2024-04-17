import { View, Text, ImageBackground } from 'react-native'
import React from 'react'

export default function SplashScreen({navigation}) {
  setTimeout(() => {
    navigation.replace('SignIn');
  }, 2000);
  return (
    <ImageBackground
    source={require('../../assets/splashbg.png')}
    resizeMode={'cover'}
    style={{flex: 1, padding: 15}}>
    <Text
      style={{
      textAlign: 'center',
      fontSize: 30,
      color: 'black',
      fontWeight: 'bold',
    }}>
    Ecommerce App
    </Text>  
    </ImageBackground>
  )
}
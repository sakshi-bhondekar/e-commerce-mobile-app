import { View, Text, TouchableOpacityComponent, TouchableOpacity } from 'react-native'
import React from 'react'

export default function RoundButtonComp({
  label, 
  border=false, 
  onPress, 
  width = '100%',
  marginTop= 0
}) {
  return (
   <TouchableOpacity 
   style={{marginTop: marginTop}} onPress={()=>onPress()}>
     <View 
    style={{
        backgroundColor: border ? 'white' : '#2596be',
        width: width,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 20,
        marginLeft: 10,
        borderColor: 'black',
        borderWidth: border ? 1 : 0
        }}>
       <Text 
        style={{
        color: border ? 'black' : 'white',
        fontWeight: 'bold',
        textAlign: 'center'
        }}>{label}
        </Text>
    </View>
   </TouchableOpacity>
  )
}
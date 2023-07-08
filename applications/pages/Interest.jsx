import { View, Text,Image } from 'react-native'
import React from 'react'

export default function Interest() {
  return (
    <View style={{display:"flex", flexDirection:"row", height:120,backgroundColor:'green',marginBottom:30,borderRadius:8,justifyContent:"space-between"}}>
      <Text>Interest</Text>
      <Image
				style={{width:17,height:17,marginBottom:90,marginRight:8}}
				source={require('../components/assets/editlogo.png')}
		/>
    
    </View>
  )
}
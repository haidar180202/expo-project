import { View, Text,Image } from 'react-native'
import React from 'react'

export default function Interest() {
  return (
    <View style={{        
        height: 120,
        backgroundColor: "green",
        marginBottom: 30,
        borderRadius: 8
        }}>
      <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
        <Text>Interest</Text>
        <Image
          style={{ width: 17, height: 17, marginBottom: 40, marginRight: 8 }}
          source={require("../components/assets/editlogo.png")}
        />
      </View>

      <View>
      <Text style={{marginBottom:50,textAlign:'center'}}>Add in your your to help others know you better</Text>
      </View>
    </View>
  )
}
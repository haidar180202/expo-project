import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const Foto = () => {
  return (
    // <View style={{width:359,height:190,backgroundColor:"red",borderRadius:10,marginBottom:20}}>
    //   <Text>Foto</Text>
    // </View>
    <View style={{display:"flex", flexDirection:"row", height:190,width:359,backgroundColor:'red',marginBottom:30,borderRadius:8,justifyContent:"space-between"}}>
      <Text>Foto</Text>
      <Image
				style={{width:17,height:17,marginBottom:90,marginRight:8}}
				source={require('./assets/editlogo.png')}
		/>
    
    </View>
  )
}

export default Foto

const styles = StyleSheet.create({})
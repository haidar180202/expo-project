import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const About = () => {
  return (
    <View style={{display:"flex", flexDirection:"row", height:120,backgroundColor:'yellow',marginBottom:30,borderRadius:8,justifyContent:"space-between"}}>
      <Text>About</Text>
      <Image
				style={{width:17,height:17,marginBottom:90,marginRight:8}}
				source={require('../components/assets/editlogo.png')}
		/>
    
    </View>
  )
}

export default About

const styles = StyleSheet.create({})
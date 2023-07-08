import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
// import back from "./assets/back.svg"
const Back = () => {
  return (
    <View style={{marginBottom:50,display:'flex',flexDirection:"row"}}>
      {/* <FontAwesomeIcon icon={FaSymbol} /> */}
      <Image
				style={{width:10,height:'auto'}}
				source={require('./assets/back.png')}
			/>
      <Text style={{fontSize:18,marginLeft:12}}>Back</Text>
    </View>
  )
}

export default Back

const styles = StyleSheet.create({})
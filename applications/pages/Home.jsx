import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Foto from '../components/Foto'
import Back from '../components/Back'

const Home = () => {
  return (
    <View>
        <View style={{display:'flex',flexDirection:'row',justifyContent:"space-between"}}>
            <Back/>
            <Text style={{fontSize:16}}>@Muha</Text>

            <Text>...</Text>

        </View>
      <Foto/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})
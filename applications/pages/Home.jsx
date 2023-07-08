import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Foto from '../components/Foto'
import Back from '../components/Back'
import About from './About'
import Interest from './Interest'

const Home = () => {
  return (
    <View style={{marginBottom:85}}>
        <View style={{display:'flex',flexDirection:'row',justifyContent:"space-between"}}>
            <Back/>
            <Text style={{fontSize:16}}>@Muha</Text>
            <Text>...</Text>
        </View>
        <Foto/>
        <About/>
        <Interest/>
      
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})
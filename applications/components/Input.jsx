import { View, Text,TextInput } from 'react-native'
import React from 'react'


const Input = (props) => {
  return (
    <TextInput style={{ height: 51, borderColor: 'gray', borderWidth: 1,width:327, marginTop:25,borderRadius:8,paddingLeft:10}} placeholder={props.placeholder}/>
  )
}

export default Input
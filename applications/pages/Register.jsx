import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Input from "../components/Input";
import Tombol from "../components/Tombol";
import Back from "../components/Back";

const Register = () => {
  return (
    <View style={{marginBottom:165}}>
      <View style={{ alignContent: "flex-start"}}>
        <Back />
        <Text style={{ fontSize: 24,marginLeft:10 }}>Register</Text>
      </View>

      <View style={styles.container}>
        <Input placeholder="Enter Email" />
        <Input placeholder="Create Username" />
        <Input placeholder="Create Password" />
        <Input placeholder="Confirm Password" />
        <Tombol title="Register" />
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    alignItems: "center",
    justifyContent: "center",
  },
});

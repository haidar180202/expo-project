import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Input from "../components/Input";
import Tombol from "../components/Tombol";
import Back from "../components/Back";

const Login = () => {
  return (
    <View style={{marginBottom:320}}>
      <View style={{ alignContent: "flex-start",}}>
        <Back />
        <Text style={{ fontSize: 24,marginLeft:10, }}>Login</Text>
      </View>

      <View style={styles.container}>
        <Input placeholder="Username/Email" />
        <Input placeholder="Password" />
        <Tombol title="Login" />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    alignItems: "center",
    justifyContent: "center"
  },
});

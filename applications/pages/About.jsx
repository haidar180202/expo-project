import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const About = () => {
  return (
    <View style={{        
        height: "auto",
        backgroundColor: "yellow",
        marginBottom: 30,
        borderRadius: 8
        }}>
      <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
        <Text>About</Text>
        <Image
          style={{ width: 17, height: 17, marginBottom: 40, marginRight: 8 }}
          source={require("../components/assets/editlogo.png")}
        />
      </View>

      <View>
      <Text style={{marginBottom:50,textAlign:"center"}}>Add in your your to help others know you better</Text>
      </View>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({});

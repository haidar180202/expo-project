import { View, Text,Button } from "react-native";
import React from "react";
// import { Button } from "react-native/types";

const Tombol = (props) => {
  return (
    <View style={{marginTop:40,width:331,height:48,borderRadius:25}} >
      <Button
      title={props.title}
      color="#62CDCB"
      accessibilityLabel="Learn more about this purple button"
    />
    </View>
  );
};

export default Tombol;

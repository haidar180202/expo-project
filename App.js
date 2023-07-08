import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './applications/pages/Home';
import Login from './applications/pages/Login';
import Register from './applications/pages/Register';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Login/> */}
      {/* <Register/> */}
      <Home/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop: 30,
    backgroundColor: "#0D1C21",
    height:"auto",
    alignItems: "center",
    justifyContent: "center",
  },
});

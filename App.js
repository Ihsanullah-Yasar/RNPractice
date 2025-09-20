import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>The react native great text component!</Text>
      <Button title="Click Me" onPress={()=> alert("Button Clicked")}/>
    </View>
  );
}

const styles = StyleSheet.create({
    
});

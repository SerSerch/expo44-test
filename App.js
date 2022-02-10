import { StyleSheet, Text, View } from 'react-native';
import { GLView } from 'expo-gl';

/**
 * only import
 */
// import {PIXI} from 'expo-pixi';
import { THREE } from 'expo-three';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <GLView style={styles.gl} onContextCreate={()=>{}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gl: {
    width: 300,
    height: 300,
    backgroundColor: '#f00'
  },
});

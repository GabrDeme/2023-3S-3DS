import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import { useFonts, Poppins_600SemiBold } from '@expo-google-fonts/poppins';

export default function App() {

  // let [fontsLoaded, fontError] = useFonts({
  //   Poppins_600SemiBold
  // });

  // if (!fontsLoaded && !fontError) {
  //   return null;
  // }

  //USE STATE - hook
  const [count, setCount] = useState(0);

  //função de incremento
  const increment = () => {
    setCount(count + 1)
  }

  //função de decrementar
  const decrement = () => {
    setCount(count - 1)
  }

  //USE EFFECT - 
  useEffect(() => {
    console.warn(`Contador atualizado: ${count}`)
  }, [count])

  return (
    <View style={styles.container}>
      {/* <Text style={{ fontFamily: 'Poppins_600SemiBold', fontSize: 25 }} >Contador: {count}</Text> */}
      <Text>Contador: {count}</Text>
      <View style={styles.buttons}>
        <TouchableOpacity onPress={increment}>
          <Text style={styles.textButton}>Incrementar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={decrement}>
          <Text style={styles.textButton}>Decrementar</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87ceeb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    backgroundColor: 'blue', 
    borderRadius: 15,
    marginBottom: 3,

  },
  textButton: {
    color: 'white'
  }
});

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-web';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, World!</Text>

    <TextInput
      style={styles.input}
      defaultValue='Incrível'
    />

    <Image 
      style={styles.image}
      source={require('./monkey.webp')}
    />
    
    <TouchableOpacity style={styles.button}>
      <Text style={styles.textOne}>Botão</Text>
    </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff8bbdd',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
  },
  text: {
    color: 'pink',
    fontSize: 20,
    fontWeight: '1000',
  },
  input: {
    width: '90%',
    height: 40,
    borderWidth: 7,
    borderColor: 'pink',
    backgroundColor: '#89cff0',
    color: 'pink',
    fontSize: 20,
    fontWeight: '1000',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7
  },
  button: {
    borderColor: 'pink',
    width: '40%',
    height: 40,
    borderWidth: 7,
    backgroundColor: '#89cff0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7
  },
  textOne: {
    color: 'pink',
    fontSize: 20,
    fontWeight: '1000',
  },
});

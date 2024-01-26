import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (



    <View style={styles.container}>
      <Image style={styles.img}
        source={require('./perfection.jpg')}      
      />
      <Text style={styles.text}>Login</Text>

      <Text style={styles.textOne}>Email</Text>
      <TextInput
        style={styles.input}
        defaultValue='Digite o seu email...'
      />
      <Text style={styles.textOne}>Senha</Text>
      <TextInput
        style={styles.input}
        defaultValue='Digite a sua senha...'
      />

      <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>Login</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#89cff0',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15
  },
  img: {
    width: 100,
    height: 100,
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
  },
  input: {
    width: '90%',
    height: 40,
    borderWidth: 3,
    borderColor: 'white',
    color: 'white',
    fontSize: 20,
    fontWeight: '1000',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7
  },
  button: {
    width: '40%',
    height: 60,
    borderWidth: 3,
    borderColor: 'white',
    color: 'white',
    backgroundColor: 'orange',
    fontSize: 20,
    fontWeight: '1000',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7
  },
  textOne: {
    color: 'orange',
    fontSize: 19,
    fontWeight: '500',
    // marginLeft: 50,
  }
});

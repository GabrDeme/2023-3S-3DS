import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Inter-SemiBoldItalic': 'https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12',
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>

      
      <Text style={{ fontFamily: 'Inter-SemiBoldItalic', fontSize: 30 }}>Inter SemiBoldItalic</Text>
      <Text style={{ fontSize: 30 }}>Platform Default</Text>


      <Image style={styles.img}
        source={require('./perfection.jpg')}
      />
      <Text style={styles.text}>Login</Text>

      <View style={styles.inputGroup}>
        <Text style={styles.textOne}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder='Digite o seu email...'
          placeholderTextColor="white"
        />
        <Text style={styles.textOne}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder='Digite a sua senha...'
          placeholderTextColor="white"
        />
      </View>

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

  },
  img: {
    width: 150,
    height: 150,
  },
  text: {
    color: 'white',
    fontSize: 25,
    fontWeight: '900',
  },
  input: {
    width: '90%',
    height: 40,
    borderWidth: 3,
    borderColor: 'white',
    color: 'white',
    fontSize: 20,
    fontWeight: '900',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30
  },
  button: {
    width: '40%',
    height: 60,
    borderWidth: 3,
    borderColor: 'white',
    color: 'white',
    backgroundColor: 'orange',
    fontSize: 20,
    fontWeight: '900',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30
  },
  textOne: {
    paddingRight: 250,
    color: 'orange',
    fontSize: 19,
    fontWeight: '500',
    // marginLeft: 50,
  },
  inputGroup: {
    width: '90%',
    gap: 7,
    paddingTop: 40,
    paddingBottom: 40,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
//importando as bibliotecas
import * as LocalAuthentication from 'expo-local-authentication'
import AsyncStorage from '@react-native-async-storage/async-storage'
import moment from "moment"
import { useEffect, useState } from 'react';

export default function App() {
  //verificando se há o recurso de biometria no aparelho
  const [ history, setHistory ] = useState({})
  const [ authenticated, setAutenticated ] = useState(false)
  const [ biometricExist, setBiometricExist ] = useState(false)

  async function CheckExistAuthenticates() {
    //validando
    const compatible = await LocalAuthentication.hasHardwareAsync()

    setBiometricExist(compatible)

    //consultar as validações existentes
    const types = await LocalAuthentication.supportedAuthenticationTypesAsync()
    console.log( LocalAuthentication.AuthenticationType[ types[0] ])
  }

  async function handleAuthentication() {
    const biometric = await LocalAuthentication.isEnrolledAsync();


    //validar se existe uma biometria cadastrada
    if (!biometric) {
      return Alert.alert(
        "Falha ao logar",
        "Não foi encontrado nenhuma biometria cadastrada"
      )
    }

    //caso exista
    const auth = await LocalAuthentication.authenticateAsync({
      promptMessage: 'Login com biometria'
    })

    setAutenticated(auth.success)

    if( auth.sucess ){
      SetHistory()
    }
  }

  async function SetHistory() {
    const objAuth = {
      dateAuthenticate: moment().format("DD/MM/YYYY HH:mm:ss")
    }
    await AsyncStorage.setItem("authenticaticate", JSON.stringify( objAuth ))

    setHistory( objAuth ) 
  }

  async function GetHistory() {
    const objAuth = await AsyncStorage.getItem("authenticate")

    if( objAuth )
    {
      setHistory( JSON.parse( objAuth)) 
    }
  }

  useEffect(() => {
    CheckExistAuthenticates()

    GetHistory()
  }, [])


  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {biometricExist
          ? 'Seu dispositivo é compativel com a biometria'
          : 'Seu dispositivo não suporta a biometria '}
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => handleAuthentication()}>
        <Text style={styles.text}>Autenticar acesso</Text>
      </TouchableOpacity>
      <Text style={[styles.return, { color: authenticated ? 'green' : 'red' }]}>
        {authenticated ? 'Autenticado' : 'Não autenticado'}
      </Text>

      {
        history.dateAuthenticate

        ? <Text style={styles.textHistory}>Último acesso em { history.dateAuthenticate }</Text>
        : null
      }
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
  button: {
    width: '50%',
    height: 70,
    backgroundColor: 'orange',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    lineHeight: 30,
    width: "70%"
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center'
  },
  return: {
    fontSize: 22,
    textAlign: 'center',
    marginTop: 50
  },
  textHistory: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#858383',
    position: 'absolute',
    bottom: 120,
  }

});
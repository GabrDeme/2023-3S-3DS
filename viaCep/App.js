import { StatusBar } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { ContainerApp } from './styles';
import { Header } from './src/components/Header';

export default function App() {
const [] = useFonts({ Roboto_500Medium})

const [fontLoaded, fontError] = useFonts({
  Roboto_500Medium,
  Roboto_700Bold
})

if(!fontLoaded && !fontError)
{
  return null;
}

  return (
    <ContainerApp>
      <StatusBar/>
      <Header/>

      <Home></Home>
      
    </ContainerApp>
  );
}


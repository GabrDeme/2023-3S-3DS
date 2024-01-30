import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Container } from './src/components/Container/Container';
import { Title, ButtonText } from './src/components/Title/Title';
import { Button, DecrementButton } from './src/components/Button/Button';
import { Image } from 'react-native';

// import { Text, TouchableOpacity, View } from 'react-native';

export default function App() {
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
    <Container>
      <Title>Contador: {count}</Title>
      {/* <Image style={{
        resizeMode: 'contain',
        height: 200,
        width: 200,
        paddingBottom: 250,
      }}
        source={require('./calculadora.png')}
      /> */}
      <Button onPress={increment}>
        <ButtonText>Incrementar</ButtonText>
      </Button>
      <DecrementButton onPress={decrement}>
        <ButtonText>Decrementar</ButtonText>
      </DecrementButton>
      <StatusBar style="auto" />
    </Container>
  );
}

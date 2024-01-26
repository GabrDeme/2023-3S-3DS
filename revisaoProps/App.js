import { SafeAreaView, StatusBar } from 'react-native';
import Person from './src/components/Person/Person';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar/>
      <Person name='a' age='1'/>
      <Person name='b' age='2'/>
      <Person name='c' age='3'/>
    </SafeAreaView>
  );
}
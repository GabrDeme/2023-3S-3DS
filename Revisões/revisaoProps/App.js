import { FlatList, SafeAreaView, StatusBar } from 'react-native';
import Person from './src/components/Person/Person';

export default function App() {

  const peopleList = [
    {id:  '1', name: 'a', age: '1'},
    {id:  '2', name: 'b', age: '2'},
    {id:  '3', name: 'c', age: '3'}
  ]

  return (
    <SafeAreaView>
      <StatusBar/>
      <FlatList
      data={peopleList}
      ketyExtractor={(item) => item.id}
      
      // leitura da lista
      renderItem={({item}) => {
        // exibindo cada item da lista
        <Person name={item.name} age={item.age}/>
      }}
      />
    </SafeAreaView>
  );
}
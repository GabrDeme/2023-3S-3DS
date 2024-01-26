import { StyleSheet, Text, View } from "react-native"

//componente Person
// props : name, age
const Person = ({name, age}) => {
    return (
        <View style={styles.container}>
            <Text>Nome: {name}</Text>
            <Text>Idade: {age}</Text>
        </View>
    );
}
    
const styles = StyleSheet.create({
    container: {
      backgroundColor: 'blue',
      padding: 10,
      margin: 10,
      borderRadius: 5
    }
  })

export default Person;

import { StyleSheet, Text, View } from "react-native"
import { useFonts, SingleDay_400Regular } from '@expo-google-fonts/single-day';
import { Poppins_600SemiBold } from '@expo-google-fonts/poppins';

//componente Person
// props : name, age
const Person = ({ name, age }) => {
  let [fontsLoaded, fontError] = useFonts({
    SingleDay_400Regular,
    Poppins_600SemiBold
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: 'Poppins_600SemiBold', fontSize: 25 }} >Informações Pessoais de {name}</Text>
      <View style={styles.minContainer}>
        <Text style={{ fontFamily: 'SingleDay_400Regular', fontSize: 20 }} >Nome: {name}</Text>
        <Text style={{ fontFamily: 'SingleDay_400Regular', fontSize: 20 }} >Idade: {age}</Text>
      </View>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#87ceeb',
    padding: 10,
    margin: 10,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {

  }
})

export default Person;

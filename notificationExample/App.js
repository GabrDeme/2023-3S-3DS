import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';

//importar os recursos da biblioteca
import * as Notifications from "expo-notifications";

//solicitar permissões
Notifications.requestPermissionsAsync();

//definir como as notificações devem ser relatadas quando recebidas
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    //alerta de quando a notificação for recebida
    shouldShowAlert: true,
    //som de quando a notificação for recebida
    shouldPlaySound: true,
    //números de quantas notificações foram recebidas
    shouldSetBadge: false,
  }),
});

export default function App() {
  //função para lidar com a chamada de notificações
  const handleNotifications = async () => {
    //obtém status das permissões
    const { status } = await Notifications.getPermissionsAsync();

    //verifica se o usuário concedeu permissão para notificações
    if (status !== "granted") {
      alert("Você não deixou as notificações ativas!");
      return;
    }
    //agendar uma notificação para ser exibida após 5 segundos
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "HelloWorld!",
        body: "Criando uma POC para implementar o expo-notifications"
      },
      trigger: null
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleNotifications}>
        <Text style={styles.button}>🥶</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
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
    width: "50%",
    height: 100,
    backgroundColor: "blue",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff"
  }
});

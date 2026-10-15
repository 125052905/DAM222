
/* Zona de importaciones*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image} from 'react-native';
import {Saludo} from './Components/Saludo';
import {Saludos2} from './Components/Saludos2';
import { Perfil } from './Components/Perfil';



/*Zona Main*/
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola Mundo React Native !</Text>
      <Image source={require("./assets/image.png")} ></Image>
      <Text>----------------------</Text>
      <Saludo></Saludo>
      <Saludo/>
      <Text>----------------------</Text>
      <Saludos2></Saludos2>
      <Saludos2/>
      <Text>----------------------</Text>
      <Perfil></Perfil>
      


      <StatusBar style="auto" />
    </View>
  );
}

/* Zona de estilos y posicionamiento*/ 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

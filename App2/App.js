
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

      <Perfil nombre = "Genaro" materia= "Movil"/>

      <Perfil nombre = "Emilio" cuatri= "4"/>

      <Perfil nombre = "Jenny" carrera= "TIID"/>

      


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


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

      <Perfil style={styles.tarjeta1}nombre = "Genaro" materia= "Movil"/>

      <Perfil style={styles.tarjeta2}nombre = "Emilio" cuatri= "4"/>

      <Perfil style={styles.tarjeta3}nombre = "Jenny" carrera= "TIID"/>

      <StatusBar style="auto" />
    </View>
  );
}

/* Zona de estilos y posicionamiento*/ 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  tarjeta1:{backgroundColor:'green'},
  tarjeta2:{backgroundColor:'yellow'},
  tarjeta3:{backgroundColor:'orange'},
});

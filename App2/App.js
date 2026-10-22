
/* Zona de importaciones*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image} from 'react-native';
import MenuScreen from './screens/MenuScreen';





/*Zona Main*/
export default function App() {
  return (

    <MenuScreen></MenuScreen>
    
    
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

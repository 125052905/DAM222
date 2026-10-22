
/* Zona de importaciones*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View,Text} from 'react-native';




/*Zona Main*/
export default function SafeScreens() {
  return (
    <View style={styles.container}>
      <Text>Aqui va la practica de uriel</Text>

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


/* Zona de importaciones*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,View,Button} from 'react-native';
import { useState } from 'react';
import Tarjetas from './Tarjetas';
import SafeScreens from './SafeScreen';



/*Zona Main*/
export default function MenuScreen() {
    const[screen,setScreen] = useState('menu');

    switch(screen){
    case 'tarjetas':
        return <Tarjetas/>

    case 'SafeScreen':
        return <SafeScreens/>

    case 'Menu':
        default:
        return (
    <View style={styles.container}>
        <Text>Menu de Practicas</Text>

        <Button title='Tarjetas'onPress={()=>setScreen('tarjetas')}></Button>
        <Button title='SafeAreaView'onPress={()=>setScreen('SafeScreen')}></Button>
         <Button title='Pressable'onPress={()=>setScreen('Pressable')}></Button>        
          <Button title='TextInput'onPress={()=>setScreen('TextInput')}></Button>    
           <Button title='FlatList'onPress={()=>setScreen('FlatList')}></Button>    
            <Button title='ImageBackgroung'onPress={()=>setScreen('ImageBackgroung')}></Button>    
             <Button title='Modal'onPress={()=>setScreen('Modal')}></Button>   
              <Button title='ActivityIndicator'onPress={()=>setScreen('ActivityIndicator')}></Button>     


      <StatusBar style="auto" />
    </View>
  );
}//switch
}//funcion

/* Zona de estilos y posicionamiento*/ 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  
  },

});

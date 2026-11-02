import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput,Switch,Pressable,Alert,SafeAreaView,ScrollView } from 'react-native';
import { useState} from 'react';

//este es para los campos de texto
export default function App() {
 const [nombre, setNombre]= useState('');
 const [carrera, setCarrera]= useState('');
 const [semestre, setSemestre]= useState('');

//para los switchs
 const [taller, setTaller]= useState(false);
 const[constancia, setConstancia]=useState(false);
 const[deportes, setDeportes]=useState(false);
 
 const validarRegistro =()=>{

  //este es para que no haya espacios vacios
  if(nombre.trim()=== ''||carrera.trim()===''||semestre.trim()===''){
    Alert.alert('Campos Incompletos', 'Debes llenarlos obligatoriamente');
    return;
  }
  //Para que el semestre sean puros numeros
  if(isNaN(semestre)){
    Alert.alert('Error', ('Debes ingresar puros numeros'));
    return;
  }
  //Para las respuestas de si y no
  const txtTaller=taller ? 'Si': 'No';
  const txtConstancia=constancia ? 'Si': 'No';
  const txtDeportes=deportes ? 'Si': 'No';

  //Para mostrar las alertas

    Alert.alert(
      'Registro enviado',
      `Nombre: ${nombre}\nCarrera: ${carrera}\nSemestre: ${semestre}\nTaller: ${txtTaller}\nConstancia: ${txtConstancia}\nDeportes: ${txtDeportes}`
    );
 };
 return(
  <SafeAreaView style={styles.SafeArea}>
<ScrollView contentContainerStyle={styles.container}>
  <Text style={styles.titulo}>Registro de Evento Universitario</Text>

<TextInput
style={styles.input}
placeholder="Nombre Completo"
value={nombre}
onChangeText={setNombre}
/>
<TextInput
style={styles.input}
placeholder="Carrera"
value={carrera}
onChangeText={setCarrera}
/>
<TextInput
style={styles.input}
placeholder="Semestre"
value={semestre}
onChangeText={setSemestre}
keyboardType="numeric"
/>
<Text style={styles.subtitulo}>Opciones</Text>

<View style={styles.switchRow}>
  <Text style={styles.switchLabel}>¿Asistirá al taller?</Text>
  <Switch value={taller} onValueChange={setTaller}/>
</View>

<View style={styles.switchRow}>
  <Text style={styles.switchLabel}>¿Requiere constancia?</Text>
  <Switch value={constancia} onValueChange={setConstancia}/>
</View>

<View style={styles.switchRow}>
  <Text style={styles.switchLabel}>¿Participará en deportes?</Text>
  <Switch value={deportes} onValueChange={setDeportes} />
</View>
<Pressable style={styles.boton}onPress={validarRegistro}>
  <Text style={styles.botonTexto}>Enviar Registro</Text>
</Pressable>

</ScrollView>
</SafeAreaView>
 );
}


const styles = StyleSheet.create({
  SafeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container:{
    padding: 20,
    paddingTop: 20,
  },
  titulo:{
    fontSize: 24,
    fontWeight:'bold',
    marginBottom: 20,
    textAlign: 'center',
    color:'#000',
  },
  subtitulo:{
    fontSize:18,
    fontWeight:'bold',
    marginTop:20,
    marginBottom:10,
    color:'#000',
  },
  input:{
    borderWidth:1,
    borderColor:'#ccc',
    borderRadius:8,
    padding:10,
    marginBottom:15,
    fontSize:16,
  },
  switchRow:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom:15,
  },
  switchLabel:{
   fontSize:16,
  },
  boton:{
    backgroundColor: '#007bff',
    padding:15,
    borderRadius: 8,
    alignItems:'center',
    marginTop:20,
    },
    botonTexto:{
      color: '#fff',
      fontSize:16,
      fontWeight:'bold',
    },
});

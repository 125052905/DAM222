import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View,TextInput,Pressable,FlatList,ImageBackground,ActivityIndicator,Alert,KeyboardAvoidingPlatform,Platform} from 'react-native';

export default function App() {
//Estado para controlar el SplashScreen
const[isReady, setIsReady]= useState(false);

//Estados del formulario y datos
const[titulo, setTitulo]=useState('');
const[autor, setAutor]=useState('');
const[genero, setGenero]=useState('');
const[libros, setLibros]=useState([]); 

//Estado de la carga de los 4 segundos
const[cargando, setCargando]=useState(false);
useEffect(()=>{
  const timer=setTimeout(()=>{
    setIsReady(true);
  },2000);
  return()=>clearTimeout(timer);
},[]);


//Funcion para agregar el libro y retraso de 4 segundos

const agregarLibro=()=>{
  if (!titulo.trim()|| !autor.trim()|| !genero.trim()){
    Alert.alert('Alert','Todos los campos tienen que llenarlos obligatoriamente');
    return;
  }
  setCargando(true);
  setTimeout(()=>{
  const nuevoLibro={
    id: Date.now().toString(),
    titulo,
    autor,
    genero,
  };
  setLibros([nuevoLibro,...libros]);
  setTitulo('');
  setAutor('');
  setGenero('');
  setCargando(false); 
  Alert.alert('Alert','libro guardado correctamente');
},4000);
};

//SplashScreen
if(!isReady){
  return(
    <View style={styles.splashContainer}>
      <Text style={styles.splashTitle}>repaso2</Text>
      <ActivityIndicator size="large" color="#ffffff" style={{marginTop: 20}}/>

    </View>
  );
}
//Pantalla Principal
return(
  <ImageBackground
    source={{uri: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=1000&auto=format&fit=crop'}}
    style={styles.background}
  >
  <View style={styles.overlay}>
    <Text style={styles.headerTitle}>Catalogo de libros</Text>
    
    <View style={styles.formContainer}>
      <TextInput
      style={styles.input}
      placeholder="Titulo del libro"
      placeholderTextColor="#888"
      value={titulo}
      onChangeText={setTitulo}
      />
        <TextInput
      style={styles.input}
      placeholder="Autor"
      placeholderTextColor="#888"
      value={autor}
      onChangeText={setAutor}
      />
        <TextInput
      style={styles.input}
      placeholder="Genero"
      placeholderTextColor="#888"
      value={genero}
      onChangeText={setGenero}
      />
      
      <Pressable style={styles.loadingContainer} onPress={agregarLibro}>
        <Text style={styles.textoBoton}>Agregar libro</Text>
      </Pressable>
      </View>
      
      {cargando && (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="small"color="#ffffff"/>
        <Text style={styles.loadingText}>Guardando</Text>
        <Text style={styles.loadingSubText}>Guardando Libro</Text>
      </View>
      )}
      <Text style={styles.contador}>Total de libros: {libros.length}</Text>
      <FlatList
      data={libros}
      keyExtractor={(item)=>item.id}
    renderItem={({ item }) => (
        <View style={styles.itemCard}>
        <Text style={styles.itemTitulo}>{item.titulo}</Text>
        <Text style={styles.itemDetalle}>Autor: {item.autor}</Text>
        <Text style={styles.itemDetalle}>Genero: {item.genero}</Text>
        </View>
    )}
    />
  </View>
  </ImageBackground>
)
} 

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: '#1e293b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  splashTitle:{
    fontSize: 32,
    fontWeight:'bold',
    color: '#ffffff'
  },
  background:{
    flex: 1,
    resizeMode: 'cover',
  },
  overlay:{
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  headerTitle:{
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 15,
  },
  formContainer:{
    marginBottom: 10,
  },
  input:{
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 8,
    marginBottom: 10,
    fontSize: 16,
    color: '#000',
  },
  boton:{
    backgroundColor: '#1d4ed8',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 5,
  },
  textoBoton:{
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loadingContainer:{
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: 10,
    borderRadius: 8,
  },
  loadingText:{
    color: '#fffff',
    fontWeight: 'bold',
    marginTop: 5,
  },
  loadingSubText:{
    color: '#cccccc',
    fontSize: 12,
  },
  contador:{
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 10,
  },
  itemCard:{
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  itemTitulo:{
    fontSize: 16,
    fontWeight: 'bold',
    color : '#000000',
  },
  itemDetalle:{
  fontSize: 14,
  color: '#333333',
  marginTop: 2,
  },
});
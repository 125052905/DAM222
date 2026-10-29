import { View, Image, Pressable, Switch, StyleSheet, Text} from "react-native";
import { useState } from "react";
import SwitchEjemplo from "../Components/SwitchEjemplo";
export default function PressableSwitch(){


    const[ImagenGrande, setImageGrande]= useState(false)
    const[oscuro, setOscuro]= useState(false)
         return(
            <View style={[styles.container, {backgroundColor: oscuro ?'#000000' : '#ffffff'}]}>

                <Pressable>
                    <Text>Presioname</Text>
                </Pressable>

              <Pressable 
              onPress={() => setImageGrande(!ImagenGrande)}>
    <Image 
        source={require("../assets/resident-evil-4-3840x2160-11094.jpg")}
        style={[
            ImagenGrande ? styles.imagenGrande : styles.image
        ]}
    />
</Pressable>
              <SwitchEjemplo
                oscuro={oscuro}
                cambiarModo={setOscuro}
              />

            </View>
         )
         

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    texto: {
        fontSize: 20,
        marginBottom: 20
    },
    image: {
        width: 100,
        height: 100,
    },
    imagenGrande: {
        width: 180,
        height: 180,
    }
})
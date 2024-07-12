import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native'


const options = ["Pomodoro", "Short Break", "Long Break"]

//? le pasamos un parametro ala funcion de header
function Header({setTime, currentTime, setCurrentTime}) {

    function handlePress(index){
        //creamos una validacion para saber cual se ejecuta cuando le demos click
        const newTime = index === 0 ? 25 : index === 1 ? 5 : 15;
        setCurrentTime(index)
        setTime(newTime * 60);
    }
  return (
    <View style={{flexDirection: "row",  }}>
        {/* //? vamos a iterar sobre elementos */}
        {options.map((item, index) => (
            //? cada elemento va a ser un boton y si el currenttime es diferente del que le demos click cambie a transparente
            <TouchableOpacity key={index} onPress={() => handlePress(index)} style={[styles.button, currentTime !== index && {borderColor: "transparent"}]}>
                <Text style={{fontWeight:"bold"}}>{item}</Text>
            </TouchableOpacity>
        ))}
    </View>
  )
}

const styles = StyleSheet.create({
 
    button: {
      borderWidth: 3,
      margin: 3,
      padding: 5,
      width: "33%",
      flex: 2,
      fontWeight: "bold",
      fontSize: "10px",
      borderColor: "white",
      marginVertical: 20,
      borderRadius: 10, 
      alignItems: "center",
  
    },
    
   
  });
export default Header
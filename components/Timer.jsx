import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

//LA FUNCION RESIVE UNA PROPIEDAD DE TIME
function Timer({time}) {
  //math.floor lo que hace es que redonde la candidad
  const formattedTime = `${Math.floor(time / 60)
  .toString()
  .padStart(2, "0")}:${(time % 60).toString()
  .padStart(2, "0")}`//cuando no aiga dos digitos el que lo remplaza es un 0 , ejemplo si solo tengo 3, le agrega el 0 , 03

  return (
    <View style={styles.container}>
      <Text style={styles.time}>{formattedTime}</Text>
    </View>
  )
}

//ESTILOS PARA EL TIMER
const styles = StyleSheet.create({
  container: {
    flex: 0.4,
    justifyContent: 'center',
   
    backgroundColor: "#F2F2F2",
    padding: 15, 
    borderRadius: 15,

  },
  time: {
    fontSize: 70,
    fontWeight: "bold",
    color: "#333333",
    textAlign: "center",  //Centra el texto en el Vie
    color: "#333333"
  }
})

export default Timer
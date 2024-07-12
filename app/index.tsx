// import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Platform, Text, View, Button, SafeAreaView, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import Header  from '../components/Header';
import Timer from '../components/Timer';
const colors= ["#f7DC6F", "#A2D9CE", "#D7BDE2"]
import { Audio } from 'expo-av'

export default function HomeScreen() {

  const [isWorking, setIsWorking]= useState(false);
  const [time, setTime] = useState(25 * 60);
  const [currentTime, setCurrentTime] = useState( "POMO" | "SHORT" | "BREAK");
  const [isActive, setIsActive] = useState(false);


  //* USAMOS UN HOOK DE REACT 
  useEffect(() => {
    let interval = null
    if(isActive){
      interval = setInterval(() =>{
        setTime( time - 1)
      }, 1000);// el 1000 son los milisegundos que se actualiza osea un segundo a la vez
    } else {
      //clear interval
      clearInterval(interval);
    }
    //* VALIDAMOS QUE CUANDO EL TIEMPO LLEGUE A 0 SE PARE SOLO
    if (time === 0) {
      setIsActive(false)
      setIsWorking((prev)=> !prev)//accedemos el estado previo usando una cobak poniendo el estado en la misma interaccion
      setTime(isWorking ? 300 : 1500)
    }
    return () => clearInterval(interval); // CUANDO EL COMPONENTE SE DESMONTA, CLEAR INTERVAL
  }, [isActive, time]);//ES UN ARREGLO DE DEPENDENCIA QUE CARGA CADA QUE SE USA EL ISACTIVE

  //* FUNCION QUE ACTIVA EL CAMBIO DE NOMBRE DE STOP Y START
  function handleStartStop(){
    playSound() //LLAMAMOS A LA FUNCION QUE REPODUCE EL SONIDO CUANDO DEMOS CLICK

  setIsActive(!isActive);
  }
    //* FUNCION QUE ACTIVA EL SONIDO DE CLICK
  async function playSound(){
    //* importamos el audio y cargamos el sonido
    const { sound } = await Audio.Sound.createAsync(
      require('../assets/audio/mouseClick.mp3'), 
    );
    await sound.playAsync(); 
  }

  return (
    //? el color de fondo lo agarra de las constantes creadas y dependiendo de la posicion cambia de diferente color
    <SafeAreaView style={[styles.container, {backgroundColor: colors[currentTime]}]}>
      <View style={{flex: 1,paddingHorizontal:15 ,paddingTop: Platform.OS === "android" && 30}}>
      <Text style={styles.text}>Pomodoro</Text>
      {/* //? le pasamos el valor de una prop con el nombre */}
        <Header currentTime={currentTime} setCurrentTime={setCurrentTime} setTime={setTime} />
        <Timer time={time}></Timer>
        <TouchableOpacity style={styles.button} onPress={handleStartStop}>
          {/* //? validamos para que cambie el nombre dependiendo del estado */}
          <Text style={{color: "white", fontWeight: "bold"}}>{isActive ? "STOP": "START"}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 
  container: {
    flex: 1,

  },
  text: {
    fontSize: 32, 
    fontWeight: "bold", 
    color: "black", 
    
  },
  button: {
    backgroundColor: "black", 
    padding: 15, 
    borderRadius: 15, 
    marginVertical: 15, 
    width: "100%", 
    justifyContent: "center", 
    alignItems: "center"
  }
 
});

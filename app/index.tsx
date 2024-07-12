// import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Platform, Text, View, Button, SafeAreaView } from 'react-native';
import { useState } from 'react';
import Header  from '../components/Header';
// import { HelloWave } from '@/components/HelloWave';
// import ParallaxScrollView from '@/components/ParallaxScrollView';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';
const colors= ["#f7DC6F", "#A2D9CE", "#D7BDE2"]
export default function HomeScreen() {

  const [isWorking, setIsWorking]= useState(false);
  const [time, setTime] = useState(25 * 60);
  const [currentTime, setCurrentTime] = useState( "POMO" | "SHORT" | "BREAK");



  return (
    //? el color de fondo lo agarra de las constantes creadas y dependiendo de la posicion cambia de diferente color
    <SafeAreaView style={[styles.container, {backgroundColor: colors[currentTime]}]}>
      <View style={{paddingTop: Platform.OS === "android" && 30}}>
      <Text style={styles.text}>Pomodoro</Text>
      <Text style={styles.text}>{time}</Text>
      {/* //? le pasamos el valor de una prop con el nombre */}
        <Header currentTime={currentTime} setCurrentTime={setCurrentTime} setTime={setTime} />
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
    
  }
 
});

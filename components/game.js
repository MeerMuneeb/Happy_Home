import React, {useState, useEffect} from "react";
import {View, StyleSheet, Text, Touchable, TouchableOpacity, Keyboard, Alert} from "react-native";


export default function Game() {
  const [Pressed, setPress] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [xWin, setXWin] = useState(0);  
  const [oWin, setOWin] = useState(0);

  useEffect(() => {
    if (
      (Pressed[0] === Pressed[1] && Pressed[1] === Pressed[2] && Pressed[2] === "x") ||
      (Pressed[3] === Pressed[4] && Pressed[4] === Pressed[5] && Pressed[5] === "x") ||
      (Pressed[6] === Pressed[7] && Pressed[7] === Pressed[8] && Pressed[8] === "x") ||
      (Pressed[0] === Pressed[3] && Pressed[3] === Pressed[6] && Pressed[6] === "x") ||
      (Pressed[1] === Pressed[4] && Pressed[4] === Pressed[7] && Pressed[7] === "x") ||
      (Pressed[2] === Pressed[5] && Pressed[5] === Pressed[8] && Pressed[8] === "x") ||
      (Pressed[0] === Pressed[4] && Pressed[4] === Pressed[8] && Pressed[8] === "x") ||
      (Pressed[2] === Pressed[4] && Pressed[4] === Pressed[6] && Pressed[6] === "x") 
    ) {
      setXWin((prev) => prev + 1);
      Alert.alert(`"Player 1" is the Winner`);
      setPress(Array(9).fill(null));
      setXIsNext(true);
    } else if (
      (Pressed[0] === Pressed[1] && Pressed[1] === Pressed[2] && Pressed[2] === "o") ||
      (Pressed[3] === Pressed[4] && Pressed[4] === Pressed[5] && Pressed[5] === "o") ||
      (Pressed[6] === Pressed[7] && Pressed[7] === Pressed[8] && Pressed[8] === "o") ||
      (Pressed[0] === Pressed[3] && Pressed[3] === Pressed[6] && Pressed[6] === "o") ||
      (Pressed[1] === Pressed[4] && Pressed[4] === Pressed[7] && Pressed[7] === "o") ||
      (Pressed[2] === Pressed[5] && Pressed[5] === Pressed[8] && Pressed[8] === "o") ||
      (Pressed[0] === Pressed[4] && Pressed[4] === Pressed[8] && Pressed[8] === "o") ||
      (Pressed[2] === Pressed[4] && Pressed[4] === Pressed[6] && Pressed[6] === "o") 
    ) {
      setOWin((prev) => prev + 1);
      Alert.alert(`"Player 2" is the Winner`);
      setPress(Array(9).fill(null));
      setXIsNext(true);
    } else if (isPressedFilled(Pressed)){
      Alert.alert(`It's a Tie!!`);
      setPress(Array(9).fill(null));
      setXIsNext(true);
    }
  }, [Pressed]);

  const isPressedFilled = () => {
    return Pressed.every((value) => value !== null);
  };

  const handleTask = (index) => {
    if (Pressed[index]) {
      return;
    }     
    const PressedCopy = Pressed.slice();
    PressedCopy[index] = xIsNext ? "x" : "o";
    setPress(PressedCopy);
    setXIsNext(!xIsNext);
  }

  const resetGame = () => {
    setXWin(0)
    setOWin(0)
    setPress(Array(9).fill(null))
    setXIsNext(true)
  }


  const buttons = (index) =>{    
    return(
      <TouchableOpacity style={[styles.btn, { backgroundColor: Pressed[index] == 'X' ? 'lightblue' : 'white' }]} onPress={() => handleTask(index)}>
        <Text style={styles.playBtn}>{Pressed[index]}</Text>
      </TouchableOpacity>
    );
  }
  

  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Play Game</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.btnContainer}>
          <View style={styles.btnRow}>           
            {buttons(0)}      
            {buttons(1)} 
            {buttons(2)} 
          </View>
          <View style={styles.btnRow}>
            {buttons(3)}      
            {buttons(4)} 
            {buttons(5)} 
          </View>
          <View style={styles.btnRow}>
            {buttons(6)}      
            {buttons(7)} 
            {buttons(8)} 
          </View>
        </View>  
        <View style={styles.header}>
          <Text style={styles.heading}>Player 1 (X) : {xWin}</Text>
          <Text style={styles.heading}>Player 2 (O) : {oWin}</Text>
        </View>
        <View style={styles.rBtnView}>
          <TouchableOpacity style={styles.rBtn} onPress={() => resetGame()}><Text style={{fontWeight: 'bold'}}>RESET GAME</Text></TouchableOpacity>  
        </View> 
      </View>    
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
  },
  header:{
    padding: 20,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    height: '15%'
  },
  heading:{
    fontSize: 20,
    fontWeight: 'bold',
  },
  body:{
    flex: 1,
    backgroundColor: '#f2f7ff',
    padding: 20,
  },
  btnContainer:{    
    flex: 1,
    maxHeight: '50%',
    marginBottom: 50,
    marginTop: 50
  },
  btnRow:{
    flexDirection: 'row',
    flex: 1,
  },
  btn:{
    flex: 1,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playBtn:{
    color: 'green',    
    fontSize: 50,
  },
  rBtnView: {    
    alignItems: 'center',    
    marginTop: 20,
  },
  rBtn:{    
    alignItems: 'center',
    backgroundColor: 'red',
    width: 150,   
    padding: 10,
    borderRadius: 10,
  }
})

import React, { useState } from 'react';
import { Button, TextInput, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  const [x, setX] = useState(null);
  const [y, setY] = useState(null);

  const calcular = () => {
    let resultado = x + y;
    alert(`${x} + ${y} = ${resultado}`);
    
    setX('');
    setY('');
    
  };

  const multiplicar = () => {
    let resultado = x * y;
    alert(`${x} x ${y} = ${resultado}`)

    setX('');
    setY('');
  };

  return (
    <View style={styles.container}>
      <Text>Digite um número</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Número"
        keyboardType="number-pad"
        onChangeText={(texto) => setX(parseInt(texto))}
        value={x}
      />
      <Text>Digite outro número</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Número"
        keyboardType="number-pad"
        onChangeText={(texto) => setY(parseInt(texto))}
        value={y}
      />
      <Button title="Adicionar" onPress={calcular} />
      <Button title="Multiplicar" onPress={multiplicar}/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  textInput: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#000',
    borderRadius: 5,
  },
});

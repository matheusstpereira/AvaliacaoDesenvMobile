import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Button from './components/MyButton';
import BalaoDaSorte from './components/BalaoDaSorte/BalaoDaSorte';
import Colors from './components/Styles/colors.js';
import styles from './components/Styles/styles';

export default function App() {
  const [situacaoBalao, setSituacaoBalao] = useState(1);

  function estourarBalao() {
    setSituacaoBalao(0);
  }

  function resetar() {
    setSituacaoBalao(1);
  }

  return (
    <View style={styles.background}>
      <View style={styles.container2}>
        <View style={styles.img}>
          <BalaoDaSorte situacao={situacaoBalao} />
        </View>
        <View style={styles.botao}>
          <Button color={Colors.botao_estourar} title={'ESTOURAR O BALÃO'} onPress={estourarBalao}/>
          <Button color={Colors.botao_resetar} title={'RESETAR'} onPress={resetar}/>
        </View>
      </View>
    </View>
  );
}
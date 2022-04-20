import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import sizes from '../Styles/sizes.js';
import styles from '../Styles/styles';
export default function BalaoDaSorte({situacao}) {
  
  const Versiculos = [
    '"Tudo posso naquele que me fortalece."',
    '"Deem graças em todas as circunstâncias".',
    '"Eu sou o caminho, a verdade e a vida."',
    '"E conhecerão a verdade, e a verdade os libertará"',
    '"A fé é a certeza daquilo que esperamos e a prova das coisas que não vemos."',
    '"Tudo o que fizerem, façam de todo o coração, como para o Senhor"',
    '"Pois nada é impossível para Deus"',
    '"Eu sou a ressurreição e a vida. Aquele que crê em mim, ainda que morra, viverá"'
  ];

  function GerarFraseAleatoria() {
    return Math.floor(Math.random() * (Versiculos.length - 0)) + 0;
  }
  
  return (
    <View style={styles.container1}>
      {situacao ? (
        <Image style={{ width: sizes.larguraImg, height: sizes.alturaImg }} source={require('../../assets/balloon_green.jpg')}/>
        )
        :(
          <View>
          <Image style={{ width: sizes.larguraImg, height: sizes.alturaImg }} source={require('../../assets/popped_balloon_green.jpg')}/>
          <Text style={{ fontSize: sizes.fonte }}>
            {Versiculos[GerarFraseAleatoria()]}
          </Text>
        </View>
      )}
    </View>
  );
}


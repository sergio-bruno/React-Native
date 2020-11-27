// Importando as bibliotecas 
import React, { Component } from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';

//npm install react-native-md5 --save
import md5 from 'react-native-md5';

// Criando o componente
export default class TesteComponente extends Component {

  componentWillMount() {
  }

  render() {
    const hex_md5v = md5.hex_md5('sismepe10');
    const b64_md5v = md5.b64_md5('sismepe10');
    const str_md5v = md5.str_md5('sismepe10');
    const hex_hmac_md5v = md5.hex_hmac_md5('my_key', 'sismepe10');
    const b64_hmac_md5v = md5.b64_hmac_md5('my_key', 'sismepe10');
    const str_hmac_md5v = md5.str_hmac_md5('my_key', 'sismepe10');

    return (
      <View style={styles.container}>
        <Text> '>>>>hex_md5:' {md5.hex_md5('sismepe10')} </Text>
        <Text> '>>>>b64_md5:" {md5.b64_md5('sismepe10')} </Text>
        <Text> '>>>>str_md5:" {md5.str_md5('sismepe10')} </Text>
        <Text> '>>>>hex_hmac_md5:" {md5.hex_hmac_md5('my_key', 'sismepe10')} </Text>
        <Text> '>>>>b64_hmac_md5:" {md5.b64_hmac_md5('my_key', 'sismepe10')} </Text>
        <Text> '>>>>str_hmac_md5:" {md5.str_hmac_md5('my_key', 'sismepe10')} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});


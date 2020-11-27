// Importando as bibliotecas 
import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const logo = require('./images/logo.png');

// Criando o componente
export default class EmDesenvolvimento extends Component {
    render() {
        return (
            <View style={styles.viewPrincipal}>
                <View style={styles.logo}>
                    <Image source={logo} />
                </View>
                <Text style={styles.titleText} >
                    Rotina em desenvolvimento
                </Text>                
            </View>    
        );
    }
}

const styles = StyleSheet.create({
  titleText: {
    marginTop: 50,
    fontSize: 20,
    fontWeight: 'bold',
    flexDirection: 'row'
  },
  viewPrincipal: {
    alignItems: 'center'
  },
  logo: {
    marginTop: 30,
    alignItems: 'center'
  },
});

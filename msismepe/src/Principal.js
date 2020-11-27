import React, { Component } from 'react';
import {
  View,
  StatusBar,
  Image,
  StyleSheet,
  ScrollView,
  TouchableHighlight
} from 'react-native';

import { Actions } from 'react-native-router-flux';

const menuDependente = require('./images/menu_dependente.png');
const menuUrgencia = require('./images/menu_urgencia.png');
const menuConsulta = require('./images/menu_consulta.png');
const menuInternacao = require('./images/menu_internacao.png');
const menuLaboratorio = require('./images/menu_laboratorio.png');
const menuLicenca = require('./images/menu_licenca.png');
const menuFinanceiro = require('./images/menu_ficha_financeira.png');

export default class CenaPrincipal extends Component {
  render() {
    return (
			<View>
        <StatusBar hidden={false} />

        <ScrollView>
          <View style={styles.menu}>
            <View style={styles.menuGrupo}>
              <TouchableHighlight
                underlayColor={'#61BD8C'}
                activeOpacity={0.3}
                onPress={() => {
                  Actions.dependente();
                }}
              >
                <Image style={styles.imgMenu} source={menuDependente} />
              </TouchableHighlight>
              <TouchableHighlight
                underlayColor={'#61BD8C'}
                activeOpacity={0.3}
                onPress={() => {
                  Actions.atendimentoUrgencia();
                }}
              >
                <Image style={styles.imgMenu} source={menuUrgencia} />
              </TouchableHighlight>
            </View>

            <View style={styles.menuGrupo}>
              <TouchableHighlight
                underlayColor={'#61BD8C'}
                activeOpacity={0.3}
                onPress={() => {
                  Actions.consultaAmbulatorial();
                }}
              >
                <Image style={styles.imgMenu} source={menuConsulta} />
              </TouchableHighlight>
              <TouchableHighlight
                underlayColor={'#61BD8C'}
                activeOpacity={0.3}
                onPress={() => {
                  Actions.atendimentoInternacao();
                }}
              >
                <Image style={styles.imgMenu} source={menuInternacao} />
              </TouchableHighlight>
            </View>

            <View style={styles.menuGrupo}>
              <TouchableHighlight
                underlayColor={'#61BD8C'}
                activeOpacity={0.3}
                onPress={() => {
                  Actions.exameLaboratorial();
                }}
              >
                <Image style={styles.imgMenu} source={menuLaboratorio} />
              </TouchableHighlight>
              <TouchableHighlight
                underlayColor={'#61BD8C'}
                activeOpacity={0.3}
                onPress={() => {
                  Actions.licenca();
                }}
              >
                <Image style={styles.imgMenu} source={menuLicenca} />
              </TouchableHighlight>
            </View>

            <View style={styles.menuGrupo}>
              <TouchableHighlight
                underlayColor={'#61BD8C'}
                activeOpacity={0.3}
                onPress={() => {
                  Actions.consultaFichaFinanceira();
                }}
              >
                <Image style={styles.imgMenu} source={menuFinanceiro} />
              </TouchableHighlight>
            </View>
          </View>
        </ScrollView>      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  menu: {
    alignItems: 'center'
  },
  menuGrupo: {
    flexDirection: 'row'
  },
  imgMenu: {
    margin: 15
  }
});

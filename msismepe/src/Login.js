import { Actions } from 'react-native-router-flux';
import React, { Component } from 'react';
import { 
  StyleSheet, 
  TextInput, 
  View, 
  Alert, 
  Button, 
  Text, 
  AsyncStorage } from 'react-native';
import md5 from 'react-native-md5';

import Logo from './Logo';

// Creating Login Activity.
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UserEmail: '',
      UserPassword: ''
     };
  }
 
  async componentWillMount() {
    const user = JSON.parse(await AsyncStorage.getItem('@Sismepe:user'));
    const senhaDesCrypto = await AsyncStorage.getItem('@Sismepe:senhaDesCrypto');
    this.setState({ 
      UserEmail: user.data.NM_LOGIN,  
      UserPassword: senhaDesCrypto,
    });  
  }

  principal() {
    Actions.principal();
  }

  UserLoginFunction = () => {
    const { UserEmail } = this.state;
    const { UserPassword } = this.state;
   
    const senhaCrypto = md5.hex_md5(UserPassword);

    fetch('http://www.sismepe.pe.gov.br/ehosp_new/User_Login.php',{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: UserEmail,
        password: senhaCrypto
       })
    }).then((response) => response.json())
    .then((responseJson) => {
      //if (responseJson === 'Data Matched') {
      //if (responseJson.ok) {  
      if (responseJson.ok) {  
        const user = JSON.stringify(responseJson);
        AsyncStorage.multiSet([
          ['@Sismepe:user', user],
          ['@Sismepe:senhaDesCrypto', UserPassword],
        ]);
        this.principal();
      } else {
        Alert.alert(responseJson);
      }
    }).catch((error) => {
      Alert.alert(error);
    });
  }
 
  render() {
    return (
      <View style={styles.MainContainer}>
        <View style={styles.Topo}>
          <Logo />
          <Text>Bem vindo ao SISMEPE</Text>
        </View>
        <View style={styles.Centro}>
          <TextInput
            placeholder="Digite seu login"
            onChangeText={UserEmail => this.setState({ UserEmail })}
            underlineColorAndroid='transparent'
            style={styles.TextInputStyleClass}
            value={this.state.UserEmail}
          />
          <TextInput
            placeholder="Digite sua senha"
            onChangeText={UserPassword => this.setState({ UserPassword })}
            underlineColorAndroid='transparent'
            style={styles.TextInputStyleClass}
            secureTextEntry
            value={this.state.UserPassword}
          />
          <View style={styles.Rodape}>
            <Button 
              title="Entrar" 
              onPress={this.UserLoginFunction} 
              style={styles.ButtonStyle} 
            />
          </View>
        </View>  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  Topo: {
    marginBottom: 10,  
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  Centro: {
    flex: 2,
    padding: 20,
  },
  Rodape: {
    flex: 2,
  },
  TextInputStyleClass: {
    textAlign: 'center',
    marginBottom: 7,
    height: 40,
    borderWidth: 1,
    borderColor: '#2196F3',
    borderRadius: 5,
  },
  ButtonStyle: {
    marginTop: 25,
    borderRadius: 15,
    color: '#2196F3',
  },
});

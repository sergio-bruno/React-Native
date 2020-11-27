import React, { Component } from 'react';
import { View, Image } from 'react-native';

// devido o comando require ser sincrono
const imagem = require('./images/logo.png');

export default class Logo extends Component {
	render() {
		return (
			<View>
				<Image style={{ width: 151, height: 104 }} source={imagem} />
      </View>
		);
  }
}

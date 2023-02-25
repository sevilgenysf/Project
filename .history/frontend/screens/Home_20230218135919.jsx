import { Text, View } from 'react-native';
import React, { Component } from 'react';
import { defaultStyle } from '../styles/styles';

export class Home extends Component {
  render() {
    return (
      <View style={defaultStyle}>
        <Text>Home</Text>
      </View>
    );
  }
}

export default Home;

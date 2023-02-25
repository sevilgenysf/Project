import { Text, View } from 'react-native';
import React, { Component } from 'react';
import { defaultStyle } from '../styles/styles';

export class Home extends Component {
  render() {
    return (
      <View style={defaultStyle}>
        {/* Header */}
        <View>
          <Text style={{ fontSize: 25 }}>Our</Text>
          <Text style={{ fontSize: 25 }}>Produc👕 </Text>
        </View>
      </View>
    );
  }
}

export default Home;

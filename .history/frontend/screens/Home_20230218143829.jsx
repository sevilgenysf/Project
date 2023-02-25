import { Text, View } from 'react-native';
import React, { Component } from 'react';
import { defaultStyle } from '../styles/styles';
import Header from '../components/Header';

export class Home extends Component {
  render() {
    return (
      <View style={defaultStyle}>
        {/* Header */}
        <Header />
        <View>
          <Text style={{ fontSize: 25 }}>Our</Text>
          <Text style={{ fontSize: 25, fontWeight: '900' }}>Produc👕 </Text>
        </View>
      </View>
    );
  }
}

export default Home;

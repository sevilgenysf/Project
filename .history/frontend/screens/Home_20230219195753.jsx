import { Text, TouchableOpacity, View } from 'react-native';
import React, { Component } from 'react';
import { defaultStyle, colors } from '../styles/styles';
import Header from '../components/Header';
import { Avatar } from 'react-native-paper';

export class Home extends Component {
  render() {
    return (
      <View style={defaultStyle}>
        <Header />

        {/* Header */}
        <View>
          <Text style={{ fontSize: 25 }}>Our</Text>
          <Text style={{ fontSize: 25, fontWeight: '900' }}>Products</Text>
        </View>

        {/* SearchBar */}

        <View>
          <TouchableOpacity>
            <Avatar.Icon
              icon={'magnify'}
              color={'gray'}
              style={{ backgroundColor: colors.color1_light, elevation: 2 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Home;

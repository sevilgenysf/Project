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

        <View
          style={{
            paddingTop: 40,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
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
                size={40}
                style={{ backgroundColor: colors.color1_light, elevation: 0.1 }}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: 20,
            paddingBottom: 20,
            paddingLeft: 20,
            paddingRight: 20
          }}
        ></View>
      </View>
    );
  }
}

export default Home;

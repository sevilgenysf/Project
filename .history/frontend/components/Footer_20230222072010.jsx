import { View, Text, Touchable, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../styles/styles';

const Footer = ({ activeRoute = 'home' }) => {
  const navigate = useNavigation();
  const isAuthenticated = true;

  const navigationHandler = (key) => {};

  return (
    <View
      style={{
        backgroundColor: colors.color1,
        borderTopRightRadius: 120,
        borderTopLeftRadius: 120
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly'
        }}
      >
        <TouchableOpacity>
          <Text>Footer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Footer;

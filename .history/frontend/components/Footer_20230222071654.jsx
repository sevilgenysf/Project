import { View, Text } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Footer = ({ activeRoute = 'home' }) => {
  const navigate = useNavigation();
  const isAuthenticated = true;

  const navigationHandler = (key) => {};

  return (
    <View
      style={{
        backgroundColor: colors.color1
      }}
    >
      <Text>Footer</Text>
    </View>
  );
};

export default Footer;

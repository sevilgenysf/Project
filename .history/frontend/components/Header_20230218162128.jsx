import { View, Text, Touchable, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = () => {
  const myIcon = <Icon name="rocket" size={30} color="#900" />;
  return (
    <>
      <TouchableOpacity>{myIcon}</TouchableOpacity>
    </>
  );
};

export default Header;

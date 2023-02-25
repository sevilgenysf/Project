import { View, Text, Touchable, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = () => {
  return (
    <>
      <TouchableOpacity>
        <Icon name="rocket" size={30} color="#900" />
      </TouchableOpacity>
    </>
  );
};

export default Header;

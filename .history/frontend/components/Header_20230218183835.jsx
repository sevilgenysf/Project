import { View, Text, Touchable, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Avatar } from 'react-native-paper';

const Header = () => {
  return (
    <>
      <TouchableOpacity>
        <Icon name="md-menu" size={30} color="#900" />
        <Avatar.Icon />
      </TouchableOpacity>
    </>
  );
};

export default Header;
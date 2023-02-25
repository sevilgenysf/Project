import { View, Text, Touchable, TouchableOpacity } from 'react-native';
import React from 'react';
import { Avatar } from 'react-native-paper';

const Header = () => {
  return (
    <>
      <TouchableOpacity>
        <Avatar.Icon size={60} icon="folder" />
        <Avatar.Image size={24} source={require('../assets/avatar.png')} />
      </TouchableOpacity>
    </>
  );
};

export default Header;

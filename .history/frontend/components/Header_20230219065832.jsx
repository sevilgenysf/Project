import { View, Text, Touchable, TouchableOpacity } from 'react-native';
import React from 'react';
import { Avatar } from 'react-native-paper';

const Header = () => {
  return (
    <>
      <TouchableOpacity>
        <Avatar.Icon size={40} icon="folder" />
      </TouchableOpacity>
    </>
  );
};

export default Header;

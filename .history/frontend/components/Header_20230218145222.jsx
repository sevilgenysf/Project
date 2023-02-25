import { View, Text, Touchable, TouchableOpacity } from 'react-native';
import React from 'react';
import { Avatar } from 'react-native-paper';

const Header = () => {
  return (
    <>
      <TouchableOpacity>
        <Avatar.Icon size={24} icon={'heart'} />
      </TouchableOpacity>
    </>
  );
};

export default Header;

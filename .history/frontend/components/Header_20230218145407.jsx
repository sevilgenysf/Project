import { View, Text, Touchable, TouchableOpacity } from 'react-native';
import React from 'react';
import { Avatar } from 'react-native-paper';

const Header = () => {
  return (
    <>
      <TouchableOpacity>
        <Avatar.Image size={24} icon={'arrow-left'} />
      </TouchableOpacity>
    </>
  );
};

export default Header;

import { View, Text, Touchable, TouchableOpacity } from 'react-native';
import React from 'react';
import { Avatar } from 'react-native-paper';

const Header = () => {
  return (
    <>
      <TouchableOpacity>
        <Avatar.Icon icon="chevron-right" size={60} />
        <Avatar.Icon icon="folder" size={60} />
      </TouchableOpacity>
    </>
  );
};

export default Header;

import { View, Text, Touchable, TouchableOpacity } from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <>
      <TouchableOpacity>
        <Avatar.Icon />
      </TouchableOpacity>
    </>
  );
};

export default Header;

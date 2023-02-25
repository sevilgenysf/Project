import { View, Text, Touchable, TouchableOpacity } from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <>
      <TouchableOpacity>
        <FAB icon="plus" />
      </TouchableOpacity>
    </>
  );
};

export default Header;

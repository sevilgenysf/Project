import { View, Text, Touchable, TouchableOpacity } from 'react-native';
import React from 'react';
import { Avatar } from 'react-native-paper';
import { List, FAB } from 'react-native-paper';

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

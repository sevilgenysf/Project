import { View, Text, Touchable, TouchableOpacity } from 'react-native';
import React from 'react';
import { Avatar } from 'react-native-paper';
import { colors } from '../styles/styles';

const Header = () => {
  return (
    <>
      <TouchableOpacity>
        <Avatar.Icon icon="arrow-left" color={colors.color3} />
      </TouchableOpacity>
    </>
  );
};

export default Header;

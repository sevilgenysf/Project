import { View, Text, Touchable, TouchableOpacity } from 'react-native';
import React from 'react';
import { Avatar } from 'react-native-paper';
import { colors } from '../styles/styles';

const Header = () => {
  return (
    <>
      <TouchableOpacity>
        <Avatar.Icon
          style={{
            backgroundColor: colors.color4
          }}
          icon="arrow-left"
          color="black"
        />
      </TouchableOpacity>
    </>
  );
};

export default Header;

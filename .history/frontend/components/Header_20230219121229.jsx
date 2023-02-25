import { View, Text, Touchable, TouchableOpacity } from 'react-native';
import React from 'react';
import { Avatar } from 'react-native-paper';
import { colors } from '../styles/styles';

const Header = () => {
  return (
    <>
      <TouchableOpacity
        style={{
          position: 'absolute',
          left: 20,
          top: 10,
          zIndex: 10
        }}
      >
        <Avatar.Icon
          style={{
            backgroundColor: colors.color4
          }}
          icon="arrow-left"
          color="#242424"
        />
      </TouchableOpacity>
    </>
  );
};

export default Header;

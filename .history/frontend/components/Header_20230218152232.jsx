import { View, Text, Touchable, TouchableOpacity } from 'react-native';
import React from 'react';
import { Avatar } from 'react-native-paper';
import S from 'react-native-vector-icons';

const Header = () => {
  return (
    <>
      <TouchableOpacity>
        <Avatar.Icon size={24} icon={S} />
      </TouchableOpacity>
    </>
  );
};

export default Header;

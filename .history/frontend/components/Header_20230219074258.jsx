import { View, Text, Touchable, TouchableOpacity } from 'react-native';
import React from 'react';
import { Avatar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Header = () => {
  return (
    <>
      <TouchableOpacity>
        <Avatar.Icon size={60} icon="folder" />
        <Icon name="chevron-right" size={20} />
      </TouchableOpacity>
    </>
  );
};

export default Header;

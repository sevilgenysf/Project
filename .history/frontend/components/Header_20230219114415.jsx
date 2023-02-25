import { View, Text, Touchable, TouchableOpacity } from 'react-native';
import React from 'react';
import { Avatar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = () => {
  return (
    <>
      <TouchableOpacity>
        <Avatar.Icon icon="chevron-right" size={60} />
        <Icon name="chevron-right" size={20} />
      </TouchableOpacity>
    </>
  );
};

export default Header;

import { View, Text, Touchable, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Avatar } from 'react-native-paper';

const Header = () => {
  return (
    <>
      <TouchableOpacity>
        <Avatar.Icon icon={'md-menu'} />
      </TouchableOpacity>
    </>
  );
};

export default Header;

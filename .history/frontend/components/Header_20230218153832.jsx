import { View, Text, Touchable, TouchableOpacity } from 'react-native';
import React from 'react';
import { Avatar } from 'react-native-paper';
import { List } from 'react-native-paper';

const Header = () => {
  return (
    <>
      <TouchableOpacity>
        <Avatar.Icon
          size={60}
          icon={<Icon name="rocket" size={30} color="#900" />}
        />
        <Icon name="rocket" size={30} color="#900" />
      </TouchableOpacity>
    </>
  );
};

export default Header;

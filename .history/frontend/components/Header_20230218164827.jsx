import { View, Text, Touchable, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Avatar } from 'react-native-paper';

const Header = () => {
  const iconNew = <Icon name="md-menu" size={30} color="#900" />;

  return (
    <>
      <TouchableOpacity>
        <Avatar.Icon icon={iconNew} />
      </TouchableOpacity>
    </>
  );
};

export default Header;

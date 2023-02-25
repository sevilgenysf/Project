import { View, Text, Touchable, TouchableOpacity, Button } from 'react-native';
import React from 'react';
import { Avatar } from 'react-native-paper';

const Header = () => {
  return (
    <>
      <TouchableOpacity>
        <Avatar.Icon size={24} icon="folder" />
        <Button icon="camera">Press me</Button>
      </TouchableOpacity>
    </>
  );
};

export default Header;

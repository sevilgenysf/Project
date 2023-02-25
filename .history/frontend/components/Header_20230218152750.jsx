import { View, Text, Touchable, TouchableOpacity } from 'react-native';
import React from 'react';
import { Avatar } from 'react-native-paper';
import { List } from 'react-native-paper';

const Header = () => {
  return (
    <>
      <TouchableOpacity>
        <Avatar.Icon size={24} icon={'arrow-left'} />
        <List.Item
          title="User Name"
          description="Item description"
          left={() => <Avatar.Icon icon={'arrow-left'} />}
        />
      </TouchableOpacity>
    </>
  );
};

export default Header;

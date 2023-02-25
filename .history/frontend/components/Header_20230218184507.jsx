import { View, Text, Touchable, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from '@mdi/react';
import { mdiArrowLeft } from '@mdi/js';

import { Avatar } from 'react-native-paper';

const Header = () => {
  return (
    <>
      <TouchableOpacity>
        <Icon path={mdiArrowLeft} size={1} />
        <Avatar.Icon icon={'arrow-left'} />
      </TouchableOpacity>
    </>
  );
};

export default Header;

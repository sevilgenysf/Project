import { View, Text } from 'react-native';
import React from 'react';
import { defaultStyle } from '../styles/styles';

const ProductDetails = ({ route: { params } }) => {
  console.log(params.id);

  return (
    <View
      style={{
        ...defaultStyle
      }}
    >
      <Text>ProductDetails</Text>
    </View>
  );
};

export default ProductDetails;

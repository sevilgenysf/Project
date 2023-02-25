import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const ProductCard = ({
  stock,
  name,
  price,
  image,
  id,
  addToCardHandler,
  i,
  navigate
}) => {
  return (
    <TouchableOpacity
      onPress={() => navigate.navigate('productdetails', { id })}
    >
      <View
        style={{
          elevation: 1,
          width: 220,
          alignItems: 'center',
          justifyContent: 'space-between',
          margin: 20,
          borderRadius: 20,
          height: 400,
          backgroundColor: i % 2 === 0
        }}
      ></View>
    </TouchableOpacity>
  );
};

export default ProductCard;

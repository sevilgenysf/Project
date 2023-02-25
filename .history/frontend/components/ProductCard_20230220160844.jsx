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
    ></TouchableOpacity>
  );
};

export default ProductCard;

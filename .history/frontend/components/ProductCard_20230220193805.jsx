import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { colors } from '../styles/styles';
import { Button } from 'react-native-paper';

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
          elevation: 5,
          width: 220,
          alignItems: 'center',
          justifyContent: 'space-between',
          margin: 20,
          borderRadius: 20,
          height: 350,
          backgroundColor: i % 2 === 0 ? colors.color1 : colors.color2
        }}
      >
        <Image
          source={{
            uri: image
          }}
          style={{
            width: 100,
            height: 200,
            resizeMode: 'contain',
            position: 'absolute',
            left: 50,
            top: 50
          }}
        />

        <View
          style={{
            flexDirection: 'row',
            padding: 20,
            justifyContent: 'space-between',
            width: '100%'
          }}
        >
          <Text
            numberOfLines={2}
            style={{
              color: i % 2 === 0 ? colors.color2 : colors.color3,
              fontSize: 20,
              fontWeight: '800'
            }}
          >
            {name}
          </Text>
          <Text
            numberOfLines={2}
            style={{
              color: i % 2 === 0 ? colors.color2 : colors.color3,
              fontSize: 20,
              fontWeight: '800'
            }}
          >
            ${price}
          </Text>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: i % 2 === 0 ? colors.color2 : colors.color3,
            borderRadius: 0,
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
            width: '100%'
          }}
        >
          <Button
            onPress={() => addToCardHandler(id, stock)}
            textColor={i % 2 === 0 ? colors.color1 : colors.color2}
          >
            Add to Card
          </Button>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

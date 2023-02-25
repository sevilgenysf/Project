import { View, Text, Dimensions, StyleSheet } from 'react-native';
import React, { useRef } from 'react';
import { colors, defaultStyle } from '../styles/styles';
import Header from '../components/Header';
import Carousel from 'react-native-snap-carousel';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = SLIDER_WIDTH;

const ProductDetails = ({ route: { params } }) => {
  console.log(params.id);

  const isCarousel = useRef(null);

  const images = [
    {
      id: 1,
      url: 'https://images.pexels.com/photos/140439/pexels-photo-140439.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    },
    {
      id: 2,
      url: 'https://images.pexels.com/photos/140439/pexels-photo-140439.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    }
  ];

  return (
    <View
      style={{
        ...defaultStyle,
        padding: 0,
        backgroundColor: colors.color1
      }}
    >
      <Header back={true} />
      {/* Carousel */}

      <Carousel
        layout="stack"
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        ref={isCarousel}
        data={images}
        renderItem={CarouselCardItem}
      />
    </View>
  );
};

const CarouselCardItem = (item, index) => {
  <View style={style.container} key={index}>
    <Image source={{ uri: item.url }} style={style.image} />
  </View>;
};

const style = StyleSheet.create({
  container: {},
  image: {
    width: ITEM_WIDTH,
    height: 250,
    resizeMode: 'contain'
  }
});

export default ProductDetails;

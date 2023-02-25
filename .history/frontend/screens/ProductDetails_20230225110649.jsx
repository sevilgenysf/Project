import { View, Text, Dimensions, StyleSheet, Image } from 'react-native';
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
      url: 'https://cdn.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej.png'
    },
    {
      id: 2,
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZie-ga4-G5FHFxyTvD97Mh65TrdBcwoXV7-mwww_US5c5UgO3k8vtHSSX5pJtV4HdosM&usqp=CAU'
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
      <View
        style={{
          backgroundColor: colors.color2,
          padding: 35,
          flex: 1,
          marginTop: -280
        }}
      ></View>

      <Text>Asasdas</Text>
    </View>
  );
};

const CarouselCardItem = ({ item, index }) => (
  <View style={style.container} key={index}>
    <Image source={{ uri: item.url }} style={style.image} />
  </View>
);

const style = StyleSheet.create({
  container: {
    backgroundColor: colors.color1,
    width: ITEM_WIDTH,
    paddingVertical: 50,
    height: 380
  },
  image: {
    width: ITEM_WIDTH,
    resizeMode: 'contain',
    height: 250
  }
});

export default ProductDetails;

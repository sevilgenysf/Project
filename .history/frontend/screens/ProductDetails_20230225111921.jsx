import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';
import React, { useRef } from 'react';
import { colors, defaultStyle } from '../styles/styles';
import Header from '../components/Header';
import Carousel from 'react-native-snap-carousel';
import { Avatar } from 'react-native-paper';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = SLIDER_WIDTH;

const ProductDetails = ({ route: { params } }) => {
  console.log(params.id);

  const name = 'Macbook pro';
  const price = 3625;
  const description =
    'Lorem ipsum dolor sit amet, consectetur adip, consectetur adipiscing elit, sed diam nonumy eirmod, sed diam nonumy eirmod, sed diam nonumy eirmod, sed diam, nonumy eirmod, nonumy eirm, non';

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
          marginTop: -280,
          borderTopLeftRadius: 55,
          borderTopRightRadius: 55
        }}
      >
        <Text
          numberOfLines={2}
          style={{
            fontSize: 25
          }}
        >
          {name}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '900'
          }}
        >
          ₺{price}
        </Text>
        <Text
          style={{
            letterSpacing: 1,
            lineHeight: 20,
            marginVertical: 15
          }}
          numberOfLines={8}
        >
          {description}
        </Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 5
          }}
        >
          <Text
            style={{
              color: colors.color3,
              fontWeight: '100'
            }}
          >
            Quantity
          </Text>

          <View
            style={{
              width: 80,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <TouchableOpacity>
              <Avatar.Icon icon={'minus'} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
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

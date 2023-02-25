import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import React, { Component, useState } from 'react';
import { defaultStyle, colors } from '../styles/styles';
import Header from '../components/Header';
import { Avatar, Button } from 'react-native-paper';
import SearchModal from '../components/SearchModal';
import ProductCard from '../components/ProductCard';
import { useNavigation } from '@react-navigation/native';

const categories = [
  { category: 'home', _id: 'asdasd' },
  { category: 'about', _id: 'as' },
  { category: 'contact', _id: 'asd' }
];

const products = [
  {
    price: 23123,
    stock: 23,
    name: 'Sample',
    _id: 'Saadasdasdasd',
    images: [
      {
        url: 'https://play-lh.googleusercontent.com/ZyWNGIfzUyoajtFcD7NhMksHEZh37f-MkHVGr5Yfefa-IX7yj9SMfI82Z7a2wpdKCA=w240-h480-rw'
      }
    ]
  },
  {
    price: 23123,
    stock: 23,
    name: 'Macbook',
    _id: 'Saadasdasdasdasdasd',
    images: [
      {
        url: 'https://play-lh.googleusercontent.com/ZyWNGIfzUyoajtFcD7NhMksHEZh37f-MkHVGr5Yfefa-IX7yj9SMfI82Z7a2wpdKCA=w240-h480-rw'
      }
    ]
  },
  {
    price: 23123,
    stock: 23,
    name: 'Sample',
    _id: 'Saadasdasdasdasdasd',
    images: [
      {
        url: 'https://play-lh.googleusercontent.com/ZyWNGIfzUyoajtFcD7NhMksHEZh37f-MkHVGr5Yfefa-IX7yj9SMfI82Z7a2wpdKCA=w240-h480-rw'
      }
    ]
  }
];

const Home = () => {
  const navigate = useNavigation();
  const [category, setCategory] = useState('');

  const [activeSearch, setActiveSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const categoryButtonHandler = (id) => {
    setCategory(id);
  };

  const addToCardHandler = (id) => {
    console.log(id);
  };

  return (
    <>
      {activeSearch && (
        <SearchModal
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setActiveSearch={setActiveSearch}
          product={products}
        />
      )}
      <View style={defaultStyle}>
        <Header />

        {/* Header and SearchBar Container */}

        <View
          style={{
            paddingTop: 40,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          {/* Header */}
          <View>
            <Text style={{ fontSize: 25 }}>Our</Text>
            <Text style={{ fontSize: 25, fontWeight: '900' }}>Products</Text>
          </View>

          {/* SearchBar */}

          <View>
            <TouchableOpacity onPress={() => setActiveSearch((prev) => !prev)}>
              <Avatar.Icon
                icon={'magnify'}
                color={'gray'}
                size={40}
                style={{ backgroundColor: colors.color1_light, elevation: 0.1 }}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Categories */}

        <View
          style={{
            flexDirection: 'row',
            height: 80
          }}
        >
          <ScrollView
            horizontal
            contentContainerStyle={{ alignItems: 'center' }}
            showsHorizontalScrollIndicator={false}
          >
            {categories.map((item, index) => (
              <Button
                key={item._id}
                style={{
                  backgroundColor:
                    category === item._id ? colors.color1 : colors.color5,
                  borderRadius: 100,
                  margin: 5
                }}
                onPress={() => categoryButtonHandler(item._id)}
              >
                <Text
                  style={{
                    fontSize: 12,
                    color: category === item._id ? colors.color2 : 'gray'
                  }}
                >
                  {item.category}
                </Text>
              </Button>
            ))}
          </ScrollView>
        </View>

        {/* prodcts */}

        <View style={{ flex: 1 }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {products.map((item, index) => (
              <ProductCard
                stock={item.stock}
                name={item.name}
                price={item.price}
                image={item.images[0]?.url}
                addToCardHandler={addToCardHandler()}
                id={item._id}
                key={item._id}
                i={index}
                navigate={navigate}
              />
            ))}
          </ScrollView>
        </View>
      </View>
    </>
  );
};

export default Home;

import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import React, { Component, useState } from 'react';
import { defaultStyle, colors } from '../styles/styles';
import Header from '../components/Header';
import { Avatar, Button } from 'react-native-paper';
import SearchModal from '../components/SearchModal';

const Home = () => {
  const categories = [
    { category: 'home', _id: 'asdasd' },
    { category: 'about', _id: 'as' },
    { category: 'contact', _id: 'asd' }
  ];

  const products = [
    {
      price: 23123,
      name: 'Sample',
      _id: 'Saadasdasdasd',
      images: [
        {
          url: 'https://images.unsplash.com/photo-1504349427781-111111111111?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
        }
      ]
    }
  ];

  const [category, setCategory] = useState('');

  const [activeSearch, setActiveSearch] = useState(false);

  const [searchQuery, setSearchQuery] = useState('');

  const categoryButtonHandler = (id) => {
    setCategory(id);
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
      </View>
    </>
  );
};

export default Home;

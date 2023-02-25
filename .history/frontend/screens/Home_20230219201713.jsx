import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import React, { Component } from 'react';
import { defaultStyle, colors } from '../styles/styles';
import Header from '../components/Header';
import { Avatar, Button } from 'react-native-paper';

const Home = () => {
  const categories = [
    { category: 'home', _id: 'asdasd' },
    { category: 'about', _id: 'as' },
    { category: 'contact', _id: 'asd' }
  ];

  return (
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
          <TouchableOpacity>
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
        <ScrollView>
          {categories.map((item, index) => (
            <Button
              key={index}
              style={{
                backgroundColor: colors.color5,
                borderRadius: 100,
                margin: 5
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  color: 'gray'
                }}
              >
                {item.category}
              </Text>
            </Button>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;

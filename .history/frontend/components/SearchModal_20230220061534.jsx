import {
  View,
  Text,
  Platform,
  StatusBar,
  SafeAreaView,
  ScrollView
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../styles/styles';
import { Searchbar } from 'react-native-paper';

const SearchModal = ({
  searchQuery,
  setActiveSearch,
  setSearchQuery,
  products = []
}) => {
  const navigate = useNavigation();
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        zIndex: 100,
        backgroundColor: colors.color2,
        padding: 35,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
      }}
    >
      <SafeAreaView>
        <Searchbar
          placeholder="Search..."
          onChangeText={(query) => setSearchQuery(query)}
          value={searchQuery}
          style={{
            marginTop: 20
          }}
        />

        <ScrollView></ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default SearchModal;

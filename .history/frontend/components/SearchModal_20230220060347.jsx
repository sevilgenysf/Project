import { View, Text } from 'react-native';
import React from 'react';

const SearchModal = ({
  searchQuery,
  setActiveSearch,
  setSearchQuery,
  products = []
}) => {
  const navigate = useNavigation();
  return (
    <View>
      <Text>SearchModal</Text>
    </View>
  );
};

export default SearchModal;

import {View, Text} from 'react-native';
import React from 'react';
import Header from './Header';

export default function Search() {
  return (
    <View style={{flex: 1}}>
      <Header name="Search Screen" />
      <Text>Search Screen</Text>
    </View>
  );
}

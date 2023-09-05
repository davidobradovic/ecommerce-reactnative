import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'

import Categories from '../components/Store/Categories'
import Products from '../components/Store/Products'

const StorePage = () => {
  return (
    <View style={[tw`flex`]}>
      <Categories />
      <Products />
    </View>
  )
}

export default StorePage

const styles = StyleSheet.create({})
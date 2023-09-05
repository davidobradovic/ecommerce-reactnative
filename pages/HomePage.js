import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import HomeAd from '../components/Home/HomeAd'
import TopSellers from '../components/Home/TopSellers'

const HomePage = () => {
  return (
    <View style={[tw`flex`]}>
      <HomeAd />
      <Text style={[ tw`mt-2 mb-1 ml-1 font-bold` ]}>Top Sellers</Text>
      <TopSellers />
    </View>
  )
}

export default HomePage

const styles = StyleSheet.create({})
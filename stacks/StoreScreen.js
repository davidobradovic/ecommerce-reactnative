import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import StorePage from '../pages/StorePage'

import { containerStyles } from '../styles/container';
import tw from 'twrnc'

const StoreScreen = () => {
  return (
    <View style={[ containerStyles.container, tw`p-3` ]}>
      <StorePage />
    </View>
  )
}

export default StoreScreen

const styles = StyleSheet.create({})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { containerStyles } from '../styles/container'
import tw from 'twrnc'
import HomePage from '../pages/HomePage'

const HomeScreen = () => {
  return (
    <View style={[containerStyles.container, tw`p-3`]}>
      <HomePage />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})
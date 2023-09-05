import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const HomeAd = () => {
  return (
      <TouchableOpacity activeOpacity={0.75}>
          <ImageBackground source={require('../../assets/bg.jpg')} style={{ height: 200, borderRadius: 10, overflow: 'hidden' }}>
              <View style={[tw`p-3`, { backgroundColor: 'rgba(0,0,0,.5)', height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }]}>
                  <Text style={tw`text-white text-xl font-bold`}>BUY BEST, BUY APPLE</Text>
              </View>
          </ImageBackground>
      </TouchableOpacity>
  )
}

export default HomeAd

const styles = StyleSheet.create({})
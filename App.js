import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import tw from 'twrnc'

import { Home, Settings, ShoppingCart, Store, Filter } from 'lucide-react-native'

import HomeScreen from './stacks/HomeScreen';
import StoreScreen from './stacks/StoreScreen'
import CartScreen from './stacks/CartScreen'
import SettingsScreen from './stacks/SettingsScreen'
import ProductPage from './pages/ProductPage'


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='HomScreen' component={HomeScreen} />
      <Stack.Screen name='TopProductScreen' component={ProductPage} />
    </Stack.Navigator>
  )
}

const StoreStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='StoreScreen' component={StoreScreen} />
      <Stack.Screen name='ProductScreen' component={ProductPage} />
    </Stack.Navigator>
  )
}

const cartProducts = 1;

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        headerShadowVisible: false,
        tabBarInactiveTintColor: 'rgba(0,0,0,0.4)',
        tabBarStyle: {
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: 'rgb(0,0,0)'
      }}>
        <Tab.Screen options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <Home size={size} color={color} />
            )
          }
        }} name='Home' component={HomeStack} />
        <Tab.Screen options={{
          headerRight: () => (
            <View style={tw`mr-4`}>
              <TouchableOpacity>
                <Filter size={20} color='black' />
              </TouchableOpacity>
            </View>
          ),
          tabBarIcon: ({ color, size }) => {
            return (
              <Store size={size} color={color} />
            )
          }
        }} name='Store' component={StoreStack} />
        <Tab.Screen options={{
          title: `Cart ${cartProducts > 0 ? `(${cartProducts})` : ''}`,
          tabBarIcon: ({ color, size }) => {
            return (
              <ShoppingCart size={size} color={color} />
            )
          }
        }} name='Cart' component={CartScreen} />
        <Tab.Screen options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <Settings size={size} color={color} />
            )
          }
        }} name='Settings' component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
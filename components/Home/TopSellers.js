import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'

import { products } from '../../data/products'
import { ArrowRight } from 'lucide-react-native'
import { useNavigation } from '@react-navigation/native'

const TopSellers = () => {

    const navigation = useNavigation()


    const ProductItem = ({ image, name, id }) => {
        return (
            <View style={tw`bg-white mr-1.5 flex items-center p-3 rounded shadow-lg`}>
                <Image source={image} style={{ width: 100, resizeMode: 'contain', height: 100 }} />
                <Text style={[tw`font-bold mb-2 mt-2`, { fontSize: 9 }]}>{name}</Text>
                <TouchableOpacity onPress={() => navigation.navigate('TopProductScreen', { id: id })} style={[tw`bg-black`, { width: '100%', height: 30, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 20 }]}>
                    <ArrowRight size={13} color='white' />
                </TouchableOpacity>
            </View>
        )
    }

  return (
    <FlatList 
        style={tw`p-2`}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={products}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <ProductItem image={item.image} name={item.name} id={item.id} />}
    />
  )
}

export default TopSellers

const styles = StyleSheet.create({})
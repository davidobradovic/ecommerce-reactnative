import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { products } from '../../data/products'
import { useNavigation } from '@react-navigation/native'

const Products = () => {

    const navigation = useNavigation();

    const ProductItem = ({ image, name, storage, color, price, id }) => {
        return (
            <View style={[ tw`shadow-xl bg-gray-100 mb-3` , { width: Dimensions.get('window').width - 10, overflow: 'hidden' } ]}>
                <Image style={[ {width: Dimensions.get('window').width - 10, height: 350, resizeMode: 'cover'} ]} source={image} />
                <View style={[ tw`p-2` ]}>
                    <Text style={[ tw`text-black font-bold text-sm` ]}>{name}</Text>
                    <Text style={[ tw`text-black font-semibold text-gray-500 text-xs` ]}>{storage} GB</Text>
                    <Text style={[ tw`text-black font-semibold text-gray-500 text-xs` ]}>{color}</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('ProductScreen', { id: id })} activeOpacity={0.7} style={[ tw`mx-2 mb-2 bg-black mr-6 p-3 flex items-center justify-center` ]}>
                    <Text style={[ tw`text-white` ]}><Text style={[ tw`font-bold` ]}>BUY: </Text>{price} $</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
            <FlatList
                style={tw`my-3`} 
                showsVerticalScrollIndicator={false}
                data={products}
                renderItem={({item}) => <ProductItem image={item.image} name={item.name} storage={item.storage} color={item.color} price={item.price} id={item.id} />}
                keyExtractor={item => item.id}
            />
    )
}

export default Products

const styles = StyleSheet.create({})
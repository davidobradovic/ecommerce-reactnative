import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { categories } from '../../data/categories'

const Categories = () => {

    const CategoryItem = ({title}) => {
        return (
            <TouchableOpacity activeOpacity={0.7} style={[ tw`p-2 bg-black mr-1 rounded-full` ]}>
                <Text style={[ tw`text-white` ]}>{title}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={categories}
            renderItem={({item}) => <CategoryItem title={item.title} />}
            keyExtractor={item => item.id}
        />
    )
}

export default Categories

const styles = StyleSheet.create({})
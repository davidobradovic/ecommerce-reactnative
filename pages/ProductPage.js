import { Dimensions, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { products } from '../data/products'

import tw from 'twrnc'
import { containerStyles } from '../styles/container'
import { Camera, Cpu, Minus, Plus, Ruler, Scale } from 'lucide-react-native'

const ProductPage = () => {

    const [ countProducts, setCountProducts ] = useState(1)

    const route = useRoute();
    const productId = route.params?.id

    const product = products.filter((item) => item.id === productId)
    
    console.log(countProducts)

    return (
        <ScrollView style={[containerStyles.container]}>
            {
                product.map((product) => {
                    return (
                        <View key={product.id}>
                            <Image source={product.image} style={styles.productImage} />
                            <View style={tw`p-2 `}>
                                <Text style={[tw`font-bold text-lg`]}>{product.name}</Text>
                                <Text style={[tw`font-semibold text-gray-500 text-sm`]}>Storage: {product.storage} GB</Text>
                                <Text style={[tw`font-semibold text-gray-500 text-sm`]}>Color: {product.color}</Text>
                            </View>
                            <View style={tw`mx-2 mb-2 bg-gray-100 p-2`}>
                                <Text style={tw`font-bold mb-2`}>Characteristics</Text>
                                
                                <View style={[styles.characteristicsDetail, tw`mb-1 rounded`]}> <Ruler size={15} color='black' /> <Text style={tw`text-black text-xs`}> Inches: {product.inch}</Text> </View>
                                <View style={[styles.characteristicsDetail, tw`mb-1 rounded`]}> <Scale size={15} color='black' /> <Text style={tw`text-black text-xs`}> Weight: {product.weight}gr</Text> </View>
                                <View style={[styles.characteristicsDetail, tw`mb-1 rounded`]}> <Cpu size={15} color='black' />q <Text style={tw`text-black text-xs`}> Chip: {product.processor}</Text> </View>
                                <View style={styles.characteristicsDetail}> <Camera size={15} color='black' /> <Text style={tw`text-black text-xs`}> Camera: {product.camera}mp</Text> </View>

                            </View>
                            <View style={tw`mx-2 flex-row bg-gray-100`}>
                                <TouchableOpacity onPress={() => setCountProducts(countProducts === 1 ? 1 : countProducts - 1)} style={styles.countButton}>
                                    <Minus size={20} color='white' />
                                </TouchableOpacity>
                                <TextInput editable={false} style={styles.countInput} placeholder='0' value={`${countProducts}`} keyboardType='number-pad' />
                                <TouchableOpacity onPress={() => setCountProducts(countProducts + 1)} style={styles.countButton}>
                                    <Plus size={20} color='white' />
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity style={tw`m-2 bg-black p-3 flex items-center justify-center`}>
                                <Text style={tw`text-white`}>BUY</Text>
                            </TouchableOpacity>
                        </View>
                    )
                })
            }
        </ScrollView>
    )
}

export default ProductPage

const styles = StyleSheet.create({
    productImage: {
        width: Dimensions.get('window').width,
        height: 550,
        resizeMode: 'contain'
    },
    countButton: {
        width: 40,
        height: 40,
        backgroundColor: 'black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    countInput: {
        width: '78.5%',
        textAlign: 'center'
    },
    characteristicsDetail: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        fontSize: 12,
        backgroundColor: 'white',
        padding: 5
    }
})
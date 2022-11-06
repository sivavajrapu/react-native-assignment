import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProducts } from '../redux/actions'

export default function Home({navigation}) {
    const [price, setPrice] = useState('')
    const { products } = useSelector(state => state.productReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
        getPrice();
    }, [])

    const getPrice = () =>{
        const totalPrice = products.reduce((total,item)=>{
            return total + item.price;
        },0)
        setPrice(totalPrice)
    }
    return (
        <View style={styles.container}>
            <Text style={{fontSize:40}}>Product Details</Text>
            <Button title='Add Products' onPress={()=>{navigation.navigate('AddProducts')}}/>
            <Text style={{fontSize:24}}>Total Price of all products : {price.toFixed(2)}</Text>
            <FlatList
                scrollEnabled
                showsHorizontalScrollIndicator={false}
                style={{width:"98%",margin:20}}
                data={products}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate('Map')}>
                        <Image source={{uri:item.image}} style={{height:100,width:100}}/>
                        <Text>{item.title}</Text>
                        <Text>Price : {item.price}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: "96%",
        backgroundColor: "pink",
        marginBottom: 5,
        alignItems: "center",
        justifyContent: "center",
        height:200,
        borderRadius: 10
    },
    container: {
        alignItems: "center",
        justifyContent: "center",
        flex:1,
        alignSelf:"center",
        height:"100%"
    }
})
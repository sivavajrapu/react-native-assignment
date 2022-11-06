import { View, Text, Image,StyleSheet } from 'react-native'
import React from 'react'

export default function ProductDetail({ route }) {
    const { title, price, image, category, desc } = route.params
    return (
        <View style={styles.container}>
            <Text style={{fontSize:40}}>PRODUCT DETAILS</Text>
            <View style={styles.card}>
            
                        <Image source={{uri:image}} style={{height:100,width:100}}/>
                        <Text>{title}</Text>
                        <Text>Price : {price}</Text>
                        <Text>{desc}</Text>
                        <Text>{category}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "pink",
        marginBottom: 5,
        alignItems: "center",
        justifyContent: "center",
        height:200,
        borderRadius: 10,
        width:"94%"
    },
    container: {
        alignItems: "center",
            height:"100%",
        width:"100%"
    }
})
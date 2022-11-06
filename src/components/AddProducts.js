import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProducts } from '../redux/actions'

export default function AddProducts({navigation}) {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [desc, setDesc] = useState("");
    const [image, setImage] = useState("");
    const [category, setCategory] = useState("");
    const dispatch = useDispatch();
    const addProduct = () =>{
        const data = {
            title : title,
            price: price,
            desc: desc,
            image: image,
            category: category
        }
        dispatch(addProducts(data))
        navigation.navigate('ProductDetail',{title:title,price:price,desc:desc,image:image,category:category})

    }
    return (
        <View style={styles.container}>
            <Text>Add Products</Text>
            <TextInput
                value={title}
                onChangeText={text => setTitle(text)}
                placeholder="Enter Title"
                style={styles.textInput}
                 />
            <TextInput
                value={price}
                onChangeText={text => setPrice(text)}
                placeholder="Enter Price"
                style={styles.textInput}
                 />
            <TextInput
                value={desc}
                onChangeText={text => setDesc(text)}
                placeholder="Enter Description"
                style={styles.textInput}
                 />
            <TextInput
                value={image}
                onChangeText={text => setImage(text)}
                placeholder="Enter Image"
                style={styles.textInput}
                 />
            <TextInput
                value={category}
                onChangeText={text => setCategory(text)}
                placeholder="Enter Category"
                style={styles.textInput}
                 />

            <Button title="Add Product" onPress={() => addProduct()} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center"
    },
    heading: {
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 10
    },
    textInput: {
        borderColor: "black",
        borderWidth: 1,
        margin: 5,
        marginTop: 10,
        width: "94%"
    }
})
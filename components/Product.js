import React from "react";
import {Text, View, StyleSheet} from "react-native";

const Product = (props) => {
    <View>
        <View>
            <Image source={props.image}></Image>
        </View>
        <View>
            <Text>{props.name}</Text>
            <Text>{props.category}</Text>
            <Text>{props.description}</Text>
            <Text>{props.stock}</Text>
            <Text>{props.price}</Text>
        </View>
    </View>
}


const styles = StyleSheet.create({
    
})

export default Product;
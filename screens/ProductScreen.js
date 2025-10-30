import React from "react";
import{View, Text, FlatList, StyleSheet} from "react-native";
import data from '../data/products.json';
import Products from "../components/Products";

class ProductScreen extends React.Component{

    constructor() {
        super();
        this.state = {
            products: [],
        }
    }


    componentDidMount() {
        this.setState({
            products: data,
        })
    }

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Products</Text>
                <FlatList
                    data={this.state.products}
                    keyExtractor={products => products.id}
                    renderItem={({item})=> (
                        <View style={styles.productCard}>
                            <Text>Name: {item.name}</Text>
                            <Text>Category: {item.category}</Text>
                            <Text style={styles.productPrice}>Price: {item.price}</Text>
                            <Text style={styles.productStock}>Stock: {item.stock}</Text>
                            <Text style={styles.productImage}>Image: {item.image}</Text>
                            <Text style={styles.productDescription}>Description: {item.description}</Text>
                            
                            
                        </View>
                    )}
                />
            </View>
        )
    }
}







const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 10,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 15,
        color: '#222',
    },
    productCard: {
        backgroundColor: "#fff",
        borderRadius: 10,
        marginVertcal: 10,
        padding: 15,
    },
    productImage: {
        flex: 1,
        width: "100%",
        height: 180,
        borderRadius: 10,
        marginBottom: 10,
        resizeMode: "contain",
    },
    productDescription: {
        fontSize: 14,
        color: "#666",
        marginBottom: 5,
    },
    productStock: {
        fontSize: 14,
        color: "#2e7d32",
    },
    productPrice: {
        fontSize: 14,
        color: "#1565c0",
        fontWeight: "bold",
    },

})

export default ProductScreen;
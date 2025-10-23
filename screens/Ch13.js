import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

class Ch13 extends React.Component {
    constructor() {
        super();
        this.state = {
            posts: [],
        }
    }

    async componentDidMount() {
        const data = await fetch("https://jsonplaceholder.typicode.com/posts");
        const jsonData = await data.json();
        console.log(jsonData);
        this.setState( {
            posts: jsonData,
            
        });
    }

    render() {
        const {posts} = this.state;
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Posts</Text>
                <FlatList 
                    keyExtractor={(posts) => posts.id}
                    data = {posts}
                    renderItem={({item}) => (
                        <View style={styles.card}>
                            <Text style={styles.cardTitle}>{item.title}</Text>
                            <Text style={styles.cardBody}>{item.body}</Text>
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
        backgroundColor: '#f0f0f0',
        padding: 15,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 15,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        marginBottom: 10,
        
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#333',
    },
    cardBody: {
        fontSize: 16,
        color: '#555',
    },
})


export default Ch13;
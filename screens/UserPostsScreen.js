import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

class UserPostsScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            user: [],
        }
    }

    async componentDidMount() {
        const data = await fetch("https://jsonplaceholder.typicode.com/users");
        const jsonData = await data.json();
        this.setState( {
            user: jsonData,
        });
    }

    render() {
        const {user} = this.state;
        return(
            <View>
                <Text>UserPosts Screen</Text>
                <FlatList 
                    keyExtractor={user => user.id}
                    data = {user}
                    renderItem={(item) => {
                        <View>
                            <Text>{item.name}</Text>
                            <Text>{item.email}</Text>
                            <TouchableOpacity></TouchableOpacity>
                        </View>
                    }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({

})

export default UserPostsScreen;
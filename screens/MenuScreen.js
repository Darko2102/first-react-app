import React from "react";
import{View, StyleSheet, Text, Button, TouchableOpacity} from "react-native";

const MenuScreen = (props) => {
    console.log(props);
    return(
        <View>
            <Text style={styles.text}>Welcome to Menu Screen</Text>
            <Button
                title="Go to List Screen"
                onPress = {() => props.navigation.navigate("List")}
            />
            <TouchableOpacity
                style={styles.container}
                title="Go to Quiz Screen"
                onPress = {() => props.navigation.navigate("Quiz")}
            ></TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        textAlign: "center",
        fonstSize: 20,
        marginVertical: 20,
    },
    container: {
        textAlign: "center",
        fonstSize: 20,
        marginVertical: 20,
        padding: 15,
        backgroundColor: "blue",
    }
});

export default MenuScreen;
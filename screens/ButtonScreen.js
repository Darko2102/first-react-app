import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

const ButtonScreen = () => {
    let counter = 0;
    let counter1 = 0;
    return(
        <View>
            <Text>Button Screen</Text>
            <Button 
                title="Click me"
                color="purple"
                onPress={() => console.log("Button Clicked", ":", counter++)}
            ></Button>
            <TouchableOpacity style={styles.touchableBtn} onPress={() => console.log("TouchableOpacity clicked: ", counter1++)}>
                <Text style={styles.text}>Click Touchable Element</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    touchableBtn: {
        backgroundColor: "Purple",
        marginVertical:  15,
        padding: 20,
        borderRadius: 6,
        marginHorizontal: 20,
    },
    text: {
        color: "white",
        textAlign: "center",
        fontSize: 25,
        fontWeight: "bold",
    }
});

export default ButtonScreen;
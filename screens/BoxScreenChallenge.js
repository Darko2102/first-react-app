import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

const BoxScreenChallenge = () => {
    return(
        <View style={styles.wrapper}>
            <View style={styles.box1Style}></View>
            <View style={styles.box2Style}></View>
            <View style={styles.box3Style}></View>
        </View>
    );
};

const styles = StyleSheet.create({
        wrapper:{
        flex: 1,
        flexWrap: 'nowrap',
        flexDirection: "row",
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        alignContent: 'space-evenly',
        backgroundColor: "#eee",
    },
    box1Style:{
        width: 100,
        height: 100,
        backgroundColor: "red",
    },
    box2Style:{
        width: 100,
        height: 100,
        alignSelf: 'center',
        backgroundColor: "yellow",
    },
    box3Style:{
        width: 100,
        height: 100,
        backgroundColor: "green",
    },
})

export default BoxScreenChallenge;

https://www.yogalayout.dev/playground/


https://reactnative.dev/docs/layout-props
 
import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

const BoxScreen = () => {
    return(
    <View style={styles.wrapper}>
        <View style={styles.box1Style}></View>
        <View style={styles.box2Style}></View>
        <View style={styles.box3Style}></View>
        <View style={styles.box4Style}></View>
        <View style={styles.box5Style}></View>
        <View style={styles.box6Style}></View>
    </View>
    )
}


const styles = StyleSheet.create({
    wrapper:{
        flex: 1,
        flexWrap: 'nowrap',
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'flex-start',
        alignContent: 'space-evenly',
        backgroundColor: "#eee",
    },
    box1Style:{
        width: 100,
        height: 100,
        alignSelf: "flex-end",
        backgroundColor: "red",
    },
    box2Style:{
        width: 100,
        height: 100,
        backgroundColor: "yellow",
    },
    box3Style:{
        width: 100,
        height: 100,
        backgroundColor: "green",
    },
    box4Style:{
        width: 100,
        height: 100,
        backgroundColor: "purple",
    },
    box5Style:{
        width: 100,
        height: 100,
        backgroundColor: "blue",
    },
    box6Style:{
        width: 100,
        height: 100,
        backgroundColor: "orange",
    },
})

export default BoxScreen;
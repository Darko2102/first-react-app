import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

const QuizScreen = (props) => {
    return(
        <View>
            <Text style={styles.text2}>Kviz</Text>
            <Text style={styles.text}>1. pitanje</Text>
            <Text style={styles.text}>Ko osvaja Evroligu ove sezone?</Text>
            <Button
                style={styles.btn}
                title="Fenerbahce"
                onPress={() => console.log("Netacan odgovor")}
            ></Button>
            <Button
                style={styles.btn}
                title="Barca"
                onPress={() => console.log("Netacan odgovor")}
            ></Button>
            <Button
                style={styles.btn}
                title="Partizan"
                onPress={() => console.log("Tacan odgovor")}
            ></Button>
            <Button
                style={styles.btn}
                title="Olympiacos"
                onPress={() => console.log("Netacan odgovor")}
            ></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: "green",
        marginVertical:  15,
        padding: 20,
        borderRadius: 6,
        marginHorizontal: 20,
    },
    text: {
        color: "black",
        textAlign: "center",
        fontSize: 25,
        fontWeight: "bold",
    },
    text2: {
        color: "black",
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold",
    },
});

export default QuizScreen;
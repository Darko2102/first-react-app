import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ChallengeScreenModule3 = () => {

    const message = "Oooo, HELLO MY FRIEND, How are you?";

    let message2 = "I'm fine, thank you for ask! How are you?";

    return(
        <View style={styles.container}>
            <Text style={styles.message}>{message}</Text>;
            <Text style={styles.message2}>{message2}</Text>;
        </View>
    ); 
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "ccc",
    },
    message: {
        fontSize: 23,
    },
    message2: {
        fontSize: 20,
    },
    
});

export default ChallengeScreenModule3;
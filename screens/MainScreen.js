// importovanje biblioteka
import React from "react";
import {Text, StyleSheet, View} from "react-native";

//kreiranje komponeneta
const MainScreen = () => {
    return( 
        <View style={styles.container}>
            <Text style={styles.textStyle}>This is main screen</Text>
        </View>
    );
};

//kreiranje stylesheet-a
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    textStyle: {
        fontSize: 30,
    },
});


//eksportovanje komponente
export default MainScreen;
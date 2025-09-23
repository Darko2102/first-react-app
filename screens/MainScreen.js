// importovanje biblioteka
import React from "react";
import {Text, StyleSheet, View} from "react-native";

//kreiranje komponeneta
const MainScreen = () => {
    return( 
        <View style={styles.container}>
            <Text style={styles.textStyle}>Hello, World!</Text>
            <Text style={styles.textStyle2}>Ja sam Darko Danicic</Text>
            <Text style={styles.textStyle2}>Imam 14 godina. Zivim u Modrici. Pohadjam OS Sutjesku. Clan sam Digital School-a</Text>
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
    textStyle2: {
        color: "Blue",
        fontSize: 25,
        padding: 15,
        marginTop: 10,

    },
});


//eksportovanje komponente
export default MainScreen;
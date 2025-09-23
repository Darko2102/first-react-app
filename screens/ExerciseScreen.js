import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ExerciseScreen = () => {
    //Deklaracija varijabli let, const

    const message = "Hi there!";

    let message2 = "Darkeeec!";

    let citat = "LEPOTA OBUZDAVA SVAKU SRDZBU";
    const autor = "Gete";
    let citat2 = "KO NE ČINI NIŠTA ZA DRUGE, NE ČINI NIŠTA NI ZA SEBE.";
    let citat3 = "NIŠTA TAKO MOĆNO, TAKO SNAŽNO NE OTKRIVA ČOVEKOVU NARAV KAO SMEH.";
    let citat4 = "NAJVEĆA KUŠNJA JE BIJEDA. I NAJMUDRIJE RIBE GLAD TJERA NA UDICU.";

    //message = "Moja varijabla ima novu vrijednost!";

    return(
        <View style={styles.container}>
            <Text>{message}</Text>;
            <Text>{message2}</Text>;
        </View>
    ); 
};


const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});

export default ExerciseScreen;
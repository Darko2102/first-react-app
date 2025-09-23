import React from "react";
import { Text, StyleSheet, View } from "react-native";

const Ch = () => {

    let citat1 = "LEPOTA OBUZDAVA SVAKU SRDZBU";
    const autor = "- Gete";
    let citat2 = "KO NE ČINI NIŠTA ZA DRUGE, NE ČINI NIŠTA NI ZA SEBE.";
    let citat3 = "NIŠTA TAKO MOĆNO, TAKO SNAŽNO NE OTKRIVA ČOVEKOVU NARAV KAO SMEH.";
    let citat4 = "NAJVEĆA KUŠNJA JE BIJEDA. I NAJMUDRIJE RIBE GLAD TJERA NA UDICU.";

    //message = "Moja varijabla ima novu vrijednost!";

    return(
        <View style={styles.container}>
            <Text style={style.quoteStyle}>{citat1}</Text>;
            <Text>{autor}</Text>;
            <Text>{citat2}</Text>;
            <Text>{autor}</Text>;
            <Text>{citat3}</Text>;
            <Text>{autor}</Text>;
            <Text>{citat4}</Text>;
            <Text>{autor}</Text>;
        </View>
    ); 
};


const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: "flex-end",
        justifyContent: "center",
        padding: 10,
    },
    quoteStyle: {  
        fontSize: 25,
        textAlign: 'center',
        marginBottom: 10,
    }
    authorStyle: {
        fontSize: 20,
        textAlign: 'left',
    },
});

export default Ch;
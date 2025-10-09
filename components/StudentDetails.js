import React from "react";
import{Text, View, StyleSheet, Image} from "react-native";

const StudentDetails = (props) => {

    return(
        <View>
            <View style={styles.cardWraper}>
                <View>
                    <Image source={props.image} style={styles.img}></Image>
            
                </View>
                <View style={styles.infoWraper}>
                    <Text style={styles.text}>{props.name}</Text>
                    <Text>{props.description}</Text>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    cardWraper: {
        flexDirection: "row",
        backgroundColor: "white",
        borderRadius: 8,
        width: "90%",
        alignSelf: "center",
        marginBottom: 12,
    },
    img: {
        width: 100,
        height: 100,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
    },
    infoWraper: {
        marginLeft: 20,
        marginTop:20,
    },
    text: {
        fontWeight: "bold",
    }
});

export default StudentDetails;
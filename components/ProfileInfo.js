import React from "react";
import{Text, View, StyleSheet, Image, TouchableOpacity, Button} from "react-native";

const ProfileInfo = (props) => {
    <View>
        <View> 
            <Image source={props.image} style={styles.img}></Image>
        </View>
        <View>
            <Text style={styles.text}>{props.name}</Text>
            <Text style={styles.text2}>{props.description}</Text>
        </View>
        <View>
            <Button onPress={() => console.log("Button clicked! ")}></Button>
        </View>
    </View>
}

const styles = StyleSheet.create({
    text: {
        fontWeight: "bold",
        fontSize: 25,
        textAlign: "center",
    },
    text2: {
        fontSize: 16,
        textAlign: "center",
        marginHorizontal: 20,
        padding: 8,
        marginTop: 10,
    },
    img: {
        height: "35%",
        width: "100%",
        borderRadius: 60,
    },
    btn: {
        borderRadius: 10,
    }
})


export default ProfileInfo;


import React from "react";
import {View, Text, Button, StyleSheet, Image, TouchableOpacity} from "react-native";
import ProfileInfo from "../components/ProfileInfo";

const ProfileScreen2 = () => {
    return(
        <ProfileInfo style={styles.txt} image={require('../assets/man.jpg')} name="John Doe" description="UI/UX Designer. We are passionate about creating beautiful design for startups & leading brandssa"  button="HIRE HIM"/> 
    ) 
}

const styles = StyleSheet.create({
    txt: {
        textAlign: "center",
        fontSize: 20,
        marginVertical: 20,
        marginTop: -30,
    }
});

export default ProfileScreen2;
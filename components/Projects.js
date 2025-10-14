import React from "react";
import{Text, View, StyleSheet, Image, TouchableOpacity, Button} from "react-native";

const Projects = (props) => {
    return(
        <View>
            <View>
                <Image source={props.image}></Image>
            </View>
        </View>
    )
}

export default Projects;
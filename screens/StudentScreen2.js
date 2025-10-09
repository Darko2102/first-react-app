import React from "react";
import{Text, View, StyleSheet} from "react-native";
import StudentDetails from "../components/StudentDetails";

const StudentScreen2 = () => {
    return(
        <View>
            <Text style={styles.text}>Students Screen</Text>
            <StudentDetails   name="Partizan" image={require('../assets/KK-Partizan-icon-logo.png')} description="Partizan" />
            <StudentDetails    name="Mikka" image={require('../assets/muurinen.jpg')} description="Mikkaaa"/>
            <StudentDetails    name="Vanja" image={require('../assets/kapiten.jpg')} description="Vanja Kapiteen"/>
            <StudentDetails    name="Carlic" image={require('../assets/carlic.jpg')} description="Carlic"/>
        </View>
    );
}
const styles = StyleSheet.create({
    text: {
        textAlign: "center",
        fontSize: 20,
        marginVertical: 20,
    }
});

export default StudentScreen2;
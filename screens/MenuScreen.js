import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const MenuScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Menu Screen</Text>
      
      <Button
        title="Go to List Screen"
        onPress={() => props.navigation.navigate("List")}
      />

      <Button
        title="Go to Quiz Screen"
        onPress={() => props.navigation.navigate("Quiz")}
      />


      <Button
        title="Go to Home Screen"
        onPress={() => props.navigation.navigate("Home")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    marginVertical: 20,
  },
});

export default MenuScreen;

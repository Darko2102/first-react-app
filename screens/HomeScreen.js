import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Home Screen!</Text>

      <Button
        title="Back to Menu"
        onPress={() => props.navigation.navigate("Menu")}
      />


      <TouchableOpacity
        style={styles.profileButton}
        onPress={() => props.navigation.navigate("Profile")}
      >
        <Text style={styles.profileText}>Go to Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  profileButton: {
    marginTop: 20,
    backgroundColor: "blue",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  profileText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default HomeScreen;

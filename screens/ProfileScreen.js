import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ProfileScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the Profile Screen</Text>


      <Button
        title="Back to Home"
        onPress={() => props.navigation.navigate("Home")}
      />
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
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default ProfileScreen;

import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const MenuScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Menu Screen</Text>
      
      <Button
      style={styles.btn}
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
      <Button
      style={styles.btn}
        title="Go to Students Screen"
        onPress={() => props.navigation.navigate("Student")}
      />
      <Button
      style={styles.btn}
        title="Go to Boxscreen"
        onPress={() => props.navigation.navigate("Box")}
      />
      <Button
      style={styles.btn}
      title="Go to BoxscreenChallnge"
      onPress={() => props.navigation.navigate("BoxScreen")}
      />
      <Button
      style={styles.btn}
      title="Go to Posts"
      onPress={() => props.navigation.navigate("Posts")}
      />
      <Button
      style={styles.btn}
      title="Go to Users"
      onPress={() => props.navigation.navigate("Users")}
      />
      <Button
      style={styles.btn}
      title="Go to UserPost Screen"
      onPress={() => props.navigation.navigate("UserPosts")}
      />
      <Button
      style={styles.btn}
      title="Go to Ch13 Screen"
      onPress={() => props.navigation.navigate("Ch13")}
      />
      <Button
      style={styles.btn}
      title="Go to Countries Screen"
      onPress={() => props.navigation.navigate("Countries")}
      />
      <Button
      style={styles.btn}
      title="Go to Country Details Screen"
      onPress={() => props.navigation.navigate("Country Details")}
      />
      <Button
      style={styles.btn}
      title="Products Screen"
      onPress={() => props.navigation.navigate("Products Screen")}
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
  btn: {
    marginBottom: 20,
  }
});

export default MenuScreen;

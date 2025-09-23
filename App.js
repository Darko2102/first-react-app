import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from "./screens/MainScreen";
import Screen2 from "./screens/Screen2.js";
import { StackScreen } from 'react-native-screens';
import ExerciseScreen from "./screens/ExerciseScreen";
import ChallengeScreenModule3 from "./screens/ChallengeScreenModule3";
import Ch from "./screens/Ch";


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Ch}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
  
}



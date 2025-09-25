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
import ListScreen from './screens/ListScreen';
import ListScreen2 from './screens/ListScreen2';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ListScreen2}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
  
}






import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from "./screens/MainScreen";
import Screen2 from "./screens/Screen2.js";
import { StackScreen } from 'react-native-screens';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MainScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
  
}



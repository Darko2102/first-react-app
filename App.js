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
import StudentScreen from './screens/StudentScreen';
import ButtonScreen from './screens/ButtonScreen';
import QuizScreen from './screens/QuizScreen';
import MenuScreen from './screens/MenuScreen';



const Stack = createStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name="Main" component={MainScreen}></Stack.Screen>
        <Stack.Screen name="List Screen" component={ListScreen}></Stack.Screen>
        <Stack.Screen name="Quiz Screen" component={QuizScreen}></Stack.Screen> 
        <Stack.Screen name="Button Screen" component={ButtonScreen}></Stack.Screen>
        <Stack.Screen name="Menu" component={MenuScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
        
     
    
        
      
    
  );
  
}






import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MenuScreen from './screens/MenuScreen';
import ListScreen from './screens/ListScreen';
import QuizScreen from './screens/QuizScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen'; 
import StudentScreen2 from './screens/StudentScreen2'; 
import ProfileScreen2 from './screens/ProfileScreen2'; 
import BoxScreen from './screens/BoxScreen'; 
import BoxScreenChallenge from './screens/BoxScreenChallenge'; 


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen name="Quiz" component={QuizScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Student" component={StudentScreen2} />
        <Stack.Screen name="Box" component={BoxScreen} />
        <Stack.Screen name="BoxScreen" component={BoxScreenChallenge} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// export default function App() {
//   return(
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Profile">
//         <Stack.Screen name="Profile" component={ProfileScreen2} />
//       </Stack.Navigator>

//     </NavigationContainer>
//   )
// }

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ChatScreen from "./screens/Chat";
import ScheduleScreen from "./screens/Schedule"
import MainScreen from "./screens/Main"
import LoginScreen from "./screens/Login";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { } from 'react-native-screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScheduleOverviewScreen from './screens/ScheduleOverview';

//npm run web

//They log in then send there employeeID to the website.
//The website returns   their schedule, and chats.

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function BottomTabs() {
  return(
      <Tab.Navigator initialRouteName="Main">
        <Tab.Screen name="Chat" component={ChatScreen} />
        <Tab.Screen name="Main" component={MainScreen} />
        <Tab.Screen name="Schedule" component={ScheduleScreen} />
      </Tab.Navigator>
  )
}


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="ScheduleOverview" component={ScheduleOverviewScreen} />
        <Stack.Screen name="Main" component={BottomTabs}options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen, ListOfPlayers, PlayerDetails } from './screens';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName='Home'
      >
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='ListOfPlayers' component={ListOfPlayers} />
        <Stack.Screen name='PlayerDetails' component={PlayerDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

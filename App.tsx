import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, ListOfPlayers, PlayerDetails } from './screens';
import { Player } from './interface/Player';

type RootStackParamList = {
  Home: undefined;
  ListOfPlayers: undefined;
  PlayerDetails: { player: Player }; // Remplacez `Player` par le type approprié pour votre objet player
};

const App = () => {

  const RootStack = createStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName='Home'
      >
        <RootStack.Screen name='Home' component={HomeScreen} />
        <RootStack.Screen name='ListOfPlayers' component={ListOfPlayers} />
        <RootStack.Screen name='PlayerDetails' component={PlayerDetails} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;

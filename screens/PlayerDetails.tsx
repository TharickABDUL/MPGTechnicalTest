import {SafeAreaView, View, Text } from 'react-native';
import { Header } from '../components';

const PlayerDetails = ({ route, navigation }: any) => {

  const { player } = route.params;

  return (
    <SafeAreaView>
      <Header text={'Liste des joueurs'} />

      <Text>Hello</Text>
      <Text>{player.firstName}</Text>
    </SafeAreaView>
  );
};

export default PlayerDetails;
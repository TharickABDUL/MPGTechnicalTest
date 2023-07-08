import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ChevronRight } from 'react-native-feather';
import { useNavigation } from '@react-navigation/native';
import { Player } from '../interface/Player';
import PlayerDetails from '../screens/PlayerDetails';

type RootStackParams = {
  PlayerDetails: { player: Player };
};
type PlayerCardProps = { player: Player }

const PlayerCard = ({ player }: PlayerCardProps) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

  const navigationToPlayerDetails = () => {
    navigation.navigate('PlayerDetails', { player });
  };

  return (
    <TouchableOpacity
      key={player.id}
      style={styles.container}
      onPress={navigationToPlayerDetails}
    >

      <Image
        source={{ uri: player.defaultJerseyUrl }}
        resizeMode='contain'
        style={styles.image}
      />

      <View style={styles.textContainer}>
        <Text style={styles.playerName}>{player.firstName} {player.lastName}</Text>

        <Text style={styles.playerPosition}>{player.positionName}</Text>

        <Text style={styles.clubName}>{player.clubName}</Text>
      </View>

      <ChevronRight stroke={'black'} />
    </TouchableOpacity>

  );
};

export default PlayerCard;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#C0C0C0',
    marginVertical: 5,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    paddingRight: 15,
  },
  image: {
    height: 100,
    width: 120,
  },
  textContainer: {
    alignItems: 'center',
    height: 80,
    justifyContent: 'space-between',
    width: '55%',
  },
  playerName: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    width: '100%',
  },
  playerPosition: {
    fontSize: 16,
    fontStyle: 'italic',
  },
  clubName: {
    fontSize: 17,
    fontWeight: '600',
  },
});
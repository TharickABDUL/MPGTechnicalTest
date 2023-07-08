import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Player } from '../interface/Player';

import { ChevronRight } from 'react-native-feather';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
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
      style={{
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#C0C0C0',
        marginVertical: 5,
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 10,
        paddingRight: 15,
        justifyContent: 'space-around',
      }}
      onPress={navigationToPlayerDetails}
    >
      <Image
        style={{ height: 100, width: 120 }}
        resizeMode='contain'
        source={{ uri: player.defaultJerseyUrl }}
      />
      <View style={{ alignItems: 'center', height: 80, justifyContent: 'space-between', width: '55%' }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'center',
            width: '100%',

          }}>
          {player.firstName} {player.lastName}
        </Text>
        <Text style={{ fontSize: 16, fontStyle: 'italic' }}>
          {player.positionName}
        </Text>
        <Text
          style={{
            fontSize: 17,
            fontWeight: '600',
          }}>
          {player.clubName}
        </Text>
      </View>

      <ChevronRight stroke={'black'} />


    </TouchableOpacity>

  );
};

export default PlayerCard;
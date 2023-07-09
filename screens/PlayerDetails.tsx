import { SafeAreaView, ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { Header } from '../components';
import { getPlayersDetails } from '../services/playerDetails';
import { useEffect, useState } from 'react';
import { Player, playerChampionshipDetails } from '../interface/Player';
import QuotationTable from '../components/QuotationTable';

type PlayerDetailsProps = {route: RouteProp<{ PlayerDetails: { player: Player } }, 'PlayerDetails'>;}

const PlayerDetails = ({ route }: PlayerDetailsProps) => {
  const { player } = route.params;

  const [playerChampionshipsDetails, setPlayerChampionshipsDetails] = useState<playerChampionshipDetails[]>();

  useEffect(() => {
    getPlayersDetails(player.id).then(res => {
      setPlayerChampionshipsDetails(res);
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header text={'Fiche détailée du joueur'} />

      <ScrollView>

        <Image
          source={{ uri: player.defaultJerseyUrl }}
          resizeMode='contain'
          style={styles.image}
        />

        <View style={styles.mainInformation}>
          <Text style={styles.playerName}>{player.firstName} {player.lastName}</Text>
          <Text style={styles.clubInfo}>{player.positionName} du {player.clubName}</Text>
        </View>

        <View style={styles.mainStatsContainer}>
          <View style={styles.mainStatsRow}>
            <Text>{player.quotation} quotation</Text>
            <Text>{player.stats.averageRating.toFixed(2)} averageRating</Text>
            <Text>{player.stats.totalGoals} totalGoals</Text>
          </View>
          <View style={styles.mainStatsRow}>
            <Text>{player.stats.totalMatches} totalMatches</Text>
            <Text>{player.stats.totalStartedMatches} startedMatches</Text>
            <Text>{player.stats.totalPlayedMatches} playedMatches</Text>
          </View>
        </View>

        <QuotationTable playerChampionshipsDetails={playerChampionshipsDetails!} />

      </ScrollView>
    </SafeAreaView>
  );
};

export default PlayerDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  image: {
    height: 225,
  },
  mainInformation: {
    alignItems: 'center',
    height: 75,
    justifyContent: 'space-between',
  },
  playerName: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 5,
  },
  clubInfo: {
    fontSize: 25,
    fontWeight: '500',
  },
  mainStatsContainer: {
    marginTop: 10,
    marginHorizontal: 55,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mainStatsRow: {
    height: 60,
    justifyContent: 'space-between',
  },
});
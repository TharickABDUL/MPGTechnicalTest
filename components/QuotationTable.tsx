import { StyleSheet, Text, View } from 'react-native';
import PlayerStats from './PlayerStats';
import { playerChampionshipDetails } from '../interface/Player';
import { Quotation } from '../interface/Player';

type QuotationTableProps = { playerChampionshipsDetails: playerChampionshipDetails[] }

const QuotationTable = ({ playerChampionshipsDetails }: QuotationTableProps) => (
  <View>
    {playerChampionshipsDetails?.map((championShip) => {
      // found the club ID which is different for each championship
      const clubId = Object.keys(championShip.value)[0];

      return (
        <View key={championShip.key}>
          <Text style={styles.championShipNumber}>championShip : {championShip.key}</Text>

          <Text style={styles.joinDate}>joinDate - {championShip.value[clubId].joinDate}</Text>

          <View style={styles.quotationHeader}>
            <Text>quotation</Text>
            <Text>Date</Text>
          </View>

          {championShip.value['clubs'][clubId].quotations.map((quotation: Quotation) => (
            <View key={quotation.date}>
              <View style={styles.verticalLine} />

              <View style={styles.quotationData}>
                <Text>{quotation.quotation}</Text>
                <Text>{quotation.date}</Text>
              </View>

            </View>
          ))}

          {championShip.value.keySeasonStats &&
            <View style={styles.playerStats}>
              <PlayerStats title={'keySeasonStats'}
                           stats={championShip.value.keySeasonStats}
              />
              <PlayerStats title={'percentRanks'}
                           stats={championShip.value.percentRanks}
              />
              <PlayerStats title={'averagePercentRanks'}
                           stats={championShip.value.averagePercentRanks}
              />
            </View>
          }
        </View>
      );
    })}
  </View>
);

export default QuotationTable;

const styles = StyleSheet.create({
  championShipNumber: {
    marginTop: 25,
    fontSize: 20,
    textAlign: 'center',
  },
  joinDate: {
    marginVertical: 10,
    fontSize: 18,
    textAlign: 'center',
  },
  quotationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginRight: 75,
  },
  quotationData: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 40,
  },
  verticalLine: {
    borderWidth: 1,
    borderColor: '#C0C0C0',
    marginVertical: 5,
  },
  playerStats: {
    marginLeft: 20,
  },
});
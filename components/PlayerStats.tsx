import { Text, View } from 'react-native';
import { ChampionShipStats } from '../interface/Player';

type PlayerStatsProps = { title: string, stats: ChampionShipStats }

const PlayerStats = ({ title, stats }: PlayerStatsProps) => {
  return (
    <View>
      <Text style={{ marginTop: 25, marginBottom: 10, fontSize: 20 }}>{title}</Text>

      {Object.entries(stats).map(([key, value]) => (
        <View key={key}>
          <Text>- {key} : {value}</Text>
        </View>
      ))}
    </View>
  );
};

export default PlayerStats;
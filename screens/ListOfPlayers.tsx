import { Text, View, Image, SafeAreaView, FlatList } from 'react-native';
import { useEffect, useState } from 'react';
import { SearchBar, PlayerCard } from '../components';

import { getPlayersList } from '../services/playersList';
import { getClubsList } from '../services/clubsList';
import { Player, UltraPositionDetails } from '../interface/Player';


const ListOfPlayers = () => {

  const [filteredPlayers, setFilteredPlayers] = useState<Player[]>([]);
  const [players, setPlayers] = useState<Player[]>([]);

  const positionNames = {
    [UltraPositionDetails.Gardien]: 'Gardien',
    [UltraPositionDetails.Defenseur]: 'Defenseur',
    [UltraPositionDetails.Lateral]: 'Lateral',
    [UltraPositionDetails.MilieuOffensif]: 'Milieu offensif',
    [UltraPositionDetails.MilieuDefensif]: 'Milieu défensif',
    [UltraPositionDetails.Attaquant]: 'Attaquant',
  };

  const fetchPlayersInfoWithTheirCLubInfo = async () => {
    const [playersList, clubsList] = await Promise.all([getPlayersList(), getClubsList()]);

    // found the club information of each player
    const playersWithClub = playersList.map((player) => {
      const clubOfPlayer = clubsList.find((club: any) => club.id === player.clubId);
      const positionName = positionNames[player.ultraPosition];

      if (clubOfPlayer) {
        return {
          ...player,
          positionName,
          clubName: clubOfPlayer.name['fr-FR'],
          defaultJerseyUrl: clubOfPlayer.defaultJerseyUrl,
        };
      }
      return player;
    });
    setPlayers(playersWithClub);
  };

  useEffect(() => {
    fetchPlayersInfoWithTheirCLubInfo();
  }, []);

  const [selectedValue, setSelectedValue] = useState('');


  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',

      }}
    >
      <View>
        <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Option 1" value="option1" />
          <Picker.Item label="Option 2" value="option2" />
          <Picker.Item label="Option 3" value="option3" />
        </Picker>
      </View>
      <SearchBar players={players} setFilteredPlayers={setFilteredPlayers} />
      <FlatList
        data={filteredPlayers.length ? filteredPlayers : players}
        style={{ width: '80%' }}
        renderItem={({ item: player }) => <PlayerCard player={player} />}
        showsVerticalScrollIndicator={false}
      />

    </SafeAreaView>
  );
};

export default ListOfPlayers;

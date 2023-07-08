import { Text, View, Image, SafeAreaView, FlatList } from 'react-native';
import { useEffect, useState } from 'react';
import { SearchBar, PlayerCard, PositionSelector } from '../components';

import { getPlayersList } from '../services/playersList';
import { getClubsList } from '../services/clubsList';
import { Player, positionNames } from '../interface/Player';


const ListOfPlayers = () => {

  const [filteredPlayers, setFilteredPlayers] = useState<Player[]>([]);
  const [players, setPlayers] = useState<Player[]>([]);


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

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',

      }}
    >


      <SearchBar players={players} setFilteredPlayers={setFilteredPlayers} />

      <PositionSelector players={players} setFilteredPlayers={setFilteredPlayers} />
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

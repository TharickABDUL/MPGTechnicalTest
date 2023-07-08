import { Text, View, Image, SafeAreaView, FlatList } from 'react-native';
import { useEffect, useState } from 'react';
import { SearchBar, PlayerCard, PositionSelector, Header } from '../components';

import { getPlayersList } from '../services/playersList';
import { getClubsList } from '../services/clubsList';
import { Player, positionNames } from '../interface/Player';


const ListOfPlayers = () => {

  const [filteredPlayers, setFilteredPlayers] = useState<Player[]>([]);
  const [players, setPlayers] = useState<Player[]>([]);

  const [searchInput, setSearchInput] = useState('');
  const [dropDownValue, setDropDownValue] = useState<string | null>(null);


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


  const filteringPlayers = () => {
    const filteredPlayers = players.filter((player) => {
      const fullName = `${player.firstName} ${player.lastName}`.toLowerCase();
      const nameMatchingCondition = fullName.includes(searchInput.toLowerCase());
      if (dropDownValue) {
        return player.ultraPosition === +dropDownValue && nameMatchingCondition;
      }
      return nameMatchingCondition;
    });
    setFilteredPlayers(filteredPlayers);
  };


  useEffect(() => {
    fetchPlayersInfoWithTheirCLubInfo();
  }, []);

  useEffect(() => {
    filteringPlayers();
  }, [searchInput, dropDownValue]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',

      }}
    >
      <Header text={'Liste des joueurs'} />


      <SearchBar
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />

      <PositionSelector
        dropDownValue={dropDownValue}
        setDropDownValue={setDropDownValue}
      />

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

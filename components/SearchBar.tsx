import { View, Text, TextInput } from 'react-native';
import { useState } from 'react';

const SearchBar = ({ players, setFilteredPlayers }: any) => {

    const [searchInput, setSearchInput] = useState('');

    const onChangeSearch = (input: string) => {
      setSearchInput(input);
      const filteredPlayers = players.filter((player: any) => {
        const fullName = `${player.firstName} ${player.lastName}`.toLowerCase();
        return fullName.includes(input.toLowerCase());
      });
      setFilteredPlayers(filteredPlayers);
    };

    return (
      <TextInput
        onChangeText={onChangeSearch}
        value={searchInput}
        style={{ borderWidth: 1, borderRadius: 15, paddingHorizontal: 20, width: '50%', height: 25 }}
      />
    );
  }
;

export default SearchBar;
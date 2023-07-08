import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Dispatch, SetStateAction, useState } from 'react';

import { X } from 'react-native-feather';


type SearchBarProps = {
  searchInput: string
  setSearchInput: Dispatch<SetStateAction<string>>

}

const SearchBar = ({ searchInput, setSearchInput }: SearchBarProps) => {


    return (
      <View style={{flexDirection: 'row',  width: '55%', alignItems: 'center'}}>
        <TextInput
          onChangeText={setSearchInput}
          value={searchInput}
          style={{ borderWidth: 1, borderRadius: 15, paddingHorizontal: 20, marginRight: 10, width: '100%', height: 50 }}
          placeholder={'Entrez le nom d\'un joueur'}
        />
        <TouchableOpacity onPress={()=> setSearchInput('')}>
          <X stroke={'black'} />
        </TouchableOpacity>
      </View>
    );
  }
;

export default SearchBar;
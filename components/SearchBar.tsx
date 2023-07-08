import { View, TextInput, StyleSheet } from 'react-native';
import { Dispatch, SetStateAction } from 'react';
import { ClearButton } from './Button';

type SearchBarProps = {
  searchInput: string
  setSearchInput: Dispatch<SetStateAction<string>>
}

const SearchBar = ({ searchInput, setSearchInput }: SearchBarProps) => (
  <View style={styles.container}>
    <TextInput
      onChangeText={setSearchInput}
      value={searchInput}
      style={styles.textInput}
      placeholder={'Entrez le nom d\'un joueur'}
    />
    <ClearButton clearAndCloseFunc={() => setSearchInput('')} marginLeft={5} />
  </View>
);

export default SearchBar;

const styles = StyleSheet.create({
  container:
    {
      flexDirection: 'row',
      width: '55%',
      alignItems: 'center',
    },
  textInput: {
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 20,
    marginRight: 10,
    width: '100%',
    height: 50,
  },
});
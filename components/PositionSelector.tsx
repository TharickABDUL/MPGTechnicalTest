import { Dispatch, SetStateAction, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { positionNames } from '../interface/Player';
import { ClearButton } from './Button';

type PositionSelectorProps = {
  dropDownValue: string | null
  setDropDownValue: Dispatch<SetStateAction<string | null>>
}

const PositionSelector = ({ dropDownValue, setDropDownValue }: PositionSelectorProps) => {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState(
    Object.entries(positionNames).map(([value, label]) => ({ label, value })),
  );

  const clearAndCloseList = () => {
    setDropDownValue(null);
    setOpen(false);
  };

  return (
    <View nativeID='position-selector' style={styles.container}>
      <DropDownPicker
        maxHeight={300}
        style={styles.dropDownList}
        open={open}
        value={dropDownValue}
        items={items}
        setOpen={setOpen}
        setValue={setDropDownValue}
        setItems={setItems}
        placeholder={'Filtrer par poste'}
      />
      <ClearButton clearAndCloseFunc={clearAndCloseList} marginLeft={15} />
    </View>
  );
};

export default PositionSelector;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '55%',
    alignItems: 'center',
    zIndex: 1,
    marginVertical: 10,
  },
  dropDownList: {
    zIndex: 1,
    borderRadius: 15,
  },
});
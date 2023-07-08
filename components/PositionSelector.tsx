import { TouchableOpacity, View } from 'react-native';

import DropDownPicker from 'react-native-dropdown-picker';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { positionNames } from '../interface/Player';
import { X } from 'react-native-feather';

type PositionSelectorProps = {
  dropDownValue: string | null
  setDropDownValue: Dispatch<SetStateAction<string | null>>

}

const PositionSelector = ({ dropDownValue, setDropDownValue }: PositionSelectorProps) => {

  const [open, setOpen] = useState(false);
  const [items, setItems] = useState(
    Object.entries(positionNames).map(([value, label]) => (
      {
        label,
        value,
      }
    )));

  return (
    <View style={{ flexDirection: 'row', width: '55%', alignItems: 'center', zIndex: 1, marginVertical: 10 }}>
      <DropDownPicker
        maxHeight={300}
        style={{ zIndex: 1, borderRadius: 15 }}
        open={open}
        value={dropDownValue}
        items={items}
        setOpen={setOpen}
        setValue={setDropDownValue}
        setItems={setItems}
      />
      <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => setDropDownValue(null)}>
        <X stroke={'black'} />
      </TouchableOpacity>
    </View>
  );
};

export default PositionSelector;
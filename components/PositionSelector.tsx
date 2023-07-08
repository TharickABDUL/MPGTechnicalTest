import { View } from 'react-native';

import DropDownPicker from 'react-native-dropdown-picker';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { Player, positionNames } from '../interface/Player';

type PlayerCardProps = {
  players: Player[],
  setFilteredPlayers: Dispatch<SetStateAction<Player[]>>
}

const PositionSelector = ({ players, setFilteredPlayers }: PlayerCardProps) => {

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(
    Object.entries(positionNames).map(([value, label]) => (
      {
        label,
        value,
      }
    )));

  const onSelectedValue = (value: string | null) => {
    const filteredPlayers = players.filter((player) => {
      return player.ultraPosition === +value!;
    });
    setFilteredPlayers(filteredPlayers);

  };


  return (
    <DropDownPicker
      style={{ zIndex: 1 }}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      onChangeValue={onSelectedValue}
    />
  );
};

export default PositionSelector;
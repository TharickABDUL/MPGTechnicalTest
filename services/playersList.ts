import axios from 'axios';
import { Player } from '../interface/Player';

const getPlayersList = async (): Promise<Player[]> => {
  try {
    const res = await axios.get<{ poolPlayers: Player[] }>(`https://api.mpg.football/api/data/championship-players-pool/1`);
    return res.data.poolPlayers;
  } catch (error) {
    console.log(error);
    return []
  }
};

export { getPlayersList };
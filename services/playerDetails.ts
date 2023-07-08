import axios from 'axios';
import { playerChampionshipDetails } from '../interface/Player';

const getPlayersDetails = async (playerId: string): Promise<playerChampionshipDetails[]> => {
  try {
    const res = await axios.get<{ championships: playerChampionshipDetails[] }>(`https://api.mpg.football/api/data/championship-player-stats/${playerId}/2022`);
    return Object.entries(res.data.championships).map(([key, value]) => ({ key, value }));
  } catch (error) {
    console.log(error);
    return [];
  }
};

export { getPlayersDetails };
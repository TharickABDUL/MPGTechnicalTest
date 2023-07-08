import axios from 'axios';
import { Club } from '../interface/Club';

const getClubsList = async (): Promise<Club[]> => {
  try {
    const res = await axios.get<{ championshipClubs: Club[] }>(`https://api.mpg.football/api/data/championship-clubs`);
    return Object.values(res.data.championshipClubs);
  } catch (error) {
    console.log(error);
    return [];
  }
};

export { getClubsList };



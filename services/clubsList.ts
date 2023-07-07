import axios from 'axios';

const getClubsList = async (): Promise<any> => {
  try {
    const res = await axios.get(`https://api.mpg.football/api/data/championship-clubs`);
    return Object.values(res.data.championshipClubs)
  } catch (error) {
    console.log(error);
  }
};

export { getClubsList };



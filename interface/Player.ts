enum UltraPositionDetails {
  Gardien = 10,
  Defenseur = 20,
  Lateral = 21,
  MilieuDefensif = 30,
  MilieuOffensif = 31,
  Attaquant = 40
}

export const positionNames = {
  [UltraPositionDetails.Gardien]: 'Gardien',
  [UltraPositionDetails.Defenseur]: 'Défenseur',
  [UltraPositionDetails.Lateral]: 'Latéral',
  [UltraPositionDetails.MilieuOffensif]: 'Milieu offensif',
  [UltraPositionDetails.MilieuDefensif]: 'Milieu défensif',
  [UltraPositionDetails.Attaquant]: 'Attaquant',
};

export type Player = {
  id: number,
  firstName: string,
  lastName: string,
  position: number,
  ultraPosition: UltraPositionDetails,
  positionName?: string,
  quotation: number,
  clubId: string,
  stats: MainStats,
  clubName?: string,
  defaultJerseyUrl?: string
};

type MainStats = {
  averageRating: number,
  totalGoals: number,
  totalMatches: number,
  totalStartedMatches: number,
  totalPlayedMatches: number,
}

export type playerChampionshipDetails = {
  key: string;
  value: {
    keySeasonStats?: ChampionShipStats;
    percentRanks?: ChampionShipStats;
    averagePercentRanks?: ChampionShipStats;
    [clubId: string]: any
  };
};

export type ChampionShipStats = {
  quotation: string,
  averageRating: string,
  percentageCleanSheet: string,
  ratioGoalsConceded: string,
  ratioInterceptions: string,
  percentageStarter: string,

}

export type Quotation = {
  date: string,
  quotation: number
}
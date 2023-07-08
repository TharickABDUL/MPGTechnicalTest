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
  [UltraPositionDetails.Defenseur]: 'Defenseur',
  [UltraPositionDetails.Lateral]: 'Lateral',
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
  stats: Stats,
  clubName?: string,
  defaultJerseyUrl?: string
};


export type Stats = {
  averageRating: number,
  totalGoals: number,
  totalMatches: number,
  totalStartedMatches: number,
  totalPlayedMatches: number,
}
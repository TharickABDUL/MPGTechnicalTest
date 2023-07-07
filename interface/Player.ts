export enum UltraPositionDetails {
  Gardien = 0,
  Defenseur = 20,
  Lateral = 21,
  MilieuDefensif = 30,
  MilieuOffensif = 31,
  Attaquant = 40
}

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
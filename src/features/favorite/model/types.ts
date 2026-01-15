export type FavoriteState = {
  favoriteLocationList: FavoriteStateType[];
};

export type FavoriteActios = {
  addLocation: (data: FavoriteStateType) => void;
  updateLocationName: (newAlias: string, location: string) => void;
  deleteLocation: (location: string) => void;
};

export type FavoriteStateType = {
  location: string;
  alias: string;
  curTmp: number;
  minTmp: number;
  maxTmp: number;
  icon: string;
  description: string;
};

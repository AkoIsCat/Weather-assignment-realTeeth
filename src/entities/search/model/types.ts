export type WeatherState = {
  currentLocation: string;
};

export type WeatherAction = {
  setCurrentLocation: (location: string) => void;
};

export type SuggestionItemType = {
  location: string;
  onClick: (location: string) => void;
};

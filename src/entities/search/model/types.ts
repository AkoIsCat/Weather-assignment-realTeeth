export type WeatherState = {
  currentLocation: string;
};

export type WeatherAction = {
  setCurrentLocation: (location: string) => void;
};

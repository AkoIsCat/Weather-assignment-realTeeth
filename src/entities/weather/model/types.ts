import type { WeatherIconType } from '../../../shared';

export type WeatherProps = {
  lat: number;
  lon: number;
};

export type Coords = [number, number] | undefined;

export type TodayTmpType = {
  type: 'max' | 'min';
  maxTmp?: number;
  minTmp?: number;
};

export type CurrentTmpType = {
  curTmp: number;
};

export type WeatherData = {
  dt: number;
  dt_txt: string;
  temp: number;
  main: {
    temp: number;
  };
  weather: {
    icon: string;
    description: string;
  }[];
  // ... 기타 필드
};

export type WeatherState = {
  currentLocation: string;
};

export type WeatherAction = {
  setCurrentLocation: (location: string) => void;
};

export type CurrentWeatherType = {
  weatherIcon: WeatherIconType;
  curTmp: number;
  maxTmp: number;
  minTmp: number;
};

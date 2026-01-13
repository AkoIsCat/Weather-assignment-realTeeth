import type { WeatherIconType } from '../../../shared';

export type CurrentWeatherType = {
  weatherIcon: WeatherIconType;
  curTmp: number;
  maxTmp: number;
  minTmp: number;
};

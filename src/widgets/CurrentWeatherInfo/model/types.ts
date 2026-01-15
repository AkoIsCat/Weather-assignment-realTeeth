import type { CurrentLocationProps } from '../../../entities/address';
import type { WeatherIconType } from '../../../shared';

export type CurrentWeatherInfoType = {
  currentLocation: string
  address: CurrentLocationProps;
  weatherIcon: WeatherIconType;
  curTmp: number;
  minTmp: number;
  maxTmp: number;
};

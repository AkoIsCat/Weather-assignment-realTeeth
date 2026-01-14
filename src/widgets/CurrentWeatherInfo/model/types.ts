import type { CurrentLocationProps } from '../../CurrentLocation';
import type { WeatherIconType } from '../../../shared';

export type CurrentWeatherInfoType = {
  address: CurrentLocationProps;
  weatherIcon: WeatherIconType;
  curTmp: number;
  minTmp: number;
  maxTmp: number;
};

export type WeatherProps = {
  lat: number;
  lng: number;
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

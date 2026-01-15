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

import type { WeatherProps } from '../model/types';

export const getWeather = async ({ lat, lng }: WeatherProps) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${
      import.meta.env.VITE_OPENWEATHERMAP_KEY
    }&units=metric`
  );

  if (!response.ok) {
    throw new Error('날씨 정보를 가져오는데 실패했습니다.');
  }

  return response.json();
};

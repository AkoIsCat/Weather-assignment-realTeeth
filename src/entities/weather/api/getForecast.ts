import type { WeatherProps } from '../model/types';

export const getForecast = async ({ lat, lng }: WeatherProps) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&appid=${
      import.meta.env.VITE_OPENWEATHERMAP_KEY
    }&units=metric`
  );
  if (!response.ok) throw new Error('Forecast fetch failed');
  return response.json();
};

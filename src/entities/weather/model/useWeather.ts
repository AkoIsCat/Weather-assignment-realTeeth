import { useQuery } from '@tanstack/react-query';
import { getWeather } from '../api/getWeather';
import type { Coords } from './types';

export const useWeather = (coords: Coords) => {
  const { data } = useQuery({
    queryKey: ['weather', coords],
    queryFn: () => {
      if (!coords) throw new Error('Coords is required');
      return getWeather({ lat: coords[0], lng: coords[1] });
    },
    enabled: !!coords,
  });

  return data;
};

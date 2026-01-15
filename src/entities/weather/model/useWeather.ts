import { useQuery } from '@tanstack/react-query';
import { getWeather } from '../api/getWeather';

export const useWeather = (lat: number, lon: number) => {
  const { data } = useQuery({
    queryKey: ['weather', lat, lon],
    queryFn: () => getWeather({ lat: lat, lon: lon }),
    enabled: typeof lat === 'number' && typeof lon === 'number',
    staleTime: 5 * 60 * 1000,
  });
  return data;
};

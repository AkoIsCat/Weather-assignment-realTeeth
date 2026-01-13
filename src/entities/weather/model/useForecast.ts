import { useQuery } from '@tanstack/react-query';
import type { Coords } from './types';
import { getForecast } from '../api/getForecast';

export const useForecast = (coords: Coords) => {
  const { data } = useQuery({
    queryKey: ['forecast', coords],
    queryFn: () => {
      if (!coords) {
        throw new Error('주간 날씨 정보를 가져올 수 없습니다.');
      }
      return getForecast({ lat: coords[0], lng: coords[1] });
    },
    enabled: !!coords,
  });

  return data;
};

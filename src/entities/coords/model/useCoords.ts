import { useQuery } from '@tanstack/react-query';
import { getCoords } from '../lib/getCoords';
import type { CoordsResult } from './types';

export const useCoords = () => {
  const query = useQuery<CoordsResult>({
    queryKey: ['coords'],
    queryFn: getCoords,
    staleTime: 1000 * 60 * 5,
    retry: false,
  });
  const coords =
    query.data?.status === 'success' || query.data?.status === 'fallback'
      ? query.data.coords
      : undefined;
  console.log(query.data, coords);

  return {
    coords,
    coordsResult: query.data,
  };
};

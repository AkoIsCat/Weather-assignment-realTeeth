import { useQuery } from '@tanstack/react-query';
import { getCoords } from '../lib/getCoords';

export const useCoords = () => {
  const { data } = useQuery({
    queryKey: ['coords'],
    queryFn: getCoords,
  });

  return data;
};

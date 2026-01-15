import { useQuery } from '@tanstack/react-query';
import { getAddressToCoords } from '../api/getAddressToCoords';

export const useAddressToCoords = (location: string) => {
  const { data } = useQuery({
    queryKey: ['search', location],
    queryFn: () => {
      return getAddressToCoords(location);
    },
    enabled: !!location,
  });
  
  return data;
};

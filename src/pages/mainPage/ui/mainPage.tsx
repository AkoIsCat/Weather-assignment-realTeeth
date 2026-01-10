import { Header } from '../../../widgets/Header';
import { useQuery } from '@tanstack/react-query';
import { getLocation } from '../lib/getLocation';
import { getAddress } from '../lib/getAddress';

export const MainPage = () => {
  const { data: address } = useQuery({
    queryKey: ['address'],
    queryFn: async () => {
      const coords = await getLocation();
      return getAddress(coords);
    },
    select: (data) => data[0],
  });

  console.log(address);

  return (
    <div>
      <Header
        district={address?.region_2depth_name ?? ''}
        neighborhood={address?.region_3depth_name ?? ''}
      />
    </div>
  );
};

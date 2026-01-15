import { useQuery } from '@tanstack/react-query';
import { getAddress } from '../api/getAddress';

export const useAddress = (coords: [number, number] | undefined) => {
  const { data, isError } = useQuery({
    queryKey: ['address', coords],
    queryFn: async () => {
      if (!coords) throw new Error('Coords is required');

      const response = await getAddress(coords);

      // 카카오 API 응답은 성공했지만 해당 좌표의 주소 데이터가 없는 경우
      if (!response || response.length === 0) {
        throw new Error('No Address Data');
      }

      return getAddress(coords);
    },
    enabled: !!coords,
    retry: 1, // 실패 시 무한 재시도 방지
    select: (data) => data[0],
  });

  return { address: data, isAddressError: isError };
};

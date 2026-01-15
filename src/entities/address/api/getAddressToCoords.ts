export const getAddressToCoords = async (location: string) => {
  const response = await fetch(
    `https://dapi.kakao.com/v2/local/search/address.json?query=${encodeURIComponent(
      location
    )}`,
    {
      method: 'GET',
      headers: {
        Authorization: `KakaoAK ${import.meta.env.VITE_KAKAO_REST_KEY}`,
      },
    }
  );
  return response.json();
};

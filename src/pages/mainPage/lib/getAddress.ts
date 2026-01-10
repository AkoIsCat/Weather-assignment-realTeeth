export const getAddress = (data: [number, number]) => {
  const [lat, lng] = data;
  const { kakao } = window;

  return new Promise<kakao.maps.services.RegionCode[]>((res, rej) => {
    if (!kakao?.maps?.services) {
      rej(new Error('Kakao Maps SDK not loaded'));
      return;
    }

    const geocoder = new kakao.maps.services.Geocoder();

    const callback = (
      result: kakao.maps.services.RegionCode[],
      status: kakao.maps.services.Status
    ) => {
      if (status === kakao.maps.services.Status.OK) {
        res(result);
      } else {
        rej(new Error('coord2RegionCode failed'));
      }
    };
    // x = 경도(lng), y = 위도(lat)
    geocoder.coord2RegionCode(lng, lat, callback);
  });
};

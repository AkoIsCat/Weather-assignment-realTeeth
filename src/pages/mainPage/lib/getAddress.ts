export const getAddress = (data: [number, number]) => {
  const [lng, lat] = data;
  const { kakao } = window;

  const geocoder = new kakao.maps.services.Geocoder();
  // promise 적용하기
  const callback = (
    result: kakao.maps.services.RegionCode[],
    status: kakao.maps.services.Status
  ) => {
    if (status === kakao.maps.services.Status.OK) {
      return result;
    }
  };

  geocoder.coord2RegionCode(lat, lng, callback);
};

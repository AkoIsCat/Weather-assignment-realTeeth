export const getCoords = () => {
  return new Promise<[number, number]>((res) => {
    if (!navigator.geolocation) {
      res([37.4979, 127.0276]); // 브라우저가 지원하지 않는 경우 초기값 강남구
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        res([position.coords.latitude, position.coords.longitude]);
      },
      (error) => {
        console.warn(
          '위치 정보를 가져올 수 없어 강남구 좌표를 반환합니다.',
          error.message
        );
        res([37.4979, 127.0276]);
      },
      {
        timeout: 5000, // 5초 안에 응답 없으면 에러로 간주
        maximumAge: Infinity, // 캐시된 위치 정보 허용
      }
    );
  });
};

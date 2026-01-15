export const getCoords = () => {
  return new Promise<[number, number] | undefined>((res) => {
    if (!navigator.geolocation) {
      res([37.4979, 127.0276]); // 브라우저가 지원하지 않는 경우 초기값 강남구
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        res([position.coords.latitude, position.coords.longitude]);
      },
      (error) => {
        // 사용자가 거부했을 때만 임의 지정
        if (error.code === error.PERMISSION_DENIED) {
          console.warn(
            '사용자가 위치 권한을 거부하여 초기 위치를 임의 지정합니다.'
          );
          res([37.4979, 127.0276]);
        } else {
          // 그 외의 에러(응답 실패, 타임아웃 등)는 undefined 반환하여 안내문구 유도
          console.error('위치 정보를 불러오지 못했습니다:', error.message);
          res(undefined);
        }
      },
      {
        timeout: 10000,
        maximumAge: Infinity,
      }
    );
  });
};

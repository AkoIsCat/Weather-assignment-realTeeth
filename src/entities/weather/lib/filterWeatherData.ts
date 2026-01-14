import type { WeatherData } from '../model/types';

export const filterWeatherData = (forecastList: WeatherData[]) => {
  const now = Date.now(); // 현재 시간

  // 한국 시간 기준 내일 밤 23:59:59를 계산
  const tomorrowEnd = new Date();
  tomorrowEnd.setDate(tomorrowEnd.getDate() + 1);
  tomorrowEnd.setHours(23, 59, 59, 999);
  const tomorrowEndTime = tomorrowEnd.getTime();

  return forecastList.filter((item) => {
    // timestamp를 밀리초로 변환
    const itemTime = item.dt * 1000;

    // 현재 시각 이후부터 내일 밤 11시 59분까지
    return itemTime > now && itemTime <= tomorrowEndTime;
  });
};

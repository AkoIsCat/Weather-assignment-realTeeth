import { Header } from '../../../widgets/Header';
import { useCoords } from '../../../entities/coords';
import { useAddress } from '../../../entities/address';
import { useForecast, useWeather } from '../../../entities/weather';
import { WeatherIcon } from './WeatherIcon';

export const MainPage = () => {
  const coords = useCoords();
  const address = useAddress(coords);
  const weather = useWeather(coords);
  const forecast = useForecast(coords);

  console.log(weather, forecast);

  return (
    <div className="w-screen h-screen flex flex-col items-center ">
      <Header
        district={address?.region_2depth_name ?? ''}
        neighborhood={address?.region_3depth_name ?? ''}
        village={address?.region_4depth_name ?? ''}
      />
      <main className="w-screen">
        {/* 검색 영역 */}
        <section className="bg-amber-500 h-12">Search</section>
        {/* 현재 날씨 영역 */}
        <section className="bg-pink-400 h-70">
          Current Weather
          {/* <div>
            <WeatherIcon
              icon={weather?.weather[0].icon}
              description={weather?.weather[0].description}
            />
          </div>
          <h1 className="-mt-10">{Math.floor(weather?.main.temp)}°</h1>
          <div className="flex gap-2">
            <span>최고 {weather?.main.temp_max}°</span>
            <span>|</span>
            <span>최저 {weather?.main.temp_min}°</span>
          </div> */}
        </section>
        {/* 시간대 별 기온 영역 */}
        <section className="bg-sky-400 h-50">Hourly Weather</section>
        {/* 즐겨찾기 영역 */}
        <section className="bg-green-400 h-40">favorite</section>
      </main>
    </div>
  );
};

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
    <main className="w-screen min-h-screen grid grid-cols-1 gap-6 px-4 py-6 lg:grid-cols-12 lg:gap-8 lg:px-10">
      {/* TopBar: lg에서 같은 줄 */}
      <div className="grid grid-cols-1 gap-4 lg:col-span-12 lg:grid-cols-12 lg:items-center">
        {/* 헤더(로고/위치 등) */}
        <header className="lg:col-span-3">
          <div>헤더</div>
          {/* <Header /> */}
        </header>

        {/* 검색바 */}
        <section className="lg:col-span-6">
          <div>검색바</div>
          {/* <SearchBar /> */}
        </section>
      </div>

      {/* 현재 날씨 */}
      <section className="lg:col-span-5">
        <div>현재날씨</div>
        {/* <CurrentWeather /> */}
      </section>

      {/* 시간대별 날씨 */}
      <section className="lg:col-span-7">
        <div>시간대별날씨</div>
        {/* <HourlyWeather /> */}
      </section>

      {/* 즐겨찾기 */}
      <section className="lg:col-span-12">
        <div>즐겨찾기</div>
        {/* <FavoriteLocations /> */}
      </section>
    </main>
  );
};

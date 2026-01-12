import { useCoords } from '../../../entities/coords';
import { useAddress } from '../../../entities/address';
// import { useForecast, useWeather } from '../../../entities/weather';
// import { WeatherIcon } from './WeatherIcon';
import { Card } from '../../../shared';
import { SearchBar } from '../../../features/search';
import { Logo } from '../../../shared';

export const MainPage = () => {
  const coords = useCoords();
  const address = useAddress(coords);
  // const weather = useWeather(coords);
  // const forecast = useForecast(coords);

  // console.log(weather, forecast);
  console.log(address);

  return (
    <main className="w-screen min-h-screen flex flex-col gap-6 lg:grid lg:grid-cols-12 lg:gap-8 lg:px-10 lg:items-start">
      {/* 상단 영역 */}
      {/* 모바일에서는 세로 배치, 데스크탑에서는 가로 배치 */}
      <div className="flex flex-col gap-2 lg:col-span-12 lg:grid lg:grid-cols-12 lg:items-center">
        <header className="lg:col-span-3 px-4 pt-3">
          <Logo />
        </header>

        {/* 검색바 */}
        <section className="border-y border-gray-100 py-3 lg:col-span-6 lg:border-none lg:py-0 lg:pt-4">
          <SearchBar />
        </section>
      </div>

      {/* 현재 날씨 */}
      <section className="lg:col-span-5 px-4">
        <Card>
          <div className="min-h-50">현재날씨</div>
        </Card>
      </section>

      {/* 시간대별 날씨 */}
      <section className="lg:col-span-7 px-4">
        <Card>
          <div className="min-h-50">시간대별날씨</div>
        </Card>
      </section>

      {/* 즐겨찾기 */}
      <section className="lg:col-span-12 px-4 pb-4">
        <Card>
          <div className="min-h-50">즐겨찾기</div>
        </Card>
      </section>
    </main>
  );
};

import { useCoords } from '../../../entities/coords';
import { useAddress, useAddressToCoords } from '../../../entities/address';
import { useWeather } from '../../../entities/weather';

import { Card } from '../../../shared';
import { SearchBar } from '../../../features/search';
import { Logo } from '../../../shared';
import { CurrentWeatherInfo } from '../../../widgets/CurrentWeatherInfo/ui/CurrentWeatherInfo';
import { HourlyForecastSection } from '../../../widgets/HourlyForecast/ui/HourlyForecastSection';
import { FavoriteList } from '../../../widgets/FavoriteList';

import { useSearchParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useWeatherStore } from '../../../entities/weather';

export const MainPage = () => {
  const coords = useCoords();
  const address = useAddress(coords);

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const location = searchParams.get('location');
  const { currentLocation, setCurrentLocation } = useWeatherStore();
  const coordsData = useAddressToCoords(location || '');

  const weather = useWeather(
    coordsData
      ? [+coordsData?.documents[0].y, +coordsData?.documents[0].x]
      : coords
  );

  const sliceLocation = currentLocation.split(' ');

  useEffect(() => {
    if (!location && address?.address_name) {
      navigate(`/?location=${address.address_name}`);
      setCurrentLocation(address.address_name);
    }

    if (location) {
      setCurrentLocation(location);
    }
  }, [location, navigate, address, setCurrentLocation]);

  const dailyTemp = {
    minTmp: Math.floor(weather?.daily[0].temp.min),
    maxTmp: Math.floor(weather?.daily[0].temp.max),
  };

  return (
    <main className="w-screen min-h-screen flex flex-col gap-6 lg:grid lg:grid-cols-12 lg:gap-8 lg:px-0 lg:items-start box-border bg-[#F7F7FA]">
      {/* 상단 영역 */}
      {/* 모바일에서는 세로 배치, 데스크탑에서는 가로 배치 */}
      <div className="flex flex-col gap-2 lg:col-span-12 lg:grid lg:grid-cols-12 lg:items-center lg:border-b lg:border-[#E9E9E9] lg:pb-6 bg-[#FFFFFF]">
        <header className="lg:col-span-3 px-4 pt-3 lg:px-10">
          <Logo />
        </header>

        {/* 검색바 */}
        <section className="border-y border-[#E9E9E9] py-3 lg:col-span-6 lg:border-none lg:py-0 lg:pt-4 isolate z-50">
          <SearchBar />
        </section>
      </div>

      {/* 현재 날씨 */}
      <CurrentWeatherInfo
        weatherIcon={{
          icon: weather?.current.weather[0]?.icon,
          description: weather?.current.weather[0]?.description,
          width: 'current',
        }}
        curTmp={Math.floor(weather?.current.temp)}
        minTmp={dailyTemp.minTmp}
        maxTmp={dailyTemp.maxTmp}
        currentLocation={currentLocation}
        address={{
          district: sliceLocation[1] ?? '',
          neighborhood: sliceLocation[2] ?? '',
          village: sliceLocation[3] ?? '',
        }}
      />

      {/* 시간대별 날씨 */}
      <HourlyForecastSection data={weather?.hourly} />

      {/* 즐겨찾기 */}
      <section className="lg:col-span-12 px-4 pb-4 lg:px-10">
        <Card width="favoriteItem">
          <p className="pb-4 text-xl">즐겨찾기</p>
          <div className="flex flex-wrap gap-4">
            <FavoriteList />
          </div>
        </Card>
      </section>
    </main>
  );
};

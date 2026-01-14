import { useCoords } from '../../../entities/coords';
import { useAddress } from '../../../entities/address';
import {
  useForecast,
  useWeather,
  type WeatherData,
} from '../../../entities/weather';
import { formatToKST, filterWeatherData } from '../../../entities/weather';

import { Card } from '../../../shared';
import { SearchBar } from '../../../features/search';
import { Logo } from '../../../shared';
import { CurrentWeatherInfo } from '../../../widgets/CurrentWeatherInfo/ui/CurrentWeatherInfo';
import { FavoriteList } from '../../../widgets/FavoriteList';
import { HourlyForecastSection } from '../../../widgets/HourlyForecast/ui/HourlyForecastSection';

import { useSearchParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useWeatherStore } from '../../../entities/weather';

export const MainPage = () => {
  const coords = useCoords();
  const address = useAddress(coords);
  const weather = useWeather(coords);
  const forecast = useForecast(coords);

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const location = searchParams.get('location');
  const { currentLocation, setCurrentLocation } = useWeatherStore();

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

  console.log(weather, forecast, address);

  const filtered = forecast && filterWeatherData(forecast.list);
  console.log('filter', filtered);
  const result =
    filtered &&
    filtered.map((item: WeatherData) => ({
      days: formatToKST(item.dt).split('.').slice(1, 3).join('/').trim(),
      time: formatToKST(item.dt).split('.').slice(3).join('').trim(),
      temp: item.main.temp,
      weatherIcon: item.weather[0].icon,
      weatherDescription: item.weather[0].description,
    }));
  console.log('result', result);

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
          icon: weather?.weather[0]?.icon,
          description: weather?.weather[0]?.description,
        }}
        curTmp={Math.floor(weather?.main.temp)}
        minTmp={-1}
        maxTmp={10}
        address={{
          district: sliceLocation[1] ?? '',
          neighborhood: sliceLocation[2] ?? '',
          village: sliceLocation[3] ?? '',
        }}
      />

      {/* 시간대별 날씨 */}
      <HourlyForecastSection />

      {/* 즐겨찾기 */}
      <section className="lg:col-span-12 px-4 pb-4 lg:px-10">
        <Card width="favoriteItem">
          <p className="pb-4">즐겨찾기</p>
          <div className="flex flex-wrap gap-4">
            <FavoriteList />
          </div>
        </Card>
      </section>
    </main>
  );
};

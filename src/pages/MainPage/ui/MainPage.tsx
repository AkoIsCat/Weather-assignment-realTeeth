import { useCoords } from '../../../entities/coords';
import {
  useAddress,
  useAddressToCoords,
  useParsedAddress,
} from '../../../entities/address';
import { useWeather, useWeatherDetail } from '../../../entities/weather';

import { Card } from '../../../shared';
import { SearchBar } from '../../../features/search';
import { Logo } from '../../../shared';
import { CurrentWeatherInfo } from '../../../widgets/CurrentWeatherInfo/ui/CurrentWeatherInfo';
import { HourlyWeatherSection } from '../../../widgets/HourlyWeather';
import { FavoriteSection } from '../../../widgets/FavoriteList';
import { CurrentWeatherInfoSkeleton } from '../../../widgets/CurrentWeatherInfo';
import { HourlyWeatherSkeleton } from '../../../widgets/HourlyWeather';

import { useSearchParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useWeatherStore } from '../../../entities/weather';

export const MainPage = () => {
  const { coords, coordsResult } = useCoords();
  const address = useAddress(coords);
  console.log(coords, coordsResult);

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const location = searchParams.get('location');
  const { currentLocation, setCurrentLocation } = useWeatherStore();
  const coordsData = useAddressToCoords(location || '');

  useEffect(() => {
    if (!location && address) {
      navigate(`/?location=${address.address_name}`);
      setCurrentLocation(address.address_name);
    }

    if (location) {
      setCurrentLocation(location);
    }
  }, [location, navigate, address, setCurrentLocation]);

  const lat = coordsData?.documents?.[0]
    ? +coordsData.documents[0].y
    : coords?.[0] ?? 0;
  const lon = coordsData?.documents?.[0]
    ? +coordsData.documents[0].x
    : coords?.[1] ?? 0;

  const weather = useWeather(lat, lon);
  const weatherDetail = useWeatherDetail(weather); // 정제된 데이터
  const parsedAddress = useParsedAddress(currentLocation); // 정제된 주소
  const isLoading = !weather; // weather가 없으면 로딩 중으로 판단

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
      {coordsResult?.status === 'unavailable' && (
        <div className="w-125 lg:ml-162.5">
          <Card width="favoriteItem">
            <p>해당 장소의 정보가 제공되지 않습니다.</p>
          </Card>
        </div>
      )}
      {/* 현재 날씨 */}
      {coordsResult?.status !== 'unavailable' && (
        <>
          {!weatherDetail ? (
            <CurrentWeatherInfoSkeleton />
          ) : (
            <CurrentWeatherInfo
              weatherIcon={{ ...weatherDetail.condition, width: 'current' }}
              curTmp={Math.floor(weather?.current.temp)}
              minTmp={weatherDetail?.minTmp ?? 0}
              maxTmp={weatherDetail?.maxTmp ?? 0}
              currentLocation={currentLocation}
              address={parsedAddress}
              lat={lat}
              lon={lon}
            />
          )}

          {/* 시간대별 날씨 */}
          {isLoading ? (
            <HourlyWeatherSkeleton />
          ) : (
            <HourlyWeatherSection data={weather?.hourly} />
          )}

          {/* 즐겨찾기 */}
          <FavoriteSection isLoading={isLoading} />
        </>
      )}
    </main>
  );
};

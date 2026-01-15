import { HourlyWeather, type WeatherData } from '../../../entities/weather';

export const HourlyWeatherList = ({ data }: { data: WeatherData[] }) => {
  return (
    <div className="flex overflow-x-auto gap-5 lg:gap-10 scrollbar-hide px-6 pb-12">
      {data?.map((item) => (
        <HourlyWeather key={item.dt} data={item} />
      ))}
    </div>
  );
};

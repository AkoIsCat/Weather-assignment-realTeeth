import { HourlyForecast, type WeatherData } from '../../../entities/weather';

export const HourlyForecastList = ({ data }: { data: WeatherData[] }) => {
  return (
    <div className="flex overflow-x-auto gap-5 lg:gap-10 scrollbar-hide px-6 pb-12">
      {data?.map((item) => (
        <HourlyForecast key={item.dt} data={item} />
      ))}
    </div>
  );
};

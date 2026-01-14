import { HourlyForecast } from '../../../entities/weather/ui/HourlyForecast';

type Props = {
  time: number;
  temp: number;
  icon: string;
};

export const HourlyForecastList = ({ data }: { data: Props[] }) => {
  return (
    <div className="flex overflow-x-auto gap-5 lg:gap-10 scrollbar-hide px-6 pb-6">
      {data.map((item) => (
        <HourlyForecast
          key={item.time}
          time={item.time}
          temp={item.temp}
          icon={item.icon}
        />
      ))}
    </div>
  );
};

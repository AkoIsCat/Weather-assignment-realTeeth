import { Card } from '../../../shared';

// 임시타입
type PropsType = {
  time: number;
  temp: number;
  icon: string;
};

export const HourlyForecast = ({ time, temp, icon }: PropsType) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <p>{time}시</p>
      <Card width="hourlyItem" shadow="hourlyItem">
        <div className="flex flex-col justify-center items-center">
          {/* <WeatherIcon icon={icon} description="WeatherIcon" /> */}
          <p>{temp}°</p>
        </div>
      </Card>
    </div>
  );
};

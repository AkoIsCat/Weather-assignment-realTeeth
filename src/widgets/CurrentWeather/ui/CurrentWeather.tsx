import { WeatherIcon } from '../../../shared';
import type { CurrentWeatherType } from '../model/types';
import { CurrentTmp, TodayTmp } from '../../../entities/weather';

export const CurrentWeather = ({
  weatherIcon,
  curTmp,
  maxTmp,
  minTmp,
}: CurrentWeatherType) => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex items-center">
        <div>
          <WeatherIcon
            icon={weatherIcon.icon}
            description={weatherIcon.description}
          />
        </div>
        <CurrentTmp curTmp={curTmp} />
      </div>
      <div className="flex gap-2">
        <TodayTmp type="max" minTmp={maxTmp} />
        <TodayTmp type="min" minTmp={minTmp} />
      </div>
    </div>
  );
};

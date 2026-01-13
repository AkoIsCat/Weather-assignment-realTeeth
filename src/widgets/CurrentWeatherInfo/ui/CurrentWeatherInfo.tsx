import { Card } from '../../../shared';
import { CurrentLocation } from '../../CurrentLocation';
import { CurrentWeather } from '../../CurrentWeather/ui/CurrentWeather';
import type { CurrentWeatherInfoType } from '../model/types';

export const CurrentWeatherInfo = ({
  address,
  weather,
}: CurrentWeatherInfoType) => {
  return (
    <section className="lg:col-span-5 px-4">
      <Card>
        <CurrentLocation
          district={address.district ?? ''}
          neighborhood={address.neighborhood ?? ''}
          village={address.village ?? ''}
        />
        <CurrentWeather
          weatherIcon={{
            icon: weather.icon,
            description: weather.description,
          }}
          curTmp={6}
          minTmp={-10}
          maxTmp={10}
        />
      </Card>
    </section>
  );
};

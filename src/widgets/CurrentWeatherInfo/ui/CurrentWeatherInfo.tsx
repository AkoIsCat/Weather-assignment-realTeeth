import { Card } from '../../../shared';
import { CurrentLocation } from '../../CurrentLocation';
import { CurrentWeather } from '../../CurrentWeather/ui/CurrentWeather';
import type { CurrentWeatherInfoType } from '../model/types';

export const CurrentWeatherInfo = ({
  address,
  weatherIcon,
  curTmp,
  minTmp,
  maxTmp,
}: CurrentWeatherInfoType) => {
  return (  
    <section className="lg:col-span-4 px-4 lg:px-10">
      <Card width="currentDesktop">
        <CurrentLocation
          district={address.district ?? ''}
          neighborhood={address.neighborhood ?? ''}
          village={address.village ?? ''}
        />
        <CurrentWeather
          weatherIcon={{
            icon: weatherIcon.icon,
            description: weatherIcon.description,
            width: 'current',
          }}
          curTmp={curTmp}
          minTmp={minTmp}
          maxTmp={maxTmp}
        />
      </Card>
    </section>
  );
};

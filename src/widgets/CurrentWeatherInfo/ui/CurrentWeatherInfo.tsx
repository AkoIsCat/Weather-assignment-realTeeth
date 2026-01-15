import type { FavoriteStateType } from '../../../features/favorite';
import { Card } from '../../../shared';
import { CurrentLocation } from '../../../entities/address';
import { CurrentWeather } from '../../../entities/weather/ui/CurrentWeather';
import type { CurrentWeatherInfoType } from '../model/types';

export const CurrentWeatherInfo = ({
  address,
  weatherIcon,
  curTmp,
  minTmp,
  maxTmp,
  currentLocation,
}: CurrentWeatherInfoType) => {
  console.log(address, currentLocation);

  const alias = `${address.district ?? ''} ${address.neighborhood ?? ''} ${
    address.village ?? ''
  }`;

  const favoriteData: FavoriteStateType = {
    location: currentLocation,
    alias,
    curTmp,
    minTmp,
    maxTmp,
    icon: weatherIcon.icon,
    description: weatherIcon.description,
  };

  return (
    <section className="lg:col-span-4 px-4 lg:px-10">
      <Card width="currentDesktop">
        <CurrentLocation
          district={address.district ?? ''}
          neighborhood={address.neighborhood ?? ''}
          village={address.village ?? ''}
          favoriteWeatherData={favoriteData}
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

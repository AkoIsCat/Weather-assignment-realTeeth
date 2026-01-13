import type { WeatherIconType } from '../model/types';

export const WeatherIcon = ({ icon, description }: WeatherIconType) => {
  const iconUrl = `http://openweathermap.org/img/wn/${icon}@4x.png`;

  return (
    <div className="w-50 flex items-center justify-center leading-none">
      <img
        src={iconUrl}
        alt={description}
        className="block w-full h-full object-contain -mb-4"
      />
    </div>
  );
};

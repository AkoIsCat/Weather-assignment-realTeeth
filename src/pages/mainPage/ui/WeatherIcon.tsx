import type { WeatherType } from '../model/types';

export const WeatherIcon = ({ icon, description }: WeatherType) => {
  const iconUrl = `http://openweathermap.org/img/wn/${icon}@4x.png`;

  return (
    <div className="w-[250px] flex items-center justify-center leading-none">
      <img
        src={iconUrl}
        alt={description}
        className="block w-full h-full object-contain -mb-4"
      />
    </div>
  );
};

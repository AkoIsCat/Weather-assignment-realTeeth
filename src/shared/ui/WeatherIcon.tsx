import type { WeatherIconType } from '../model/types';

export const WeatherIcon = ({ icon, description, width }: WeatherIconType) => {
  const iconUrl = `http://openweathermap.org/img/wn/${icon}@4x.png`;

  const widthCss = {
    hourly: 'w-[110px] h-[120px]',
    favorite: '',
    current: 'w-full h-full',
  };

  return (
    <div className="w-50 flex items-center justify-center leading-none">
      <img
        src={iconUrl}
        alt={description}
        className={`block ${widthCss[width]} object-contain -mb-4`}
      />
    </div>
  );
};

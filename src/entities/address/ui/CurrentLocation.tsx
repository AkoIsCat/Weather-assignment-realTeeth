import { ToggleFavoriteButton } from '../../../features/favorite/ui/ToggleFavoriteButton';
import { LocationIcon } from '../../../shared';
import type { CurrentLocationProps } from '../model/types';

export const CurrentLocation = ({
  district,
  neighborhood,
  village,
  favoriteWeatherData,
}: CurrentLocationProps) => {
  const displayDistrict = district || '위치정보 로딩 중...';
  const displayNeighborhood = neighborhood || '';
  const displayVillage = village || '';

  return (
    <div className="flex items-center text-xl">
      <div className="flex gap-2 items-center">
        <LocationIcon />
        <p>{displayDistrict}</p>
        <p>{displayNeighborhood}</p>
        <p>{displayVillage}</p>
      </div>
      <ToggleFavoriteButton favoriteWeatherData={favoriteWeatherData} />
    </div>
  );
};

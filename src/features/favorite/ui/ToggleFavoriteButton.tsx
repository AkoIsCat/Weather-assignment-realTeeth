import { useFavoriteStore } from '../model/favoriteStore';
import { StarIcon, StarColorIcon } from '../../../shared';
import type { FavoriteStateType } from '../model/types';

export const ToggleFavoriteButton = ({
  favoriteWeatherData,
}: {
  favoriteWeatherData: FavoriteStateType;
}) => {
  const { favoriteLocationList, addLocation, deleteLocation } =
    useFavoriteStore();

  const isFavorite = favoriteLocationList.some(
    (item) => item.location === favoriteWeatherData.location
  );

  const onClickStar = () => {
    if (isFavorite) {
      deleteLocation(favoriteWeatherData.location);
    } else {
      if (favoriteLocationList.length === 6)
        alert('6개 이상 추가할 수 없습니다.');
      addLocation(favoriteWeatherData);
    }
  };

  return (
    <div onClick={onClickStar}>
      {isFavorite && <StarColorIcon />}
      {!isFavorite && <StarIcon />}
    </div>
  );
};

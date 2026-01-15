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
  console.log(favoriteLocationList);

  const isFavorite = favoriteLocationList.some(
    (item) => item.location === favoriteWeatherData.location
  );

  const onClickStar = () => {
    if (isFavorite) {
      deleteLocation(favoriteWeatherData.location);
    } else {
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

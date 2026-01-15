import { FavoriteCard } from '../../../features/favorite';
import { useFavoriteStore } from '../../../features/favorite';

export const FavoriteList = () => {
  const { favoriteLocationList } = useFavoriteStore();
  return favoriteLocationList.map((item) => (
    <FavoriteCard
      key={item.location}
      location={item.location}
      alias={item.alias}
      lat={item.lat}
      lon={item.lon}
    />
  ));
};

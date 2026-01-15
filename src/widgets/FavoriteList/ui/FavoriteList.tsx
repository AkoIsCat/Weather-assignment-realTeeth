import { FavoriteCard } from '../../../features/favorite';
import { useFavoriteStore } from '../../../features/favorite';

export const FavoriteList = () => {
  const { favoriteLocationList } = useFavoriteStore();
  return favoriteLocationList.map((item) => (
    <FavoriteCard
      key={item.location}
      location={item.location}
      alias={item.alias}
      curTmp={item.curTmp}
      minTmp={item.minTmp}
      maxTmp={item.maxTmp}
      icon={item.icon}
      description={item.description}
    />
  ));
};

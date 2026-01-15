import { FavoriteCard } from '../../../features/favorite';
import { useFavoriteStore } from '../../../features/favorite';
import { Card } from '../../../shared';

export const FavoriteList = () => {
  const { favoriteLocationList } = useFavoriteStore();

  if (favoriteLocationList.length === 0) {
    return (
      <Card width="mobile">자주 확인하는 지역을 즐겨찾기에 추가해보세요!</Card>
    );
  }

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

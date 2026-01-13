import { LocationIcon } from '../../../shared';
import type { CurrentLocationProps } from '../model/types';

export const CurrentLocation = ({
  district,
  neighborhood,
  village,
}: CurrentLocationProps) => {
  const displayDistrict = district || '위치정보';
  const displayNeighborhood = neighborhood || '로딩 중...';
  const displayVillage = village || '';

  return (
    <div className="flex gap-2 items-center">
      <LocationIcon />
      <p>{displayDistrict}</p>
      <p>{displayNeighborhood}</p>
      <p>{displayVillage}</p>
    </div>
  );
};

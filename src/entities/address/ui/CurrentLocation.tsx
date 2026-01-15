import { LocationIcon } from '../../../shared';
import type { CurrentLocationProps } from '../model/types';

export const CurrentLocation = ({
  district,
  neighborhood,
  village,
  favoriteButtonSlot,
}: CurrentLocationProps) => {
  return (
    <div className="flex items-center text-xl">
      <div className="flex gap-2 items-center">
        <LocationIcon />
        <p>{district || '위치정보 로딩 중...'}</p>
        <p>{neighborhood}</p>
        <p>{village}</p>
      </div>
      {favoriteButtonSlot}
    </div>
  );
};

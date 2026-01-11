// import { LocationIcon } from '../../../shared';
import type { HeaderProps } from '../model/types';

export const Header = ({ district, neighborhood, village }: HeaderProps) => {
  // 데이터가 아직 들어오지 않았으면 로딩중이라고 표시
  // const displayDistrict = district || '위치 정보';
  // const displayNeighborhood = neighborhood || '로딩 중';
  // const displayVillage = village || '...';

  return (
    <header className="bg-red-400 w-full h-14 px-2">
      <div className="bg-blue-400 h-full">Header</div>
    </header>
  );
};

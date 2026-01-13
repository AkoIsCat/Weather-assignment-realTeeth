import { FavoriteCard } from '../../../features/favorite';

const dummyData = [
  // 프로퍼티 이름은 임시임
  {
    city: '복현동',
    curTmp: 7,
    minTmp: -10,
    maxTmp: 20,
  },
  {
    city: '산격동',
    curTmp: 0,
    minTmp: -10,
    maxTmp: 4,
  },
  {
    city: '송산면',
    curTmp: -10,
    minTmp: -14,
    maxTmp: -7,
  },
  {
    city: '복현동',
    curTmp: 7,
    minTmp: -10,
    maxTmp: 20,
  },
  {
    city: '산격동',
    curTmp: 0,
    minTmp: -10,
    maxTmp: 4,
  },
  {
    city: '송산면',
    curTmp: -10,
    minTmp: -14,
    maxTmp: -7,
  },
];

export const FavoriteList = () => {
  return dummyData.map((item) => (
    <FavoriteCard
      key={item.city}
      city={item.city}
      curTmp={item.curTmp}
      minTmp={item.minTmp}
      maxTmp={item.maxTmp}
    />
  ));
};

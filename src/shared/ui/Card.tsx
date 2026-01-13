import type { CardProps, CardWidth } from '../model/types';

export const Card = ({ children, width = 'mobile' }: CardProps) => {
  // width 동적css
  const widthClass: Record<CardWidth, string> = {
    // 모바일: 1열 100%
    mobile: 'w-full min-w-0',

    // 데스크탑: 12컬럼 그리드 기준 (4/8/12)
    currentDesktop: 'w-full lg:col-span-4 min-w-0',
    hourlyDesktop: 'w-full lg:col-span-8 min-w-0',
    favoriteDesktop: 'w-full lg:col-span-12 min-w-0',

    // 즐겨찾기 지역 카드
    favoriteItem: 'w-full',

    // 시간대별 기온 카드
    hourlyItem: 'w-[112px] lg:w-[120px] min-w-0',

    // 최고 / 최저 기온 카드
    tempStatItem:
      'w-[125px] lg:w-[140px] h-[30px] min-w-0 flex justify-center items-center gap-3',
  };

  return (
    <div
      className={`${widthClass[width]} rounded-3xl border border-black/5 bg-white/70 backdrop-blur-md shadow-[0_18px_60px_rgba(15,23,42,0.08),0_2px_10px_rgba(15,23,42,0.06)] ring-1 ring-white/40 p-5 lg:p-6`}
    >
      {children}
    </div>
  );
};

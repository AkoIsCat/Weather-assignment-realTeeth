import type { CardProps, CardWidth } from '../model/types';

export const Card = ({ children, width = 'mobile' }: CardProps) => {
  // width 동적css
  const widthClass: Record<CardWidth, string> = {
    // 모바일: 1열 100%
    mobile: 'w-full',

    // 데스크탑: 12컬럼 그리드 기준 (5/7/12)
    currentDesktop: 'w-full lg:col-span-5',
    hourlyDesktop: 'w-full lg:col-span-7',
    favoriteDesktop: 'w-full lg:col-span-12',

    // 즐겨찾기 지역 카드
    favoriteItem: 'w-full',

    // 시간대별 기온 카드
    hourlyItem: 'w-[112px] shrink-0 lg:w-[120px]',
  };

  return (
    <div
      className={`${widthClass[width]} rounded-3xl border border-black/5 bg-white/70 backdrop-blur-md shadow-[0_18px_60px_rgba(15,23,42,0.08),0_2px_10px_rgba(15,23,42,0.06)] ring-1 ring-white/40 p-5 lg:p-6`}
    >
      {children}
    </div>
  );
};

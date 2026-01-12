import type { PropsWithChildren } from 'react';

export type CardWidth =
  | 'mobile' // 모바일 전체폭 카드
  | 'currentDesktop' // 데스크탑: 현재날씨(좌측)
  | 'hourlyDesktop' // 데스크탑: 시간대별날씨(우측)
  | 'favoriteDesktop' // 데스크탑: 즐겨찾기(하단)
  | 'favoriteItem' // 즐겨찾기 항목 아이템
  | 'hourlyItem'; // 시간대 별 기온 아이템

export type CardProps = PropsWithChildren<{
  width?: CardWidth;
}>;

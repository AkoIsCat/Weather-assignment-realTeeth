export const formatToKST = (timestamp: number) => {
  return new Intl.DateTimeFormat('ko-KR', {
    dateStyle: 'short',
    timeStyle: 'short',
    timeZone: 'Asia/Seoul',
    hour12: false,
  }).format(new Date(timestamp * 1000));
};

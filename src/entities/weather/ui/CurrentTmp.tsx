import type { CurrentTmpType } from '../model/types';

export const CurrentTmp = ({ curTmp }: CurrentTmpType) => {
  return <div className="text-6xl">{curTmp}°</div>;
};

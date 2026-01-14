import type { InputType } from '../model/types';

export const Input = ({
  value,
  onChange,
  onKeyDown,
}: InputType) => {
  return (
    <input
      type="text"
      className={[
        'w-full h-12 lg:h-14',
        'px-5 pl-12',
        'text-sm lg:text-base text-slate-800 placeholder:text-slate-400',
        'outline-none transition',
        'bg-white',
        // 테두리
        'border border-black/5 ring-1 ring-white/40',
        'rounded-3xl',
      ].join(' ')}
      placeholder="지역을 검색하세요..."
      value={value}
      onChange={(e) => onChange(e)}
      onKeyDown={(e) => onKeyDown(e)}
    />
  );
};

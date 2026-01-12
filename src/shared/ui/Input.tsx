export const Input = () => {
  return (
    <input
      type="text"
      className=" w-full
    h-12 lg:h-14

    rounded-3xl
    px-5 pl-12

    bg-white/70
    backdrop-blur-md

    border border-black/5
    ring-1 ring-white/40

    shadow-[0_12px_40px_rgba(15,23,42,0.08),0_2px_8px_rgba(15,23,42,0.06)]

    text-sm lg:text-base
    text-slate-800
    placeholder:text-slate-400

    outline-none

    transition"
      placeholder="지역을 검색하세요..."
    />
  );
};

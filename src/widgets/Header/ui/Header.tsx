import { CloudIcon } from '../../../shared';

export const Header = () => {
  return (
    <header className="flex items-center gap-3">
      <CloudIcon />
      <p className="text-2xl font-semibold">Weather</p>
    </header>
  );
};

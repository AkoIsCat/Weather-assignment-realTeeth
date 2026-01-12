import { Input } from '../../../shared';
import { SearchIcon } from '../../../shared';

export const SearchBar = () => {
  return (
    <div className="relative flex items-center z-0 px-4">
      <div className="absolute z-10 left-7">
        <SearchIcon />
      </div>
      <Input />
    </div>
  );
};

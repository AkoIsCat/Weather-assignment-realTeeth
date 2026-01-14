import { SearchIcon } from '../../../shared';
import { SearchSuggestionList } from './SearchSuggestionList';
import { useState } from 'react';
import { korea_districts } from '../../../entities/address';
import { SearchInput } from '../../../entities/search/ui/SearchInput';

export const SearchBar = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const isValidSearch = searchValue.trim().length > 0;

  const filterLocation = korea_districts.filter((item) =>
    item.includes(searchValue)
  );

  return (
    <div className="relative flex items-center z-0 px-4">
      <div className="absolute z-10 left-7">
        <SearchIcon />
      </div>
      <div className="relative w-full">
        <SearchInput
          value={searchValue}
          setValue={setSearchValue}
          isValidSearch={isValidSearch}
        />
        {isValidSearch && (
          <div className="absolute left-0 right-0 top-full z-20">
            <SearchSuggestionList data={filterLocation} />
          </div>
        )}
      </div>
    </div>
  );
};

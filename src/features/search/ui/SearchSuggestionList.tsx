import { SearchSuggestionItem } from '../../../entities/search';

export const SearchSuggestionList = ({ data }: { data: string[] }) => {
  return (
    <ul
      className="
      bg-white
    absolute left-0 right-0 top-full
    rounded-b-2xl
    shadow-[0_8px_16px_-4px_rgba(0,0,0,0.12)]
    py-2
    z-50
    overflow-y-auto
    max-h-96
  "
    >
      {data.length > 0 &&
        data.map((item) => <SearchSuggestionItem key={item} location={item} />)}
      {data.length === 0 && <SearchSuggestionItem location={''} />}
    </ul>
  );
};

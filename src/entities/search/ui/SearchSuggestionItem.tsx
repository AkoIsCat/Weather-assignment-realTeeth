export const SearchSuggestionItem = ({ location }: { location: string }) => {
  return (
    <li className="hover:bg-[#f1e7df] px-10 h-10 flex items-center hover:cursor-pointer">
      {location.length > 0 ? location : '검색 결과 없음'}
    </li>
  );
};

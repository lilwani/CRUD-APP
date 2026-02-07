import { type IFilterProps } from "../Applications";

function SearchFilter({ updateFilter }: IFilterProps) {
  return (
    <div className="w-[85%]">
      <input
        type="text"
        className="border-2 rounded-2xl p-2 pl-6 text-xs font-bold w-full bg-gray-100  shadow-sm shadow-blue-200 transition-shadow duration-300 ease-in-out hover:shadow-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
        placeholder="Search by company name or title..."
        onChange={(e) => {
          updateFilter("search", e.target.value);
        }}
      />
    </div>
  );
}

export default SearchFilter;

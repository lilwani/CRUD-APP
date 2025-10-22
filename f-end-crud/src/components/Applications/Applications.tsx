import ApplicationCard from "./ApplicationCard/ApplicationCard";
import MiscFilter from "./ApplicationFilters/MiscFilters";
import SearchFilter from "./ApplicationFilters/SearchFilter";
import SourceFilter from "./ApplicationFilters/SourceFilter";
import StatusFilter from "./ApplicationFilters/StatusFilter";

function Applications() {
  return (
    <div className="flex border-amber-600 items-center border-2 rounded-2xl grow flex-col h-full w-full gap-3 overflow-y-auto">
      <div
        className="flex w-[85%] flex-col p-2 border-2 border-amber-950 rounded-2xl basis-1/4 mt-4"
        id="filters"
      >
        <div className="flex flex-row items-baseline">
          
          <SearchFilter />
          <MiscFilter />
        </div>
        <div className="flex flex-row items-baseline w-[30%] justify-between box-border px-4 py-1">
          <StatusFilter />
          <SourceFilter />
        </div>
      </div>
      <ApplicationCard />
    </div>
  );
}

export default Applications;

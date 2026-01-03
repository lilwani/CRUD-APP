import { useSelector } from "react-redux";
import ApplicationCard from "./ApplicationCard/ApplicationCard";
import MiscFilter from "./ApplicationFilters/MiscFilters";
import SearchFilter from "./ApplicationFilters/SearchFilter";
import SourceFilter from "./ApplicationFilters/SourceFilter";
import StatusFilter from "./ApplicationFilters/StatusFilter";
import {
  getAllApplications,
  type AppDataType,
  type AppSource,
  type AppStatus,
} from "./appSlice";
import useAppFilter from "../../hooks/useAppFilter";

export interface IAppsProps {
  allApps: AppDataType[];
}

export interface FilterType {
  search: string;
  misc: "Date Applied" | "Status" | "Company" | "Title";
  status: AppStatus;
  source: AppSource;
  order: string;
}

export interface IFilterProps {
  updateFilter: <K extends keyof FilterType>(
    filterKey: K,
    value: FilterType[K]
  ) => void;
}

function Applications() {
  const allApps: AppDataType[] = useSelector(getAllApplications);
  const { filteredApps, updateFilter } = useAppFilter(allApps);

  return (
    <div className="flex border-amber-600 items-center border-2 rounded-2xl grow flex-col h-full w-full gap-3 overflow-y-auto">
      <div
        className="flex w-[85%] flex-col p-2 border-2 border-amber-950 rounded-2xl basis-1/4 mt-4"
        id="filters"
      >
        <div className="flex flex-row items-baseline">
          <SearchFilter updateFilter={updateFilter} />
          <MiscFilter updateFilter={updateFilter} />
        </div>
        <div className="flex flex-row items-baseline w-[30%] justify-between box-border px-4 py-1">
          <StatusFilter updateFilter={updateFilter} />
          <SourceFilter updateFilter={updateFilter} />
        </div>
      </div>
      <ApplicationCard allApps={filteredApps} />
    </div>
  );
}

export default Applications;

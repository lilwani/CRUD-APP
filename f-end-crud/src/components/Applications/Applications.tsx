import { useSelector } from "react-redux";
import ApplicationCard from "./ApplicationCard/ApplicationCard";
import MiscFilter from "./ApplicationFilters/MiscFilters";
import SearchFilter from "./ApplicationFilters/SearchFilter";
import SourceFilter from "./ApplicationFilters/SourceFilter";
import StatusFilter from "./ApplicationFilters/StatusFilter";
import { getAllApplications, type AppDataType } from "./appSlice";
import { useState } from "react";

export interface IAppsProps {
  allApps: AppDataType[];
}

export interface FilterType {
  search: string;
  misc: "Date Applied" | "Status" | "Company" | "Title";
  status:
    | "Applied"
    | "Offered"
    | "Rejected"
    | "Referred"
    | "Interview"
    | "Withdrawn";
  source:
    | "Company Portal"
    | "LinkedIn"
    | "Naukri"
    | "Referred"
    | "Miscellaneous";
}

export interface IFilterProps {
  updateFilter: <K extends keyof FilterType>(
    filterKey: K,
    value: FilterType[K]
  ) => void;
}

function Applications() {
  const allApps: AppDataType[] = useSelector(getAllApplications);
  const [filters, setFilters] = useState<FilterType>({
    search: "",
    misc: "Date Applied",
    status: "Applied",
    source: "Naukri",
  });

  const updateFilter = <K extends keyof FilterType>(
    filterKey: K,
    value: FilterType[K]
  ) => {
    console.log("Received filter ", filterKey, value);
    setFilters((prev) => ({ ...prev, filterKey: value }));
  };

  const filteredApps = allApps.filter((app) => {
    const searchMatch =
      app.title.includes(filters.search) ||
      app.company.includes(filters.search);
    const statusMatch = app.status.includes(filters.status);
    const sourceMatch = app.via.includes(filters.source);
    return searchMatch && statusMatch && sourceMatch;
  });

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

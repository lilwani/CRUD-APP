import { useState } from "react";
import type {
  AppDataType,
  AppSource,
  AppStatus,
} from "../components/Applications/appSlice";

export interface FilterType {
  search: string;
  misc: "Date Applied" | "Status" | "Company" | "Title";
  status: AppStatus;
  source: AppSource;
  order: string;
}


const useAppFilter = (allApps: AppDataType[]) => {
  const [filters, setFilters] = useState<FilterType>({
    search: "",
    misc: "Date Applied",
    status: "Applied",
    source: "Naukri",
    order: "asc",
  });

  const updateFilter = <K extends keyof FilterType>(
    filterKey: K,
    value: FilterType[K]
  ) => {
    console.log("Received filter ", filterKey, value);
    console.log("previous filter and value ", filters);
    setFilters((prev) => ({ ...prev, [filterKey]: value }));
  };

  const filteredApps = allApps.filter((app) => {
    console.log("I am filtering again");
    console.log("My filters are ", filters);
    const searchMatch =
      app.title.toLowerCase().includes(filters.search.toLowerCase()) ||
      app.company.toLowerCase().includes(filters.search.toLowerCase());
    const statusMatch = app.status.includes(filters.status);
    const sourceMatch = app.via.includes(filters.source);
    console.log(
      "searchMatch && statusMatch && sourceMatch ",
      searchMatch,
      statusMatch,
      sourceMatch
    );
    return searchMatch && statusMatch && sourceMatch;
  });

  return { filteredApps, updateFilter };
};

export default useAppFilter;

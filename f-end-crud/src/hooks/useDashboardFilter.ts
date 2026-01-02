import { useEffect, useState } from "react";
import type { AppDataType } from "../components/Applications/appSlice";

export interface FilteredData {
  recentApps: AppDataType[];
  activeApps: number;
  interviewApps: number;
  followUps: AppDataType[];
  respRate: number;
  appliedApps: number;
  rejectApps: number;
}

const useDashboardFilter = (allApps: AppDataType[]) => {
  const [filteredData, setFilteredData] = useState<FilteredData>({
    recentApps: [],
    activeApps: 0,
    interviewApps: 0,
    followUps: [],
    respRate: 0,
    appliedApps: 0,
    rejectApps: 0,
  });

  useEffect(() => {
    const nonResp = ["Withdrawn", "Referred", "Applied"];

    const today = new Date();
    const lastWeek = new Date();
    lastWeek.setDate(today.getDate() - 7);

    const recentApps = [];
    let activeApps = 0,
      interviewApps = 0,
      appliedApps = 0,
      rejectApps = 0,
      respCount = 0;

    for (const item of allApps) {
      new Date(item.appDate) > lastWeek && recentApps.push(item);

      switch (item.status) {
        case "Reviewing":
          activeApps++;
          break;
        case "Interview":
          interviewApps++;
          break;
        case "Applied":
          appliedApps++;
          break;
        case "Rejected":
          rejectApps++;
          break;
      }

      !nonResp.includes(item.status) && respCount++;
    }

    if (respCount) {
      respCount = Number(((respCount / allApps.length) * 100).toFixed(2));
    }

    const followUps = [...allApps]
      .sort((first, second) => {
        const firstDate = new Date(first.followUpDate);
        const secondDate = new Date(second.followUpDate);
        return firstDate < secondDate ? 1 : -1;
      })
      .slice(0, 3);

    setFilteredData({
      recentApps,
      activeApps,
      followUps,
      interviewApps,
      respRate: respCount,
      appliedApps,
      rejectApps,
    });
  }, [allApps]);

  return filteredData;
};

export default useDashboardFilter;

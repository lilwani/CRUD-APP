import { useEffect, useState } from "react";
import type { AppDataType } from "../components/Applications/appSlice";

export interface FilteredData {
  recentApps: AppDataType[] | [];
  activeApps: number;
  interviewApps: number;
  followUps: AppDataType[] | [];
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

    const recentApps = allApps.filter((item) => {
      return new Date(item.appDate) > lastWeek;
    });

    const activeApps = allApps.filter(
      (item) => item.status === "Reviewing"
    ).length;

    const interviewApps = allApps.filter(
      (item) => item.status === "Interview"
    ).length;

    const followUps = [...allApps]
      .sort((first, second) => {
        const firstDate = new Date(first.followUpDate);
        const secondDate = new Date(second.followUpDate);
        return firstDate < secondDate ? 1 : -1;
      })
      .slice(0, 3);

    let respRate = allApps.filter(
      (item) => !nonResp.includes(item.status)
    ).length;

    if (respRate) {
      respRate = Number(((respRate / allApps.length) * 100).toFixed(2));
    }

    const appliedApps = allApps.filter(
      (item) => item.status === "Applied"
    ).length;

    const rejectApps = allApps.filter(
      (item) => item.status === "Rejected"
    ).length;

    setFilteredData({
      recentApps,
      activeApps,
      followUps,
      interviewApps,
      respRate,
      appliedApps,
      rejectApps,
    });
  }, [allApps]);

  return filteredData;
};

export default useDashboardFilter;

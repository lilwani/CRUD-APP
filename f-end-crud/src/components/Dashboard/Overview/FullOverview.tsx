import useDashboardFilter from "../../../hooks/useDashboardFilter";
import type { AppDataType } from "../../Applications/appSlice";

interface IProps {
  allApps: AppDataType[];
}

function FullOverview({ allApps }: IProps) {
  const { rejectApps, appliedApps, interviewApps } =
    useDashboardFilter(allApps);
  return (
    <div className="flex border-2 border-gray-500 rounded-xl h-22 box-border p-4 flex-col gap-2">
      <p>Overview</p>
      <ul className="flex flex-row gap-12 ">
        <li className="flex flex-row items-baseline">
          <p className="text-sm pr-2">🔵Applied</p>
          <b className="text-xl">{appliedApps}</b>
        </li>
        <li className="flex flex-row items-baseline">
          <p className="text-sm pr-2">🟡Interview</p>
          <b className="text-xl">{interviewApps}</b>
        </li>
        <li className="flex flex-row items-baseline">
          <p className="text-sm pr-2">🔴Rejected</p>
          <b className="text-xl">{rejectApps}</b>
        </li>
      </ul>
    </div>
  );
}

export default FullOverview;

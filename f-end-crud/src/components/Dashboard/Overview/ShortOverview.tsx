import useDashboardFilter from "../../../hooks/useDashboardFilter";
import { type AppDataType } from "../../Applications/appSlice";
interface IProps {
  allApps: AppDataType[];
}

function ShortOverview({ allApps }: IProps) {
  const filteredApps = useDashboardFilter(allApps);

  return (
    <div className="flex flex-row gap-10">
      <div className="flex-1 h-40 border-2 flex flex-col justify-between border-gray-500 bg-gray-50 rounded-xl p-4">
        <div className="flex flex-row justify-between w-full">
          <p className="text-lg font-bold">Total Applications</p>
          <span>↝</span>
        </div>
        <div className="flex flex-col w-full gap-1">
          <p className="text-3xl">{allApps.length}</p>
          <p className="text-xs font-extralight text-gray-500">{`+${filteredApps.recentApps.length} applications this week`}</p>
        </div>
      </div>
      <div className="flex-1 h-40 border-2 flex flex-col justify-between border-gray-500 bg-gray-50 rounded-xl p-4">
        <div className="flex flex-row justify-between w-full">
          <p className="text-lg font-bold">Active Applications</p>
          <span>↝</span>
        </div>
        <div className="flex flex-col w-full gap-1">
          <p className="text-3xl">{filteredApps.activeApps}</p>
          <p className="text-xs font-extralight text-gray-500">In Progress</p>
        </div>
      </div>
      <div className="flex-1 h-40 border-2 flex flex-col justify-between border-gray-500 bg-gray-50 rounded-xl p-4">
        <div className="flex flex-row justify-between w-full">
          <p className="text-lg font-bold">Interviews</p>
          <span>↝</span>
        </div>
        <div className="flex flex-col w-full gap-1">
          <p className="text-3xl">{filteredApps.interviewApps}</p>
          <p className="text-xs font-extralight text-gray-500">Scheduled</p>
        </div>
      </div>
      <div className="flex-1 h-40 border-2 flex flex-col justify-between border-gray-500 bg-gray-50 rounded-xl p-4">
        <div className="flex flex-row justify-between w-full">
          <p className="text-lg font-bold">Response Rate</p>
          <span>↝</span>
        </div>
        <div className="flex flex-col w-full gap-1">
          <p className="text-3xl">
            {filteredApps.respRate}
            <span className="text-xl">{" %"}</span>
          </p>
          <p className="text-xs font-extralight text-gray-500">
            Interviews + Offers + Review
          </p>
        </div>
      </div>
    </div>
  );
}

export default ShortOverview;

import useDashboardFilter from "../../../hooks/useDashboardFilter";
import type { AppDataType } from "../../Applications/appSlice";

interface IProps {
  allApps: AppDataType[];
}

function FollowUps({ allApps }: IProps) {
  const { followUps } = useDashboardFilter(allApps);

  return (
    <div className="border-2 border-gray-500 bg-gray-50 rounded-xl flex-1 flex-col h-70 box-border p-4">
      <p className="text-md text-gray-900 pb-10">Upcoming Follow-Ups</p>
      <ul className="flex flex-col gap-1 overflow-y-auto">
        {followUps.map((item) => (
          <li
            className="flex flex-col border border-gray-400 rounded-xl box-border px-3 py-2"
            key={item.appId}
          >
            <div className="flex flex-row gap-4  box-border items-baseline">
              <p className="text-md font-bold flex-2">{item.title}</p>
              <p className="bg-yellow-100 rounded-2xl border border-black text-xs font-bold p-1">
                {item.status}
              </p>
              <p className="text-sm">{item.appDate}</p>
            </div>
            <div className="flex flex-col">
              <p className="text-xs text-gray-600">{item.company}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FollowUps;

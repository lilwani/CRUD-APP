import { Link } from "react-router-dom";
import ShortOverview from "./Overview/ShortOverview";
import RecentApps from "./RecentApps/RecentApps";
import FollowUps from "./FollowUps/FollowUps";
import FullOverview from "./Overview/FullOverview";

function Dashboard() {
  return (
    <div className="border-amber-300 border-2 rounded-2xl grow flex flex-col justify-start w-full items-center gap-8 overflow-y-auto box-border py-10">
      <div
        id="title"
        className="flex flex-row justify-between items-baseline box-border w-[80%] basis-1/6"
      >
        <div className="flex flex-col gap-2 ">
          <h1 className="text-3xl">Job Application Tracker</h1>
          <p className="text-md text-gray-600">
            Track and manage your job applications in one place
          </p>
        </div>
        <Link
          to="/addCard"
          className="bg-black text-white rounded-2xl text-center h-10 w-50 pt-2"
        >
          ➕ Add Application
        </Link>
      </div>
      <div className=" w-[80%] basis-2/6">
        <ShortOverview />
      </div>
      <div className="flex flex-row w-[80%] justify-between gap-4 basis-3/6">
        <RecentApps />
        <FollowUps />
      </div>
      <div className="w-[80%] basis-1/6">
        <FullOverview />
      </div>
    </div>
  );
}

export default Dashboard;

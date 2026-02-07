import FullCard from "./FullCard";
import type { IAppsProps } from "../Applications";

function ApplicationCard({ allApps }: IAppsProps) {
  return (
    <div className="flex min-h-screen w-[85%] flex-col gap-4 mb-2">
      <label>
        Showing {allApps.length} of {allApps.length} applications
      </label>
      {allApps.map((item) => (
        <FullCard key={Number(item.appId)} application={item} />
      ))}
    </div>
  );
}

export default ApplicationCard;

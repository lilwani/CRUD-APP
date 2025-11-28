import { Link } from "react-router-dom";
import type { AppDataType, AppStatus } from "../appSlice";

interface IProps {
  application: AppDataType;
}

function FullCard({ application }: IProps) {
  const statusColor: Record<AppStatus, string> = {
    Interview: "bg-yellow-200",
    Rejected: "bg-red-200",
    Withdrawn: "bg-grey-200",
    Offered: "bg-green-200",
    Applied: "bg-orange-200",
  };

  return (
    <div className="border rounded-2xl border-gray-400 flex flex-col h-76 gap-2 bg-cyan-50 ">
      <div className="flex flex-col box-border p-4 gap-2" id="left-side">
        <div className="flex flex-row justify-between box-border px-2 items-baseline">
          <p className="text-lg">{application.title}</p>
          <p
            className={`text-md ${
              statusColor[application.status as AppStatus] ?? "yellow"
            } rounded-4xl px-4`}
          >
            {application.status}
          </p>
        </div>
        <label className="px-2 text-xl underline">{application.company}</label>
      </div>
      <div className="flex flex-col box-border p-4 gap-2">
        <div className="flex flex-row justify-between box-border px-2 items-baseline">
          <input
            type="date"
            className="text-md w-[15%] border bg-gray-100 rounded-2xl px-2 "
            value={application.appDate}
            readOnly
          />
          <label className="text-md w-[50%]">📍 {application.location}</label>
        </div>
        <div className="flex flex-row justify-between box-border px-2 items-baseline">
          <label className="text-md border bg-gray-100 rounded-lg px-2">
            {application.offeredSalRange}
          </label>
          <label className="text-md w-[50%]">✍🏼 {application.via}</label>
        </div>
        <input
          type="text"
          className="text-sm font-bold rounded-md py-2 bg-gray-300 border box-border px-4 mx-2"
          value={application.notes ?? "no notes provided"}
          readOnly
        />
      </div>
      <div className="flex flex-row box-border px-6 gap-8">
        <Link
          to="/editCard"
          className="text-sm font-bold bg-gray-50 rounded-xl p-2 box-border border-2"
        >
          Edit
        </Link>
        <Link
          to="/editCard"
          className="text-sm font-bold bg-gray-50 rounded-xl p-2 box-border border-2"
        >
          Delete
        </Link>
        <Link
          to="/editCard"
          className="text-sm font-bold bg-gray-100 rounded-xl p-2 box-border border-2"
        >
          👁️
        </Link>
      </div>
    </div>
  );
}

export default FullCard;

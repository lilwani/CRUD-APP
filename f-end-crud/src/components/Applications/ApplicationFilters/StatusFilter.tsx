import type { IFilterProps } from "../Applications";
import { allAppSatus, type AppStatus } from '../appSlice'

function StatusFilter({ updateFilter }: IFilterProps) {
  return (
    <div className="text-sm w-[45%]">
      <select className="border w-full text-center py-1 bg-gray-100 rounded-2xl shadow-sm shadow-blue-200 transition-shadow duration-300 ease-in-out hover:shadow-lg focus:outline-none focus:ring-1 focus:ring-blue-500">
        {allAppSatus.map(status =>(<option key={status} value={status}>{status}</option>))}
      </select>
    </div>
  );
}

export default StatusFilter;

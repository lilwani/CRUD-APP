import { Link } from "react-router-dom";

function FullCard() {
  return (
    <div className="border rounded-2xl border-gray-400 flex flex-col h-76 gap-2 bg-cyan-50 ">
      <div className="flex flex-col box-border p-4 gap-2" id="left-side">
        <div className="flex flex-row justify-between box-border px-2 items-baseline">
          <label className="text-2xl">XX Title</label>
          <label className="text-md">XX Status </label>
        </div>
        <label className="px-2 text-md">XX Company</label>
      </div>
      <div className="flex flex-col box-border p-4 gap-2">
        <div className="flex flex-row justify-between box-border px-2 items-baseline">
          <input
            type="date"
            className="text-md w-[15%] border bg-gray-100 rounded-2xl px-2 "
          />
          <label className="text-md w-[50%]">XX Location</label>
        </div>
        <div className="flex flex-row justify-between box-border px-2 items-baseline">
          <label className="text-md border bg-gray-100 rounded-lg px-2">
            10,00,000 - 18,00,000 lkh INR
          </label>
          <label className="text-md w-[50%]">XX via</label>
        </div>
        <input
          type="text"
          className="text-sm font-bold rounded-md py-2 bg-gray-300 border box-border px-4 mx-2"
          value="XX notes"
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

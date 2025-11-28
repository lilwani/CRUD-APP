import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className=" h-[60px] border-gray-700 border-2 items-center rounded-2xl w-[80%] sticky top-0 flex flex-row ">
      <Link
        to="applications"
        className="hover:bg-gray-400 hover:text-white hover:text-xl flex justify-center items-center text-lg bg-gray-200 border-2 border-gray-700 rounded-lg h-full flex-1"
      >
        Applications
      </Link>
      <Link
        to="/dashboard"
        className="hover:bg-gray-400 hover:text-white hover:text-xl flex justify-center items-center text-lg bg-gray-200 border-2 border-gray-700 rounded-lg h-full flex-1"
      >
        Dashboard
      </Link>
      <Link
        to="/analytics"
        className="hover:bg-gray-400 hover:text-white hover:text-xl flex justify-center items-center text-lg bg-gray-200 border-2 border-gray-700 rounded-lg h-full flex-1"
      >
        Analytics
      </Link>
    </div>
  );
}

export default Navbar;

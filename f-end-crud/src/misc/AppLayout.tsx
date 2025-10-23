import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Applications from "../components/Applications/Applications";
import Dashboard from "../components/Dashboard/Dashboard";

function AppLayout() {
  return (
    <div className="flex flex-col border-red-500 border-2 h-full w-full rounded-2xl gap-2 overflow-hidden">
      <Navbar />
      {/* <Outlet /> */}
      {/* <Applications /> */}
      <Dashboard />
    </div>
  );
}

export default AppLayout;

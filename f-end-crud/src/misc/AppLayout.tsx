import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Applications from "../components/Applications/Applications";
import Dashboard from "../components/Dashboard/Dashboard";

function AppLayout() {
  const location = useLocation();

  return (
    <div className="flex flex-col border-red-500 border-2 h-full w-full rounded-2xl gap-2 overflow-hidden items-center">
      {location.pathname.includes("login") ||
      location.pathname.includes("register") ||
      location.pathname === "/" ? null : (
        <Navbar />
      )}

      <Outlet />
    </div>
  );
}

export default AppLayout;

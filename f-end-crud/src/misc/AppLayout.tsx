import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

function AppLayout() {
  return (
    <div className="flex flex-col border-red-500 border-2 w-full h-full rounded-2xl gap-2">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default AppLayout;

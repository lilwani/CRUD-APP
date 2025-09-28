import { Outlet } from "react-router-dom";

function ProtectedRoute() {
  return (
    <>
      <div>Protected Route</div>
      <Outlet />
    </>
  );
}

export default ProtectedRoute;

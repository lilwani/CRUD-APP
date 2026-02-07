import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

const ApplicationLayout = lazy(
  () => import("../components/Applications/ApplicationLayout")
);
const Register = lazy(() => import("../components/Authentication/Register"));

const App = lazy(() => import("../App"));
const Dashboard = lazy(() => import("../components/Dashboard/Dashboard"));
const Applications = lazy(
  () => import("../components/Applications/Applications")
);
const Login = lazy(() => import("../components/Authentication/Login"));
const ProtectedRoute = lazy(
  () => import("../components/Authentication/ProtectedRouter")
);
const UserLayout = lazy(() => import("../components/User/UserLayout"));
const DisplayProfile = lazy(
  () => import("../components/User/DisplayProfile/DisplayProfile")
);
const EditProfile = lazy(() => import("../components/User/EditProfile"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Login /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      {
        element: <ProtectedRoute />,
        children: [
          { path: "dashboard", element: <Dashboard /> },
          {
            path: "user",
            element: <UserLayout />,
            children: [
              { element: <DisplayProfile />, index: true },
              { path: "editProfile", element: <EditProfile /> },
            ],
          },
          {
            path: "applications",
            element: <ApplicationLayout />,
            children: [
              { element: <Applications />, index: true },
              { path: "editCard", element: null },
              { path: "addCard", element: null },
            ],
          },
        ],
      },
    ],
  },
]);

export default router;

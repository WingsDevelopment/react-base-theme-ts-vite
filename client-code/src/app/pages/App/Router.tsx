import { ElementType, lazy, Suspense } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { TagRouteObject } from "../../features/Tag/routes";

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: "",
      children: [
        { path: "home", element: <Home /> },
        { path: "test", element: <TestPage /> },
        { path: "users", element: <Users /> },
        { path: "settings", element: <Settings /> },
      ],
    },
    { ...TagRouteObject },
  ]);
}

const Home = lazy(() => import("../Home"));
const TestPage = lazy(() => import("../TestPage"));
const Settings = lazy(() => import("../Settings"));
const Users = lazy(() => import("../Users"));

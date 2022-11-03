import { ElementType, lazy, Suspense } from "react";
import { Navigate, useRoutes } from "react-router-dom";

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
  ]);
}

const Loadable = (Component: ElementType) => (props: any) =>
  (
    <Suspense fallback={<div>loading. . .</div>}>
      <Component {...props} />
    </Suspense>
  );

const Home = Loadable(lazy(() => import("../Home")));
const TestPage = Loadable(lazy(() => import("../TestPage")));
const Settings = Loadable(lazy(() => import("../Settings")));
const Users = Loadable(lazy(() => import("../Users")));

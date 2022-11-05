import { ElementType, lazy, Suspense } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { TagRoutes } from "../../features/Tag/routes/TagRoutes";
import { Loadable } from "./Lodable";

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
    {
      path: TagRoutes.root,
      children: [
        { path: TagRoutes.create, element: <CreateTagPage /> },
        { path: TagRoutes.details + "/:id", element: <TagDetailsPage /> },
        { path: TagRoutes.index, element: <TagIndexPage /> },
        { path: TagRoutes.update + "/:id", element: <UpdateTagPage /> },
      ],
    },
  ]);
}

const Home = lazy(() => import("../Home"));
const TestPage = lazy(() => import("../TestPage"));
const Settings = lazy(() => import("../Settings"));
const Users = lazy(() => import("../Users"));

const CreateTagPage = lazy(
  () => import("../../features/Tag/pages/Create/CreateTagPage")
);
const UpdateTagPage = lazy(
  () => import("../../features/Tag/pages/Update/UpdateTagPage")
);
const TagDetailsPage = lazy(
  () => import("../../features/Tag/pages/Details/DetailsTagPage")
);
const TagIndexPage = lazy(
  () => import("../../features/Tag/pages/Index/IndexTagPage")
);

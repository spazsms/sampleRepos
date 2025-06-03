import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "./Dashboard/HomeLayout";
import MainDashboard from "./Dashboard/MainDashboard";
import Cards from "./Dashboard/Cards";

let router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        path: "dashboard",
        Component: MainDashboard,
        // children: [{ path: "cards", Component: Cards }],
        // loader: ({ request, params }) =>
        //   fetch(`/api/show/${params.id}.json`, {
        //     signal: request.signal,
      },
    ],
  },
  {
    path: "/nowhere",
    Component: Cards,
  },
]);

export default router;

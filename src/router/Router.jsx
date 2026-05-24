import { createBrowserRouter } from "react-router";
import HomePage from "../pages/homePage/HomePage";

import Home from "../pages/Home";
import FriendDetails from "../component/friends/FriendDetails";
import NotFound from "../component/notFound/NotFound";
import TimeLine from "../component/timeLine/TimeLine";
import Status from "../component/status/Status";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
    children: [
      {
        index: true,
        Component: Home,
        loader: async () => {
          await new Promise((resolve) => setTimeout(resolve, 0));
          return fetch("/data.json");
        },
      },
      {
        path: "/details",
        Component: FriendDetails,
      },
      {
        path: "/timeline",
        Component: TimeLine,
      },
      {
        path: "/status",
        Component: Status,
      },
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
]);

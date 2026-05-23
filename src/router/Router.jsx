import { createBrowserRouter } from "react-router";
import HomePage from "../pages/homePage/HomePage";

import Home from "../pages/Home";
import FriendDetails from "../component/friends/FriendDetails";
import NotFound from "../component/notFound/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
    
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("/data.json"),
      },
      {
        path:"/details",
        Component: FriendDetails
      }
    ],
  },
  {
    path: "*", 
    Component: NotFound
  }
]);

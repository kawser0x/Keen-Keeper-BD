import { createBrowserRouter } from "react-router";
import HomePage from "../pages/homePage/HomePage";
import Hero from "../component/banner/Hero";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
    children:[
        { index: true, Component: Hero},

    ]
  },
]);

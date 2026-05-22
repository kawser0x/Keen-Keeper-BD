import { createBrowserRouter } from "react-router";
import HomePage from "../pages/homePage/HomePage";
import Hero from "../component/banner/Hero";
import ButtonSection from "../component/banner/ButtonSection";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
    children: [
      {
        index: true,
        element: (
          <main>
            <Hero />
            <ButtonSection />
          </main>
        ),
      },
    ],
  },
]);

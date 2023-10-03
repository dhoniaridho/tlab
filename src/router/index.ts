import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../app/index";

export const routes = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
]);

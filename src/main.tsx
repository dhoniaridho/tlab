import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "tailwindcss/tailwind.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./router/index.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={routes}></RouterProvider>
    <App />
  </React.StrictMode>
);

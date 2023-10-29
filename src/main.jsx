import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import Root from "./routes/root";
import ErrorPage from "./error-page";
import Dashboard from "./routes/pages/Dashboard";
import Employees from "./routes/pages/Employees";
import Rooms from "./routes/pages/Rooms";
import RoomAlloc from "./routes/pages/RoomAlloc";
import Home from "./routes/pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/home/employees",
        element: <Employees />,
      },
      {
        path: "/home/rooms",
        element: <Rooms />,
      },
      {
        path: "/home/room-allocations",
        element: <RoomAlloc />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

import { createBrowserRouter, createHashRouter } from "react-router-dom";
import { Timeline } from "./pages/Timeline";
import { Status } from "./pages/Status";
import { Default } from "./layouts/Default";

export const router = createHashRouter([
  {
    path: "/",
    element: <Default />,
    children: [
      {
        path: "/",
        element: <Timeline />,
      },
      {
        path: "/status",
        element: <Status />,
      },
    ],
  },
]);

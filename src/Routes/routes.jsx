import { createBrowserRouter } from "react-router";
import Mainlayout from "../Layouts/Mainlayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout/>,
  },
]);

export default router
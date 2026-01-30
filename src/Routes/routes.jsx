import { createBrowserRouter } from "react-router";
import Mainlayout from "../Layouts/Mainlayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout/>,
    children:[
      {
        index: true,
        element: <div>Home</div>
      },

     {
      path: '/find-doctors',
      element: <div>Find Doctors</div>
     },

     {
      path: '/about',
      element: <div>About Us</div>
     },

     {
      path: '/contact',
      element: <div>Contact</div>
     },

     {
      path: '/how-work',
      element: <div>How To Works</div>
     }
    ]
  },
]);

export default router
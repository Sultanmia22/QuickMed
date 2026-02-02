import { createBrowserRouter } from "react-router";
import Mainlayout from "../Layouts/Mainlayout";
import SignUp from "../Page/SignUp/SignUp";

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
     },

    //  Auth Routes
    {
      path: '/sign-up',
      element: <SignUp/>
    }
    ]
  },
]);

export default router
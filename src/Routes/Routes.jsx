import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Checkout from "../Pages/Checkout/Checkout";
import Bookservice from "../Pages/Bookservice/Bookservice";
import Privateroutes from "./Privateroutes";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/bookings',
          element:<Privateroutes><Bookservice></Bookservice></Privateroutes>,
          // loader: ({params})=>fetch(`http://localhost:5000/services/${params.id}`)

        },
        {
          path:'/checkout/:id',
          element:<Checkout></Checkout>,
          loader: ({params})=>fetch(`http://localhost:5000/services/${params.id}`)

        }
        
      ]
    },
  ]);

  export default router;
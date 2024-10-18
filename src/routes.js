import { createBrowserRouter } from "react-router-dom";
import AdminLogin from "./pages/adminjsx/adminlogin";
import UserLogin from "./pages/userLogin/userlogin";
import UserRegistration from "./pages/userRegistration/userRegistration";
import AdminCatagory from "./pages/adminjsx/admincatagory";
import Category from "./pages/adminjsx/catagory/category";
import Currency from "./currency";
import Clock from "./clock";
import DigitalClock from "./digitalclock";
import Messenger from "./messenger";






const routes = createBrowserRouter([
    {path : "/admin-login",
        element : <AdminLogin/>
      
    },
    {
        path : "/user-login",
        element :<UserLogin/>
    },
    {
        path : "/user-reg",
        element :<UserRegistration/>
    },
    {
        path : "/admin/catagory",
        element : <AdminCatagory/>
    },
    {
        path: "/category",
        element: <Category/>
    },
    {
        path: "/",
        element: <Currency/>

    },
    {
        path : "/clock",
        element : <Clock/>
    },
    {
        path: "/digital",
        element: <DigitalClock/>
    },
    {
        path: "/messenger",
        element:<Messenger/>
    }
])


export default routes;
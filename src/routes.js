import { createBrowserRouter } from "react-router-dom";
import AdminLogin from "./pages/adminjsx/adminlogin";
import UserLogin from "./pages/userLogin/userlogin";
import UserRegistration from "./pages/userRegistration/userRegistration";
import AdminCatagory from "./pages/adminjsx/admincatagory";
import Category from "./pages/adminjsx/catagory/category";

import Clock from "./clock";
import DigitalClock from "./digitalclock";
import Messenger from "./messenger";
import Massege from "./massegenav";
import One from "./one";
import Two from "./two";
import Three from "./three";
import Four from "./four";
import Five from "./five";
import Six from "./six";
import Seven from "./seven";
import Eight from "./eight";
import Nine from "./nine";
import Ten from "./ten";






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
    },
    {path:"/mas",
        element: <Massege/>
    }
    ,
    {path:"/one",
        element: <One/>
    }
    ,
    {path:"/two",
        element: <Two/>
    }
    ,
    {path:"/three",
        element: <Three/>
    }
    ,
    {path:"/four",
        element: <Four/>
    }
    ,
    {path:"/five",
        element: <Five/>
    },
    {path:"/six",
        element: <Six/>
    }
    ,
    {path:"/seven",
        element: <Seven/>
    },
    {path:"/eight",
        element: <Eight/>
    }
    ,
    {path:"/nine",
        element: <Nine/>
    }
    ,
    {path:"/ten",
        element: <Ten/>
    }

])


export default routes;
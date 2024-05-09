import { BrowserRouter, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Menu from "../pages/shop/Menu";
import Signup from "../components/Signup"
import PrivateRouter from "../privaterouter/PrivateRouter";


const router = createBrowserRouter ([
   {
    path: "/",
    element: <Main />,
    children : [
        { 
            path : "/",
            element: <Home />
        },
        {
            path:"/menu",
            element: <PrivateRouter><Menu /></PrivateRouter>
        }, 
    ],
   },
   {
    path: "/Signup",
    element: <Signup />
   },
])

export default router;
import { BrowserRouter, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Menu from "../pages/shop/Menu";
import Signup from "../components/Signup"
import PrivateRouter from "../privaterouter/PrivateRouter";
import ForgotPassword from "../components/ForgotPassword";
import UpdateProfile from "../pages/dashboard/UpdateProfile";
import Cart from "../pages/cart/Cart";



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
        {
            path:"/update-profile",
            element: <PrivateRouter><UpdateProfile /></PrivateRouter>
        },
        {
            path:"/Cart",
            element: <PrivateRouter><Cart /></PrivateRouter>
        }
    ],
   },
   {
    path: "/Signup",
    element: <Signup />
   },
   {
    path: "/Forgotpassword",
    element: <ForgotPassword />
   }
])

export default router;
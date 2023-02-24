import { createBrowserRouter } from "react-router-dom";
import Login from "../Components/Authentication/Login/Login";
import Home from "../Components/Home/Home/Home";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/login',
                element: <Login></Login>
            }
        ]
    }
])
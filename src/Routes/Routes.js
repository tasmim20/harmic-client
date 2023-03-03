import { createBrowserRouter } from "react-router-dom";
import Login from "../Components/Authentication/Login/Login";
import Register from "../Components/Authentication/Register/Register";
import Blogs from "../Components/Blogs/Blogs";
import Home from "../Components/Home/Home/Home";
import Shops from "../Components/Shops/Shops";
import AddBlogs from "../Dashboard/AddBlogs";
import Dashboard from "../Dashboard/Dashboard";
import ViewBlogs from "../Dashboard/ViewBlogs/ViewBlogs";
import Main from "../Layout/Main";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

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
            }, 
            {
                path:'/register',
                element:<Register></Register>
            }, 
            {
                path:'/blogs',
                element:<Blogs></Blogs>
            },
            {
                path:'/shop',
                element:<PrivateRoute><Shops></Shops></PrivateRoute>
            },
            {
                path:'/dashboard',
                element:<Dashboard></Dashboard>,
            },
            {
                path:'/addBlogs',
                element:<AddBlogs></AddBlogs>
            },
            {
                path:'/viewBlogs',
                element:<ViewBlogs></ViewBlogs>
            },
            {
                
                    path:'*',
                    element: <h2>404</h2>
                
            }
        ]
    }
])
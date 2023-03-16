import { createBrowserRouter } from "react-router-dom";
import Login from "../Components/Authentication/Login/Login";
import Register from "../Components/Authentication/Register/Register";
import Blogs from "../Components/Blogs/Blogs";
import Home from "../Components/Home/Home/Home";
import Categories from "../Components/Home/SelectedSection/Categories";
import Items from "../Components/Home/SelectedSection/Items";
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
                element: <Home></Home>, 
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
                path:'/shops',
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
                path:'/categories',
                element:<Categories></Categories>,
                
              
            },
            {
                path:'/items',
                element:<Items></Items>,
          
              
            },
            {
                
                    path:'*',
                    element: <h2>404</h2>
                
            }
        ]
    }
])
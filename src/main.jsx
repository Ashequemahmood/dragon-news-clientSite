import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main.jsx';
import Home from './Components/Home/Home';
import Category from './Components/Category/Category';
import NewsLayout from './Layout/NewsLayout';
import News from './Components/News/News';
import AuthProvider from './Components/Providers/AuthProvider';
import LoginLayout from './Layout/NavigationBar/LoginLayout/LoginLayout';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import PrivateRoutes from './Components/Routes/PrivateRoutes';
import Terms from './Components/Terms/Terms';



const router = createBrowserRouter([
  {
    path:'/',
    element: <LoginLayout></LoginLayout>,
    children:[
      {
        path: '/',
        element: <Navigate to='/category/0'></Navigate>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'terms',
        element: <Terms></Terms>
      }
    ]
  },
  {
    path: "/category",
    element: <Main></Main>,
    children: [
      
      {
        path: ':id',
        element: <Category></Category>,
        loader: ({params}) => fetch(`http://localhost:3000/categories/${params.id}`)
      }
      
    ]
  },
  {
    path:'/news',
    element:<NewsLayout></NewsLayout>,
    children: [
      {
        path: ':id',
        element: <PrivateRoutes><News></News></PrivateRoutes>,
        loader: ({params}) => fetch(`http://localhost:3000/news/${params.id}`)
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router}></RouterProvider></AuthProvider>
  </React.StrictMode>,
)

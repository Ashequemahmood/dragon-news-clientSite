import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main.jsx';
import Home from './Components/Home/Home';
import Category from './Components/Category/Category';
import NewsLayout from './Layout/NewsLayout';
import News from './Components/News/News';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/category/:id',
        element: <Category></Category>,
        loader: ({params}) => fetch(`http://localhost:3000/categories/${params.id}`)
      }
      
    ]
  },
  {
    path:'news',
    element:<NewsLayout></NewsLayout>,
    children: [
      {
        path: ':id',
        element: <News></News>,
        loader: ({params}) => fetch(`http://localhost:3000/news/${params.id}`)
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)

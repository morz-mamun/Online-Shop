import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root.jsx';

import AddProducts from './Components/PrivatePage/AddProducts/AddProducts.jsx';
import Home from './Components/Pages/Home/Home';
import AuthProvider from './Components/Provider/AuthProvider';
import Login from './Components/Pages/LogIn/Login';
import Register from './Components/Pages/Register/Register';
import ShowProducts from './Components/PrivatePage/ShowProducts/ShowProducts';
import Details from './Components/PrivatePage/ShowProducts/Details';
import MyCart from './Components/PrivatePage/MyCart';
import UpDate from './Components/PrivatePage/ShowProducts/UpDate';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        loader: () => fetch('/brand.json'),
        element: <Home></Home>
      },
      {
        path: "/addProduct",
        element: <AddProducts></AddProducts>
      },
      {
        path: '/update/:brand_name/:id',
        element: <UpDate></UpDate>,
        loader: ({params}) => fetch(`http://localhost:5000/products/${params.brand_name}/${params.id}`)
      },
      {
        path: '/myCart',
        element: <MyCart></MyCart>,
        loader: () => fetch('http://localhost:5000/carts')
      },
     
      {
        path: '/signin',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <Register></Register>
      },
      {
        path: '/:brand_name',
        element:<ShowProducts></ShowProducts>,
        loader: ({params}) => fetch(`http://localhost:5000/products/${params.brand_name }`)
        
      },
      {
        path: '/:brand_name/:id',
        element: <Details></Details>,
        loader: ({params}) => fetch(`http://localhost:5000/products/${params.brand_name}/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)

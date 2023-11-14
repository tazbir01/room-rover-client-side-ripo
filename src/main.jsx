import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './components/Home/Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './components/Provider/AuthProvider';
import Rooms from './components/Rooms/Rooms';
import RoomDetails from './components/RoomDetails/RoomDetails';
import { HelmetProvider } from 'react-helmet-async';
import ErrorPage from './components/ErrorPage/ErrorPage';
import MyBookings from './components/MyBookings/MyBookings';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import GridImageSection from './components/GridImageSection/GridImageSection';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('https://room-rover-server.vercel.app/rooms'),
        children:[
          {
            path:"/",
            element:<GridImageSection></GridImageSection>,
            loader: () => fetch('https://room-rover-server.vercel.app/rooms')
          }
        ]
      },
      {
        path: "/rooms",
        element: <Rooms></Rooms>,
        loader: () => fetch('https://room-rover-server.vercel.app/rooms')
      },
      {
        path: "/roomdetails/:id",
        element: <RoomDetails></RoomDetails>,
        loader: ({ params }) => fetch(`https://room-rover-server.vercel.app/rooms/${params.id}`)
      },
      {
        path:"/mybookings",
        element: <PrivateRoute><MyBookings></MyBookings></PrivateRoute>,
        loader: ()=>fetch('https://room-rover-server.vercel.app/mybookings')
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
)

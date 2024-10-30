import * as React from "react";
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    // element: <div>Hello world!</div>,
    element: <Home></Home>,
    children: [

      {
        path: '/about',
        // element: <div>I am in the about page</div>
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },     
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

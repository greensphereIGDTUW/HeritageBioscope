// "@babel/plugin-proposal-private-property-in-object" 
import React from 'react';
import ReactDOM from 'react-dom';
import Blogpage from './pages/Blogpage';
import Communitypage from './pages/Communitypage';
import AboutUspage from './pages/AboutUspage';
import Blog from './container/Blog/index';
import Writepage from './pages/Writepage/Writepage'
import Loginpage from './pages/Loginpage';

import './index.css';
import App from './App';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
        path: "Blog",
        element: <Blogpage />,
      },
      {
        path: "Blogdetailpage/:id",
        element: <Blog />,
      },
      {
        path: "write",
        element: <Writepage />,
      },
      {
        path: "Community",
        element: <Communitypage />,
      },
      {
        path: "AboutUS",
        element: <AboutUspage />,
      },
      {
        path: "Login",
        element: <Loginpage />,
      },
  ]);
  
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
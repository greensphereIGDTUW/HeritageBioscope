// "@babel/plugin-proposal-private-property-in-object" 
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import ReactDOM from 'react-dom/client';
import Blogpage from './pages/Blogpage';
import Communitypage from './pages/Communitypage';
import AboutUspage from './pages/AboutUspage';
import Blog from './container/Blog/index';
import Writepage from './pages/Writepage/Writepage'
import Loginpage from './pages/Loginpage';
import { AuthContextProvider } from './context/AuthContext';

import './index.css';
import App from './App';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Registerpage from './pages/Registerpage';


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
      {
        path: "Register",
        element: <Registerpage />,
      },
  ]);
  
  ReactDOM.createRoot(document.getElementById("root")).render(
    <AuthContextProvider>
      <React.StrictMode>
        <ChakraProvider>
      <RouterProvider router={router} />
      </ChakraProvider>
    </React.StrictMode>
    </AuthContextProvider>
  );
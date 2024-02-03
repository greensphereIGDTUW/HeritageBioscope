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
import InstaPosts from './pages/InstaPosts'; 

import './index.css';
import App from './App';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Registerpage from './pages/Registerpage';
import News from './pages/News';


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
      {
        path: "News", 
        element: <News />
      }, 
      {
        path: "Insta", 
        element: <InstaPosts />
      }
  ]);
  
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      {/* <AuthContextProvider> */}
        <ChakraProvider>
          <RouterProvider router={router} />
        </ChakraProvider>
      {/* </AuthContextProvider> */}
    </React.StrictMode>
  );

//import logo from './logo.svg';
//import { createBrowserRouter,  RouterProvider } from 'react-router-dom';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
//import Amna from './Components/Amna';
//import Amna from './Components/Amna';
//import JUNAID from './Components/JUNAID';

//import React from 'react';
import NavbarCompo from './Components/NavbarCompo';
import Home from './Layout/Home/home';
import Login from './Layout/Login';
import Signup from './Layout/Signup';
//import { Route,} from 'react-router-dom';
//import Signup from './Layout/Signup';

const router = createBrowserRouter([
  {
    element:<NavbarCompo/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
      path:"/register",
      element:<Signup/>
      },
      {
        path:"/signin",
        element:<Login/>
        }
      
    
    ]
  }
])
function App() {
  return (
    <>
   
  <RouterProvider router={router}/>
     
  </>
  )
}

export default App;

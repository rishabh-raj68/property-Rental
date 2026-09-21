import React from 'react';
import "./App.css";
import Nav from './Component/Nav';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Signup from './Component/Signup/Signup';
import { Outlet } from 'react-router';

function App(){
  return (
    <>
    <Nav/>
    {/* <Home/> */}
    {/* <Login/> */}
    {/* <Signup/> */}

    <Outlet/>
    
    </>
  )
}

export default App;
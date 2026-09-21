import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, createRoutesFromElements,Route,RouterProvider} from 'react-router'
import './index.css'
import App from './App.jsx'
import Home from './Component/Home/Home.jsx'
import Login from './Component/Login/Login.jsx'
import Signup from './Component/Signup/Signup.jsx'

const router = createBrowserRouter(createRoutesFromElements (
   <Route path='/' element={<App/>} >
    
      <Route path='' element={<App/>} />
      <Route path='Login' element = {<Login/>}/>
      <Route path='Signup' element={<Signup/>}/>
   </Route>
))

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)

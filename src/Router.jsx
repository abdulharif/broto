import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './component/Home'
import Insert from './component/Insert'
import View from './component/View'
import Register from './component/Register'
import Login from './component/Login'
import Logout from './component/Logout'
import Singleview from './component/Singleview'
import { Update } from '@mui/icons-material'




export default function Router() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route extact path = "/" element ={<Home/>}></Route> 
            <Route extact path = "/Insert" element ={<Insert/>}></Route> 
            <Route extact path = "/View" element ={<View/>}></Route> 
            <Route extact path = "/Register" element ={<Register/>}></Route> 
            <Route extact path = "/Login" element ={<Login/>}></Route> 
            <Route extact path = "/Logout" element ={<Logout/>}></Route>
            <Route extact path = "/Singleview/:id" element ={<Singleview/>}></Route>  
            <Route extact path = "/update/:id" element ={<Update/>}></Route>  
           
            
            
        

        </Routes>
        </BrowserRouter>
    </div>
  )
}

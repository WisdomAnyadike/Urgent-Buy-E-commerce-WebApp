import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ShopPage from './Pages/Shop page/ShopPage'
import Home from './Pages/Home /Home'
import DirectoryPage from './Components/Directory Page/DirectoryPage'
import SignIn from './Pages/Sign In page/SignIn'
import Shop from './Pages/Shop/Shop'
import Dashboard from './Pages/Dashboard/Dashboard'

const App = () => {
  return (

    <Routes>
    <Route path='/' element={<Home/>}>
    <Route index element={<DirectoryPage/>}/> 
    <Route path='/category/:param' element={<ShopPage/>}/> 
    <Route path='/signin' element={<SignIn/>}/> 
    <Route path='/dashboard' element={<Dashboard/>}/> 
    <Route path='/shop' element={<Shop/>}/> 
   </Route>
    
    </Routes>
  )
}

export default App
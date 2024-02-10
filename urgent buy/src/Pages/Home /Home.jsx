import React from 'react'

import NavbarComponent from '../../Components/Navbar/NavbarComponent'
import { Outlet } from 'react-router-dom'




const Home = () => {
  
  return (
    <div>
 <NavbarComponent/>
    <Outlet/>
    </div>
  )
}

export default Home
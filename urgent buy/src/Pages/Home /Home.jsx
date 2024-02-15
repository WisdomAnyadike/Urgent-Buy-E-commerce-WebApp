import React from 'react'
import { Link } from 'react-router-dom'
import NavbarComponent from '../../Components/Navbar/NavbarComponent'
import { Outlet } from 'react-router-dom'
import '/src/Pages/Home /home.styles.scss'




const Home = () => {
  
  return (
    <div>
 <NavbarComponent/>
    <Outlet/>
    <footer className='w-100 position-fixed d-flex align-items-start justify-content-center btn btn-light ' style={{bottom:"0"}}>
	<p className='mt-0'>
		Created  by
		<Link className='links' to="http://linkedin.com/in/wisdom-anyadike-935870240" > anyacodes </Link>
		- Check how I created this 
		<Link className='links' to="https://github.com/WisdomAnyadike/Urgent-Buy-E-commerce-WebApp"> here </Link>.
    &copy; 2024 Anyadike Wisdom Chidubem. All Rights Reserved.
	</p>
</footer>
    </div>
  )
}

export default Home
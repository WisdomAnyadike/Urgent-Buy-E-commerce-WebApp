import React, { useState } from "react";
import { Link } from "react-router-dom";
import "/src/Components/Navbar/navigation.styles.scss";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Carticon from "../Cart-icon/Carticon";
import CartDropdown from "../Cart -dropdown/CartDropdown";
import {  useSelector } from "react-redux";




const NavbarComponent = () => {
  const {value} = useSelector(state => state)
  console.log(value);
  
  


  const [showSignout, setShowSignOut] = useState(false)
  const checkRoute = useLocation()

  useEffect(() => {
    if (location.pathname == '/dashboard') {
      setShowSignOut(true)
    } else {
      setShowSignOut(false)
    }
  }, [location])


  useEffect(() => {
    const token = localStorage.getItem("urgentBuyToken") || "";
    if (token == "") {
      if (location.pathname !== '/signin' || location.pathname !== '/') {
        return
      } else {
        alert("Youre not authorized to view this page");
        window.location.href = '/signin'
      }

    }
  }, []);






  const handleLogout = () => {
    const verifyLogout = window.confirm("are you sure?");
    if (verifyLogout) {
      localStorage.removeItem("urgentBuyToken");
      window.location.href = '/'
    }


  };







  return (
    <div className="navigation mt-2">
      <div className="logo-container ms-3"  >
        <Link to={"/"} >
          <img style={{ width: "90px" }} src="/src/assets/C0EEF199-A578-4A12-90A1-0CE418B54686-removebg-preview.png" />
        </Link>
      </div>

      <div className="nav-links-container " >



        <Link className="nav-link" to={"/shop"}>
          SHOP
        </Link>

        {
          showSignout ? <div className="d-flex align-items-center w-50 justify-content-around"> <Link onClick={handleLogout} className="p-0 me-2 ms-2 nav-link">SIGN OUT</Link>        <Link className="nav-link" to={"/settings"}>
     <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 48 48" ><g fill="none" strokeLinejoin="round" strokeWidth={4}><path fill="white" stroke="black" d="M18.2838 43.1713C14.9327 42.1736 11.9498 40.3213 9.58787 37.867C10.469 36.8227 11 35.4734 11 34.0001C11 30.6864 8.31371 28.0001 5 28.0001C4.79955 28.0001 4.60139 28.01 4.40599 28.0292C4.13979 26.7277 4 25.3803 4 24.0001C4 21.9095 4.32077 19.8938 4.91579 17.9995C4.94381 17.9999 4.97188 18.0001 5 18.0001C8.31371 18.0001 11 15.3138 11 12.0001C11 11.0488 10.7786 10.1493 10.3846 9.35011C12.6975 7.1995 15.5205 5.59002 18.6521 4.72314C19.6444 6.66819 21.6667 8.00013 24 8.00013C26.3333 8.00013 28.3556 6.66819 29.3479 4.72314C32.4795 5.59002 35.3025 7.1995 37.6154 9.35011C37.2214 10.1493 37 11.0488 37 12.0001C37 15.3138 39.6863 18.0001 43 18.0001C43.0281 18.0001 43.0562 17.9999 43.0842 17.9995C43.6792 19.8938 44 21.9095 44 24.0001C44 25.3803 43.8602 26.7277 43.594 28.0292C43.3986 28.01 43.2005 28.0001 43 28.0001C39.6863 28.0001 37 30.6864 37 34.0001C37 35.4734 37.531 36.8227 38.4121 37.867C36.0502 40.3213 33.0673 42.1736 29.7162 43.1713C28.9428 40.752 26.676 39.0001 24 39.0001C21.324 39.0001 19.0572 40.752 18.2838 43.1713Z"></path><path fill="black" stroke="#fff" d="M24 31C27.866 31 31 27.866 31 24C31 20.134 27.866 17 24 17C20.134 17 17 20.134 17 24C17 27.866 20.134 31 24 31Z"></path></g></svg> 
        </Link> </div>
         : <Link className="nav-link p-0 me-2 ms-2" to={"/signin"}>
            SIGN - IN
          </Link>
        }
       
          <Carticon />

   
       

     

      </div>
     { value &&  <CartDropdown />   } 

    </div>

  );
};

export default NavbarComponent;

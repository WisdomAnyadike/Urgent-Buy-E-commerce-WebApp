import React from "react";
import { Link } from "react-router-dom";
import "/src/Components/Navbar/navigation.styles.scss";

const NavbarComponent = () => {
  return (
    <div className="navigation mt-2">
      <div className="logo-container ms-3"  >
        <Link to={"/"} >
          <img style={{ width: "90px" }} src="/src/assets/C0EEF199-A578-4A12-90A1-0CE418B54686-removebg-preview.png" />
        </Link>
      </div>

      <div className="nav-links-container me-2">
      <Link className="nav-link " to={"/signin"}>
          SIGN IN
        </Link>
        <Link className="nav-link" to={"/shop"}>
          SHOP
        </Link>
      </div>
    </div>
  );
};

export default NavbarComponent;

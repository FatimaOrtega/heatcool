import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.png";
import { FaFacebookSquare } from 'react-icons/fa';
import { FaGooglePlusSquare } from 'react-icons/fa';
import "./Navbar.css";

const Menu = () => (
  <>
   
    <p>
    <a href='/'>Home</a>
    </p>
    
    <p>
      <a href='/feature'>Services</a>
      </p>
     
  
    <p>

    <a to='/'>About Us</a>
    </p>
    {/* <p><a href='#home'>Financing</a></p> */}
    <p>
      <a to="/">Contact Information</a>
    </p>
    
   
  </>

);

const Navbar = () => {
  const [toggleMenu, setToggleMenu ] = useState(false);

  return (
    <div className="ortega_navbar">
      <div className="ortega_navbar-links">
        <div className="ortega_navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="ortega_navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="icons">
        <button><FaFacebookSquare color="blue" size={40}/></button>
        <button><FaGooglePlusSquare color="#299A47" size={40}/></button></div>
      <div className="ortega_navbar-menu">
        {toggleMenu ? 
          <RiCloseLine
            color="black"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
         : 
          <RiMenu3Line
            color="black"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        }

        {toggleMenu && (
          <div className="ortega_navbar-menu_container scale-up-center">
            <div className="ortega_navbar-menu_container-links">
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

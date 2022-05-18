import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.png";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGooglePlusSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Menu = () => (
  <>
    <Link to="/">
      <p>
        <a>Home</a>
      </p>
    </Link>

    <Link to="/feature">
    <p>
      <a>Services</a>
    </p>
    </Link>

    <Link to="/about">
    <p>
      <a href="/about">About Us</a>
    </p>
    </Link>
    {/* <p><a href='#home'>Financing</a></p> */}
    <Link to="/Contact">
    <p>
      <a>Contact Information</a>
    </p>
    </Link>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

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
        <a href="https://www.facebook.com/profile.php?id=100072357945926">
          <FaFacebookSquare color="blue" size={40} />
        </a>
        <a href="https://www.google.com/search?q=a-ortega+heating+and+cooling&rlz=1C5CHFA_enUS963US967&oq=a-o&aqs=chrome.2.69i57j46i512j69i59j0i512l3j46i175i199i512l3.1716j0j15&sourceid=chrome&ie=UTF-8">
          <FaGooglePlusSquare color="#299A47" size={40} />
        </a>
      </div>
      <div className="ortega_navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="black"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="black"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}

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

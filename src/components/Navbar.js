import React from "react";
import logo from "../logo.png"
import '../styles/navbar.css'

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <a href="/">
          <img src={logo} alt="Logo" />
          </a>
          <a href="/">Find My Country</a>
        </div>

        <ul className="menu">
          <li> <a href="/">Home</a> </li>
          {/* <li> <a href="/About">About Us</a> </li>
          <li> <a href="/Contact">Contact</a> </li> */}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

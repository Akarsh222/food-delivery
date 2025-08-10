import React, { useState } from "react";
import { assets } from "../../assets/assets.js";
import "./Navbar.css";
const Navbar = () => {
  const[active, setActive] = useState("home");
  return (
    <div className="main-navbar">
      <img src={assets.logo} alt="logo-icon" />
      <ul className="menu-icons">
        <li className="active">Home</li>
        <li>Menu</li>
        <li>Contact Us</li>
        <li>About Us</li>
        <li>Mobile App</li>
      </ul>
      <div className="right-navbar">
        <img src={assets.search_icon} alt="" />
        <div className="cart">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button>Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;

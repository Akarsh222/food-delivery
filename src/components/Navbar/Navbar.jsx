import React, { act, useEffect, useState } from "react";
import { assets } from "../../assets/assets.js";
import "./Navbar.css";
const Navbar = () => {
  const[active, setActive] = useState("home");

  
  return (
    <div className="main-navbar">
      <img src={assets.logo} alt="logo-icon" />
      <ul className="menu-icons">
        <li onClick={() => setActive( (prev) => prev = "home")} className={active == "home" ? "active" : ""}>Home</li>
        <li onClick={() => setActive( (prev) => prev = "menu")} className={active == "menu" ? "active" : ""}> Menu</li>
        <li onClick={() => setActive( (prev) => prev = "contact")} className={active == "contact" ? "active" : ""}>Contact Us</li>
        <li onClick={() => setActive( (prev) => prev = "about")} className={active == "about" ? "active" : ""}>About Us</li>
        <li onClick={() => setActive( (prev) => prev = "mobile")} className={active == "mobile" ? "active" : ""}>Mobile App</li>
      </ul>
      <div className="right-navbar">
        <img src={assets.search_icon} alt="" className="search"/>
        <div className="cart">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button className="text-sm">Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;

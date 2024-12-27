import { useState } from "react";
import "./NavBar.css";
import {Link, NavLink } from "react-router-dom";

const NavBar = () => {

  const[isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev)=> !prev);
  }

  return (
    <nav className="d-flex justify-content-between p-3 position-sticky top-0">
      <Link className="nav-title" to="/">ROSEBUD PRODUCTION</Link>
      <div className="menu" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`unorder-list ${isMenuOpen?"open":""}`}>
        <li><NavLink className="nav-list" to="/services">Services</NavLink></li>
        <li><NavLink className="nav-list" to="/about">About</NavLink></li>
        <li><NavLink className="nav-list" to="/ourworks">Our Works</NavLink></li>
        <li><NavLink className="nav-list" to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
  )
}

export default NavBar

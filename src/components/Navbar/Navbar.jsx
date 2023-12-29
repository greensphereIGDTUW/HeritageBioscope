import React from 'react';
import { Link } from "react-router-dom";

import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
// import { images } from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
      <h1 className= "app__navbar-logo-bigg">Heritage Biodiversity</h1>
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><Link to= "/">Home</Link></li>
        <li className="p__opensans"><Link to= "/AboutUS">About US</Link></li>
        <li className="p__opensans"><Link to= "/Blog">Blog </Link></li>
        <li className="p__opensans"><Link to= "/Community">Community</Link></li>
        <li className="p__opensans"><Link to= "/">Contact</Link></li>
      </ul>
      <div className="app__navbar-login">
        <a href="/Login" className="p__opensans"><Link to= "/Login">Log In</Link></a>
        <div />
        <a href="/Login" className="p__opensans"><Link to= "/Login">Sign Up/ Register</Link></a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}>About US</a></li>
              <li><a href="#menu" onClick={() => setToggleMenu(false)}>Blog</a></li>
              <li><a href="#awards" onClick={() => setToggleMenu(false)}>Community</a></li>
              <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
import React from 'react';
import { Link } from "react-router-dom";
import { useLogout } from '../../hooks/useLogout';
import { useAuthContext } from '../../hooks/useAuthContext';

import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from "react-icons/ai";

import './Navbar.css';
import { images } from '../../constants';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  // const { Logout } = useLogout()
  // const { user } = useAuthContext()
  // console.log(user); 
  // console.log(user.email); 

  const handleClick = () => {
    // Logout()
  }

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
      <img className = "nav_logo" src= {images.navbarlogo}/>
      <h1 className= "app__navbar-logo-bigg">Heritage </h1>
      <h1 className= "app__navbar-logo-bigg">Bioscope</h1>
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><Link to= "/">Home</Link></li>
        <li className="p__opensans"><Link to= "/AboutUs">About Us</Link></li>
        <li className="p__opensans"><Link to= "/Blog">Blog </Link></li>
        <li className="p__opensans"><Link to= "/Community">Community</Link></li>
        <li className="p__opensans"><Link to= "/News">News</Link></li>
        
      </ul>
      {/* {!user && (
      <div className="app__navbar-login">
        <a href="/Login" className="p__opensans"><Link to= "/Login">Log In</Link></a>
        <div />
        <a href="/Login" className="p__opensans"><Link to= "/Login">Sign Up/ Register</Link></a>
      </div>
      )}
      {user && (
      <div className ="logout-button">
            <span style = {{color: 'white'}}>{user.email}</span>
            <button className="p__opensans" onClick={handleClick}>Log out</button>
      </div>
      )} */}
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <AiOutlineClose fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)}/>
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#home" onClick={() => setToggleMenu(false)}><Link to= "/">Home</Link></a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}><Link to= "/AboutUs">About Us</Link></a></li>
              <li><a href="#menu" onClick={() => setToggleMenu(false)}><Link to= "/Blog">Blog </Link></a></li>
              <li><a href="#awards" onClick={() => setToggleMenu(false)}><Link to= "/Community">Community</Link></a></li>
              <li><a href="#awards" onClick={() => setToggleMenu(false)}><Link to= "/News">News</Link></a></li>

              {/* <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li> */}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
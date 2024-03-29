import React from 'react';
import { Link } from "react-router-dom";
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Greensphere-IGDTUW" />
      <h1 className="app__header-h1">Welcome to Heritage Bioscope</h1>
      <p className="p__opensans" style={{ margin: '1rem 0' }}>
      An innovative project at the intersection of cultural richness and natural beauty in the heart of Delhi. Guided by the visionary tagline <strong>Seeing Heritage through the Eyes of Nature</strong> our initiative seeks to redefine the traditional concept of heritage by seamlessly blending historical and natural treasures. 
      </p>
      <button type="button" className="custom__button"><Link to= "/">Get Started</Link></button>
    </div>

    <div className="app__wrapper_img">
      {/* <AnimatedGIF src={images.birdPhtograph} alt='Girl clicking pic of bird' /> */}
      <img src= {images.birdPhtograph} alt="header_img" />
    </div>
  </div>
);

export default Header;
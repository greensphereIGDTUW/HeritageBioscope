import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Greensphere-IGDTUW" />
      <h1 className="app__header-h1">Welcome to Heritage Biodiversity</h1>
      <p className="p__opensans" style={{ margin: '1rem 0' }}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
      <button type="button" className="custom__button">Get Started</button>
    </div>

    <div className="app__wrapper_img">
      <img src= {images.welcome2} alt="header_img" />
    </div>
  </div>
);

export default Header;
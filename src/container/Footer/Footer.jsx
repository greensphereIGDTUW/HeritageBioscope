import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p >Kashmere gate New Delhi, Delhi, India</p>
        <p >123456789</p>
        
      </div>

      <div className="app__footer-links_logo">
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p >Monday-Friday</p>
        
        
      </div>
    </div>

    <div className="footer__copyright">
      <p >2023 Greensphere All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;
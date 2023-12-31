import React from 'react';
import { BsFillPlayCircleFill } from "react-icons/bs";
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="aboutus-overall">
      <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={images.AboutUs} width={370} height={270} border-radius= { 20 } alt="" />
      </div>
      {/* <div className="about-section-image-container">
        <img src={images.aboutus2} width={370} height={270} border-radius= { 20 } alt="" />
      </div> */}
      <div className="about-section-text-container">
        <h2 className="primary-subheading">About Us</h2>
        <p className="primary-heading">
        “Greensphere” is an Environmental Society which was formed in October 2008 
        by the students of IGDTUW with Dr. Ranu Gadi, as the Faculty Coordinator. 
        Currently, the society is under the guidance of Dr. Bhavani Prasad Naik,
        who holds the position of Faculty Advisor.

        </p>
        <br></br>
        <p className="primary-heading">
        Heritage Bioscope is an innovative project  which aims to broaden the conventional
        perception of 'heritage' beyond history, advocating for inclusivity that embraces 
        not only cultural and national elements but also our natural heritage and highlights 
        the significance of biodiversity. Guided by the visionary tagline "Seeing Cultural heritage 
        through the Eyes of natural heritage.

        </p>
        <div className="primary-text">
        <h5>MISSION
</h5>
        <p>
        The mission of this project is to deepen appreciation for Delhi's cultural, natural, and biocentric heritage, engaging the community in their preservation. We strive to instil a sense of responsibility and pride, fostering a holistic understanding of these interconnected legacies.

        </p>
        </div>

        <div className="primary-text">

        <h5>VISION</h5> 
        <p>Heritage Bioscope came into existence with a VISION that envisions Delhi as a hub of harmonious cultural, natural, and biocentric appreciation. Guided by biocentrism, we leverage technology and community engagement to redefine heritage, inspiring collective responsibility for the rich tapestry of living beings and ecosystems.
        </p>
        </div>
        
        

      </div>
      
    </div>
    
    </div>
    
  );

};

export default AboutUs;
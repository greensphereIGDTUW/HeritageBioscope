import React from 'react';
import { BsFillPlayCircleFill } from "react-icons/bs";
import { images } from '../../constants';
import './AboutUs.css';
import Team from '../../components/Team/Team';

const AboutUs = () => {
  return (
    <>
    <div className="aboutus-overall">
      <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={images.Aboutus01} width={500} height={300} border-radius= { 20 } alt="" />
        <img src={images.Aboutus02} width={290} height={350} border-radius= { 20 } alt="" />

      </div>
      {/* <div className="about-section-image-container">
        <img src={images.Aboutus02} width={290} height={350} border-radius= { 20 } alt="" />
      </div> */}
      <div className="about-section-text-container">
        <h2 className="primary-subheading">About Us</h2>
        <p className="primary-heading">
        “Greensphere” is an Environmental Society which was formed in October 2008 
        by the students of IGDTUW. 

        </p>
        <br></br>
        <p className="primary-heading">
        Heritage Bioscope is an innovative project in collaboration with the WWF-India ECHO Program. It aims to broaden the conventional
        perception of 'heritage' beyond history, advocating for inclusivity that embraces 
        not only cultural and national elements but also our natural heritage and highlights 
        the significance of biodiversity. Guided by the visionary tagline "Seeing Heritage Through the Eyes of Nature!"

        <br />
        <br />
        </p>
        <div className="primary-heading">
        <h2><strong><u>MISSION</u></strong></h2>
        <br />
        <p>
        Our mission is to change the view of heritage by using a completely unique angle – "Seeing heritage through the Eyes of Nature.”We aim to redefine history beyond ancient narratives, connecting it with the rich tapestry of biodiversity.  Through network engagement and a holistic approach, we strive to enhance appreciation for Delhi's cultural, natural, and biocentric heritage.
        </p>
        <br />
        </div>

        <div className="primary-heading">

        <h2><strong><u>VISION</u></strong></h2> 
        <br />
        <p>At Heritage Bioscope, our visionary outlook propels us toward redefining Delhi as a hub where historical past is viewed through the lens of nature. 
        Our Vision is to instill a profound sense of responsibility and satisfaction, fostering a collective information that historical past extends beyond the pages of records to include the vibrant ecosystems and living beings that coexist within it.
        </p>
        </div>
        
        

      </div>
      
    </div>
    
    </div>

    <Team />

    </>
    
  );

};

export default AboutUs;

import React from 'react';
import { BsFillPlayCircleFill } from "react-icons/bs";
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={images.aboutus1} width={370} height={270} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={images.aboutus2} width={370} height={270} alt="" />
      </div>
      <div className="about-section-text-container">
        <h2 className="primary-subheading">About US</h2>
        <h3 className="primary-heading">
            Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </h3>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
        <p className="primary-text">
          Non tincidunt magna non et elit. Dolor turpis molestie dui magnis
          facilisis at fringilla quam.Healthy switcher chefs do all the prep work, like peeding, chopping
            & marinating, so you can cook a fresh food.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );

};

export default AboutUs;
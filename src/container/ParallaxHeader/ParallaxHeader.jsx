// ParallaxComponent.js
import React, { useEffect, useRef, useState } from 'react';
import './ParallaxHeader.css';
import { images } from '../../constants';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ParallaxComponent = () => {

  const [blogsCount, setBlogsCount] = useState(0); 
  const [postsCount, setPostsCount] = useState(0); 

  const fetchBlogsCount = async () => {
    try {
      const response = await axios.get('http://localhost:5500/api/count/blog'); 
      setBlogsCount(response.data); 
      console.log(response.data);
    } catch (error) {
      console.log("Error:", error.message); 
    }
  }
  const fetchPostsCount = async () => {
    try {
      const response = await axios.get('http://localhost:5500/api/count/posts'); 
      console.log(response);
      setPostsCount(response.data); 
    } catch (error) {
      console.log("Error:", error.message); 
    }
  }
  
  useEffect(() => {
    fetchBlogsCount(); 
    fetchPostsCount();
    const handleScroll = () => {
    let value = window.scrollY; 
      document.getElementById('text').style.marginTop = value * 2.5 + 'px';
      document.getElementById('leaf').style.top = value * -1.5 + 'px';
      document.getElementById('leaf').style.left = value * 1.5 + 'px';
      document.getElementById('hill5').style.left = value * 1.5 + 'px';
      document.getElementById('hill4').style.left = value * -1.5 + 'px';
      document.getElementById('hill1').style.top = value * 1 + 'px';
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='parallaxContainer'>
      <section className="parallax">
        <img src={images.hill1} alt="hill1" id="hill1" />
        <img src={images.hill2} alt="hill2" id="hill2" />
        <img src={images.hill3} alt="hill3" id="hill3" />
        <img src={images.hill4} alt="hill4" id="hill4" />
        <img src={images.hill5} alt="hill5" id="hill5" />
        <img src={images.tree} alt="tree" id="tree" />
        <p id="text">HeritageBioscope</p>
        <img src={images.leaf} alt="leaf" id="leaf" />
        <img src={images.plant} alt="plant" id="plant" />
      </section>
      <section className="sec">
        <h4>An innovative project in collaboration with <Link to={{ pathname: "https://www.wwfindia.org/" }} target="_blank" >
          <b>WWF-India</b> </Link>
 ECHO Program at the intersection of cultural richness and natural beauty in the heart of Delhi. Guided by the visionary tagline <strong>Seeing Heritage through the Eyes of Nature</strong> our initiative seeks to redefine the traditional concept of heritage by seamlessly blending historical and natural treasures. </h4>
      </section>
      {/* <section className="sec-stats">
        <div className="stats-item">
            <h3></h3>
            <h5>Total Users </h5>
          </div>
        <div className="stats-item">
          
          <h5>Total Posts</h5>
        </div>
        <div className="stats-item">
          <h3>{blogsCount}</h3>
          <h5>Total Blogs</h5>
        </div>
        <div className="stats-item">
            <h3></h3>
            <h5>Species Documented - Campus</h5>
          </div>
      </section> */}
    </div>
  );
};

export default ParallaxComponent;

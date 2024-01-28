import React, { useRef } from 'react';

import { AboutUs,  Footer, Home, Header, Community} from './container';
import { Navbar } from './components';
import './App.css';
import ParallaxComponent from './container/ParallaxHeader/ParallaxHeader';

const App = () => {
  return(
    <div>
    <Navbar />
    {/* <Header /> */}
    <ParallaxComponent />
    {/* <AboutUs /> 
    <Home/>
    <Community/> */}
    <Footer />
  </div>
  ); 
  };

export default App;

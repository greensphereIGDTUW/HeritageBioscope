import React from 'react';

import { AboutUs,  Footer, Home, Header, Community } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs /> 
    <Home/>
    <Community/>
    <Footer />
  </div>
);

export default App;

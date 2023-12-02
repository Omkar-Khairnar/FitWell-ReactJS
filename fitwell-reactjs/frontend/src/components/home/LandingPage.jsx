import React from 'react';
import Navbar from './navbar/Navbar'
import {Outlet} from 'react-router-dom';
import Footer from './footer/Footer';

const LandingPage = () => {
  return (
    <div>
      <Outlet />
      <Footer />
      <Navbar />
    </div>
  )
}

export default LandingPage
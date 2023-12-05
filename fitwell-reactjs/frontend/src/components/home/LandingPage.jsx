import React from 'react';
import Navbar from './navbar/Navbar'
import {Outlet} from 'react-router-dom';
import Footer from './footer/Footer';

const LandingPage = () => {
  return (
    <div>
      <Outlet />
      <Navbar />
      <Footer />
    </div>
  )
}

export default LandingPage
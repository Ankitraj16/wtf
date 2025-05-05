// --- LandingPage.js ---
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Homepage from '../pages/Homepage';

const LandingPage = () => {
  return (
    <>
      <Header />

      <Homepage/>

      <Footer />
    </>
  );
};

// Simple inline styles
const styles = {
  main: {
    minHeight: '80vh',
    padding: '40px 20px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  }
};

export default LandingPage;

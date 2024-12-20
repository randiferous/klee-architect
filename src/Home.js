import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Contact from './components/Contact';

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Portfolio />
      <Services />
      <Contact />
    </>
  );
};

export default Home;

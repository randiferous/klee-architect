import React from 'react';

const Header = () => {
  return (
    <header className="bg-dark text-white text-center py-5 header-container">
      <div className="container">
        <h1 className="display-4 animated fadeIn">Welcome to Kenny Lee Architect</h1>
        <p className="lead animated fadeIn">Trusted Architectural Solutions for Businesses That Demand Excellence</p>
        <a href="#portfolio" className="btn btn-primary btn-lg animated fadeInUp">View Our Work</a>
      </div>
    </header>
  );
};

export default Header;

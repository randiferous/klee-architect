import React from 'react';

const About = () => {
  return (
    <section className="py-5" id="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h2 className="display-4 mb-4 fade-in">About Us</h2>
            <p className="lead text-muted mb-4 fade-in">At Kenny Lee Architect, we offer trusted architectural solutions for both residential and commercial projects. With a focus on functionality, reliability, and aesthetic quality, we work closely with our clients to bring their visions to life.</p>
            <p className="fade-in">For over 30 years, we have proudly served the New York Tri-State area, combining our extensive experience with a commitment to delivering high-quality designs that meet the unique needs of every client. Whether designing innovative commercial spaces or creating custom homes, our team is dedicated to providing professional, thoughtful solutions that stand the test of time.</p>
          </div>
          <div className="col-lg-6 position-relative">
            <img src="/images/about-us.jpg" alt="About Us" className="img-fluid rounded shadow-lg about-image" />
            <div className="overlay"></div> 
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

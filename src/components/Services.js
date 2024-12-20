import React from 'react';

const Services = () => {
    return (
        <section className="bg-light py-5" id="services">
            <div className="container text-center">
                <h2 className="display-4 mb-4">Our Services</h2>
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <div className="card service-card shadow-lg rounded-3">
                            <img src="/images/residential.jpg" className="card-img-top" alt="Service 1" />
                            <div className="card-body">
                                <h5 className="card-title">Custom Residential Design</h5>
                                <p className="card-text">Creating personalized homes that blend functionality with style, tailored to each client's unique needs.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card service-card shadow-lg rounded-3">
                            <img src="/images/commercial.jpg" className="card-img-top" alt="Service 2" />
                            <div className="card-body">
                                <h5 className="card-title">Commercial Architecture</h5>
                                <p className="card-text">Designing professional, efficient spaces that support business growth while reflecting brand identity.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card service-card shadow-lg rounded-3">
                            <img src="/images/consulting.jpg" className="card-img-top" alt="Service 3" />
                            <div className="card-body">
                                <h5 className="card-title">Architectural Consulting</h5>
                                <p className="card-text">Providing expert guidance on zoning, site planning, and design to ensure project success.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;

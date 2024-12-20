import React from 'react';

const Portfolio = () => {
    return (
        <section className="py-5" id="portfolio">
            <div className="container text-center">
                <h2 className="display-4 mb-4 fade-in">Our Portfolio</h2>
                <p className="lead text-muted mb-5 fade-in">Explore some of our past projects that showcase our expertise in residential and commercial architecture.</p>
                <div className="row">
                    {/* Project 1 */}
                    <div className="col-md-4">
                        <div className="portfolio-card">
                            <div className="portfolio-img-wrapper">
                                <img src="./images/mixed-development.jpg" alt="Mixed-Use Development" className="portfolio-img" />
                                <div className="portfolio-img-overlay"></div>
                            </div>
                            <h5 className="portfolio-title">Mixed-Use Commercial and Residential Development</h5>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#panelsStayOpen-collapseOne"
                                        aria-expanded="true"
                                        aria-controls="panelsStayOpen-collapseOne"
                                    >
                                        View Details
                                    </button>
                                </h2>
                                <div
                                    id="panelsStayOpen-collapseOne"
                                    className="accordion-collapse collapse show"
                                >
                                    <div className="accordion-body">
                                        This mixed-use development project integrates both commercial and residential spaces into a cohesive design. Located in the heart of a bustling urban district, the design optimizes space to meet the needs of businesses and residents alike. With a focus on sustainability and modern aesthetics, the building features energy-efficient systems, open floor plans, and ample natural light.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="col-md-4">
                        <div className="portfolio-card">
                            <div className="portfolio-img-wrapper">
                                <img src="./images/parking-garage.jpg" alt="Parking Garage" className="portfolio-img" />
                                <div className="portfolio-img-overlay"></div>
                            </div>
                            <h5 className="portfolio-title">Design of a Multi-Story Parking Garage</h5>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#panelsStayOpen-collapseTwo"
                                        aria-expanded="false"
                                        aria-controls="panelsStayOpen-collapseTwo"
                                    >
                                        View Details
                                    </button>
                                </h2>
                                <div
                                    id="panelsStayOpen-collapseTwo"
                                    className="accordion-collapse collapse"
                                >
                                    <div className="accordion-body">
                                        This multi-story parking garage was designed to accommodate high traffic volumes while ensuring efficiency and safety. The design incorporates smart parking technology to optimize space usage, with easy-to-navigate lanes and clear signage for drivers. The exterior features sleek, modern materials that complement the surrounding architecture.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project 3 */}
                    <div className="col-md-4">
                        <div className="portfolio-card">
                            <div className="portfolio-img-wrapper">
                                <img src="./images/minimalist-home.jpg" alt="Minimalist Home" className="portfolio-img" />
                                <div className="portfolio-img-overlay"></div>
                            </div>
                            <h5 className="portfolio-title">Modern Minimalist Home in Brooklyn</h5>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#panelsStayOpen-collapseThree"
                                        aria-expanded="false"
                                        aria-controls="panelsStayOpen-collapseThree"
                                    >
                                        View Details
                                    </button>
                                </h2>
                                <div
                                    id="panelsStayOpen-collapseThree"
                                    className="accordion-collapse collapse"
                                >
                                    <div className="accordion-body">
                                        This modern minimalist home in Brooklyn exemplifies the elegance of simplicity. Designed with clean lines and an open-concept layout, the home combines functionality with beauty. Large windows invite an abundance of natural light, highlighting the minimalist interior design and custom finishes.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;

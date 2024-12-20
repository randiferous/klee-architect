import React from 'react';

const Contact = () => {
    return (
        <section className="text-white text-center py-5 contact-section" id="contact">
            <div className="container">
                <h2 className="display-4 mb-3">Let’s Bring Your Vision to Life</h2>
                <p className="lead mb-4">Contact us today to discuss how we can help design your dream space.</p>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=daniel.lee.younghwan@gmail.com&su=Inquiry%20about%20Architecture%20Services&body=Hello%2C%20I%20would%20like%20to%20discuss%20your%20architecture%20services."
                    className="btn btn-warning btn-lg"
                    target="_blank"
                    rel="noopener noreferrer">
                    Contact Us
                </a>
            </div>
        </section>
    );
};

export default Contact;
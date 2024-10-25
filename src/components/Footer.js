import React from 'react';
import './Fooer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <p>© 2024 Your Name. All rights reserved.</p>
            <div className="social-icons">
                <a href="#"><i className="fab fa-linkedin"></i></a>
                <a href="#"><i className="fab fa-github"></i></a>
            </div>
        </footer>
    );
};

export default Footer;

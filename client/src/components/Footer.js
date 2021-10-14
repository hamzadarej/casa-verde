import React from 'react';
import About from './About';
import Contact from './Contact';

const Footer = () => {
    let now = new Date();
    let year = now.getFullYear();
    return (
        <footer
        style={{
          textAlign: 'center',
          position: 'absolute',
          bottom: '30px',
          left: '50vw',
          transform: 'translateX(-50%)',
        }}
      >
        <About />
        <Contact />
        <div className="--footer-main-container">Made with ❤️</div>{' '}
        <div className="--footer-secondary-container">{year} Ⓒ Casa Verde</div>
      </footer>
    );
}

export default Footer;

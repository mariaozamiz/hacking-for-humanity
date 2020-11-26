import React from 'react';
import './footer.scss';

const Footer = () => {
  return (
    <footer className="page__footer">
      <div className="footer__wrapper">
        <section className="footer">
          <div className="footer__menu">
            <a href="#home" title="Ir a Inicio">
              Fundemic
            </a>

            <div className="copy">
              <small>console.mio &copy; 2020 </small>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;

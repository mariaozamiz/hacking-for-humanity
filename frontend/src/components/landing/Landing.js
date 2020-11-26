import React from 'react';
import { Link } from 'react-router-dom';
import './landing.scss';
// import ImageTitle from '../images/title.png';

const Landing = () => {
  return (
    <section className="landing outdoor">
      <header className="landing__header">
        <div className="landing__title">
          {/* <img
            className="landing__title-img"
            src={ImageTitle}
            alt="Rick y Morty"
          ></img> */}
        </div>
        <p className="landing__p">NOMBRE APP</p>
        <Link to="/App" className="landing__btn">
          ¿Te atreves a aceptar el reto?
        </Link>
      </header>
    </section>
  );
};

export default Landing;

import React from 'react';
import { Link } from 'react-router-dom';
import './landing.scss';
import Logo from '../../assets/icons/face_mask-1.png';

const Landing = () => {
  return (
    <section className="landing">
      <header className="landing__header">
        <img
          className="landing__icon"
          src={Logo}
          alt="icono de la web chica con mascarilla"
        ></img>

        <p className="landing__p">FUNDEMIC</p>

        <Link to="/App" className="landing__btn">
          ¿Te atreves a aceptar el reto?
        </Link>
      </header>
    </section>
  );
};

export default Landing;

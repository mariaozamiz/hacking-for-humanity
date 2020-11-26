import React from 'react';
import { Link } from 'react-router-dom';
import './landing.scss';
import Logo from '../../assets/icons/face_mask-1.png';

const Landing = (props) => {
  const getLevelClass = (level) => {
    if (level === 0) {
      return 'outdoor';
    } else if (level === 1) {
      return 'beCareful';
    } else {
      return 'indoor';
    }
  };

  // const getLevelClassHidden = (level) => {
  //   if (level === 0) {
  //     return 'display: block';
  //   } else if (level === 1) {
  //     return 'display: block';
  //   } else {
  //     return 'indoor';
  //   }
  // };

  return (
    <section className={`landing ${getLevelClass(props.level)}`}>
      <header className="landing__header">
        <img
          className="landing__icon"
          src={Logo}
          alt="icono de la web chica con mascarilla"
        ></img>

        <p className="landing__p">FUNDEMIC</p>
        <p className="status" hidden={props.level === 0 ? false : true}>
          Hoy es un buen día para salir (con cuidado)✨
        </p>
        <p className="status" hidden={props.level === 1 ? false : true}>
          Si sales hoy, extrema precauciones😉
        </p>
        <p className="status" hidden={props.level === 2 ? false : true}>
          Como en casa en ningún lado🏡
        </p>
        <Link to="/App" className="landing__btn">
          ¿Te atreves a aceptar el reto?
        </Link>
      </header>
    </section>
  );
};

export default Landing;

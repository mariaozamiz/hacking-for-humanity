import React from 'react';
import { Link } from 'react-router-dom';
import './navBar.scss';

function NavBar() {
  return (
    <nav className="nav-bar">
      <ul className="nav-menu">
        <li className="nav-menu__item">
          <Link className="nav-menu__link" to="/App">
            TODOS
          </Link>
        </li>
        <li className="nav-menu__item">
          <Link className="nav-menu__link" to="/AcceptedChallenges">
            ACEPTADOS
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;

import React from 'react';
import NavBar from '../navBar/navBar';
import './header.scss';
import faceMask from '../../assets/icons/face_mask-1.png';
function Header() {
  return (
    <header className="header">
      <a href="./" className="header-container">
        <img
          className="header-icon"
          src={faceMask}
          alt="Icono mujer mascarilla"
        ></img>
        <h1 className="header-title">Fundemic</h1>
      </a>

      <NavBar />
    </header>
  );
}

export default Header;

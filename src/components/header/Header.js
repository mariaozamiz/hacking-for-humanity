import React from 'react';
import NavBar from '../navBar/navBar';
import './header.scss';

function Header() {
    return (
        <header className="header">
            <h1 className="header-title">Retos</h1>
            <NavBar />
        </header>
    );
}

export default Header;

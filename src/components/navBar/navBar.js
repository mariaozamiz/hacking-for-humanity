import React from 'react';
import './navBar.scss';

function NavBar() {
    return (
        <nav className="nav-bar">
            <ul className="nav-menu">
                <li className="nav-menu__item">
                    <a className="nav-menu__link" href="./">
                        RETOS
                    </a>
                </li>
                <li className="nav-menu__item">
                    <a className="nav-menu__link" href="./">
                        FAVORITOS
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;

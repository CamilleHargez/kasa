import React from 'react';
import logo from '@/assets/logoKasa.png'
import { NavLink } from 'react-router-dom'

import './Header.css'

const Header = () => {
    return (
        <>
            <div className='header'>
                <img className="logoKasa" src={logo} alt='Logo Kasa'></img>
                <nav>
                    <ul className='header-ul'>
                        <li><NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""} >Accueil</NavLink></li>
                        <li> <NavLink to="apropos">A propos</NavLink></li>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default Header;
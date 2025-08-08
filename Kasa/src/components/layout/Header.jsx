import React from 'react';
import logo from '@/assets/logoKasa.png'
import { Link } from 'react-router-dom'

import './Header.css'

const Header = () => {
    return (
        <>
            <div className='header'>
                <img className="logoKasa" src={logo} alt='Logo Kasa'></img>
                <nav>
                    <ul className='header-ul'>
                        <li><Link to="/">Accueil</Link></li>
                        <li> <Link to="apropos">A propos</Link></li>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default Header;
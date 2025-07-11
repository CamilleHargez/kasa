import React from 'react';

import logo from '@/assets/logoKasa.png'

const Header = () => {
    return (
        <>
            <img className="logoKasa" src={logo} alt='Logo Kasa'></img>
            <nav>
                <ul>
                    <li>Accueil</li>
                    <li>A propos</li>
                </ul>
            </nav>
        </>
    );
};

export default Header;
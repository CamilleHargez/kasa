import React from 'react';
import whiteLogo from '@/assets/white-logo.png'

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <img className="white-logo" src={whiteLogo} alt='Logo Kasa blanc'></img>
                <p>2020 Kasa. All rights reserved</p>
            </div>
        </>
    );
};

export default Footer;
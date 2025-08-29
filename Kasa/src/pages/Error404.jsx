import React from 'react';

import './Error404.css'
import { NavLink } from 'react-router-dom'


const Error404 = () => {
    return (
        <>
            <div className='sectionError'>
                <h1 className='ErrorCode'>
                    404
                </h1>
                <p className='ErrorText'>
                    Oups! La page que vous demandez n'existe pas.
                </p>
                <NavLink to='/' className='linkHomepage'> Retourner sur la page d'accueil</NavLink>
            </div>
        </>
    );
};

export default Error404;
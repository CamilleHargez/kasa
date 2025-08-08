import React from 'react';

import './Error404.css'

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
                <a href='/' className='linkHomepage'> Retourner sur la page d'accueil</a>
            </div>
        </>
    );
};

export default Error404;
import React from 'react';
import Header from '@layout/Header';
import Footer from '@layout/Footer';

const Error404 = () => {
    return (
        <>
            <Header/>
            <h1>
                404
            </h1>
            <p>
                Oups! La page que vous demandez n'existe pas. 
            </p>
            <a href='/' > Retourner sur la page d'accueil</a>
            <Footer/>
        </>
    );
};

export default Error404;
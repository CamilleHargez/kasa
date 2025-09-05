import React, { useState, useEffect } from 'react';
import './About.css'
import imgAbout from '@/assets/image_about.jpg'

import Collapse from '@partials/Collapse'

const About = () => {

    return (
        <>
            <div className='section1Apropos'>
                <img className='imageAbout' src={imgAbout} alt='Image nature forêt et mer'></img>
            </div>
            <div className='sectionAbout'>
                <Collapse className='collapseFiability' title="Fiabilité">
                    <p className='fiabilityContent'> Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
                </Collapse>

                <Collapse className='collapseRespect' title="Respect" >
                    <p className='respectContent'> La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                </Collapse>

                <Collapse className='collapseService' title="Service" >
                    <p className='serviceContent'> La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.</p>
                </Collapse>

                <Collapse className='collapseSecurity' title="Sécurité" >
                    <p className='securityContent'> La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
                </Collapse>
            </div>
        </>
    );
};

export default About;
import React, { useState, useEffect } from 'react';
import imgHomepage from '@/assets/kasa-image-homepage.jpg'
import { Link } from 'react-router-dom'

const URLapi = "http://localhost:8080/api";

const Home = () => {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        fetch(URLapi + "/properties")
            .then(response => response.json())
            .then(data => {
                setProperties(data);
            })
            .catch(error => console.error("Erreur lors de la récupération :", error));
    }, []);

    return (
        <>
            <div className='section1Homepage'>
                <img className='section1Image' src={imgHomepage} alt='Image nature forêt et mer'></img>
                <h3 className='section1Title'>Chez vous, partout et ailleurs</h3>
            </div>


            <div className='propertiesGallery'>
                {properties.map(property => (
                        <Link key={property.id} to={`/logement/${property.id}`} className='card_link'>
                        <article className='propertieCard'>
                            <img src={property.cover} alt={property.title} className='propertieImg' />
                            <h3 className='propertieTitle'>{property.title}</h3>
                        </article>
                         </Link>
                    ))}
            </div >
           
        </>
    );
};

export default Home;
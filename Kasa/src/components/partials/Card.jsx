import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import arrowLeft from '@/assets/arrow_left.png'
import arrowRight from '@/assets/arrow_right.png'
import arrowTop from '@/assets/arrow_top.png'

import '@partials/Card.css'

const URLapi = "http://localhost:8080/api"

const Card = () => {
    const { id } = useParams(); // ← Récupère l'id depuis l'URL
    const [property, setProperty] = useState(null)
    const [currentImage, setCurrentImage] = useState(0);

    /** Récupérer le logement correspondant à l'id */
    useEffect(() => {
        fetch(URLapi + `/properties/${id}`)
            .then(response => response.json())
            .then(data => {
                setProperty(data)
            })
            .catch(error => console.error("Erreur lors de la récupération :", error));
    }, [id])

    if (!property) {
        return <div>Chargement en cours...</div>;
    }


    /** Fonction pour passer à l'image suivante */

    const nextImage = () => {
        setCurrentImage((currentImage) => currentImage + 1)
    }


    /** Fonction pour passer à l'image précédente */

    const previousImage = () => {
        setCurrentImage((currentImage) => currentImage - 1)
    }


    return (
        <>
            <div className='propertyInfo'>
                <div className='banner'>
                    <img src={property.pictures[currentImage]} alt={property.title} className='propertyPicture' />
                    <article className="arrow">
                        <img className="arrow_left" onClick={previousImage} src={arrowLeft}></img>
                        <img className="arrow_right" onClick={nextImage} src={arrowRight}></img>
                    </article>
                </div>
                <div className='section1'>
                    <div className='titlesSection1'>
                        <h2 className='propertyTitle'>{property.title}</h2>
                        <h3 className='propertyLocation'>{property.location}</h3>
                    </div>
                    <div className='propertyHost'>
                        <div className='hostName'>{property.host.name}</div>
                        <img className='hostPicture' src={property.host.picture}></img>
                    </div>
                </div>
                <div className='section2'>
                    <div className='propertyTags'>
                        {property.tags.map(tag => (
                            <article key={tag} className='propertyTag'>{tag}</article>
                        ))}
                    </div>
                    <div>Notes étoiles</div>
                </div>
                <div className='section3'>
                    <div className='description'>
                        <label className="propertyDescription">Description</label>
                        <img className='propertyDescription' src={arrowTop}></img>
                    </div>
                    <div className='equipments'>
                        <label className="propertyEquipments">Équipements</label>
                        <img className='propertyEquipments' src={arrowTop}></img>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Card;
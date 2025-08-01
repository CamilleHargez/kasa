import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import arrowLeft from '@/assets/arrow_left.png'
import arrowRight from '@/assets/arrow_right.png'
import arrowTop from '@/assets/arrow_top.png'

import '@partials/Card.css'
import Collapse from './Collapse'

const URLapi = "http://localhost:8080/api"

const Card = () => {
    const { id } = useParams(); // ← Récupère l'id depuis l'URL
    const [property, setProperty] = useState(null)
    const [currentImage, setCurrentImage] = useState(0)

    const [descriptionOpen, setDescriptionOpen] = useState(false)
    const [equipmentsOpen, setEquipmentsOpen] = useState(false)

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
        setCurrentImage((currentImage) =>
            currentImage === property.pictures.length - 1 ? 0
                : currentImage + 1)
    }


    /** Fonction pour passer à l'image précédente */

    const previousImage = () => {
        setCurrentImage((currentImage) =>
            currentImage === 0 ? property.pictures.length - 1
                : currentImage - 1)
    }

    const rate = [1, 2, 3, 4, 5]

    return (
        <>
            {/* <div className='propertyInfo'> */}
            <div className='banner'>
                <img src={property.pictures[currentImage]} alt={property.title} className='propertyPicture' />
                <img className="arrow_left" onClick={previousImage} src={arrowLeft}></img>
                <img className="arrow_right" onClick={nextImage} src={arrowRight}></img>
                <p className='pagination'>{currentImage + 1} / {property.pictures.length}</p>
            </div>
            <div className='propertyInfo'>
                <div className='section1'>
                    <div className='titlesSection1'>
                        <h2 className='propertyTitle'>{property.title}</h2>
                        <h3 className='propertyLocation'>{property.location}</h3>
                    </div>
                    <div className='propertyTags'>
                        {property.tags.map(tag => (
                            <article key={tag} className='propertyTag'>{tag}</article>
                        ))}
                    </div>
                </div>
                <div className='section2'>
                    <div className='propertyHost'>
                        <div className='hostName'>{property.host.name}</div>
                        <img className='hostPicture' src={property.host.picture}></img>
                    </div>
                    <div className='rating'>
                        {rate.map((e, index) => (
                            <i key={index} className='fa-solid fa-star' style={{
                                color:
                                    index < property.rating
                                        ? "#ff6060"
                                        : "#e3e3e3"
                            }}
                            ></i>
                        ))}
                    </div>
                </div>
            </div>
            <div className='section3'>
                <Collapse className='Description' title="Description" isOpen={descriptionOpen} onToggle={() => setDescriptionOpen(!descriptionOpen)}>
                    <p>{property.description}</p>
                </Collapse>
                <Collapse className='Equipments'
                    title="Équipements"
                    isOpen={equipmentsOpen}
                    onToggle={() => setEquipmentsOpen(!equipmentsOpen)}
                >
                    <ul>
                        {property.equipments.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </Collapse>
            </div>

        </>

    );
};

export default Card;
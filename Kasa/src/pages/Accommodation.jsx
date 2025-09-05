import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import './Accommodation.css'

import Carousel from '@partials/Carousel'
import Collapse from '@partials/Collapse'
import Error404 from './Error404'

const URLapi = "http://localhost:8080/api"


const Accommodation = () => {
    const { id } = useParams();
    const [property, setProperty] = useState([])
    const [load, setLoad] = useState(true)

    const rate = [1, 2, 3, 4, 5]

    /** Récupérer le logement correspondant à l'id */
    useEffect(() => {
        fetch(URLapi + `/properties/${id}`)
            .then(response => {
                if (response.status != 200) {
                    throw new Error("no appart")
                }
                return response.json()
            })
            .then(data => {
                setProperty(data)
                setLoad(false)
            })
            .catch(error => {
                console.error("Erreur")
                setLoad(false)
            });
    }, [id])

    if (load) {
        return <div>Chargement en cours...</div>;
    }


    if (property.length == 0) {
        return <Error404 />
    }

    return (
        <>
            <Carousel pictures={property.pictures} />
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
                <Collapse className='description' title="Description">
                    <p>{property.description}</p>
                </Collapse>
                <Collapse className='equipments'
                    title="Équipements"
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

export default Accommodation;
import React, { useState } from 'react';

import arrowLeft from '@/assets/arrow_left.png'
import arrowRight from '@/assets/arrow_right.png'

import './Carousel.css'

const Carousel = ({ pictures }) => {
    const [currentImage, setCurrentImage] = useState(0)

    /** Fonction pour passer à l'image suivante */

    const nextImage = () => {
        setCurrentImage((currentImage) =>
            currentImage === pictures.length - 1 ? 0
                : currentImage + 1)
    }


    /** Fonction pour passer à l'image précédente */

    const previousImage = () => {
        setCurrentImage((currentImage) =>
            currentImage === 0 ? pictures.length - 1
                : currentImage - 1)
    }

    return (
        <div className='banner'>
            <img src={pictures[currentImage]} className='propertyPicture' />
            {pictures.length > 1 && 
                <>
                    <img className="arrow_left" onClick={previousImage} src={arrowLeft}></img>
                    <img className="arrow_right" onClick={nextImage} src={arrowRight}></img>
                    <p className='pagination'>{currentImage + 1} / {pictures.length}</p>
                </>
            }
        </div>
    );
};

export default Carousel;
import React, { useState, useEffect } from 'react';
// import imgHomepage from '@/assets/kasa-image-homepage.jpg'


const URLapi = "http://localhost:8080/api";

const Accommodation = () => {

    // const [properties, setProperties] = useState([]);

    // useEffect(() => {
    //     fetch(URLapi + "/properties")
    //         .then(response => response.json())
    //         .then(data => {
    //             setProperties(data);
    //             console.log(data)
                
    //         })
    //         .catch(error => console.error("Erreur lors de la récupération :", error));
    // }, []);
    

    return (
        <>
    {/* //         <div className='section1Homepage'>
    //             <img className='section1Image' src={imgHomepage} alt='Image nature forêt et mer'></img>
    //             <h3 className='section1Title'>Chez vous, partout et ailleurs</h3>
    //         </div>


    //         <div className='propertiesGallery'>
    //             {properties.map(property => ( */}

    {/* //                 <article key={property.id} className='propertieCard'>
    //                     <img src={property.cover} alt={property.title} className='propertieImg' />
    //                     <h3 className='propertieTitle'>{property.title}</h3>
    //                 </article>

    //             ))}
    //         </div >*/}
            <div>
                Page Logement
            </div> 
        </>

    );
};

export default Accommodation;
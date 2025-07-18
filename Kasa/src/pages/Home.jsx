import React, { useState, useEffect } from 'react';

const URLapi = "http://localhost:8080/api";

const Home = () => {
    <>
        return (
        <article className='card-article'>
            <img src='' />
            <div>Titre logement</div>
        </article>
        )
    </>
}

// const Home = () => {
//   const [properties, setProperties] = useState([]);

//   useEffect(() => {
//     fetch(URLapi + "/properties")
//       .then(response => response.json())
//       .then(data => {
//         console.log(data); // Voir les données dans la console
//         setProperties(data);
//       })
//       .catch(error => console.error("Erreur lors de la récupération :", error));
//   }, []);

//   return (
//     <>
//       <div className='section1'>
//         Chez vous, partout et ailleurs
//       </div>

//       <div className='gallery'>
//         {properties.map(property => (
//           <div key={property.id} className='card'>
//             <h3>{property.title}</h3>
//             <img src={property.cover} alt={property.title} />
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

export default Home;

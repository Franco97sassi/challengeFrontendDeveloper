// import Image from 'next/image';
// import React from 'react'
// //  import starWars from './starWars.jpeg';
// // import Link from 'next/link';
// async function getDataFilm(episode_id){
//   const res=await fetch(`https://swapi.dev/api/films/${episode_id}`);
//   const data=await res.json();
//    return  data;
//   }
// async function FilmDetail({params}) {
//   const film= await  getDataFilm(params.episode_id)

//   return (
//     <div>
//       <hr />
//       {film ? ( // Verificar si film no es null o undefined
//         <>
//           <h3>Titulo:{film.title}</h3>
//           <h3>{film.id}</h3>
//            <h3>Director:{film.director}</h3>
//  {/* <ul>
//             {characters.map((character, index) => (
//               <li key={index}>{character.name}</li>
//             ))}
//           </ul>    
//            */}
//               </>
//       ) : (
//         <p>Loading...</p> // Muestra un mensaje de carga mientras se obtienen los datos
//       )}
//       <hr />
//     </div>
//   )
// }

// export default FilmDetail;  



// import image from 'next/image';





 import React from 'react'
import starWars from '@/public/img/starWars.jpeg';
import Image from 'next/image';
async function getDataFilm(episode_id){
  const res=await fetch(`https://swapi.dev/api/films/${episode_id}`);
  const data=await res.json();
  console.log(data);
    return  data;
  }
 async function FilmDetail({params}) {
    const film= await  getDataFilm(params.episode_id)
  return (
    <div>
            <h1>hola 111</h1>
            <h1>Episodio:</h1>
            {film.title}
 <Image width={500} height={500} src={starWars} alt="" />

  {film.episode_id}   

    </div>
  )
}

export default FilmDetail;  
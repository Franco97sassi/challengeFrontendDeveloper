 import React from 'react'
import starWars from '@/public/img/starWars.jpeg';
import Image from 'next/image';
async function getPersonFilm(id){
  const res=await fetch(`https://swapi.dev/api/people/${id}`);
  const data=await res.json();
   return  data;
  }
async function PersonDetail({params}) {
  const personaje= await  getPersonFilm(params.id)

  return (
    <div>
      <hr />
      {personaje ? ( // Verificar si film no es null o undefined
        <>
          {/* <h3>{film.title}</h3> */}
          <h3>{personaje.id}</h3>
          <h3>Nombre:{personaje.name}</h3>
          <Image width={500} height={500} src={starWars} alt="" />

          <h3>Color de Ojos:{personaje.eye_color}</h3>
          <h3>Año de Cumpleaños:{personaje.birth_year }</h3>
          <h3>Color de Pelo:{personaje.hair_color }</h3>
          <h3>Altura:{personaje.height }</h3>
          <h3>Masa:{personaje.mass }</h3>

         </>
      ) : (
        <p>Loading...</p> // Muestra un mensaje de carga mientras se obtienen los datos
      )}
      <hr />
    </div>
  )
}

export default PersonDetail
import Link from 'next/link'
import React from 'react'

function FilmsGeneral({film}) {
 return (
   
   <Link href={`/films/${film.episode_id}`} key={film.id}>
    
     <li key={film.id}>
       <hr />
       <h3>Nombre: {film.title}</h3>
       <h3>ID: {film.id}</h3>
       <h3>Número de Episodio: {film.episode_id}</h3>
       <hr />
     </li>
   
 </Link>
 )
}
export default FilmsGeneral
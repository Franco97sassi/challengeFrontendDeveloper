import Image from 'next/image';
import React from 'react'
//  import starWars from './starWars.jpeg';
import Link from 'next/link';
async function getData(){
  const res=await fetch("https://swapi.dev/api/people");
  const data=await res.json();
   return data.results;
  }
async function Personajes() {
  const personajes= await  getData()

  return (
    <div>  
      
    <ul>
    {personajes.map((personaje)=> (  
      <div >     
       
        <Link href={`/personajes/${personaje.id}`} key={personaje.id}>  
        <li key={personaje.id}> 
         {/* <Image src={starWars}/> */}
        <hr />
    <h3>Nombre:{personaje.name}</h3>
    <h3>Color de Ojos:{personaje.eye_color}</h3>
    <h3>Genero:{personaje.gender}</h3>

 <hr />
    <h3>{personaje.episode_id}</h3>
    </li>
    </Link></div> 
) )}
     
  </ul>
  </div>
  )
}

export default Personajes
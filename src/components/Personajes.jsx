import Link from 'next/link'
import React from 'react'
import starWars from '@/public/img/starWars.jpeg';
import Image from 'next/image';

function PersonajesGeneral({personaje}) {
 return (
   
    <div  className='bg-gray-950 p-10'>     
       
        {/* <Link href={`/personajes/${personaje.id}`} key={personaje.id}>   */}
        {/* <li key={personaje.id}>  */}
         {/* <Image src={starWars}/> */}
        <hr />
    {/* <h3>Nombre:{personaje.name}</h3> */}
    <Image width={500} height={500} src={starWars} alt="" />

    <h3  className='text-slate-300'>Color de Ojos:{personaje.eye_color}</h3>
    <h3 className='text-slate-300'>Genero:{personaje.gender}</h3>

 <hr />
    <h3>{personaje.episode_id}</h3>
    {/* </li> */}
    {/* </Link> */}
    </div> 
 )
}
export default PersonajesGeneral
import Link from 'next/link'
import React from 'react'
import starWars from '@/public/img/starWars.jpeg';
import Image from 'next/image';

function CharacterComponent({character,id}) {
 
 return (
   
     
       
         <Link href={`/personajes/${id}`}   >   
       
         <div  className='bg-gray-950 p-10 justify-center items-center'>     
     <h2 className=' font-bold mb-4'>Nombre:{character.name}</h2>  
      <Image width={500} height={500} src={starWars} alt="starWars" />  

    {character.eye_color !== 'n/a' && character.eye_color !== 'unknown' && (
        <h3 className='text-slate-300'>Color de Ojos: {character.eye_color}</h3>
      )}    
      {character.gender !== 'n/a' && character.gender !== 'unknown' && (
        <h3 className='text-slate-300'>Genero: {character.gender}</h3>
      )}
  
    <h3>{character.episode_id}</h3>
    {/* </li> */}</div> 
     </Link> 
     
 )
}
export default CharacterComponent
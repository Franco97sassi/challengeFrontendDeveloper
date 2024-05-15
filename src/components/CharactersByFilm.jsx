import Link from 'next/link'
import React from 'react'
import starWars from '@/public/img/starWars.jpeg';
import Image from 'next/image';

function CharactersByFilm({character,id}) {
 
 return (
   
     
       
         <Link href={`/personajes/${id}`}   >   
       
         <div  className='bg-gray-950 p-10 flex flex-col items-center justify-center'>     
     <h2 className=' font-bold mb-4'>Nombre:{character.name}</h2>  
     <Image width={100} height={100} src={starWars} alt="starWars" />  
 
     <h2 className=' font-bold mb-4'>Url:{character.url}</h2>  

    <h3>{character.episode_id}</h3>
    {/* </li> */}</div> 
     </Link> 
     
 )
}
export default CharactersByFilm
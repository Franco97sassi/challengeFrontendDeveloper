import Link from 'next/link'
import React from 'react'
import starWars from '@/public/img/starWars.jpeg';
import Image from 'next/image';

function CharactersByFilm({character,id}) {
 
 return (
   
     
       
         <Link href={`/personajes/${id}`}   >   
       
         <div  className='bg-gray-950 p-10 md:flex flex-col items-center justify-center'>     
     <h2 className='text-center font-bold mb-4 '> {character.name}</h2>  
     <Image width={100} height={100} src={starWars} alt="starWars" />  
 
 
    <h3>{character.episode_id}</h3>
    {/* </li> */}</div> 
     </Link> 
     
 )
}
export default CharactersByFilm
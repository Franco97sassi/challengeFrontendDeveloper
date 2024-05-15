import Link from 'next/link'
import React from 'react'
 import Image from 'next/image';
import starWars from '@/public/img/starWars.png';
 
function FilmsComponent({film ,id }) {
     
 return (
   
<Link href={`/films/${id}`}   >
     
     <div  className='bg-gray-950 p-10    flex flex-col items-center justify-center rounded-lg'>
          <h2 className=' font-bold mb-4'>Nombre: {film.title}</h2>
         <Image width={500} height={500} src={starWars} alt="starWars" />

       <h3 className='text-slate-300'>Número de Episodio: {film.episode_id}</h3>
      </div>  
   
 </Link>
 )
}
export default FilmsComponent
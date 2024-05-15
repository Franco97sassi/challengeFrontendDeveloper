import Link from 'next/link'
import React from 'react'
 import Image from 'next/image';
import starWars from '@/public/img/starWars.jpeg';
 
function FilmsGeneral({film ,id }) {
 return (
   
<Link href={`/films/${id}`} >
     
     <div  className='bg-gray-950 p-10'>
       <hr />
         <h3 className='text-xl font-bold mb-4'>Nombre: {film.title}</h3>
         <Image width={500} height={500} src={starWars} alt="" />

       <h3 className='text-slate-300'>Número de Episodio: {film.episode_id}</h3>
       <hr />
     </div>  
   
 </Link>
 )
}
export default FilmsGeneral
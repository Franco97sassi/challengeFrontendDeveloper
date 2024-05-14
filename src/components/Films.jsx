import Link from 'next/link'
import React from 'react'
 import Image from 'next/image';
import starWars from '@/public/img/starWars.jpeg';

function FilmsGeneral({film}) {
 return (
   
  //  <Link href={`/films/${film.episode_id}`} key={film.id}>
     
     <div key={film.id} className='bg-gray-950 p-10'>
       <hr />
       <Image width={500} height={500} src={starWars} alt="" />
       <h3 className='text-xl font-bold mb-4'>Nombre: {film.title}</h3>
       <h3>ID: {film.id}</h3>
       <h3 className='text-slate-300'>Número de Episodio: {film.episode_id}</h3>
       <hr />
     </div>  
   
//  </Link>
 )
}
export default FilmsGeneral
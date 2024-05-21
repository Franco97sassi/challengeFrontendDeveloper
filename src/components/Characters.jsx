 

"use client"

import Link from 'next/link'
import React from 'react'
import starWars from '@/public/img/starWars.jpeg';
import Image from 'next/image';
import { useRouter } from 'next/navigation'
function CharacterComponent({character,id,characterProps}) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/personajes/${id}`);
  };
 return (
   
     
       
         <Link href={`/personajes/${id}`}   >   
       
       <div  >
       <div class=" container h-max-   rounded-xl   max-w-md mx-auto md:max-w-3xl lg:max-w-4xl "  >  
      <div className="flex flex-col md:flex-row">
       
    <div class="w-1/2md:w-auto  flex justify-center items-center m-10  lg:m-0">
       <Image width={characterProps.width}   src={starWars} alt=""   style={{
          borderRadius: "5%",
          // height: "48rem",
            
        }}/>
    </div> </div>
    <div class=" flex flex-col justify-center items-center   container mb-2 ">
       <div class="  uppercase tracking-widest text-base text-amber-50 font-semibold  text-center md:text-left">  
       <p class='font-semibold'>{character.name} </p>
      </div>
    {characterProps.showEyeColor && character.eye_color !== 'n/a' && character.eye_color !== 'unknown' && (
        <p className='text-slate-300'>Color de Ojos: {character.eye_color}</p>
      )}    
       {characterProps.showBirthday && character.birth_year !== 'n/a' && character.birth_year !== 'unknown' && (
        <p className='text-slate-300'>Año de Cumpleaños: {character.birth_year}</p>
      )}  
      {characterProps.showGender && character.gender !== 'n/a' && character.gender !== 'unknown' && (
        <p className='text-slate-300'>Género: {character.gender}</p>
      )}


       {characterProps.showHeight && character.height !== 'n/a' && character.height !== 'unknown' && (
        <p className='text-slate-300'>Altura: {character.height}</p>
      )}    
      {characterProps.showSkinColor && character.skin_color !== 'n/a' && character.skin_color !== 'unknown' && (
        <p className='text-slate-300'>Color de Piel: {character.skin_color}</p>
      )}    
      {characterProps.showMass &&character.mass !== 'n/a' && character.mass !== 'unknown' && (
        <p  className='text-slate-300 '>Masa: {character.mass}</p>
      )}   
      {characterProps.showButton &&  

   (<> 
   <button onClick={handleClick} className="    bg-slate-950   rounded-full m-2 p-1">
              <p>Detalle</p>
            </button>
    <p>{character.episode_id}</p> </>
  )
    }
             </div>
  </div>
</div>

 
      </Link> 
     
 )
}
export default CharacterComponent
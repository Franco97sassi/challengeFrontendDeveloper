 import React from 'react'
import starWars from '@/public/img/starWars.jpeg';
import Image from 'next/image';
 
  async function fetchCharacterData(id) {   
    try {
      const res = await fetch(`https://swapi.dev/api/people/${id}`);
      if (!res.ok) {
        throw new Error("No se pudieron obtener los datos ");
      }
      const data = await res.json();
      return data;
    } catch (error) {
      console.error("Error al obtener los datos:", error);
      throw error;
    }
  }
async function CharacterDetail({params}) {
  const character= await  fetchCharacterData(params.id)

  return (
    <div>
      
      {character ? (  
        <>
          {/* <h3>{film.title}</h3> */}
          <div className=" h-screen bg-gray-950 flex flex-col justify-center	   items-center " >

          <h3>{character.id}</h3>
          <h3>Nombre:{character.name}</h3>
          <Image width={500} height={500} src={starWars} alt="" />
          {character.eye_color !== 'n/a' && character.eye_color !== 'unknown' && (
        <h3 className='text-slate-300'>Color de Ojos: {character.eye_color}</h3>
      )}    
          {character.birth_year !== 'n/a' && character.birth_year !== 'unknown' && (
        <h3 className='text-slate-300'>Año de Cumpleaños: {character.birth_year}</h3>
      )}    
      {character.hair_color !== 'n/a' && character.hair_color !== 'unknown' && (
        <h3 className='text-slate-300'>Color de Ojos: {character.hair_color}</h3>
      )}    
      {character.height !== 'n/a' && character.height !== 'unknown' && (
        <h3 className='text-slate-300'>Altura: {character.height}</h3>
      )}    
      {character.skin_color !== 'n/a' && character.skin_color !== 'unknown' && (
        <h3 className='text-slate-300'>Color de Piel: {character.skin_color}</h3>
      )}    
      {character.mass !== 'n/a' && character.mass !== 'unknown' && (
        <h3  className='text-slate-300 font-bold '>Masa: {character.mass}</h3>
      )}     
            
          </div>
         </>
      ) : (
        <p>Loading...</p>  
      )}
      
    </div>
  )
}

export default CharacterDetail
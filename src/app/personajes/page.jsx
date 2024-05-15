import Image from 'next/image';
import React from 'react'
//  import starWars from './starWars.jpeg';
import Link from 'next/link';
import PersonajesGeneral from '@/src/components/Personajes';
import "./personajes.css"
async function getData(){
  let allResults=[];
  let nextUrl = "https://swapi.dev/api/people";

  while (nextUrl) {
    const res = await fetch(nextUrl);
    const data = await res.json();
    allResults = [...allResults, ...data.results];
    nextUrl = data.next;
  }

  return allResults;
}
async function Personajes() {
  const personajes= await  getData()

  return (
    <div className='grid grid-cols-3 gap-10'>  
      
    {/* <ul> */}
    {personajes.map((personaje)=> (  
 

    <PersonajesGeneral personaje={personaje} />
) )}
     
  {/* </ul> */}
  </div>
  )
}

export default Personajes
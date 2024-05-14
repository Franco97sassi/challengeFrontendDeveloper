import Image from 'next/image';
import React from 'react'
 import Link from 'next/link';
import FilmsGeneral from '@/src/components/Films';
import starWars from "./starWars.jpeg"
async function getData(){
  const res=await fetch("https://swapi.dev/api/films");
  const data=await res.json();
  console.log(data);
     return data.results;
 
  }
async function Films() {
  const films= await  getData()
     return (
     <ul>
    {films.map((film)=> (  
//            <Link href={`/films/${film.episode_id}`} key={film.episode_id}>  
//          <li key={film.id}> 
//          <hr />
//     <h3>Nombre:{film.title}</h3>
 
//     <h3>id:{film.id}</h3>
//     <h3>Numero de Episodio:{film.episode_id}</h3>
    
//  <hr />
//     </li> 
//     </Link> 
<FilmsGeneral film={film}/> 
) )}
     
  </ul>

  )
}

export default Films
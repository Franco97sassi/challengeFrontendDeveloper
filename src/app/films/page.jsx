import Image from 'next/image';
import React from 'react'
 import Link from 'next/link';
import FilmsGeneral from '@/src/components/Films';
 async function getData(){
  const res=await fetch("https://swapi.dev/api/films");
  const data=await res.json();
      return data.results;
 
  }
async function Films() {
  const films= await  getData()
     return (
      <div  className=' grid grid-cols-3  '>  
     {films.map((film,index )=> (  
 
<FilmsGeneral  film={film} key={film.episode_id} id={index+1} />) )}
     
    </div>

  )
}

export default Films
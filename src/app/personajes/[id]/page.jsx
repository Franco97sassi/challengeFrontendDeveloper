 import React from 'react'
import starWars from '@/public/img/starWars.jpeg';
import Image from 'next/image';
import Loading from '@/src/components/Loading';
import dynamic from 'next/dynamic';
  

const CharacterComponent=dynamic(()=>import("@/src/components/Characters"),{
  loading:()=><Loading/>,
  })
  
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
  const characterProps={width:500,showName:true,showEyeColor:true,showGender:true,showBirthday:true,showHeight:true,showSkinColor:true,showMass:true }

  const character= await  fetchCharacterData(params.id)

  return (
    <div>
      <>
      <div className=" h-screen bg-gradient-to-b from-gray-700 to-slate-950 flex flex-col justify-center	   items-center gap-2" >
<div  >  
      <CharacterComponent
               character={character}
              // id={index + 1 + (currentPage - 1) * 10}
              characterProps={characterProps}
            /></div>
</div>
      </>
       
      
    </div>
  )
}

export default CharacterDetail
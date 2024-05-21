import React from "react";
import starWars from "@/public/img/starWars.png";
import Image from "next/image";
import dynamic from "next/dynamic";
import Loading from "@/src/components/Loading";

const CharacterComponent = dynamic(() => import("@/src/components/Characters"), {
  loading: () => <Loading />,
});
  const FilmsComponent = dynamic(() => import("@/src/components/Films"), {
   loading: () => <Loading />,
 });
 
async function fetchCharacterData(characterURL) {
  try {
    const res = await fetch(characterURL);
    if (!res.ok) {
      throw new Error("No se pudieron obtener los datos del personaje");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error al obtener los datos del personaje:", error);
    throw error;
  }
}

async function fetchFilmData(id) {
  try {
    const res = await fetch(`https://swapi.dev/api/films/${id}`);
    if (!res.ok) {
      throw new Error("No se pudieron obtener los datos de la película");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error al obtener los datos de la película:", error);
    throw error;
  }
}
function extractCharacterId(characterURL) {
  // Utiliza una expresión regular para extraer el ID de la URL
  const idMatch = characterURL.match(/\/people\/(\d+)\//);
  return idMatch ? idMatch[1] : null;
}

async function FilmDetail({ params }) {
  const filmProps={width:500,showDirector:true,showCaracters:true  }
  const characterProps={width:300,showName:false,showButton:true,showBirthday:false,showHeight:false, showSkinColor:false,showMass:false  }

  // Obtener datos de la película
  const film = await fetchFilmData(params.id);

  // Obtener datos de personajes
  const characters = await Promise.all(
    film.characters.map((characterURL) => fetchCharacterData(characterURL))
  );
  const characterIds = film.characters.map(extractCharacterId);

  return (
    <div className=" min-h-screen bg-gradient-to-b from-slate-950 to-gray-700 flex flex-col justify-center	   items-center ">
       
 
      <div  >  
        <div  >
         <FilmsComponent   film={film} filmProps={filmProps}  />    
</div>
<div className="grid md:grid-cols-3  grid-cols-1  gap-10 m-8">  
       {characters.map((character, index) => (
       <div className=" bg-slate-600 rounded-3xl"   key={character.url}>
<CharacterComponent  characterProps={characterProps} character={character} id={characterIds[index]} /> 
           </div>
      ))} </div>
        </div> 
       </div>
     
  );
}

export default FilmDetail;

import React from "react";
import starWars from "@/public/img/starWars.png";
import Image from "next/image";
import dynamic from "next/dynamic";
import Loading from "@/src/components/Loading";

const CharactersByFilm = dynamic(() => import("@/src/components/CharactersByFilm"), {
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

async function FilmDetail({ params }) {
  // Obtener datos de la película
  const film = await fetchFilmData(params.id);

  // Obtener datos de personajes
  const characters = await Promise.all(
    film.characters.map((characterURL) => fetchCharacterData(characterURL))
  );

  return (
    <div className=" min-h-screen bg-gray-950 flex flex-col justify-center items-center    gap-2">
      <h1 className="pt-10">Titulo: {film.title}</h1>
      <Image width={500} height={500} src={starWars} alt="" />
      <h1>Episodio: {film.episode_id}</h1>
      <h1>Director: {film.director}</h1>
      <h1>Personajes:</h1>
      <div className="flex md:flex-row flex-col flex-wrap">
       {characters.map((character, index) => (
        <div className="flex flex-row" key={character.url}> 
        <CharactersByFilm   character={character} id={index + 1}  /></div>
      ))} 
       </div>
     </div>
  );
}

export default FilmDetail;

"use client";
import Loading from "@/src/components/Loading";
import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";
 
 
async function getCharacters(url) {
  const res = await fetch(url);
  const data = await res.json();
  return data.results;
}
const CharacterComponent=dynamic(()=>import("@/src/components/Personajes"),{
loading:()=><Loading/>,
})
function Characters() {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterGender, setFilterGender] = useState("");
  const [filterEyeColor, setFilterEyeColor] = useState("");
  useEffect(() => {
    async function fetchData() {
      const data = await getCharacters(
        `https://swapi.dev/api/people/?page=${currentPage}`
      );
      setCharacters(data);
    }
    fetchData();
  }, [currentPage]);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  

  const handleGenderChange = (event) => {
    setFilterGender(event.target.value);
  };

  const handleEyeColorChange = (event) => {
    setFilterEyeColor(event.target.value);
  };

  const filteredCharacters = characters.filter((character) => {
    if (
      filterGender &&
      !character.gender.toLowerCase().includes(filterGender.toLowerCase())
    ) {
      return false;
    }
    if (
      filterEyeColor &&
      !character.eye_color.toLowerCase().includes(filterEyeColor.toLowerCase())
    ) {
      return false;
    }
    if (
      searchTerm &&
      !character.name.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return false;
    }
    return true;
  });

  return (
    <div  >
       
       {/* <div className="flex flex-col gap-10 p-10  center w-1/2"> */}
       <div className="flex flex-col  md:items-start   gap-10 p-10 justify-center items-center ">
        <input
          type="text"
          placeholder="Search by eye_color..."
          value={filterEyeColor}
          onChange={handleEyeColorChange}
          className="    text-black border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
         
        <input
          type="text"
          placeholder="Search by gender..."
          value={filterGender}
          onChange={handleGenderChange}
          className= " w-100 text-black border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
       
      <div className="grid md:grid-cols-3  grid-cols-1  gap-10 m-8">
        {characters.length > 0 ? (
          filteredCharacters.map((character, index) => (
            <CharacterComponent
              key={index}
              character={character}
              id={index + 1 + (currentPage - 1) * 10}
            />
          ))
        ) : (
          <div>Loading...</div>
        )}
      </div>
      <div className="pagination flex  justify-center gap-10 p-10">
        <button onClick={prevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <button onClick={nextPage}>Next</button>
      </div>
    </div>
  );
}

export default Characters;

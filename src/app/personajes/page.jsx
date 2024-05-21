"use client";
import Loading from "@/src/components/Loading";
import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";
 
 
async function getCharacters(url) {
  const res = await fetch(url);
  const data = await res.json();
  return data.results;
}
const CharacterComponent=dynamic(()=>import("@/src/components/Characters"),{
loading:()=><Loading/>,
})
function Characters() {
  const characterProps={width:500,showName:false,showEyeColor:true,showGender:true,showBirthday:false,showHeight:false,showSkinColor:false,showBirthday:false,}
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
    setCurrentPage((prevPage) => prevPage + 1);
  };
  
  const prevPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
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
    <div  className="bg-gradient-to-b from-stone-950 via-gray-700 to-stone-950 min-h-screen  flex  flex-col items-center justify-center">
<div className="flex flex-col md:flex-row md:justify-around gap-10 p-10">

        {/* <div className=" flex flex-col  md:items-start   gap-10 p-10 justify-center items-center "> */}
        <input
          type="text"
          placeholder="Search by eye_color..."
          value={filterEyeColor}
          onChange={handleEyeColorChange}
          className="    text-black border border-gray-300 p-4 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
         
        <input
          type="text"
          placeholder="Search by gender..."
          value={filterGender}
          onChange={handleGenderChange}
          className= " w-100 text-black border border-gray-300 p-4 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
       
      <div className="grid md:grid-cols-3  grid-cols-1  gap-10 m-8">
        { 
          filteredCharacters.map((character, index) => (
            <div  className="  bg-slate-600 rounded-3xl "  > 
            <CharacterComponent
              key={index}
              character={character}
              id={index + 1 + (currentPage - 1) * 10} characterProps={characterProps}
            />
            </div>
          ))
          }
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

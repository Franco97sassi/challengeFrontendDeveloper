
// "use client"
// import Image from 'next/image';
// import React, { useEffect } from 'react'
// //  import starWars from './starWars.jpeg';
// import Link from 'next/link';
// import PersonajesGeneral from '@/src/components/Personajes';
// import "./personajes.css"
// async function getData(){
//   let allResults=[];
//   let nextUrl = "https://swapi.dev/api/people";

//   while (nextUrl) {
//     const res = await fetch(nextUrl);
//     const data = await res.json();
//     allResults = [...allResults, ...data.results];
//     nextUrl = data.next;
//   }

//   return allResults;
// }
// async function Personajes() {
//   const personajes= await  getData()

// useEffect(() => {
//   setFilteredData(data)
// }, [])

  
//   const handleSearch=e=>{
//     setSearch(e.target.value)
//     if(search.lenght>1){
//       const filteredValues=personajes.filter(personaje=>{
//         const personajeName=personaje.name.toLowerCase()
//         const query=e.target.value.toLowerCase()
//         if(personajeName.includes(query)){
//           return true
//         }
//         return false
//       })
//     }
//     setFilteredData(filteredValues)
//   }

   
// const [search, setSearch] = useState("")
// const [filteredData, setFilteredData] = useState([])
//   return (
//     <div className='grid grid-cols-3 gap-10'>  
//        {/* <input type="text"  value={search} onChange={handleSearch}/> */}
//        <input type="text"  placeholder="buscar" onChange={(e)=>setQuery(e.target.value)}/>

//     {/* <ul> */}
//     {filteredData.map((personaje,index)=> (  
 

//     <PersonajesGeneral personaje={personaje} id={index+1} />
// ) )}
     
//   {/* </ul> */}
//   </div>
//   )
// }

// export default Personajes





// import Image from 'next/image';
// import React from 'react'
// //  import starWars from './starWars.jpeg';
// import Link from 'next/link';
// import PersonajesGeneral from '@/src/components/Personajes';
// import "./personajes.css"

// async function getData(){
//   let allResults=[];
//   let nextUrl = "https://swapi.dev/api/people";

//   while (nextUrl) {
//     const res = await fetch(nextUrl);
//     const data = await res.json();
//     allResults = [...allResults, ...data.results];
//     nextUrl = data.next;
//   }

//   return allResults;
// }
// async function Personajes() {
//   const personajes= await  getData()

//   return (
//     <div className='grid grid-cols-3 gap-10'>  
//      {/* <ul> */}
//     {personajes.map((personaje,index)=> (  
 

//     <PersonajesGeneral personaje={personaje} id={index+1} />
// ) )}
     
//   {/* </ul> */}
//   </div>
//   )
// }

// export default Personajes


 "use client"
 import React, { useState, useEffect } from 'react';
import PersonajesGeneral from '@/src/components/Personajes';
import './personajes.css';

async function getData(url) {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

async function getCharacters(url) {
  const res = await fetch(url);
  const data = await res.json();
  return data.results;
}

function Personajes() {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterGender, setFilterGender] = useState('');
  const [filterEyeColor, setFilterEyeColor] = useState('');
  useEffect(() => {
    async function fetchData() {
      const data = await getCharacters(`https://swapi.dev/api/people/?page=${currentPage}`);
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
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
 
  const handleGenderChange = (event) => {
    setFilterGender(event.target.value);
  };

  const handleEyeColorChange = (event) => {
    setFilterEyeColor(event.target.value);
  };

  const filteredCharacters = characters.filter((character) => {
    if (filterGender && !character.gender.toLowerCase().includes(filterGender.toLowerCase())) {
      return false;
    }
    if (filterEyeColor && !character.eye_color.toLowerCase().includes(filterEyeColor.toLowerCase())) {
      return false;
    }
    if (searchTerm && !character.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    return true;
  });

  return (
    <div className="container">
       {/* <div className="search">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div> */}
     <div className="search">
  <input
    type="text"
    placeholder="Search by eye_color..."
    value={filterEyeColor}
    onChange={handleEyeColorChange}
  />
</div>
<div className="search">
  <input
    type="text"
    placeholder="Search by gender..."
    value={filterGender}
    onChange={handleGenderChange}
  />
</div>
      <div className="grid grid-cols-3 gap-10">
      {characters.length > 0 ? (
          filteredCharacters.map((character, index) => (
            <PersonajesGeneral key={index} personaje={character} id={index + 1 + (currentPage - 1) * 10} />
          ))
        ) : (
          <div>Loading...</div>
        )}
      </div>
      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <button onClick={nextPage}>Next</button>
      </div>
    </div>
  );
}

export default Personajes;

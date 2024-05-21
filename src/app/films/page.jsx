import React from "react";
 import Loading from "@/src/components/Loading";
import dynamic from "next/dynamic";

const FilmsComponent=dynamic(()=>import("@/src/components/Films"),{
  loading:()=><Loading/>,
  })
async function fetchFilmsData() {
  try {
    const res = await fetch("https://swapi.dev/api/films");
    if (!res.ok) {
      throw new Error("No se pudieron obtener los datos ");
    }
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.error("Error al obtener los datos:", error);
    throw error;
  }
}
 
  const filmProps={width:300,showDirector:false,showCaracters:false  }

async function Films() {
  const films = await fetchFilmsData();
  return (
    <div className=" bg-gradient-to-b from-stone-950 via-gray-700 to-stone-950  min-h-screen flex items-center justify-center">
      <div className="  grid md:grid-cols-3 grid-cols-1 gap-10 m-10  mx-auto  ">
      {films.map((film, index) => (
        <div className="bg-slate-600  rounded-xl m-10  lg:m-0">
        <FilmsComponent film={film} key={index + 1} id={index + 1} filmProps={filmProps} /></div>
      ))}
    </div>
 

    </div>
  );
}

export default Films;

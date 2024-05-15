import React from "react";
 import Loading from "@/src/components/Loading";
import dynamic from "next/dynamic";

 
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
const FilmsComponent=dynamic(()=>import("@/src/components/Films"),{
  loading:()=><Loading/>,
  })
async function Films() {
  const films = await fetchFilmsData();
  return (
    <div className="min-h-screen grid md:grid-cols-3  grid-cols-1 gap-10 m-8  ">
      {films.map((film, index) => (
        <FilmsComponent film={film} key={index + 1} id={index + 1} />
      ))}
    </div>
  );
}

export default Films;

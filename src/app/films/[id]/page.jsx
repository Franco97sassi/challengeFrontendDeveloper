 



 import React from 'react'
import starWars from '@/public/img/starWars.jpeg';
import Image from 'next/image';
async function getDataFilm(id){
  const res=await fetch(`https://swapi.dev/api/films/${id}`);
  const data=await res.json();
  console.log(data);
    return  data;
  }
 async function FilmDetail({params}) {
    const film= await  getDataFilm(params.id)
  return (
    <div className="flex justify-center	   items-center " >
            <h1>hola 111</h1>
            <h1>Episodio: 
            {film.title}</h1>
 <Image width={500} height={500} src={starWars} alt="" />

 <h1> {film.episode_id}   </h1>

    </div>
  )
}

export default FilmDetail;  




// function FilmDetail({params}){
//   // function FilmDetail({props}){

//   // console.log(props);
//   return (
//     <div>
//     pp {params.episode_id}
//     </div>
//   )
// }
// export default FilmDetail;  



//  import React from 'react'
// import starWars from '@/public/img/starWars.jpeg';
// import Image from 'next/image';
// async function getDataFilm(){
//   const res=await fetch(`https://swapi.dev/api/films/3}`);
//   const data=await res.json();
//   console.log(data);
//     return  data;
//   }
//     function FilmDetail({props}) {
//     // const film= await  getDataFilm(params.episode_id)
//   //  await  getDataFilm()
//    console.log(props);

//   return (
//     <div className="flex justify-center	   items-center " >
//             <h1>hola 111</h1>
//             <h1>Episodio:</h1>
//             {/* {film.title} */}
//  <Image width={500} height={500} src={starWars} alt="" />

//   {/* {film.episode_id}    */}asd:
//   {/* {params.episode_id}
//   dsa:  {params.id} */}

//     </div>
//   )
// }
//  export default FilmDetail;  
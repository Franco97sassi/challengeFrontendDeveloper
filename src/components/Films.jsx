import Link from "next/link";
import React from "react";
import Image from "next/image";
import starWars from "@/public/img/starWars.png";

function FilmsComponent({ film, id, filmProps }) {
  return (
    <Link href={`/films/${id}`}>
      <div
        class="       rounded-xl overflow-hidden   p-4    "
      >
        <div class=" text-center uppercase tracking-widest text-base text-amber-50 font-semibold flex flex-col justify-center items-center      ">
          <p>Nombre:{film.title}</p>
        </div>
        <div class="        flex items-center justify-center   ">
          <Image
            // width={filmProps.width}
            width={filmProps.width}

            // sizes="(min-width: 808px) 50vw, 100vw"
            style={{
              borderRadius: "5%",objectFit: "cover", 
            }}
            src={starWars}
            alt="starWars"
          />
        </div>
        <div class=" pl-1  pr-1    ">
          <div class="  uppercase tracking-widest text-base   ">
            {filmProps.showDirector && (
              <p className="text-center ">Director:{film.director}</p>
            )}

            <p className="  text-center">
              Número de Episodio:{film.episode_id}
            </p>
            {filmProps.showCaracters && (
              <p className="text-center ">Personajes: </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
export default FilmsComponent;

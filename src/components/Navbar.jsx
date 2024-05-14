import Link from "next/link";
import React from "react";
function Navbar() {
  return (
    <nav className="bg-stone-950 flex justify-between	 p-4 items-center "   >
    <Link href="/">   <h1  className="text-3xl font-bold  ">Star Wars</h1></Link> 
      <ul className="flex gap-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/films">Films</Link>
        </li>
        <li>
          <Link href="/personajes">Personajes</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav>
      <ul>
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

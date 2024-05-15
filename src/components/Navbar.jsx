"use client"
import React, { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-stone-950 flex justify-between p-4 items-center relative">
      <Link href="/">
        <h1 className="text-3xl font-bold">Star Wars</h1>
      </Link>
      <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none"
        >
          <svg
            className="h-6 w-6 fill-current"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 5h18v2H3V5zm0 6h18v2H3v-2zm0 6h18v2H3v-2z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 5h18v2H3V5zm0 6h18v2H3v-2zm0 6h18v2H3v-2z"
              />
            )}
          </svg>
        </button>
      </div>
      <div className={`hidden lg:flex lg:flex-row lg:items-center`}>
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
      </div>
      <div className={`lg:hidden   inset-x-0 top-20 bg-stone-950 z-10 ${isOpen ? "block" : "hidden"}`}>
        <ul className="flex flex-col items-center gap-4">
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
      </div>
    </nav>
  );
}

export default Navbar;

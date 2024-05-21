"use client"
import React, { useState } from "react";
import Link from "next/link";
 
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
 
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
   return (
          <nav className="flex items-center justify-between flex-wrap bg-stone-950   p-4 ">

    <Link href="/">
        <h1 className="text-3xl font-bold">Star Wars</h1>
      </Link>
       <div className="flex  lg:hidden items-center flex-shrink-0 text-white mr-6">

        <button
          onClick={toggleMenu}
          className="flex justify-end px-3 py-2  border rounded    "

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
         <div className=" sm:hidden   w-full block flex-grow lg:flex lg:flex-row lg:items-center lg:w-auto ">
         <div className="    text-sm lg:flex-grow">

        <ul className=" hidden lg:flex gap-4  justify-end ">
          <li>
             <Link  href="/"> <h3>Home</h3></Link>  
            
          </li>
          <li>
            <Link href="/films"> <h3>Films</h3></Link>
            
           
          </li>
          <li>
            <Link href="/personajes"> <h3>  Personajes</h3></Link>
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
      </div>
    </nav>
  );
}

export default Navbar;


















// "use client"
// import React, { useState } from "react";
// import Link from "next/link";
 
// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
 
//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };
//    return (
//      <nav class="flex items-center justify betwwen flex-wrap bg-teal-500 p-6">
// <div class="flex items-center flex-shrink-0 text-white mr-6">
//   <svg class="fill-current h-8 w-8 mr-2" width="54" height="54">

//   </svg>


// <span class="font-semibold text-xl tracking-right">Star Wars</span>
// </div>
// <div class="block lg:hidden">
//   <button class="flex items-center px-3 py-2  border rounded text-teal-200 border-teal-400 hover:text-white ">

//   <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmins="http://www.w3.org/2000/svg"  >
     
// <title>Menu</title>
// <path d="M0 3h20v2H0V3zm0 6h20v2h0V9zm0 6h20v2H0v-2z"/>

//   </svg>

//   </button>

// </div>
// <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
// <div class="text-sm lg:flex-grow">
// <Link class ="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4" href="/">Home</Link>
// <Link class ="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"  href="/films">Films</Link>
// <Link class ="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"  href="/personajes">Personajes</Link>
// </div>
// </div>
//      </nav>
//   );
// }

// export default Navbar;


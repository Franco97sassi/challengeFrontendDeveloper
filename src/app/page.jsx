import starWars from '@/public/img/starWarsBg.jpeg';
import Image from 'next/image';


async function Home(){
   return(
    <div className="  animate-pulse     h-screen flex justify-center items-center">
       <h1 className="text-3xl "  >Bienvenido al sitio de Star Wars!</h1>

 
     </div>
  )
}
export default Home;
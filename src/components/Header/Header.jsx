
import "./Header.css"
import { Bars3Icon } from '@heroicons/react/24/solid'

const Header = () => {

   return (
      <>
         <dev className="container md:flex gap-5 justify-between border-b-2 mb-5 py-5 items-center shadow ">
        
         <Bars3Icon className="h-7 w-7 text-violet-900 mx-3 my-3 " />
         
            <div className="logo  px-3">
               <a className="font-bold md:text-4xl text-2xl " href="/home">Programming Cafe</a>
            </div>
            <nav className="flex gap-3 font-bold flex-col md:flex-row px-3 py-4">
               <a href="/home">Home</a>
               <a href="/about">About</a>
               <a href="/blog">Blog</a>
               <a href="/contact">Contact</a>
            </nav>
         </dev>
      </>
   );
};

export default Header;
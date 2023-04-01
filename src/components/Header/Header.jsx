
import "./Header.css"

const Header = () => {

   return (
      <>
         <dev className="container flex gap-5 justify-between border-b-2 mb-5  flex-col md:flex-row py-5 items-center ">
            <div className="logo">
               <a className="font-bold text-4xl" href="/home">Programming Cafe</a>
            </div>
            <nav >
               <a className="pr-5 font-bold   " href="/home">Home</a>
               <a className="pr-5 font-bold  " href="/about">About</a>
               <a className="pr-5 font-bold  " href="/blog">Blog</a>
               <a className="font-bold " href="/contact">Contact</a>
            </nav>
         </dev>
      </>
   );
};

export default Header;
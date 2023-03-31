
import "./Header.css"

const Header = () => {

   return (
      <dev className="container flex justify-between flex-col md:flex-row py-4 items-center ">
         <div className="logo">
            <a className="font-bold text-4xl" href="/home">News Cafe</a>
         </div>
         <nav >
            <a className="pr-5 font-bold   " href="/home">Home</a>
            <a className="pr-5 font-bold  " href="/about">About</a>
            <a className="pr-5 font-bold  " href="/blog">Blog</a>
            <a className="font-bold " href="/contact">Contact</a>
         </nav>
      </dev>
   );
};

export default Header;

import "./Header.css"

const Header = () => {

   return (
      <dev className="container max-auto flex justify-between pt-7">
         <div className="logo">
            <a className="font-semibold" href="/home"><span className="text-lg">News</span> Cafe</a>
         </div>
         <nav >
            <a className="pr-5" href="/home">Home</a>
            <a className="pr-5" href="/about">About</a>
            <a className="pr-5" href="/blog">Blog</a>
            <a href="/contact">Contact</a>
         </nav>
      </dev>
   );
};

export default Header;
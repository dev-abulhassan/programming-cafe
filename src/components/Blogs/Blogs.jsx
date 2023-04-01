import React, { useEffect, useState } from 'react';
import News from '../News/News';
import Bookmark from '../Bookmark/Bookmark'

const Blogs = () => {
   const [blogs, setBlogs] = useState([])
   const [countTime, setCountTime] = useState(0)
   const [bookmark, setBookmark] = useState([])


   useEffect(() => {
      fetch('blog.json')
         .then(res => res.json())
         .then(data => setBlogs(data))
   }, [])


   return (
      <>
         <div className='container mx-auto md:flex gap-6 px-4'>
            <div className='md:w-[65%]'>
               {
                  blogs.map(blog => <News
                     key={blog.id}
                     blog={blog}
                     setCountTime={setCountTime}
                     countTime={countTime}
                     bookmark={bookmark}
                     setBookmark={setBookmark}
                  ></News>)
               }
            </div>
            <div className='bookmark md:w-[35%]'>
               <Bookmark
                  countTime={countTime}
                  bookmark={bookmark}
               ></Bookmark>
            </div>
         </div>
      </>

   );
};

export default Blogs;
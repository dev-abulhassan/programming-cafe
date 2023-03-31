import React, { useEffect, useState } from 'react';
import News from '../News/News';

const Blogs = () => {
   const [blogs, setBlogs] = useState([])
   useEffect(() => {
      fetch('blog.json')
         .then(res => res.json())
         .then(data => setBlogs(data))
   }, [])
   return (
      <div className='container mx-auto'>
         {
            blogs.map(blog => <News
               key={blog.id}
               blog={blog}
            ></News>)
         }
      </div>
     
   );
};

export default Blogs;
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const News = () => {

   const [blogs, setBlogs] = useState([])
   useEffect(() => {
      fetch('blog.json')
         .then(res => res.json())
         .then(data => setBlogs(data))

   }, [])

   const {_id, cover_image, author_image, publish_date} = blogs
   return (
      <div className='container flex mt-4 border-t-2 '>
         <div className="news-container w-[75%] mt-5 border-b-2">
            {
               blogs.map((blog, _id) => {
                  return (
                     <div key={_id} className="blog-container">
                        <div className="blog-img pb-8">
                           <img className='rounded' src={blog.cover_image} alt={blog.title} />
                        </div>
                        <div className='flex justify-between pr-24'>
                           <div className="author-info flex justify-center">
                              <img className='w-14 rounded-full' src={blog.author_image} alt="" />
                              <div className='pl-6'>
                                 <div className="autho">
                                    {blog.author_name}
                                 </div>
                                 <div className="publish-date">
                                    {blog.publish_date}  
                                 </div>
                                
                              </div>
                           </div>
                           <div className="read-time flex gap-4 justify-center items-center text-base font-light text-gray-600">
                              {blog.read_time}
                              <button>
                              <FontAwesomeIcon icon={faBookmark} />
                              </button>
                           </div>
                        </div>

                        <div className="blog-text">
                           <h3>{blog.blog_title}</h3>
                           <p>{blog.description}</p>
                           <p>{blog.date}</p>
                        </div>
                     </div>
                  )
               })
            }
         </div>
         <div className="bookmark-container w-[25%] mt-5">
            <div className="readTime">read time</div>
            <div className="bookmark-blog">bookmark blog</div>
         </div>
      </div>
   );
};

export default News;
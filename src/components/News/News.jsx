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

   const { _id, cover_image, author_image, publish_date } = blogs
   return (
      <div className='container mx-auto flex mt-4 border-t-2 '>
         <div className="news-container w-[75%] mt-5">
            {
               blogs.map((blog, _id) => {
                  return (
                     <div key={_id} className="blog-container border-b-2 mb-4">
                        <div className="blog-img pb-8">
                           <img className='rounded w-[845px]' src={blog.cover_image} alt={blog.title} />
                        </div>
                        <div className='flex justify-between pr-[7rem]'>
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

                        <div className="blog-text pt-4 pb-4">
                           <h2 className='text-4xl font-bold text-gray-700 '>{blog.blog_title}</h2>
                        </div>
                        <div className="blog-tag flex gap-4 pb-10">
                           <span>{blog.tags[0]}</span>
                           <span>{blog.tags[1]}</span>
                        </div>
                        <button className='pb-16 underline text-violet-800'>Mark as read</button>
                     </div>
                  )
               })
            }
         </div>
         <div className="bookmark-container w-[25%] mt-5 ">
            <div className="spent-time py-5 px-9 bg-gray-200 text-violet-500 mb-6 border border-violet-600 rounded">
               <h2 className='text-center text-lg font-semibold'>Spent time on read : Dynamic</h2>
            </div>
            <div className="bookmark-blog">bookmark blog</div>
         </div>
      </div>
   );
};

export default News;
import React from 'react';

const News = (props) => {
   const { id, author, title, image, date, readTime, avatar, tags } = props?.blog;
   return (
      <div className='container '>
         <div className="single-news w-[75%]">
            <img src={image} alt="" />
            <div className='flex justify-between'>
               <div className="author-info flex justify-between">
                  <img className='w-[50px] rounded-full' src={avatar} alt="" />
                  <div className="author-info">
                     <h3>{author}</h3>
                     <p>{date}</p>
                  </div>
               </div>
               <div className="read-time">
                  <p>{readTime}</p>
                  <button></button>
               </div>
            </div>
            <h2 className='font-bold text-3xl'>{title}</h2>
            <div className="tag ">
               {
                  tags.map((item, i) =>

                     <p key={i} >{item}</p>
                  )

               }
            </div>
            <button className='text-violet-600 underline font-primary font-semibold'>Make Read Time</button>
         </div>
         <div className='bookmark w-[25%]'>
            <div className="spant-time"></div>
            <div className="bookmark-list"></div>
         </div>
      </div>
   );
};

export default News;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import { toast } from 'react-toastify';


const News = (props) => {
   const { id, author, title, image, date, readTime, avatar, tags } = props?.blog;
   const { setCountTime, countTime, bookmark, setBookmark } = props


   const timeCountHandle = (time) => {
      // console.log(time);
      setCountTime(countTime + time)

   }
   const bookmarkHanlder = (title) => {
      // let addBookmark = []
      const exitingBookmark = bookmark.find(item => item === title)
      if (exitingBookmark) {

         toast.error('This News is already Bookmark')
         // alert('its title already added')
         // console.log(newBookmark)
         // setBookmark(newBookmark)
      }
      else {
         const addBookmark = [...bookmark, title]
         
         console.log(addBookmark)
         setBookmark(addBookmark)
         toast.success('WoW! News Bookmark i ssuccessfully')
      }
      

   }


   return (
      <div className="container single-news ">
         <img src={image} alt="" />
         <div className='flex justify-between items-center'>
            <div className="author-info flex justify-between">
               <img className='w-[50px] rounded-full' src={avatar} alt="" />
               <div className="author-info">
                  <h3>{author}</h3>
                  <p>{date}</p>
               </div>
            </div>
            <div className="read-time flex gap-2 items-center">
               <p className='pr-3'>{readTime} min read</p>
               <button onClick={() => bookmarkHanlder(title)} ><FontAwesomeIcon icon={faBookmark} /></button>
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
         <button onClick={() => timeCountHandle(readTime)} className='text-violet-600 underline font-primary font-semibold'>Make Read Time</button>
      </div>
   );
};

export default News;
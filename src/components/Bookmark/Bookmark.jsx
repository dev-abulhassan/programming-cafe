import React from 'react';

const Bookmark = (props) => {

   return (
      <>
         <div className='sticky top-5 mt-10'>
            <div className="spent-time py-5 px-9 bg-gray-200 text-violet-500 mb-6 border border-violet-600 rounded ">
               <h2 className='text-center text-lg font-semibold font-primary '>Spent time on read : {props.countTime} min</h2>
            </div>
            <div className="bookmark-blog flex flex-col mb-5 gap-3 rounded bg-gray-200 ">
               {
                  props.bookmark?.map((item, id) =>
                     <div key={id} className=' p-3 shadow-md'>
                        <p className=' text-gray-950 p-3 '>{item}</p>
                     </div>)
               }
            </div>
         </div>
      </>
   );
};

export default Bookmark;
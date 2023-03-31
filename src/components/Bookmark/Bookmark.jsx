import React from 'react';

const Bookmark = (props) => {
   
   return (
      <div className='sticky top-5'>
         <div className="spent-time py-5 px-9 bg-gray-200 text-violet-500 mb-6 border border-violet-600 rounded ">
            <h2 className='text-center text-lg font-semibold font-primary '>Spent time on read : {props.countTime} min</h2>
         </div>
         <div className="bookmark-blog">bookmark blog</div>
      </div>
   );
};

export default Bookmark;
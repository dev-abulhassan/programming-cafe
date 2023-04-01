

const Bookmark = (props) => {


   return (
      <div className='sticky top-5 mt-10 '>
         <div className="spent-time py-5 px-9 bg-gray-200 text-violet-500 mb-6 border border-violet-600 rounded ">
            <h2 className='text-center text-lg font-semibold font-primary '>Spent time on read : {props.countTime} min</h2>
         </div>
         <div className="py-3 text-center rounded bg-gray-200 ">
            <p>Bookmark News Item: {props.bookmark.length}</p>

            <div className=' px-5 '>
               {
                  props.bookmark?.map((item, id) =>
                     <div key={id} className='  shadow-md'>
                        <p className=' my-2 bg-white text-gray-950 p-4 ' >{item}</p>
                     </div>)
               }
            </div>
         </div>
      </div>
   );
};

export default Bookmark;
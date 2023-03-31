import React from 'react';

const Footer = () => {
   return (
      <div className='pt-16 my-10 border md:px-3 px-4'>
         <h2 className='text-center font-bold text-4xl text-violet-600  py-3'>Blog Section</h2>
         <div className='py-4 px-3'>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded mb-4">
               <div className="collapse-title text-xl font-medium">
                  Focus me to see content
               </div>
               <div className="collapse-content">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet minima, voluptatum impedit asperiores quasi dicta accusantium possimus perspiciatis perferendis voluptates sit aperiam nam facilis voluptatem dolorem? Ullam aliquid consequuntur id!</p>
               </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded mb-4">
               <div className="collapse-title text-xl font-medium">
                  Focus me to see content
               </div>
               <div className="collapse-content">
                  <p>tabIndex={0} attribute is necessary to make the div focusable</p>
               </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded mb-4">
               <div className="collapse-title text-xl font-medium">
                  Focus me to see content
               </div>
               <div className="collapse-content">
                  <p>tabIndex={0} attribute is necessary to make the div focusable</p>
               </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded mb-4">
               <div className="collapse-title text-xl font-medium">
                  Focus me to see content
               </div>
               <div className="collapse-content">
                  <p>tabIndex={0} attribute is necessary to make the div focusable</p>
               </div>
            </div>
         </div>
         <p className='text-center font-light text-sm mb-2'>©Copyright | Dev-Hassan | All Right Reserved</p>
      </div>
   );
};

export default Footer;
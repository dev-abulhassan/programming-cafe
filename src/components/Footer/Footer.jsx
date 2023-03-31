import React from 'react';

const Footer = () => {
   return (
      <div className='pt-16 my-10 border md:px-3 px-4'>
         <h2 className='text-center font-bold text-4xl text-violet-600  py-3'>Blog Section</h2>
         <div className='py-4 px-3'>
            <div tabIndex={0} className="collapse collapse-arrow border border-violet-600  bg-base-100 rounded mb-4">
               <div className="collapse-title text-xl font-medium">
               what is the between props and state?
               </div>
               <div className="collapse-content">
                  <p><i><strong>props</strong></i> are used to pass data from a parent component to a child component, while state is used to manage data within a component itself. Props are read-only and cannot be modified by the child component, while state is mutable and can be changed by the component itself.</p>
               </div>
            </div>
            <div tabIndex={1} className="collapse collapse-arrow border border-violet-600 bg-base-100 rounded mb-4">
               <div className="collapse-title text-xl font-medium">
               How does work useState?
               </div>
               <div className="collapse-content">
                  <p><i><strong>useState</strong></i> is a built-in hook that allows functional components to have stateful behavior. It returns an array with two values: the current state and a function to update it. Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.</p>
               </div>
            </div>
            <div tabIndex={2} className="collapse collapse-arrow border border-violet-600 bg-base-100 rounded mb-4">
               <div className="collapse-title text-xl font-medium">
               What else can useEffect do without data load?
               </div>
               <div className="collapse-content">
                  <p><i><strong>useEffect</strong></i> hook in React is not limited to fetching data, but can also be used for managing the document title, event listeners, third-party libraries, animations, and timers.</p>
               </div>
            </div>
            <div tabIndex={3} className="collapse collapse-arrow border border-violet-600 bg-base-100 rounded mb-4">
               <div className="collapse-title text-xl font-medium">
               How Does React work?
               </div>
               <div className="collapse-content">
                  <p><strong>ReactJS</strong> is a JavaScript library that uses a virtual DOM to efficiently update the UI of a web application. It allows developers to create reusable components that manage their own state, and supports declarative programming through JSX syntax. React is commonly used for building single-page applications and user interfaces.</p>
               </div>
            </div>
         </div>
         <p className='text-center font-light text-sm mb-2'>©Copyright | Dev-Hassan | All Right Reserved</p>
      </div>
   );
};

export default Footer;
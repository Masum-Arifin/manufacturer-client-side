// import React from 'react';

// const Blog = () => {
//     return (
//         <div className='bg-gray-300'>
//             <h1 className="lg:text-4xl my-8 text-2xl font-bold text-center uppercase pt-9">question solving blogs here:</h1>



//            <div className='pb-11'>
//            <div class="stack flex justify-center items-center px-auto lg:px-12 m-10">
//                 <div class="card shadow-md bg-base-200 text-black-content">
//                     <div class="card-body">
//                         <h2 class="card-title">
//                         What is a unit test? Why should write unit tests?
//                         </h2>
//                         <p>
//                         Unit tests save time and money. Usually, we tend to test the happy path more than the unhappy path. If you release such an app without thorough testing, you would have to keep fixing issues raised by your potential users. The time to fix these issues could’ve been used to build new features or optimize the existing system. Bear in mind that fixing bugs without running tests could also introduce new bugs into the system.
//                         </p>
//                     </div>
//                 </div>
//             </div>
            
//            <div class="stack flex justify-center items-center px-auto lg:px-12 m-10">
//                 <div class="card shadow-md bg-base-200 text-black-content">
//                     <div class="card-body">
//                         <h2 class="card-title">
//                             What are the different ways to manage a state in a React
//                             application?
//                         </h2>
//                         <p>
//                             There are four main types of state you need to properly manage in
//                             your React apps:
//                             <ol>
//                                 <li>Local state.</li>
//                                 <li>Global state</li>
//                                 <li>Server state</li>
//                                 <li>URL</li>
//                             </ol>
//                             state.
//                         </p>
//                     </div>
//                 </div>
//             </div>

//             <div class="stack flex justify-center items-center px-auto lg:px-12 m-10">
//                 <div class="card shadow-md bg-base-200 text-black-content">
//                     <div class="card-body">
//                         <h2 class="card-title">
//                             How will you improve the performance of a React Application?
//                         </h2>
//                         <ol>
//                             <li>Keeping component state local where necessary.</li>
//                             <li>
//                                 Memoizing React components to prevent unnecessary re-renders.
//                             </li>
//                             <li>
//                                 Code-splitting in React using dynamic import() Windowing or list
//                                 virtualization in React.
//                             </li>
//                             <li>Lazy loading images in React.</li>
//                         </ol>
//                     </div>
//                 </div>
//             </div>

//             <div class="stack flex justify-center items-center px-auto lg:px-12 m-10">
//                 <div class="card shadow-md bg-base-200 text-black-content">
//                     <div class="card-body">
//                         <h2 class="card-title">How does prototypical inheritance work?</h2>
//                         <p>
//                             Every object with its methods and properties contains an internal
//                             and hidden property known as Prototype. The Prototypal Inheritance
//                             is a feature in javascript used to add methods and properties in
//                             objects. It is a method by which an object can inherit the
//                             properties and methods of another object. Traditionally, in order
//                             to get and set the Prototype of an object, we use
//                             Object.getPrototypeOf and Object.setPrototypeOf.
//                         </p>
//                     </div>
//                 </div>
//             </div>

//             <div class="stack flex justify-center items-center px-auto lg:px-12 m-10">
//                 <div class="card shadow-md bg-base-200 text-black-content">
//                     <div class="card-body">
//                         <h2 class="card-title">
//                             Why you do not set the state directly in React. For example, if
//                             you have const [products, setProducts] = useState([]). Why you do
//                             not set products = [...] instead, you use the setProducts
//                         </h2>
//                         <p>
//                             If you update it directly, calling the setState() afterward may
//                             just replace the update you made. When you directly update the
//                             state, it does not change this.state immediately. Instead, it
//                             creates a pending state transition, and accessing it after calling
//                             this method will only return the present value. You will lose
//                             control of the state across all components.
//                         </p>
//                     </div>
//                 </div>
//             </div>
//            </div>


//         </div>

//     );
// };

// export default Blog;
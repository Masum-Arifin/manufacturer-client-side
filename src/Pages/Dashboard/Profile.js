// import React from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import auth from '../../firebase.init';
// import randomUser from '../../images/favicon.png'

// const Profile = () => {
//     const [user] =useAuthState(auth)
 
//     return (
//         <div>
//             <p className='text-center font-mono font-bold text-2xl mb-4 text-secondary uppercase mt-14'>user Profile</p>
//             <div class="card w-96 bg-base-100 mx-auto border-2 shadow-2xl hover:bg-slate-300 duration-700">
//                 <figure><img className='rounded-full my-5 ' src={user.reloadUserInfo.photoUrl ? user.reloadUserInfo.photoUrl : randomUser} alt="Shoes" /></figure>
//                 <div class="card-body">
//                     <h2 class="card-title">Name: {user.displayName}</h2>
//                     <p >Email: {user.email}</p>
//                     <div class="card-actions justify-end">
//                         <button class="btn btn-outline btn-accent btn-sm">EDIT</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Profile;
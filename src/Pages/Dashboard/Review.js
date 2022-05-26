import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import reviewpic from '../../images/consultant.png'

const Review = () => {
    const [user] = useAuthState(auth);
    

    // handleAddProduct for database mongodb
    const handleReview = e =>{ 
        e.preventDefault()
        // toke value
        const name = user.displayName;  
        const body = e.target.review.value;
        const pic =user.reloadUserInfo.photoUrl 

        const review ={name,body,pic};
        // console.log(review);

        
        // send data to the server
        fetch('http://localhost:5000/review',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            console.log('success',data);
            e.target.reset();
        })
    }
    return (
        <div>
            <p className='text-2xl lg:text-left text-center text-primary font-thin pl-4 my-4 uppercase'>put your feedback here :</p>
            <div class="card lg:card-side bg-base-100 shadow-xl my-11 py-11">
            <figure><img className='w-9/12 ' src={reviewpic} alt="Album" /></figure>
            <div className="card-body mx-auto">
                 {/* form part */}
                 <form onSubmit={handleReview} className='text-center mx-auto my-auto  '>
                        
                        <input type="text"  value={user.displayName} className="font-bold input input-bordered input-info w-full max-w-xs mb-2" readOnly disabled name='username' /><br />
                        

                        <div className=' mb-2 rounded-3xl'>
                        <textarea  className='h-40 font-bold input input-bordered input-info w-full max-w-xs' placeholder='Your Feedback .....' name="review" ></textarea>
                        </div>

                        <input type="submit" className='btn w-full max-w-xs' value="SEND" />
                    </form>
               
            </div>
        </div>
        </div>
    );
};

export default Review;


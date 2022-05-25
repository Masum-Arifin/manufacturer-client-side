import React, { useEffect, useState } from "react";
import randomUser from "../../images/favicon.png";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://young-reaches-95412.herokuapp.com/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="">
      <p className="lg:text-4xl text-1xl font-mono uppercase text-center inline-block p-2 ml-4 rounded-lg text-white  shadow-stone-800 font-bold bg-primary">
        Customer Review
      </p>
      <div className="mx-auto grid lg:grid-cols-3 grid-cols-1 gap-8 my-11">
        {reviews.slice(-3).map((r) => (
          <div
            key={r._id}
            className="card w-96 bg-base-100 mx-auto hover:border-r-4 hover:border-t-4 duration-700"
          >
            <figure className="px-10 pt-10">
              <div className="avatar">
                <div className="w-24 rounded-full ring ring-purple-700 ring-offset-base-100 ring-offset-2">
                  <img src={r.pic ? r.pic : randomUser} alt="" />
                </div>
              </div>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{r.name}</h2>
              <p>{r.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;

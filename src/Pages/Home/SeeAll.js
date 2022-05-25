import React from "react";
import { useNavigate } from "react-router-dom";
import useParts from "../../hooks/useParts";

const SeeAll = () => {
  const [parts,] = useParts([]);
  
  const navigate = useNavigate();
  // ---------------------------------
  const navigateToBooking = (id) => {
    navigate(`/parts/${id}`);
  };
  return (
    <div>
      <p className="text-center text-2xl font-serif font-extrabold uppercase my-9">
        see all products of our company
      </p>
      {/* ..................... */}
      <div className="mx-auto grid lg:grid-cols-3 grid-cols-1 gap-8 my-24">
        {parts.map((part) => (
          <div
            key={part._id}
            className="card w-96 h-4/4 bg-base-100 hover:bg-gray-100 duration-700 mx-auto "
          >
            <img
              src={part.img}
              alt={part.name}
              className=" w-48 mx-auto my-auto hover:rotate-5 hover:scale-150 duration-700"
            />

            <div className=" items-center my-3 px-2 ">
              <h2 className="font-bold text-2xl text-center my-5 ">
                {part.name}
              </h2>

              <p className="text-left text-xl font-semibold">
                Price: {part.price} BDT (per piece)
              </p>
              <p className="text-left text-xl font-semibold">
                Minimum Order: {part.min}
              </p>
              <p className="text-left text-xl font-semibold">
                In-Stock: {part.available}
              </p>

              <p className="my-4 text-justify">
                {part.body.slice(0, 150)}{" "}
                <span onClick={part.body.slice(150, 600)}>..... See More</span>{" "}
              </p>

              <div className="text-center">
                <button
                  onClick={() => navigateToBooking(part._id)}
                  className="btn btn-primar"
                >
                  BOOKING
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeeAll;

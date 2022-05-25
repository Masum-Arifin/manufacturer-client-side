import React, { useEffect, useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";

const Booking = () => {
  const { id } = useParams();
  const [parts, setParts] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    fetch(`https://young-reaches-95412.herokuapp.com/parts/${id}`)
      .then((res) => res.json())
      .then((data) => setParts(data));
  }, [id]);

  // set price per product by her quantity
  const [price, setPrice] = useState([]);
  const quantityRef = useRef();
  const quantityKeyUp = (e) => {
    const quantity = quantityRef.current.value;
    if (parts.min <= quantity && parts.available >= quantity) {
      const money = parts.price;
      const newPrice = quantity * money;
      setPrice(newPrice);
    } else if (quantity == null) {
      setPrice(0);
    } else {
      setPrice(0);
      toast.error(
        `sir Minimum order ${parts.min} and Maximum ${parts.available} pic`
      );
    }
  };
  // handlleOrder for database mongodb
  const handleOrder = (e) => {
    e.preventDefault();
    // toke value
    const name = e.target.name.value;
    const username = e.target.username.value;
    const email = e.target.email.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;
    const phone = e.target.phone.value;
    const address = e.target.address.value;

    const orders = { name, username, email, price, quantity, phone, address };

    // send data to the server
    fetch("https://young-reaches-95412.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orders),
    })
      .then((res) => res.json())
      .then((data) => {
        e.target.reset();
      });
  };
  return (
    // <div className="hero min-h-screen bg-base-100">
    //   <div className="hero-content flex-col lg:flex-row">
    //     <img
    //       src={parts.img}
    //       className="w-100 rounded-ful shadow-2xl"
    //       alt={parts.img}
    //     />
    //     <div className="mx-auto">
    //       {/* form part */}
    //       <form onSubmit={handleOrder} className="text-center mx-auto">
    //         <input
    //           type="text"
    //           value={parts.name}
    //           className="font-bold input input-bordered input-info w-full max-w-xs mb-2"
    //           readOnly
    //           disabled
    //           name="name"
    //         />
    //         <br />
    //         <input
    //           type="text"
    //           value={user.displayName}
    //           className="font-bold input input-bordered input-info w-full max-w-xs mb-2"
    //           readOnly
    //           disabled
    //           name="username"
    //         />
    //         <br />
    //         <input
    //           type="email"
    //           value={user.email}
    //           className="font-bold input input-bordered input-info w-full max-w-xs mb-2"
    //           readOnly
    //           disabled
    //           name="email"
    //         />
    //         <br />

    //         <input
    //           type="number"
    //           className="font-bold input input-bordered input-info w-full max-w-xs mb-2"
    //           placeholder="Total 000 tk"
    //           name="price"
    //           value={price}
    //           readOnly
    //           disabled
    //           required
    //         />
    //         <br />

    //         <input
    //           onKeyUp={quantityKeyUp}
    //           ref={quantityRef}
    //           type="number"
    //           className="font-bold input input-bordered input-info w-full max-w-xs mb-2"
    //           placeholder="Quantity"
    //           name="quantity"
    //           required
    //         />
    //         <br />

    //         <input
    //           type="text"
    //           className="font-bold input input-bordered input-info w-full max-w-xs mb-2"
    //           placeholder="Phone Number"
    //           name="phone"
    //         />
    //         <br />

    //         <textarea
    //           className="font-bold input input-bordered input-info w-full max-w-xs"
    //           placeholder="Your Company Location"
    //           name="address"
    //           cols="30"
    //           rows="10"
    //         ></textarea>

    //         <input
    //           type="submit"
    //           className="btn w-full max-w-xs"
    //           value="CONFIRM"
    //         />
    //       </form>
    //     </div>
    //   </div>
    //   <ToastContainer />
    // </div>
  );
};

export default Booking;

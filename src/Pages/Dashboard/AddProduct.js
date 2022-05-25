import React from "react";
import addingpic from "../../images/clipboard-with-check-list.svg";

const AddProduct = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();
    // toke value
    const name = e.target.name.value;
    const price = parseInt(e.target.price.value);
    const min = parseInt(e.target.minimum.value);
    const available = parseInt(e.target.available.value);
    const img = e.target.photo.value;
    const body = e.target.description.value;

    const products = { name, price, min, available, img, body };
    console.log(products);

    // // send data to the server
    fetch("https://young-reaches-95412.herokuapp.com/parts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(products),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        e.target.reset();
      });
  };
  return (
    <div>
      <p className="text-2xl lg:text-left text-center text-primary font-bold pl-4 my-4 uppercase">
        update products :
      </p>
      {/* adding products section */}
      <div class="card lg:card-side bg-base-100 shadow-xl my-11 py-11">
        <figure>
          <img className="w-9/12 " src={addingpic} alt="Album" />
        </figure>
        <div className=" mx-auto">
          {/* form part */}
          <form
            onSubmit={handleAddProduct}
            className=" lg:mx-auto my-auto w-96 text-center "
          >
            <input
              type="text"
              className="font-bold input input-bordered input-info w-full max-w-xs mb-2"
              placeholder="Product Name"
              name="name"
            />
            <br />
            <input
              type="number"
              className="font-bold input input-bordered input-info w-full max-w-xs mb-2"
              placeholder="Product Price (per piece)"
              name="price"
            />
            <br />
            <input
              type="number"
              className="font-bold input input-bordered input-info w-full max-w-xs mb-2"
              placeholder="Minimum Order"
              name="minimum"
            />
            <br />
            <input
              type="number"
              className="font-bold input input-bordered input-info w-full max-w-xs mb-2"
              placeholder="In-Stock"
              name="available"
            />
            <br />
            <input
              type="text"
              className="font-bold input input-bordered input-info w-full max-w-xs mb-2"
              placeholder="Photo URL"
              name="photo"
            />
            <br />

            <div className=" mb-2 rounded-3xl">
              <textarea
                className="h-20 font-bold input input-bordered input-info w-full max-w-xs"
                placeholder="Products Description ......"
                name="description"
              ></textarea>
            </div>

            <input type="submit" className="btn w-full max-w-xs" value="SEND" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;

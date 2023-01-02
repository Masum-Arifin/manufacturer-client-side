import { useParams } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useQuery } from "react-query";
import Loading from "../Share/Loading/Loading";
import PaymentForm from "./PaymentForm";

const stripePromise = loadStripe(
  "pk_test_51L6RHLC4em7eWpm4QIwlEeHdN05IA9M3W3bMKSV8A5cymuHIw8s0d9u3478rCDGJUzDYq9GzU367esDmJiWh4xq700u3carhfR"
);
const Payment = () => {
  const { id } = useParams();
  const { data, isLoading } = useQuery("myOrders", async () => {
    const data = await fetch(`http://localhost:5000/orders/${id}`, {
      method: "GET",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    return data.json();
  });

  if (isLoading) {
    return (
      <div className="min-h-[75vh] grid place-content-center">
        <Loading />
      </div>
    );
  }

  return (
    <div className="font-montserrat">
      <div className="h-full">
        <div className="h-full lg:mt-32 w-full flex justify-center items-center">
          <div className="card w-96 lg:mr-20 bg-stone-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={data.img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{data.name}</h2>
              <div className="flex space-x-4">
                <p>Order Quantity:</p> <p>{data.orderQuantity}</p>
              </div>
              <div className="flex space-x-4">
                <p>Total Price:</p> <p>{data.totalPrice}</p>
              </div>
              <p>
                Please Pay
                <span className="text-teal-500">${data.totalPrice}</span> To
                Confirm The Order
              </p>
            </div>
          </div>

          <div className="card w-96 bg-amber-50 shadow-xl">
            <div className="card-body">
              <Elements stripe={stripePromise}>
                <PaymentForm order={data} />
              </Elements>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;

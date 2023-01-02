import { useEffect, useState } from "react";

const useOrder = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("https://manufacturer-server-side-self.vercel.app/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  return [orders, setOrders];
};
export default useOrder;

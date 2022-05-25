import { useEffect, useState } from "react";

const useOrder = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("https://young-reaches-95412.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  return [orders, setOrders];
};
export default useOrder;

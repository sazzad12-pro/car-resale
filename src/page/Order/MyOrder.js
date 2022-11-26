import React, { useContext } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../../Context/useContextApi";

const MyOrder = () => {
  const { user } = useContext(AuthContext);
  const { data: bookedItems = [], isLoading } = useQuery({
    queryKey: ["booked"],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.REACT_APP_url}/booked?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });
  return (
    <div>
      <h1>order{bookedItems.length}</h1>
    </div>
  );
};

export default MyOrder;

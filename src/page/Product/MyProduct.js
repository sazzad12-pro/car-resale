import React from "react";
import { useQuery } from "react-query";

const MyProduct = () => {
  const { data: bookedItems = [] } = useQuery({
    queryKey: ["myproduct"],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_url}/bookedItem`);
      const data = await res.json();
      return data;
    },
  });
  return (
    <div>
      <h1>{bookedItems.length}</h1>
    </div>
  );
};

export default MyProduct;

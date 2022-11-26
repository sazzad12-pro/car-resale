import React, { useContext } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../../Context/useContextApi";
import OrderItems from "./OrderItems";

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
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Order Item</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {bookedItems.map((order, i) => (
              <tr key={order._id}>
                <th>{i + 1}</th>
                <td> {order.userName}</td>

                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={order.img}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>{" "}
                  {order.name}
                </td>
                <td>Blue</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;

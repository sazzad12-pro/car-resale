import React, { useContext } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Loading from "../../component/Loading/Loading";
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
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Order Item</th>
              <th>PAY NOW</th>
            </tr>
          </thead>
          <tbody>
            {bookedItems &&
              bookedItems.map((order, i) => (
                <tr key={order._id}>
                  <th>{i + 1}</th>
                  <td> {order.userName}</td>

                  <td>
                    <div className="flex">
                      <div className="avatar ">
                        <div className="mask mask-squircle w-12 h-8">
                          <img
                            src={order.img}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>{order.name}</div>
                    </div>
                  </td>
                  <td>
                    <Link to={`/dashboard/payment/${order._id}`}>
                      <button className="btn btn-sm btn-primary">Pay</button>
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;

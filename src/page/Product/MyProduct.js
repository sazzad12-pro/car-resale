import React, { useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const MyProduct = () => {
  const { data: bookedItems = [], refetch } = useQuery({
    queryKey: ["myproduct"],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_url}/bookedItem`);
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
              <th>PAY NOW</th>
              <th>Ad</th>
            </tr>
          </thead>
          <tbody>
            {bookedItems.length &&
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
                    {order.price && !order.paid && (
                      <Link to={`/dashboard/payment/${order._id}`}>
                        <button className="btn btn-sm btn-primary">Sold</button>
                      </Link>
                    )}
                    {order.price && order.paid && (
                      <span className="text-green-500">Unsold</span>
                    )}
                  </td>
                  <td>
                    <button className="btn btn-sm btn-primary">
                      Advertice
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProduct;

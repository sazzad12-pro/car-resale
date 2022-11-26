import React from "react";

const OrderItems = ({ order }) => {
  const { userName, userEmail, userPhone, price, img } = order;
  return (
    <div>
      <h1 className="text-xl">{userName}</h1>
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
    </div>
  );
};

export default OrderItems;

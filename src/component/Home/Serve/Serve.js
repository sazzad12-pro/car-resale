import React from "react";
import { FaThumbsUp, FaCreditCard, FaGratipay } from "react-icons/fa";

const Serve = () => {
  const cards = [
    {
      id: 1,
      name: "Top Buy & Sell Car",
      describe:
        "Buy and sell the best and most trusted cars.we provide the best platform for you and easy to use",
      icon: <FaThumbsUp />,
    },
    {
      id: 2,
      name: "Easy Payment",
      describe:
        "Transactions are very easy ans safe,you can pay using anything. and the money will be received by us first",
      icon: <FaCreditCard />,
    },
    {
      id: 3,
      name: "Easy To Use",
      describe:
        "We will make it easier for you to use our platform and be able to sell or buy the car of your dreams",
      icon: <FaGratipay />,
    },
  ];
  return (
    <div className="mt-20">
      <div className="text-center">
        <h2 className="text-4xl font-semibold">What Our Serve For You</h2>
        <p className="py-4">
          We provide many of the best services for you and you will get the
          benefits here
        </p>
      </div>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        {cards.map((card) => (
          <div key={card.id} className="card  w-[360px] bg-base-200 shadow-xl">
            <div className="card-body">
              <span className="text-3xl">{card.icon}</span>
              <h2 className="card-title"> {card.name}</h2>
              <p>{card.describe} </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Serve;

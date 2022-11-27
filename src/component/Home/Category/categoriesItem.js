import React from "react";
import { Link } from "react-router-dom";

const CategoriesItem = ({ category }) => {
  const { _id, name, icon } = category;
  return (
    <Link to={`/category/${_id}`}>
      <div className="border h-14 px-4 lg:h-36  flex items-center lg:flex lg:items-center mx-3  hover:bg-purple-500 hover:text-white">
        <div>
          <div className="avatar">
            <div className="w-8 lg:w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img className="h-10 w-10" src={icon} alt="" />
            </div>
          </div>
        </div>
        <div className="ml-2 lg:ml-5">
          <h1 className="text-xl lg:text-4xl font-semibold">{name}</h1>
        </div>
      </div>
    </Link>
  );
};

export default CategoriesItem;

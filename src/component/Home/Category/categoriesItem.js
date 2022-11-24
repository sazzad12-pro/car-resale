import React from "react";
import { Link } from "react-router-dom";

const CategoriesItem = ({ category }) => {
  const { _id, name } = category;
  return (
    <div>
      <h1 className="text-4xl">
        <Link to={`/category/${_id}`}>
          {" "}
          <button>{name}</button>
        </Link>
      </h1>
    </div>
  );
};

export default CategoriesItem;

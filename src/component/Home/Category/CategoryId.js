import React from "react";
import { useLoaderData } from "react-router-dom";
import ShowCategory from "./ShowCategory";

const CategoryId = () => {
  const allCategories = useLoaderData();
  const items = allCategories.category;

  return (
    <div className="grid  grid-cols-1 lg:grid-cols-2">
      {items.map((item) => (
        <ShowCategory key={item.categoryId} item={item}></ShowCategory>
      ))}
    </div>
  );
};

export default CategoryId;

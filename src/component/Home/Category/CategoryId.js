import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "./BookingModal";
import ShowCategory from "./ShowCategory";

const CategoryId = () => {
  const allCategories = useLoaderData();
  const items = allCategories.category;
  const [category, setCategory] = useState(null);

  return (
    <div className="grid  grid-cols-1 lg:grid-cols-2">
      {items.map((item) => (
        <ShowCategory
          key={item.categoryId}
          item={item}
          setCategory={setCategory}
        ></ShowCategory>
      ))}
      {category && (
        <BookingModal
          category={category}
          setCategory={setCategory}
        ></BookingModal>
      )}
    </div>
  );
};

export default CategoryId;

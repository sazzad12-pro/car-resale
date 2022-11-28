import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "./BookingModal";
import ShowCategory from "./ShowCategory";

const CategoryId = () => {
  const allCategories = useLoaderData();
  const items = allCategories.category;
  const [category, setCategory] = useState(null);

  return (
    <div className="grid gap-4 mt-10 bg-base-200 p-10 lg:p-5  grid-cols-1 lg:gap-10 lg:grid-cols-3">
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

import React from "react";
import { useQuery } from "react-query";
import CategoriesItem from "./categoriesItem";

const Category = () => {
  const { data: categories = [] } = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_url}/category`);
      const data = await res.json();
      return data;
    },
  });
  return (
    <div className="my-10">
      <div className="text-center">
        <div>
          <h1 className="4xl">Let's Find Your Dream Car</h1>
          <p className="py-6">
            We recommend very best reuse and almost newest cars today. and also
            a friendly price for you
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 w-[80%] mx-auto">
        {categories.map((category) => (
          <CategoriesItem
            key={category._id}
            category={category}
          ></CategoriesItem>
        ))}
      </div>
    </div>
  );
};

export default Category;

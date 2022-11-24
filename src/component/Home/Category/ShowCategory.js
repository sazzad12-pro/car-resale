import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const ShowCategory = ({ item }) => {
  const { name, img, location, reprice, orprice, year, seller } = item;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="h-[300px]" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="text-xl my-3">
            <strong>Seller</strong>:{seller}
          </h2>
          <h2 className="card-title mb-3">{name}</h2>
          <h2 className="text-xl font-mono">Original Price:{orprice}</h2>
          <h2 className="text-xl font-mono">Asking Price:{reprice}</h2>
          <div className="card-actions justify-between">
            <div>
              <p>
                {location}
                <FaMapMarkerAlt />
              </p>
            </div>
            <p>{year}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCategory;
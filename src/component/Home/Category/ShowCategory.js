import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const ShowCategory = ({ item, setCategory }) => {
  const { name, img, location, reprice, orprice, year, seller } = item;
  return (
    <div>
      <div className="card w-[340px]    bg-base-100 shadow-xl">
        <figure>
          <img className="h-[300px]" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="text-xl font-bold my-3">Seller:{seller}</h2>
          <h2 className="card-title mb-3">{name}</h2>
          <h2 className="text-xl font-mono">Original Price:{orprice}</h2>
          <h2 className="text-xl font-mono">Asking Price:{reprice}</h2>
          <div className="card-actions flex justify-between my-2">
            <div>
              <h3 className="text-xs">
                <FaMapMarkerAlt />
                {location}
              </h3>
            </div>
            <div>
              <p>{year}</p>
            </div>
          </div>
          <div>
            <label
              onClick={() => setCategory(item)}
              htmlFor="book-modal"
              className="btn btn-primary w-full"
            >
              Booked now
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCategory;

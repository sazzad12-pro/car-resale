import React, { useContext } from "react";
import { AuthContext } from "../../../Context/useContextApi";

const BookingModal = ({ category }) => {
  const { user } = useContext(AuthContext);
  const { name, location, reprice, orprice, year, seller } = category;
  return (
    <div>
      <input type="checkbox" id="book-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="book-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Congratulations {name} </h3>
          <form>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              defaultValue={user?.displayName}
              readOnly
            />
            <br />
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              defaultValue={user?.email}
              readOnly
            />
            <br />
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              defaultValue={location}
              readOnly
            />
            <br />
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              defaultValue={reprice}
              readOnly
            />
            <br />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;

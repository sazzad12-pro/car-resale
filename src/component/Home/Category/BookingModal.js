import React, { useContext } from "react";
import { AuthContext } from "../../../Context/useContextApi";

const BookingModal = ({ category }) => {
  const { user } = useContext(AuthContext);
  const { name } = category;
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
          <form></form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;

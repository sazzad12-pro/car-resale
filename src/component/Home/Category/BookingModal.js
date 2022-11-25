import React, { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../../Context/useContextApi";

const BookingModal = ({ category, setCategory }) => {
  const { user } = useContext(AuthContext);
  const { name, location, reprice, orprice, year, seller } = category;

  const handleBook = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const location = form.location.value;
    const phone = form.phone.value;
    const price = form.price.value;

    const bookCategory = {
      userName: name,
      userEmail: email,
      userLocation: location,
      userPhone: phone,
      price,
    };
    fetch(`${process.env.REACT_APP_url}/category`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookCategory),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setCategory(null);
          toast.success("booked");
        }
      });
  };

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
          <h3 className="text-lg font-bold">{name} </h3>
          <form onSubmit={handleBook} className="text-center">
            <input
              type="text"
              name="name"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs mt-4"
              defaultValue={user?.displayName}
              readOnly
            />
            <br />
            <input
              type="text"
              name="email"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs mt-5"
              defaultValue={user?.email}
              readOnly
            />

            <br />
            <input
              type="text"
              name="price"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs mt-5"
              defaultValue={reprice}
              readOnly
            />
            <br />
            <input
              type="text"
              name="phone"
              placeholder="Enter your phone number"
              className="input input-bordered w-full max-w-xs mt-5"
            />
            <br />

            <input
              type="text"
              name="location"
              placeholder="Enter your location"
              className="input input-bordered w-full max-w-xs mt-5"
            />
            <br />
            <input
              type="submit"
              value="submit"
              className="input input-bordered w-full max-w-xs mt-5"
            />
            <br />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;

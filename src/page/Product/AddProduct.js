import React from "react";

const AddProduct = () => {
  const handleBuyerInfo = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.productName.value;
    const reprice = form.reprice.value;
    const orprice = form.orprice.value;
    const location = form.location.value;
    const year = form.year.value;
    const condition = form.condition.value;
    const category = form.category.value;

    const info = {
      name,
      reprice,
      orprice,
      location,
      year,
      condition,
    };
    fetch(`${process.env.REACT_APP_url}/product?name=${category}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <h1>Add a product</h1>
      <div className="text-center">
        <form onSubmit={handleBuyerInfo}>
          <input
            type="text"
            placeholder="Enter your product Name"
            name="productName"
            className="input input-bordered input-primary w-full max-w-xs mt-4"
          />
          <br />
          <input
            type="text"
            placeholder="Enter your Resale price"
            name="reprice"
            className="input input-bordered input-primary w-full max-w-xs mt-4"
          />
          <br />
          <input
            type="text"
            placeholder="Enter your Original price"
            name="orprice"
            className="input input-bordered input-primary w-full max-w-xs mt-4"
          />
          <br />

          <input
            type="text"
            placeholder="Enter your product Location"
            name="location"
            className="input input-bordered input-primary w-full max-w-xs mt-4"
          />
          <br />
          <input
            type="text"
            placeholder="Year of purchase"
            name="year"
            className="input input-bordered input-primary w-full max-w-xs mt-4"
          />
          <br />
          <input
            type="file"
            name="img"
            className="input input-bordered input-primary w-full max-w-xs mt-4"
          />
          <br />
          <select
            name="condition"
            className="select select-primary select-bordered w-full max-w-xs mt-4"
          >
            <option disabled selected>
              Condition type
            </option>
            <option>Excellent</option>
            <option>Good</option>
            <option>Fair</option>
          </select>
          <br />
          <select
            name="category"
            className="select select-primary select-bordered w-full max-w-xs mt-4"
          >
            <option disabled selected>
              Product Category
            </option>
            <option>Microbus</option>
            <option>Luxury car</option>
            <option>Electric car</option>
          </select>
          <br />
          <textarea
            name="describe"
            className="textarea w-full max-w-xs textarea-primary mt-4"
            placeholder="describe"
          ></textarea>
          <br />
          <input
            type="submit"
            value="Submit"
            className="btn btn-primary w-full max-w-xs"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;

import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const imgHostKey = process.env.REACT_APP_imgbb;

  const handleAddProduct = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const info = {
            name: data.name,
            img: imgData.data.url,
            reprice: data.reprice,
            orprice: data.orprice,
            location: data.location,
            year: data.year,
            condition: data.condition,
            describe: data.describe,
            category: data.category,
          };
          fetch(`${process.env.REACT_APP_url}/product?name=${data.category}`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(info),
          })
            .then((res) => res.json())
            .then((result) => {
              toast.success("product add");
              navigate("/");
            });
        }
      });
  };

  return (
    <div>
      <h1>Add a product</h1>
      <div className="w-[50%] mx-auto">
        <form onSubmit={handleSubmit(handleAddProduct)}>
          <div className="form-control w-full max-w-x">
            <input
              type="text"
              {...register("name", {
                require: "name is required",
              })}
              className="input input-bordered input-primary w-full max-w-xs mt-4"
              placeholder="Enter your Name"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>

          <br />
          <div className="form-control w-full max-w-x">
            {" "}
            <input
              type="text"
              {...register("reprice", {
                require: "Price is require",
              })}
              className="input input-bordered input-primary w-full max-w-xs mt-4"
              placeholder="Enter your sell price"
            />
            {errors.reprice && (
              <p className="text-red-500">{errors.reprice.message}</p>
            )}
          </div>

          <br />
          <div className="form-control w-full max-w-x">
            {" "}
            <input
              type="text"
              {...register("orprice", {
                require: "Price is require",
              })}
              className="input input-bordered input-primary w-full max-w-xs mt-4"
              placeholder="Enter Your Original Price"
            />
            {errors.orprice && (
              <p className="text-red-500">{errors.orprice.message}</p>
            )}
          </div>

          <br />
          <div className="form-control w-full max-w-x">
            <input
              type="text"
              {...register("location", {
                require: "Price is require",
              })}
              className="input input-bordered input-primary w-full max-w-xs mt-4"
              placeholder="Enter your location"
            />
            {errors.location && (
              <p className="text-red-500">{errors.location.message}</p>
            )}
          </div>

          <br />
          <div className="form-control w-full max-w-x">
            {" "}
            <input
              type="text"
              {...register("year", {
                require: "Price is require",
              })}
              className="input input-bordered input-primary w-full max-w-xs mt-4"
              placeholder="how many day use "
            />
            {errors.year && (
              <p className="text-red-500">{errors.year.message}</p>
            )}
          </div>

          <br />
          <div className="form-control w-full max-w-x">
            {" "}
            <input
              type="file"
              {...register("image", {
                require: "Image is require",
              })}
              className="input input-bordered input-primary w-full max-w-xs mt-4"
            />
            {errors.image && (
              <p className="text-red-500">{errors.image.message}</p>
            )}
          </div>

          <br />
          <div className="form-control w-full max-w-x">
            {" "}
            <select
              {...register("condition", {
                require: "Condition is require",
              })}
              className="select select-primary select-bordered w-full max-w-xs mt-4"
            >
              <option disabled selected>
                Condition type
              </option>
              <option>Excellent</option>
              <option>Good</option>
              <option>Fair</option>
            </select>
            {errors.condition && (
              <p className="text-red-500">{errors.condition.message}</p>
            )}
          </div>

          <br />
          <div className="form-control w-full max-w-x">
            {" "}
            <select
              {...register("category", {
                require: "Category is require",
              })}
              className="select select-primary select-bordered w-full max-w-xs mt-4"
            >
              <option disabled selected>
                Product Category
              </option>
              <option>Microbus</option>
              <option>Luxury car</option>
              <option>Electric car</option>
            </select>
            {errors.category && (
              <p className="text-red-500">{errors.category.message}</p>
            )}
          </div>

          <br />
          <div className="form-control w-full  text-center">
            {" "}
            <textarea
              {...register("describe", {
                require: "Describe is require",
              })}
              className="textarea w-full max-w-xs textarea-primary mt-4"
              placeholder="describe"
            ></textarea>
            {errors.describe && (
              <p className="text-red-500">{errors.describe.message}</p>
            )}
          </div>

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

import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../Context/useContextApi";

const Register = () => {
  const { googleSingUp, createUser, updateName } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleGoogle = () => {
    googleSingUp()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => console.error(err));
  };
  const handleCreateUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;

    const customer = form.customer.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        const userInfo = { displayName: name };
        updateName(userInfo)
          .then(() => {
            userDetail(name, email, customer);
          })
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  };

  const userDetail = (name, email, role) => {
    const users = { name, email, role };
    fetch(`${process.env.REACT_APP_url}/user`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(users),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("data success");
          navigate("/");
        }
      });
  };

  return (
    <div>
      <div className="flex justify-center mt-10">
        <div className="w-[385px] h-[580px] shadow-2xl ">
          <h1 className="text-xl text-accent text-center mt-4">Register</h1>
          <div className="mx-7 mt-5">
            <form onSubmit={handleCreateUser}>
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                <span className="label-text">If You seller or buyer </span>
              </label>
              <select
                className="select select-bordered w-full max-w-xs"
                name="customer"
                required
              >
                <option>Seller</option>
                <option>Buyer</option>
              </select>
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter Your password"
                className="input input-bordered w-full max-w-xs"
              />

              <input
                type="submit"
                className="btn btn-primary input input-bordered w-full max-w-xs mt-6"
                value="Login"
              />
            </form>
            <h1 className="text-sm font-semibold mt-4 mx-10">
              Already Have Account?
              <Link to="/login">
                <span className="text-primary">Login</span>
              </Link>
            </h1>
            <div className="mt-7">
              <div className="flex items-center">
                <div className="w-1/2 h-0.5 bg-accent mr-2"></div>
                <h2>OR</h2>
                <div className="w-1/2 h-0.5 bg-accent ml-2"></div>
              </div>
              <div className="mt-4">
                <input
                  onClick={handleGoogle}
                  className="btn   input-bordered w-full"
                  type="button"
                  value="COUNTINIO WITH GOOGLE"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

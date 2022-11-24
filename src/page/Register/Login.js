import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/useContextApi";

const Login = () => {
  const { googleSingUp } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  // handle toggle
  const toggle = () => {
    setOpen(!open);
  };
  const handleGoogle = () => {
    googleSingUp()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <div className="flex justify-center mt-10">
        <div className="w-[385px] h-[520px] shadow-2xl ">
          <h1 className="text-xl text-accent text-center mt-4">Login</h1>
          <div className="mx-7 mt-5">
            <form>
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className=" relative ">
                <div className="w-full">
                  <input
                    type={open === false ? "password" : "text"}
                    name="password"
                    placeholder="Enter your password"
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>

                <div className="text-2xl absolute top-4 right-5">
                  {open === false ? (
                    <FaEyeSlash onClick={toggle} />
                  ) : (
                    <FaEye onClick={toggle} />
                  )}
                </div>
              </div>

              <label className="label">
                <span className="label-text">Forget Password</span>
              </label>
              <input
                type="submit"
                className="btn btn-primary  input input-bordered w-full max-w-xs mt-6"
                value="Login"
              />
            </form>
            <h1 className="text-sm font-semibold mt-4 mx-10">
              New to Doctors Portal?
              <Link to="/register">
                {" "}
                <span className="text-primary">Create One</span>
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

export default Login;
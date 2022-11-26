import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/useContextApi";
import useAdmin from "../../hook/useAdmin";
import useBuyer from "../../hook/useBuyer";
import useSeller from "../../hook/useSeller";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isSeller] = useSeller(user?.email);
  const [isBuyer] = useBuyer(user?.email);
  const [isAdmin] = useAdmin(user?.email);

  const userLogOut = () => {
    logOut()
      .then(() => {
        //
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <div className="navbar bg-base-200">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                {user ? (
                  <Link>sing out</Link>
                ) : (
                  <Link to="/login">Sing Up</Link>
                )}
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal p-0 ">
            <li>
              {user ? (
                <Link onClick={userLogOut}>sing out</Link>
              ) : (
                <Link to="/login">Sing Up</Link>
              )}
              {isSeller && (
                <>
                  <Link to="/product">Add Product</Link>
                  <Link to="/myProduct">My Product</Link>
                </>
              )}
              {isBuyer && (
                <>
                  <Link to="/orders">My Order</Link>
                </>
              )}
              {isAdmin && (
                <>
                  <Link>Buyer</Link>
                  <Link>seller</Link>
                </>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

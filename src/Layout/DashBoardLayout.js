import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Context/useContextApi";
import useAdmin from "../hook/useAdmin";
import useBuyer from "../hook/useBuyer";
import useSeller from "../hook/useSeller";
import Navbar from "../page/Shared/Navbar";

const DashBoardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isBuyer] = useBuyer(user?.email);
  const [isSeller] = useSeller(user?.email);
  const [isAdmin] = useAdmin(user?.email);
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-200 text-base-content">
            {isBuyer && (
              <li>
                <Link to="/orders">My Order</Link>
              </li>
            )}
            {isSeller && (
              <li>
                <>
                  <Link to="/product">Add Product</Link>
                  <Link to="/myProduct">My Product</Link>
                </>
              </li>
            )}
            {isAdmin && (
              <li>
                <>
                  <Link to="/dashboard/allUser">ALl User</Link>
                </>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;

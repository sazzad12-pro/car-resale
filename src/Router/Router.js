import { createBrowserRouter } from "react-router-dom";
import Blog from "../component/Blog/Blog";

import CategoryId from "../component/Home/Category/CategoryId";
import Home from "../component/Home/Home";
import DashBoardLayout from "../Layout/DashBoardLayout";
import Main from "../Layout/Main";
import AllUser from "../page/Dashboard/AllUser";
import Payment from "../page/Dashboard/Payment/Payment";

import MyOrder from "../page/Order/MyOrder";
import AddProduct from "../page/Product/AddProduct";
import MyProduct from "../page/Product/MyProduct";

import Login from "../page/Register/Login";
import Register from "../page/Register/Register";
import PrivateRouter from "./PrivateRouter";

export const router = createBrowserRouter([
  {
    path: "/",

    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/category/:id",
        element: (
          <PrivateRouter>
            <CategoryId></CategoryId>
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`${process.env.REACT_APP_url}/category/${params.id}`),
      },
      {
        path: "/orders",
        element: <MyOrder></MyOrder>,
      },
      {
        path: "/product",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/myProduct",
        element: <MyProduct></MyProduct>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRouter>
        <DashBoardLayout></DashBoardLayout>
      </PrivateRouter>
    ),
    children: [
      {
        path: "/dashboard/allUser",
        element: <AllUser></AllUser>,
      },
      {
        path: "/dashboard/payment/:id",
        element: <Payment></Payment>,
        loader: ({ params }) =>
          fetch(`${process.env.REACT_APP_url}/booked/${params.id}`),
      },
    ],
  },
]);

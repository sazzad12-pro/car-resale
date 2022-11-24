import { createBrowserRouter } from "react-router-dom";
import CategoryId from "../component/Home/Category/CategoryId";
import Home from "../component/Home/Home";
import Main from "../Layout/Main";
import Login from "../page/Register/Login";
import Register from "../page/Register/Register";

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
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/category/:id",
        element: <CategoryId></CategoryId>,
        loader: ({ params }) =>
          fetch(`${process.env.REACT_APP_url}/category/${params.id}`),
      },
    ],
  },
]);

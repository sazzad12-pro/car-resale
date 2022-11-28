import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../component/Loading/Loading";
import { AuthContext } from "../Context/useContextApi";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Loading></Loading>;
  }

  if (user) {
    return children;
  }
  return (
    <Navigate to="/login" state={{ form: location }} replace>
      {" "}
    </Navigate>
  );
};

export default PrivateRouter;

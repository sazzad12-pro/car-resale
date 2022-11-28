import React, { useContext } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../../../Context/useContextApi";

const AddVertice = () => {
  const { user } = useContext(AuthContext);
  const { data: ads = [] } = useQuery({
    queryKey: ["ad"],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.REACT_APP_url}?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });
  return <div></div>;
};

export default AddVertice;

import React from "react";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Serve from "./Serve/Serve";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Serve></Serve>
      <Category></Category>
    </div>
  );
};

export default Home;

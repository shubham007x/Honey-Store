import React from "react";
import { useSelector } from "react-redux";

const Homepage = () => {
  const store = useSelector((state) => state.products);
  console.log(store);
  return <div>Homepage</div>;
};

export default Homepage;

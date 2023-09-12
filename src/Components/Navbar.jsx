import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to={"/"}>Homepage </Link>
          <Link to={"/product"}>Product </Link>
          <Link to={"/product/:id"}>Product-Details </Link>
          <Link to={"/cart"}>CartPage </Link>
          <Link to={"/payment"}>Payment </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

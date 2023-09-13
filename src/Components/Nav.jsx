import React from "react";
import style from "../Styles/nav.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  return (
    <div className="navbar">
      <div>
        <Link to={"/"} style={{ textDecoration: "none", color: "#185e49" }}>
          <h2>LET IT BEE.CO</h2>
        </Link>
      </div>
      <div className="navbar_element">
        <div className="navbar_icon1">
          <Link to={"/product"}>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              size="2xl"
              style={{ color: "#185e49" }}
            />
          </Link>
        </div>
        <div className="navbar_icon2">
          <Link to={"/login"}>
            <FontAwesomeIcon
              icon={faUser}
              size="2xl"
              style={{ color: "#185e49" }}
            />
          </Link>
        </div>
        <div className="navbar_icon3">
          <Link to={"/cart"}>
            <FontAwesomeIcon
              icon={faCartShopping}
              size="2xl"
              style={{ color: "#185e49" }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;

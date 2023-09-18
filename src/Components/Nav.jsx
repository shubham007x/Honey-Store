import React, { useContext } from "react";
import style from "../Styles/nav.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { AuthContext } from "../Context/AuthContextProvider";
import { logout } from "../Redux/Action";

const Nav = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { nameLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(nameLogin);

  return (
    <div className="navbar">
      <Link to={"/"} style={{ textDecoration: "none", color: "#185e49" }}>
        <div>
          <h2>LET IT BEE.CO</h2>
        </div>
      </Link>
      <div className="navbar_element">
        <Link to={"/product"}>
          <div className="navbar_icon1">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              size="2xl"
              style={{ color: "#185e49" }}
            />
          </div>
        </Link>
        <Link to={"/login"}>
          <div className="navbar_icon2">
            <FontAwesomeIcon
              icon={faUser}
              size="2xl"
              style={{ color: "#185e49" }}
            />
          </div>
        </Link>
        <Link to={"/cart"}>
          <div
            className="navbar_icon3"
            style={{ display: "flex", position: "relative" }}
          >
            <FontAwesomeIcon
              icon={faCartShopping}
              size="2xl"
              style={{ color: "#185e49" }}
            />

            <span
              style={{
                borderRadius: "50%",
                height: "1.4rem",
                width: "1.4rem",
                color: "#FFFF",
                position: "absolute",
                left: "60%",
              }}
            >
              {cart.length}
            </span>
          </div>
        </Link>
        <p>
          {nameLogin}{" "}
          <button
            onClick={() => {
              dispatch(logout);
              navigate("/login");
            }}
          >
            LOGOUT
          </button>
        </p>
      </div>
    </div>
  );
};

export default Nav;

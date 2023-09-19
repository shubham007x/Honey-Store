import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { emptyCart } from "../Redux/Action";

const Payment = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(emptyCart);
      navigate("/");
    }, 5000);
  }, []);
  return (
    <div>
      <br></br>
      <h1 style={{ fontFamily: "cursive", color: "#185e49", margin: "20rem" }}>
        Payment Successful.... Redirecting in 5 sec
      </h1>
    </div>
  );
};

export default Payment;

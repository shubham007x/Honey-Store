import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../Pages/Homepage";
import Product from "../Pages/Product";
import ProductDetail from "../Pages/ProductDetail";
import Cart from "../Pages/Cart";
import Payment from "../Pages/Payment";
import Login from "../Pages/Login";
import PrivateRoute from "./PrivateRoute";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
        <Route path="/payment" element={<Payment />} />
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;

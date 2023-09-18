import React from "react";
import Styles from "../Styles/cartpage.css";
import { useDispatch, useSelector } from "react-redux";
import { removeCart } from "../Redux/Action";
const Items = ({ item, index }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cart);
  const { price, image, title } = item;

  const handleRemove = () => {
    data.splice(index, 1);
    dispatch(removeCart(data));
  };
  return (
    <>
      <div style={{ height: "9rem" }}>
        <div className="items_cart">
          <img src={image}></img>
          <h4>{title}</h4>
          <p>Rs.{price}</p>
          <button
            style={{
              backgroundColor: "#185e49",
              border: "none",
              color: "#FFFF",
              cursor: "pointer",
            }}
            onClick={handleRemove}
          >
            Remove
          </button>
        </div>
      </div>
      <hr style={{ border: "0.1px solid white", width: "90%" }}></hr>
    </>
  );
};

export default Items;

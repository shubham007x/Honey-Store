import React from "react";
import Styles from "../Styles/cartpage.css";
const Items = ({ item }) => {
  const { price, image, title } = item;
  console.log(item);
  const handleRemove = () => {
    alert("remove");
  };
  return (
    <div>
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
          {" "}
          Remove
        </button>
      </div>
      <hr style={{ border: "0.1px solid white", width: "90%" }}></hr>
    </div>
  );
};

export default Items;

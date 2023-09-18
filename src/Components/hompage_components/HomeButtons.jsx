import React from "react";
import Styles from "../../Styles/homepage.css";

const HomeButtons = ({ name, handleButton }) => {
  return (
    <button className="home_buttons" onClick={handleButton}>
      {name}
    </button>
  );
};

export default HomeButtons;

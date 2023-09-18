import React from "react";
import sample from "./g.mp4";
import Styles from "../../Styles/homepage.css";
import { Link } from "react-router-dom";
const TopSection = () => {
  return (
    <div className="homepage_main">
      <Link to={"/product"}>
        <div className="video_main">
          <video className="video_play" autoPlay loop muted id="video">
            <source src={sample} type="video/mp4" />
          </video>
        </div>
      </Link>

      <p
        className="quote"
        style={{ color: "#000000", backgroundColor: "#F05A1F" }}
      >
        <marquee>
          UNIQUE TASTE,UNIQUE AROMA OF RAW HONEY AND ORGANIC
          PRODUCTS:GRANOLA,HONEY BARS AND DESERTS,HERBAL TEA FROM POLAND
        </marquee>
      </p>
    </div>
  );
};

export default TopSection;

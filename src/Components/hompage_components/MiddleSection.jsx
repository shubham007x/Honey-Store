import React from "react";
import Styles from "../../Styles/homepage.css";
import HomeButtons from "./HomeButtons";
const MiddleSection = () => {
  return (
    <div>
      {" "}
      <div className="middle_section">
        <div className="section_1">
          <div className="middle_1">
            <h2>
              ABOUT THE REGION OF HONEY :
              <span> WARMIAN -MASURIAN VOIVODESHIP</span>
            </h2>
            <p style={{ fontSize: "large", color: "black" }}>
              OUR IDEA TO DISCOVER NATURAL,VALUABLE PRODUCTS AND HELP IT REACH A
              WIDER RANGE OF GOURMETS
            </p>
          </div>
          <div className="middle_2">
            <div>
              <p
                style={{
                  fontFamily: "cursive",
                  fontSize: "medium",
                  color: "black",
                }}
              >
                Honey and organic products that you will find in our store come
                from the Warmian-Masurian Voivodeship - one of the cleanest
                regions in Poland.
                <br></br>
                <br></br>It is thanks to this that they are distinguished by
                their unique taste and aroma, as well as invaluable healing
                properties. We offer you a wide range of nectar and honeydew
                honey - here you will find both your favorite types and types
                that are hard to find on the regular market.
                <br></br>
                <br></br>
                Our priority is to provide products of the highest quality,
                which in our understanding means, first of all, naturalness and
                respect for nature and its inhabitants
              </p>
            </div>
            <div>
              <img src="https://i.ibb.co/z22z6k8/img1.png"></img>
            </div>
          </div>
          <br></br>
          <div className="middle_3">
            <div>
              <HomeButtons name={"LEARN MORE"} />{" "}
            </div>
            <div style={{ width: "100%" }}>
              <hr style={{ border: "0.1px solid black", width: "70%" }}></hr>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <h2>WHY CHOOSE US?</h2>
        <div className="section_2">
          <div className="item">
            <img src="https://i.ibb.co/L92btY0/i1.png"></img>
            <h4>ALL PRODUCTS ARE ORGANIC</h4>
            <p>All products are produced in a small private apiary</p>
          </div>
          <div className="item">
            <img src="https://i.ibb.co/WstjXn6/i2.png"></img>
            <h4>100% NATURAL RAW HONEY</h4>
            <p>Harvested and packed in the Poland</p>
          </div>
          <div className="item">
            <img src="https://i.ibb.co/YtD9F0v/i3.png"></img>
            <h4>ECOLOGICAL BEEKEEPING</h4>
            <p>Encourage organic ways of sustainable beekeeping</p>
          </div>
          <div className="item">
            <img src="https://i.ibb.co/Tc0nk05/i4.png"></img>
            <h4>HOME FOR BEES</h4>
            <p>Providing homes for our splendid pollinators</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleSection;

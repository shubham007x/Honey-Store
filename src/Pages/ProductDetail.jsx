import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "../Styles/Product.css"
import { getSingleRestaurant } from "../Redux/Action";

const ProductDetail = () => {
const dispatch=useDispatch();
const[add,setAdd]=useState(1);
const single=useSelector(state=>state.single);
console.log(single);
  const { id }=useParams();
  console.log(id);
  useEffect(()=>{
   dispatch(getSingleRestaurant(id));
  },[id]);
  const str=single.title;
  return <div className="BigCard">

    <div className="singleCard">
      <div className="ImageD">
        <img src={single.image} alt="images"/>
      </div>
        
      <div className="detail">
      <h3>HOME/PRODUCTS/<span>{single.title}</span></h3>
      <h1>LET IT BEE.CO/HONEY</h1>
      <h1>{str}</h1>
      <hr />
      <div className="price">
        <h3>Price: <span>₹{single.price}</span></h3>
        <h3>Rating: ⭐<span>{single.rating}</span></h3>
        </div><hr/>
        <p>This well loved honey by honey fans is found around in the world in an infinite number of flowers. It can be a mild,rich honey from a combination of spring,summer and flat flowers.
        <br/>
        <br/>
        Windflower honey rich antioxidants works well in terms and drizzled over tea cakes and fresh seasonal fruits.
        </p>
        <div className="cartingM">
        <div className="carting">
            <button disabled={add===1} onClick={()=>setAdd(add-1)}>-</button>
            <button>{add}</button>
            <button onClick={()=>setAdd(add+1)}>+</button>
        </div>
        <button>ADD TO CART</button>
        </div>
      </div>
    </div>
     <div className="about">
     <div className="ImageA">
        <img src="https://pixelz.cc/wp-content/uploads/2018/08/honey-uhd-4k-wallpaper.jpg" alt="images"/>
      </div>
      <div className="in">
       <h2>ABOUT THE PRODUCT</h2>
       <hr />
       <p>INGRIDIENTS<span>→</span></p>
       <hr />
       <p>USES<span>↘</span></p>
       <div className="para">
       <p>  Windflower honey rich antioxidants works well in terms and drizzled over tea cakes and fresh seasonal fruits.
        </p>
       </div>
       <hr/>
       <p>SIZE OF PACKING<span>→</span></p>
       <hr/>
       <p>STORAGE<span>→</span></p>
       <hr/>
       <p>USES<span>↘</span></p>
       <div className="para">
       <h3>ALEXANDER FELIX</h3>
       <p> Fantastic dining experience! Exceptional service, delectable cuisine, and a cozy ambiance. A must-visit for food enthusiasts. Can't wait to return
        </p>
        <br/>
        <h3>MARK ZUKERBERG</h3>
        <p>Fantastic dining experience! Exceptional service, delectable cuisine, and a cozy ambiance. A must-visit for food enthusiasts. Can't wait to return</p>
       </div>
       <hr/>
      </div>
     </div>
     <div className="finalImg">
    <img src="https://lh3.googleusercontent.com/pw/AIL4fc-bJB47UxociSeeeSaAvjB-kPPwAiMI26JM67bDt_DTzafHXvYoeu5ZGeb7VTvUz6OA72QlSWZs9xsZnLkkdYUM7qWo19OO2BoWU7XkzQmuNWD2-WxCFYjVfosDEvCWYxJdoE9JPbxeWFBVZtGUzQoI-8FSiDZ_MNpjwFjX0iIJE3Vw-YualLFa6SPzIQlNDZyKa9HfU6-uQmX5Al6L9UEp7vPnZ7eHam7hVzcBzVJD0pdL6lizDWsFuPZxrCDvxvkaO8swF7dN6w9MU3RX3jK26iVJltvmekArl8SPqrKALtVRenYZEFNG--c-PwxbBy9_HzZidTyxb09XitXRFOXw6J7AXlDpEvh31qYHBRddOWAg1RRk0mjhZojMG2PFc872iPeNgdreHTBdhL-e5e0xlFDPd8NJgBI1b9GpkcZ0J4w8C1J-mJsJGI5fZ9WOFGLqwNEGORXpNp9QyoY1xF4F8UYzj-HTOkj7LKgz3CEhF8y0R2kNsvyV0GhVy8jMtWhSm7GUBkM2QzBM7bJn50dDabgft2Ssaqe1_SzqWlpT9s9ddbuxUJiNSk6TdKCjAySvbHIcbfhz1pL37DbsM6ugcWfEBV2LSMUSpPHAN3AYBSMpCj3xnYL39URdaN9TDGL9czQrDvFybwoBpwH6RSXzB4iEudOINBAfMOLZYk8-GZEghozSYmwoIwC-BBGSQXrxpBcE3c4KkvhUbZAx6OgvcTKuoGmXDPiv8GYXOU7E1LUEkkHzPSiCippP6ZUwrBxuE-R55t3rePBRFPvtvde8TP1zSKeDY11OnzWgEf0JWv-THraONmxJgNkD3LDckWT627PozwxqYOk7foYP7MJrRRVxI9jFIJ916ncSUhr2CInUFshS4FXUJzp-RBa_aSwDpqk8kaBlSeXjj0gBn_GsdQ=w922-h403-s-no?authuser=0" alt="imgss"/>
     </div>
  </div>;
};

export default ProductDetail;

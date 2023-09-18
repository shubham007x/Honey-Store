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
    <img src="https://img.freepik.com/premium-vector/pure-honey-banner-ads-with-cute-honey-bee_317396-760.jpg?w=1380" alt="last"/>
     </div>
  </div>;
};

export default ProductDetail;

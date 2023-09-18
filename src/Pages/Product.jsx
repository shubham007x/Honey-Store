import React, { useState } from "react";
import "../Styles/Product.css"
import Products from "../Components/Products";
import { useDispatch } from "react-redux";

const Product = () => {
  const[curr,setCurr]=useState(1);
const[cat,setCat]=useState("");
const[sort,setSort]=useState("desc");
  return <div className="productsList">
    <div className="imgDiv">
      <img src="https://lh3.googleusercontent.com/pw/AIL4fc_sP_CRkVCkC-EodKgEKroS-yelcvAmZUWQ5e6NJ5DFVcyxP4gs6IgmKCVTKM2ZcTAkq23H3fT_uAh1tCkrK278swbhHCQTAIjQj9ZbPDDmBlvCjV9Le0n62JSfHwgLTV-P0ChXMghLdIDHQmWlayVN=w935-h188-s-no?authuser=0" alt="images"/>
    </div>
    <div className="controls">
      <div className="filter">
        <select onChange={(e)=>setCat(e.target.value)}>
          <option value="">All Categories</option>
          <option value="Gift">Gifts</option>
          <option value="Skin">Skin Products</option>
          <option value="Honey">Pure Honey</option>
          </select>
      </div>
      <div className="sort">
        <select onChange={(e)=>setSort(e.target.value)}>
          <option value="">Sort By LATEST</option>
          <option value="asc">Price : Low to High</option>
          <option value="desc">Price : High to Low</option>
        </select>
      </div>
    </div>
    <hr />
<Products cat={cat} sort={sort} curr={curr}/>
<div className='pagination'>
       <button disabled={curr===1} onClick={()=>setCurr(curr-1)}>Prev</button>
       <button>{curr}</button>
       <button disabled={curr===3 || cat!==""} onClick={()=>setCurr(curr+1)}>Next</button>
 </div>
  </div>;
};

export default Product;

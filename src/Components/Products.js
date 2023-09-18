import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddingTocrat, getRestaurants } from '../Redux/Action';
import "../Styles/Product.css"
import { Link } from 'react-router-dom';

const Products = ({sort,cat,curr}) => {
  
  const dispatch=useDispatch();
  const data=useSelector(state=> state);
  console.log(data);
  useEffect(()=>{
    dispatch(getRestaurants(curr,sort,cat));
  },[curr,sort,cat])
  
  const handleClick=(id)=>{
    dispatch(AddingTocrat(id));
  }

  return (
    <div className='allProd'>
     {data.products?.map((ele,idx)=>(
      <div key={idx} className='cards'>
      <Link to={`/product/${ele.id}`}>
          <div className='cardImg'>
            <img src={ele.image} alt={ele.title}/>
          </div>
          </Link>
          <div className='cardInfo'>
          
          <span>⭐{ele.rating}</span>
            <h3>{ele.title}</h3>
            <h4>{ele.category}</h4>
           
          <div><p>₹{ele.price}</p>
          <button onClick={()=>handleClick(ele.id)}>Add To Cart</button>
          </div>   
          </div>
      </div>
     ))}
     {/* Pagination */}
    </div>
  )
}

export default Products
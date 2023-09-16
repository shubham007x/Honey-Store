import axios from "axios";
import { GET_RESTAURANTS_FAILURE, GET_RESTAURANTS_REQUEST, GET_RESTAURANTS_SUCCESS, GET_SINGLE_RESTAURANT_FAILURE, GET_SINGLE_RESTAURANT_REQUEST, GET_SINGLE_RESTAURANT_SUCCESS } from "./ActionType";
const BaseURL = `http://localhost:8080/products`;
const createAction = (type, payload) => {
  return { type, payload };
};
// 

export const getRestaurants =(curr,sort,cat)=>async (dispatch) => {
  if(cat===""){
    try{
      dispatch({type:GET_RESTAURANTS_REQUEST});
      var res=await axios.get(`http://localhost:8080/products?_page=${curr}&_limit=9&_sort=price&_order=${sort}`)
      dispatch({type:GET_RESTAURANTS_SUCCESS,payload:res.data})
 }
 catch(error){
  console.log(error);
  dispatch({type:GET_RESTAURANTS_FAILURE,payload:error})
 }
  }
 else{
  try{
    dispatch({type:GET_RESTAURANTS_REQUEST});
    var res1=await axios.get(`http://localhost:8080/products?_page=${curr}&_limit=9&_sort=price&_order=${sort}&category=${cat}`)
    dispatch({type:GET_RESTAURANTS_SUCCESS,payload:res1.data})
}
catch(error){
console.log(error);
dispatch({type:GET_RESTAURANTS_FAILURE,payload:error})
}
 }
};



export const getSingleRestaurant =(id)=>async (dispatch) => {
  try {
      dispatch({type:GET_SINGLE_RESTAURANT_REQUEST})
        var Api=await axios.get(`http://localhost:8080/products/${id}`);
        console.log(Api.data);
        dispatch({type:GET_SINGLE_RESTAURANT_SUCCESS,payload:Api.data})
    } catch (error) {
        console.log(error);
        dispatch({type:GET_SINGLE_RESTAURANT_FAILURE,payload:error})
    }
};
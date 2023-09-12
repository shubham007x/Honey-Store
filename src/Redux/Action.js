import axios from "axios";
const BaseURL = `http://localhost:8080/products`;
const createAction = (type, payload) => {
  return { type, payload };
};

// example function for thunks
// export const getRestaurants = (payload) => {
//   return async function (dispatch) {
//     dispatch(createAction(GET_RESTAURANTS_REQUEST));
//     try {
//       const res = await axios.get(BaseURL);
//       dispatch(createAction(GET_RESTAURANTS_SUCCESS, res.data));
//       console.log(res.data);
//     } catch (error) {
//       dispatch(createAction(GET_RESTAURANTS_FAILURE));
//     }
//   };
// };

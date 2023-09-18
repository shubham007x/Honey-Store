
import Footer from "../Components/Footer";
import { useSelector } from "react-redux";
import Styles from "../Styles/cartpage.css";
import Items from "../Components/Items";
import HomeButtons from "../Components/hompage_components/HomeButtons";
const Cart = () => {
  const cart_items = [
    {
      id: 6,
      title: "Hand Balm",
      image:
        "https://let-it-bee.co.uk/wp-content/uploads/2022/10/2DD3632A-660F-409E-BAF8-2E8B549AF711_1_201_a-1-e1666624736719-300x300.jpeg",
      category: "Skin",
      price: 499,
      rating: "3",
    },
    {
      id: 8,
      title: "Handmade Soap",
      image:
        "https://let-it-bee.co.uk/wp-content/uploads/2022/10/F7581371-56AC-4780-A567-3DBB35A34CFC_1_201_a-300x300.jpeg",
      category: "Skin",
      price: 599,
      rating: "4",
    },
  ];

  const totalPrice = cart_items.reduce((accumulator, item) => {
    return accumulator + item.price;
  }, 0);
  return (
    <div className="cart_page">
      <div className="cart_details">
        DELIVERY/DETAILS/PAYMENT
        <br></br>
        <br></br>
        <input placeholder="FULL NAME"></input>
        <br></br>
        <input type="number" placeholder="NUMBER"></input>
        <br></br>
        <input placeholder="ADDRESS LINE 1"></input>
        <br></br>
        <input placeholder="CITY"></input> <br></br>
        <input type="number" placeholder="PINCODE"></input>
        <br></br>
        <br></br> <br></br>
        <br></br> <br></br>
        <br></br> <br></br>
        <br></br> <br></br>
        <br></br>
        <p>
          {" "}
          <HomeButtons className="back" name={"BACK"} />{" "}
          <HomeButtons name={"PROCEED TO PAY"} />
        </p>
      </div>
      <div className="cart_prods">
        YOUR ORDERS{" "}
        <hr style={{ border: "0.1px solid white", width: "100%" }}></hr>
        {cart_items.map((item) => {
          return <Items key={item.id} item={item} />;
        })}
        <div className="cart_pricing">
          <div>
            <h3>SUBTOTAL:</h3>
            <h3>RS.{totalPrice}.00</h3>
          </div>
          <hr style={{ border: "0.1px solid white", width: "80%" }}></hr>
          <div>
            <h3>DELIVERY:</h3>
            <h3>Rs.99.00</h3>
          </div>
          <hr style={{ border: "0.1px solid white", width: "80%" }}></hr>
          <div>
            <h2>TOTAL:</h2>
            <h2>RS.{totalPrice + 99}.00</h2>
          </div>
        </div>
      </div>
    </div>
  );

};

export default Cart;

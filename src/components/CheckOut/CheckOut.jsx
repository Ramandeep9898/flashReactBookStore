import "./checkout.css";
import { IoBagCheckOutline } from "react-icons/io5";
import { useCart } from "../../contexts/useCart";
export const CheckOut = () => {
  const { cart } = useCart();
  // const priceOfItems = cart.reducer();
  console.log(cart);

  return (
    <div className="checkout-container">
      <div className="price-details-heading">Price Detials</div>
      <div className="hr-divider mgT-16 "></div>
      <div className="details mgT-16">
        <div className="detail">Quantity:</div>
        <div className="detail">
          {cart.length} {cart.length > 1 ? "items" : "item"}
        </div>
      </div>

      <div className="details mgT-16">
        <div className="detail">Price: </div>
        <div className="detail">750</div>
      </div>

      <div className="details mgT-16">
        <div className="detail">Delivery:</div>
        <div className="detail">750</div>
      </div>

      <div className="details mgT-16">
        <div className="detail">Discount: </div>
        <div className="detail">750</div>
      </div>

      <div className="hr-divider mgT-16 "></div>

      <div className="details mgT-16">
        <div className="detail">Total Amount: </div>
        <div className="detail">750</div>
      </div>
      <div className="cta-btn mgT-8">
        <p className="green-text">you Saved 2000! </p>
        <button className="btn solid-pri-btn mgT-16 ">
          Place Order <IoBagCheckOutline />
        </button>
      </div>
    </div>
  );
};

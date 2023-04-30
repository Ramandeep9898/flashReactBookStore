import "./checkout.css";
import { IoBagCheckOutline } from "react-icons/io5";
import { useCart } from "../../contexts/useCart";
import { useEffect, useState } from "react";
export const CheckOut = () => {
  const { cart } = useCart();
  // const [priceOfItems, setPriceOfItems] = useState(0);
  console.log(cart);
  const initialCheckoutState = {
    cartItems: 0,
    priceOfItems: 0,
    totalPrice: 0,
    discountPrice: 0,
    deliveryPrice: 100,
    discount: 0,
  };

  const finalCheckout = cart.reduce(
    (acc, currentProduct) => ({
      ...acc,
      cartItems: acc.cartItems + currentProduct.qty,
      priceOfItems:
        acc.priceOfItems + currentProduct.originalPrice * currentProduct.qty,
      discountPrice: acc.deliveryPrice + currentProduct.discountedPrice,
      totalPrice: acc.totalPrice + acc.discountPrice + acc.deliveryPrice,
    }),
    initialCheckoutState
  );
  console.log(finalCheckout);

  return (
    <div className="checkout-container">
      <div className="price-details-heading">Price Detials</div>
      <div className=" mgT-16 "></div>
      <div className="details mgT-40">
        <div className="detail">Quantity:</div>
        <div className="detail">
          {finalCheckout.cartItems} {cart.length > 1 ? "items" : "item"}
        </div>
      </div>

      <div className="details mgT-16">
        <div className="detail">Price: </div>
        <div className="detail">{finalCheckout.priceOfItems}</div>
      </div>

      <div className="details mgT-16">
        <div className="detail">Discount:</div>
        <div className="detail">{finalCheckout.discountPrice}</div>
      </div>

      <div className="details mgT-16">
        <div className="detail">Delivery: </div>
        <div className="detail">{finalCheckout.deliveryPrice}</div>
      </div>

      <div className="hr-divider-white mgT-16 "></div>

      <div className="details mgT-16">
        <div className="detail">Total Amount: </div>
        <div className="detail">{finalCheckout.totalPrice}</div>
      </div>
      <div className="cta-btn mgT-8">
        {/* <p className="green-text">you Saved 2000! </p> */}
        <button className="btn text-black big-btn mgT-16 ">
          Place Order <IoBagCheckOutline />
        </button>
      </div>
    </div>
  );
};

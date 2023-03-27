import react from "react";
import { CartCard } from "../components/Cart/Cart.jsx";
import { CheckOut } from "../components/CheckOut/CheckOut.jsx";

const Cart = () => {
  return (
    <>
      <div className="cart-layout">
        <div className="cart-container">
          <h1 className=" mgT-16">Cart</h1>
          <div className="hr-divider mgT-16 "></div>
          <div className="cart-wrapper mg-16">
            <CartCard />
          </div>
        </div>

        <CheckOut />
      </div>
    </>
  );
};

export default Cart;

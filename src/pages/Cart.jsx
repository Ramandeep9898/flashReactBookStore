import { CartCard } from "../components/Cart/Cart.jsx";
import { CheckOut } from "../components/CheckOut/CheckOut.jsx";
import { useCart } from "../contexts/useCart.jsx";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart } = useCart();
  return (
    <>
      {cart.length == 0 && (
        <div className="flex flex-col">
          <h1 className="mgT-16 h1 heading">Cart</h1>
          <div className="h3 fW-500 mgT-8">Nothing in Cart</div>
          <Link to="/productListingPage">
            <button className="btn blue-btn big-btn mgT-8">Explore Now!</button>
          </Link>
        </div>
      )}
      {cart.length != 0 && (
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
      )}
    </>
  );
};

export default Cart;

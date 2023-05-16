import { CartCard } from "../components/Cart/Cart.jsx";
import { CheckOut } from "../components/CheckOut/CheckOut.jsx";
import { useCart } from "../contexts/useCart.jsx";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart } = useCart();
  return (
    <>
      {cart.length == 0 && (
        <div className="flex flex-col empty-layout">
          <h1 className="mgT-16 h1 heading">Your Cart</h1>
          <div className="h3 fW-500 mgT-8">Nothing in Cart</div>
          <Link to="/productListingPage">
            <button className="btn blue-btn big-btn mgT-8">Explore Now!</button>
          </Link>
        </div>
      )}
      {cart.length != 0 && (
        <div className="cart-layout empty-layout">
          <div className="cart-container">
            <h1 className=" mgT-16">Your Cart</h1>
            <ul className=" space-between mgT-16 w-100">
              <li className="h6 fW-500 text-gray uppercase">Product</li>
              <div className="flex gap-10 w-40">
                <li className="h6 fW-500 text-gray uppercase w-40">Quantity</li>
                <li className="h6 fW-500 text-gray uppercase w-40">Price</li>
              </div>
            </ul>
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

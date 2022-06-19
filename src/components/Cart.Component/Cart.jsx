import react from "react";
import CartProductCard from "./CartPageMain.Component/CartProductCard";
import Header from "../Header.component/Header";
import "./cart.css";
import OrderSummaryCard from "./CartPageMain.Component/OrderSummaryCard";
import { useCartWishlistContext } from "../../contexts/contextCartWhishlist";
import { getCartWishlistItems } from "../../utils/cart/getCartWishlistItems";

const getCartWishlistLocalStorage = (cartWishlistState) => {
  cartWishlistState.length === 0
    ? JSON.parse(localStorage.getItem("userCartWishlistData"))
    : cartWishlistState;
};

const Cart = () => {
  const { cartWishlistState } = useCartWishlistContext();
  console.log(cartWishlistState);
  // const userCartWishlistData = getCartWishlistLocalStorage(cartWishlistState);
  const cartItems = getCartWishlistItems(cartWishlistState, "cart");

  return (
    <>
      <Header />

      {cartItems.length !== 0 ? (
        <div class="cart-page-main">
          {cartItems.map((cartItem) => (
            <CartProductCard product={cartItem.item} cartItems={cartItems} />
          ))}

          <OrderSummaryCard />
        </div>
      ) : (
        <div>No Items In The Cart</div>
      )}

      {/* <div className="cart-page-main">
        <CartProductCard />
        <OrderSummaryCard />
      </div> */}
    </>
  );
};

export default Cart;

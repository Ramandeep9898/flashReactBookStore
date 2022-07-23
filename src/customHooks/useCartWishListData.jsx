import { useReducer } from "react";

import { checkCartWishlistItem } from "../utils/cart/checkCartWishListItem";
import { addCartWishlistLocalStorage } from "../utils/cart/addCartWishlistLocalStorage";
import { removeCartWishlist } from "../utils/cart/removeCartWishlist";
// import { moveToWishlist } from "../utils/cart/moveToWishlist";

const localStorageWishlistCartData = JSON.parse(
  localStorage.getItem("userCartWishlistData")
);
console.log("localStorageWishlistCartData", localStorageWishlistCartData);
const INITIAL_CART_WISHLIST_DATA = localStorageWishlistCartData
  ? localStorageWishlistCartData
  : [];

const reducer = (cartWishlistState, action) => {
  const value = action.value;
  const quantity = action.quantity;
  console.log("cartWishlistStatebroooo",cartWishlistState)
  //     console.log("value",value)
 
  switch (action.type) {
    case "ADD_TO_CART":
      return checkCartWishlistItem(cartWishlistState, value, "CART", quantity);
    case "REMOVE_FROM_CART":
      return removeCartWishlist(cartWishlistState, value, "REMOVE_FROM_CART");
    case "ADD_TO_WISHLIST":
      return checkCartWishlistItem(
        cartWishlistState,
        value,
        "WISHLIST",
        quantity
      );
  }
};

export const useCartWishlistData = () => {
  const [cartWishlistState, cartWishlistStateDispatch] = useReducer(
    reducer,
    INITIAL_CART_WISHLIST_DATA
  );
  console.log("cartWishlistState",cartWishlistState)
  addCartWishlistLocalStorage(cartWishlistState, INITIAL_CART_WISHLIST_DATA);

  return { cartWishlistState, cartWishlistStateDispatch };
};

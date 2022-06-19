import { useReducer } from "react";

import { checkCartWishlistItem } from "../utils/cart/checkCartWishListItem";
import { addCartWishlistLocalStorage } from "../utils/cart/addCartWishlistLocalStorage";

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

  switch (action.type) {
    case "ADD_TO_CART":
      return checkCartWishlistItem(cartWishlistState, value, "CART", quantity);
  }
};

export const useCartWishlistData = () => {
  const [cartWishlistState, cartWishlistStateDispatch] = useReducer(
    reducer,
    INITIAL_CART_WISHLIST_DATA
  );
  console.log(cartWishlistState);
  addCartWishlistLocalStorage(cartWishlistState, INITIAL_CART_WISHLIST_DATA);

  return { cartWishlistState, cartWishlistStateDispatch };
};

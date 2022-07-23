import react from "react";
import { createContext, useContext } from "react";
import { useCartWishlistData } from "../customHooks/useCartWishListData";
console.log(useCartWishlistData)
const cartWishlistContext = createContext({});

const useCartWishlistContext = () => useContext(cartWishlistContext);

const CartWishlistContextProvider = ({ children }) => {
  const { cartWishlistState, cartWishlistStateDispatch } =
    useCartWishlistData();
    console.log(cartWishlistState)
  return (
    <cartWishlistContext.Provider
      value={{ cartWishlistState, cartWishlistStateDispatch }}
    >
      {children}
    </cartWishlistContext.Provider>
  );
};
export { useCartWishlistContext, CartWishlistContextProvider };

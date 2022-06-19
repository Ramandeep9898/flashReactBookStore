import react from "react";
import { createContext, useContext } from "react";
import { useCartWishlistData } from "../customHooks/useCartWishListData";
const cartWishlistContext = createContext({});

const useCartWishlistContext = () => useContext(cartWishlistContext);

const CartWishlistContextProvider = ({ children }) => {
  const { cartWishlistState, cartWishlistStateDispatch } =
    useCartWishlistData();
  return (
    <cartWishlistContext.Provider
      value={{ cartWishlistState, cartWishlistStateDispatch }}
    >
      {children}
    </cartWishlistContext.Provider>
  );
};
export { useCartWishlistContext, CartWishlistContextProvider };

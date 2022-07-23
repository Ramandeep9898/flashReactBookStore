import react from "react";
import { useCartWishlistContext } from "../../contexts/contextCartWhishlist";
import ProductCard from "../ProductCard.Component/ProductCard";
import { getCartWishlistLocalStorage } from "../../utils/cart/getCartWishlistLocalStorage";
import { getCartWishlistItems } from "../../utils/cart/getCartWishlistItems";
import { addCartWishList } from "../../utils/cart/addCartWhishlist";
const Wishlist = () => {
  const { cartWishlistState } = useCartWishlistContext();
  console.log(cartWishlistState);
  // const userCartWishlistData = getCartWishlistLocalStorage(cartWishlistState);
  // const wishListItems = getCartWishlistItems(userCartWishlistData, "wishlist");
  // console.log("wishListItems", wishListItems);
  return (
    <>
      <div className="cart-heading text-center mgT-40">
        <p className="h5 color capitalize fW-600">
          my wishlist
          <span className="h5 color capitalize fW-600"> (6)</span>
        </p>
      </div>
      {/* {wishListItems.map((product) => (
        <ProductCard
          productCardData={product.item}
          product={product.item}
          addCartWishList={addCartWishList}
          wishlist="wishlist"
        />
      ))} */}
    </>
  );
};
export default Wishlist;

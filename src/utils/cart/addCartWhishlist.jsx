export const addCartWishList = (item, whatTo, cartWishlistStateDispatch) => {
  console.log(item);
  whatTo === "CART"
    ? cartWishlistStateDispatch({
        type: "ADD_TO_CART",
        value: item,
        quantity: 1,
      })
    : cartWishlistStateDispatch({
        type: "ADD_TO_WISHLIST",
        value: item,
        quantity: 1,
      });
};

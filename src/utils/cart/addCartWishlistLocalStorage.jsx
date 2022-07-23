export const addCartWishlistLocalStorage = (
  cartWishlistState,
  INITIAL_CART_WISHLIST_DATA
) => {
  JSON.stringify(cartWishlistState) !==
    JSON.stringify(INITIAL_CART_WISHLIST_DATA) &&
    localStorage.setItem(
      "userCartWishlistData",
      JSON.stringify(cartWishlistState)
    );
};

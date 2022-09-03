export const getCartWishlistLocalStorage = (cartWishlistState) =>
  cartWishlistState.length === 0
    ? JSON.parse(localStorage.getItem("userCartWishlistData"))
    : cartWishlistState;

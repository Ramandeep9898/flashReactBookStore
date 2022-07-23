export const moveToWishlist = (cartWishlistState, productDispatchValue) => {
  return cartWishlistState.map((eachItem) => {
    if (eachItem._id === productDispatchValue.item._id) {
      return { ...eachItem, inCart: false, inWishlist: true };
    }
  });
};

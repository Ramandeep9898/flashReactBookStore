export const checkCartWishlistItem = (
  cartWishlist,
  currentDispatchValue,
  cartOrWishlist,
  currentDispatchValueQuantity
) => {
  if (cartOrWishlist === "CART") {
    if (cartWishlist.length !== 0) {
      let foundItem = false;
      let updatedData = cartWishlist.map((cartWishlistData) => {
        console.log(cartWishlistData);
        if (cartWishlistData.item._id === currentDispatchValue._id) {
          foundItem = true;
          if (!cartWishlistData.inCart) {
            return { ...cartWishlistData, inCart: true };
          } else {
            return {
              ...cartWishlistData,
              quantity: cartWishlistData.quantity + 1,
              inWishlist: false,
            };
          }
        }
        return cartWishlistData;
      });
      if (!foundItem) {
        return [
          ...cartWishlist,
          {
            item: currentDispatchValue,
            inWishlist: false,
            inCart: true,
            quantity: currentDispatchValueQuantity,
          },
        ];
      }
      return updatedData;
    } else {
      return [
        {
          item: currentDispatchValue,
          inWishlist: false,
          inCart: true,
          quantity: currentDispatchValueQuantity,
        },
      ];
    }
  }
};

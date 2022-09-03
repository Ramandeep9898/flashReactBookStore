export const checkCartWishlistItem = (
  cartWishlist,
  currentDispatchValue,
  cartOrWishlist,
  currentDispatchValueQuantity
) => {
  if (cartOrWishlist === "CART") {
    console.log("currentDispatchValue", currentDispatchValue);
    if (cartWishlist.length !== 0) {
      let foundItem = false;
      let updatedData = cartWishlist.map((cartWishlistData) => {
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
  if (cartOrWishlist === "WISHLIST") {
    if (cartWishlist.length !== 0) {
      let foundItem = false;
      let updatedData = cartWishlist.map((cartWishlistData) => {
        if (cartWishlistData.item._id === currentDispatchValue._id) {
          foundItem = true;
          if (!cartWishlistData.inWishlist) {
            return { ...cartWishlistData, inWishlist: true };
          } else {
            return {
              ...cartWishlistData,
              quantity: cartWishlistData.quantity + 1,
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
            inWishlist: true,
            inCart: false,
            quantity: currentDispatchValueQuantity,
          },
        ];
      }
      return updatedData;
    } else {
      console.log("setting value from here", currentDispatchValueQuantity);
      return [
        {
          item: currentDispatchValue,
          inWishlist: true,
          inCart: false,
          quantity: currentDispatchValueQuantity,
        },
      ];
    }
  }
};

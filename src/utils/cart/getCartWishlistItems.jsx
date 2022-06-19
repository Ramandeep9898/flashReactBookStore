export const getCartWishlistItems = (productData, wishlistOrCart) =>
  productData && wishlistOrCart === "wishlist"
    ? productData.filter((item) => item.inWishlist)
    : productData.filter((item) => item.inCart);

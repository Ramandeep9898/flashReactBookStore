const getSortedProducts = (products, sortBy) => {
  if (sortBy === "LOW_TO_HIGH")
    return [...products].sort((a, b) => a.discountedPrice - b.discountedPrice);
  if (sortBy === "HIGH_TO_LOW")
    return [...products].sort((a, b) => b.discountedPrice - a.discountedPrice);
  return products;
};

export default getSortedProducts;

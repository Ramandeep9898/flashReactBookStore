import React from "react";
import Aside from "../Aside.component/Aside";
import ProductCard from "../ProductCard.Component/ProductCard";

const ProductListingMain = () => {
  return (
    <main className="product-page">
      <Aside />
      <ProductCard />
    </main>
  );
};

export default ProductListingMain;

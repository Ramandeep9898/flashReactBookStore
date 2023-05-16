import React from "react";
import Aside from "../Aside/Aside";
import ProductCard from "../ProductCard/ProductCard";
import Header from "../Header/Header";

const ProductListingMain = () => {
  return (
    <main className="product-page">
      {/* <Header /> */}
      <Aside />
      <ProductCard />
    </main>
  );
};

export default ProductListingMain;
